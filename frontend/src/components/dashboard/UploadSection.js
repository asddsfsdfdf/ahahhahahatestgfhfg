// Upload Section Component
function loadUploadSection() {
    const contentArea = document.getElementById('contentArea');
    
    contentArea.innerHTML = `
        <div class="upload-container">
            <div class="bg-pattern"></div>
            <div class="floating-orb orb-1"></div>
            <div class="floating-orb orb-2"></div>

            <div class="upload-section">
                <div id="uploadArea">
                    <div class="upload-header">
                        <div class="header-badge">
                            <span class="badge-dot"></span>
                            <span class="badge-text">AI-Powered Analysis</span>
                        </div>
                        <h1 class="upload-title">
                            Upload Your <span class="gradient-text-primary">Trading Chart</span>
                        </h1>
                        <p class="upload-subtitle">
                            Get professional AI analysis in seconds
                        </p>
                    </div>

                    <div class="upload-box" id="uploadBox">
                        <input type="file" id="chartFileInput" accept="image/*" style="display: none;">
                        
                        <div class="upload-icon-container">
                            <div class="upload-icon-wrapper">
                                <span class="upload-icon">📊</span>
                            </div>
                            <div class="icon-ring"></div>
                        </div>

                        <div class="upload-content">
                            <h3>Drop your chart here</h3>
                            <p>or click to browse from your computer</p>
                            <button class="upload-btn" onclick="document.getElementById('chartFileInput').click()">
                                <span>📁</span>
                                <span>Choose File</span>
                            </button>
                        </div>

                        <div class="file-formats">
                            <div class="format-pills">
                                <span class="format-pill">JPG</span>
                                <span class="format-pill">PNG</span>
                                <span class="format-pill">GIF</span>
                                <span class="format-pill">WEBP</span>
                            </div>
                            <p class="file-size-info">Maximum file size: 10MB</p>
                        </div>
                    </div>
                </div>

                <!-- Preview Section (initially hidden) -->
                <div id="previewSection" class="preview-section" style="display: none;">
                    <div class="preview-header">
                        <h2 class="preview-title">Your Chart</h2>
                        <button class="change-btn" onclick="changeChart()">
                            <span>🔄</span>
                            <span>Change Chart</span>
                        </button>
                    </div>

                    <div class="chart-display">
                        <img id="chartImage" class="chart-image" alt="Uploaded chart">
                    </div>

                    <div class="settings-section">
                        <h3 class="settings-title">Choose Your Analysis Mode</h3>
                        <p class="settings-subtitle">Select the perfect strategy for your trading style</p>
                        
                        <div class="mode-cards-grid">
                            <!-- Simple / Swing Mode -->
                            <div class="mode-card" onclick="selectMode('simple', this)">
                                <div class="mode-card-header">
                                    <span class="mode-badge beginner">BEGINNER FRIENDLY</span>
                                    <div class="mode-icon-container">
                                        <div class="mode-icon">
                                            <span>📊</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="mode-card-body">
                                    <h4 class="mode-name">Simple / Swing Mode</h4>
                                    <p class="mode-description">Crystal-clear insights designed for beginners. Get actionable buy/sell signals without the complexity.</p>
                                    <div class="mode-features">
                                        <div class="feature">
                                            <span>📈 Trend Analysis</span>
                                        </div>
                                        <div class="feature">
                                            <span>🎯 Entry/Exit Points</span>
                                        </div>
                                        <div class="feature">
                                            <span>🛡️ Support & Resistance</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="mode-card-footer">
                                    <button class="select-mode-btn">
                                        <span>Start Simple Analysis</span>
                                        <span>→</span>
                                    </button>
                                </div>
                            </div>

                            <!-- Scalping Mode -->
                            <div class="mode-card" onclick="selectMode('scalping', this)">
                                <div class="mode-card-header">
                                    <span class="mode-badge popular">🔥 MOST POPULAR</span>
                                    <div class="mode-icon-container">
                                        <div class="mode-icon">
                                            <span>⚡</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="mode-card-body">
                                    <h4 class="mode-name">Scalping Mode</h4>
                                    <p class="mode-description">Lightning-fast analysis for quick trades. Capture micro-movements with precision timing.</p>
                                    <div class="mode-features">
                                        <div class="feature">
                                            <span>⏱️ 1-5 Min Analysis</span>
                                        </div>
                                        <div class="feature">
                                            <span>📊 Volume Tracking</span>
                                        </div>
                                        <div class="feature">
                                            <span>🚀 Momentum Alerts</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="mode-card-footer">
                                    <button class="select-mode-btn">
                                        <span>Start Scalping Analysis</span>
                                        <span>→</span>
                                    </button>
                                </div>
                            </div>

                            <!-- Professional Mode -->
                            <div class="mode-card" onclick="selectMode('professional', this)">
                                <div class="mode-card-header">
                                    <span class="mode-badge premium">👑 PREMIUM</span>
                                    <div class="mode-icon-container">
                                        <div class="mode-icon">
                                            <span>🎯</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="mode-card-body">
                                    <h4 class="mode-name">Professional Mode</h4>
                                    <p class="mode-description">Comprehensive market intelligence with advanced indicators and multi-timeframe confluence.</p>
                                    <div class="mode-features">
                                        <div class="feature">
                                            <span>🔄 Multi-Timeframe</span>
                                        </div>
                                        <div class="feature">
                                            <span>📐 Elliott Waves</span>
                                        </div>
                                        <div class="feature">
                                            <span>🤖 AI Predictions</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="mode-card-footer">
                                    <button class="select-mode-btn">
                                        <span>Start Pro Analysis</span>
                                        <span>→</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div class="additional-settings">
                            <div class="settings-grid">
                                <div class="setting-group">
                                    <label class="setting-label">Trading Pair / Symbol</label>
                                    <input type="text" id="symbolInput" class="setting-input" placeholder="e.g., EUR/USD, BTC/USDT, AAPL">
                                </div>
                                <div class="setting-group">
                                    <label class="setting-label">Chart Timeframe</label>
                                    <select id="timeframeSelect" class="setting-select">
                                        <option value="">Select timeframe...</option>
                                        <option value="1m">1 Minute (M1)</option>
                                        <option value="5m">5 Minutes (M5)</option>
                                        <option value="15m">15 Minutes (M15)</option>
                                        <option value="30m">30 Minutes (M30)</option>
                                        <option value="1h">1 Hour (H1)</option>
                                        <option value="4h">4 Hours (H4)</option>
                                        <option value="1d">Daily (D1)</option>
                                        <option value="1w">Weekly (W1)</option>
                                        <option value="1M">Monthly (MN)</option>
                                    </select>
                                </div>
                                <div class="setting-group">
                                    <label class="setting-label">Analysis Strategy <span id="selectedModeDisplay" style="font-weight: 700;"></span></label>
                                    <select id="strategySelect" class="setting-select" onchange="handleStrategyChange(this.value)">
                                        <!-- Options will be dynamically updated based on selected mode -->
                                    </select>
                                </div>
                            </div>
                            <div class="setting-group" style="margin-top: 20px;">
                                <label class="setting-label">Specific Analysis Request (Optional)</label>
                                <textarea id="specificRequest" class="setting-textarea" rows="3" 
                                    placeholder="e.g., Look for head and shoulders pattern, check RSI divergence, analyze support at 1.0850..."></textarea>
                            </div>
                        </div>

                        <button class="analyze-btn" id="analyzeBtn" onclick="showPricePopup()">
                            <span>🚀</span>
                            <span>Start AI Analysis</span>
                        </button>
                    </div>
                </div>

                <!-- Price Input Popup (initially hidden) -->
                <div id="pricePopup" class="price-popup-overlay" style="display: none;">
                    <div class="price-popup">
                        <div class="popup-header">
                            <h3>Enter Current Price & Market Cap</h3>
                            <button class="popup-close" onclick="closePricePopup()">✕</button>
                        </div>
                        <div class="popup-body">
                            <p class="popup-description">Please enter the current market price <strong>only if it's not clearly visible on your chart</strong>. The AI will use the price from your chart image if available. Market cap is optional but helps with better analysis.</p>
                            <div class="popup-input-group">
                                <label class="popup-label">Current Price (Optional - only if not visible on chart)</label>
                                <input type="text" id="currentPriceInput" class="popup-input" placeholder="e.g., 1.0850 or 45,000 (leave empty if visible on chart)">
                            </div>
                            <div class="popup-input-group">
                                <label class="popup-label">Market Cap (Optional)</label>
                                <input type="text" id="marketCapInput" class="popup-input" placeholder="e.g., 1000000 or 1M or 1B">
                            </div>
                            
                            <!-- NEW TOGGLE BUTTON FOR BULLISH/BEARISH ONLY MODE -->
                            <div class="popup-toggle-group">
                                <label class="toggle-container">
                                    <input type="checkbox" id="forceBullBearToggle" class="toggle-checkbox">
                                    <span class="toggle-slider"></span>
                                    <span class="toggle-label">Force Bullish/Bearish Only Mode</span>
                                </label>
                                <p class="toggle-description">When enabled, AI will only give bullish or bearish signals, no neutral or wait signals</p>
                            </div>
                            
                            <div class="popup-buttons">
                                <button class="popup-btn-cancel" onclick="closePricePopup()">Cancel</button>
                                <button class="popup-btn-confirm" onclick="startChartAnalysisWithPrice()">Start Analysis</button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Progress Section (initially hidden) -->
                <div id="progressSection" class="progress-section" style="display: none;">
                    <div class="progress-container">
                        <div class="ai-animation" style="width: 120px; height: 120px; margin: 0 auto 40px auto; position: relative; transform: translateX(-61px) translateY(-44px) !important;">
                            <div class="ai-brain" style="width: 120px; height: 120px; background: linear-gradient(135deg, #6366f1, #8b5cf6, #ec4899); border-radius: 50%; display: flex !important; align-items: center !important; justify-content: center !important; animation: brainPulse 2s ease-in-out infinite; box-shadow: 0 0 40px rgba(99, 102, 241, 0.4); position: relative;">
                                <span style="font-size: 48px; line-height: 1; margin: 0; padding: 0;">🧠</span>
                            </div>
                        </div>
                        <h2 class="progress-title">AI is Analyzing Your Chart</h2>
                        <p class="progress-status" id="progressStatus">Initializing analysis...</p>
    
                        <!-- Analysis Steps Grid -->
                        <div class="analysis-steps">
                            <div class="analysis-step" id="step1">
                                <span class="step-icon">🔍</span>
                                <span class="step-text">Pattern Detection</span>
                            </div>
                            <div class="analysis-step" id="step2">
                                <span class="step-icon">📊</span>
                                <span class="step-text">Technical Analysis</span>
                            </div>
                            <div class="analysis-step" id="step3">
                                <span class="step-icon">📈</span>
                                <span class="step-text">Trend Analysis</span>
                            </div>
                            <div class="analysis-step" id="step4">
                                <span class="step-icon">💡</span>
                                <span class="step-text">Generating Insights</span>
                            </div>
                        </div>
                        
                        <div class="progress-bar">
                            <div class="progress-fill" id="progressFill"></div>
                        </div>
                        <div class="progress-percentage" id="progressPercentage">0%</div>
                    </div>
                </div>

                <!-- Results Section (initially hidden) -->
                <div id="resultsSection" class="results-section" style="display: none;">
                    <!-- Hero Section -->
                    <div class="results-hero">
                        <div class="results-hero-content">
                            <div class="results-status">
                                <span class="status-dot"></span>
                                <span class="status-text">Analysis Complete</span>
                            </div>
                            <h1 class="results-main-title">Your Trading Analysis is Ready</h1>
                            <p class="results-subtitle">AI-powered insights and recommendations based on your chart</p>
                            <div class="results-actions">
                                <button class="action-btn save-btn" onclick="saveAnalysis()">
                                    <span>💾</span>
                                    <span>Save Analysis</span>
                                </button>
                                <button class="action-btn new-btn" onclick="startNewAnalysis()">
                                    <span>📊</span>
                                    <span>New Analysis</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- Main Content -->
                    <div class="results-container">
                        <!-- Chart Preview -->
                        <div class="chart-preview-card">
                            <div class="chart-preview-header">
                                <h3 class="chart-preview-title">
                                    <span>📈</span>
                                    <span>Analyzed Chart</span>
                                </h3>
                            </div>
                            <div class="chart-preview-body">
                                <img id="resultChartImage" class="chart-preview-image" alt="Analyzed chart">
                            </div>
                        </div>

                        <!-- Sentiment Score Card with Trading Levels -->
                        <div class="sentiment-score-card" id="sentimentScoreCard" style="margin-bottom: 32px;">
                            <div class="sentiment-label">MARKET SENTIMENT</div>
                            <div class="sentiment-score" id="sentimentScore">75%</div>
                            <div class="sentiment-direction" id="sentimentDirection">BULLISH</div>
                            <div class="sentiment-meter">
                                <div class="sentiment-meter-fill" id="sentimentMeterFill" style="width: 75%"></div>
                            </div>
                            <div class="recommendation-action">
                                <span>💡</span>
                                <span id="recommendationText">LONG POSITION</span>
                            </div>
                            
                            <!-- High Risk Warning in Sentiment Card -->
                            <div class="sentiment-high-risk-warning" id="sentimentHighRiskWarning" style="display: none;">
                                <div class="warning-icon">⚠️</div>
                                <div class="warning-content">
                                    <h4 class="warning-title">HIGH RISK - DO NOT TRADE</h4>
                                    <p class="warning-text">This chart shows extreme risk signals. Trading is strongly discouraged.</p>
                                    <button class="show-levels-btn" onclick="showSentimentTradingLevels()">
                                        <span>Show AI Levels Anyway</span>
                                        <span>→</span>
                                    </button>
                                </div>
                            </div>
                            
                            <!-- Trading Levels in Sentiment Card -->
                            <div class="sentiment-trading-levels" id="sentimentTradingLevels">
                                <div class="trading-level-row">
                                    <div class="trading-level-item">
                                        <span class="level-label">Entry</span>
                                        <span class="level-value" id="sentimentEntry">-</span>
                                    </div>
                                    <div class="trading-level-item">
                                        <span class="level-label level-label-stop">Stop Loss</span>
                                        <span class="level-value level-value-stop" id="sentimentStopLoss">-</span>
                                    </div>
                                    <div class="trading-level-item">
                                        <span class="level-label level-label-profit">Take Profit</span>
                                        <span class="level-value level-value-profit" id="sentimentTakeProfit">-</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Analysis Grid -->
                        <div class="analysis-grid">
                            <!-- Main Analysis -->
                            <div class="main-analysis-card">
                                <div class="analysis-tabs">
                                    <button class="analysis-tab active" onclick="switchAnalysisTab(this, 'overview')">Overview</button>
                                    <button class="analysis-tab" onclick="switchAnalysisTab(this, 'technical')">Technical</button>
                                    <button class="analysis-tab" onclick="switchAnalysisTab(this, 'patterns')">Patterns</button>
                                </div>
                                <div class="analysis-content" id="analysisContent">
                                    <!-- Content will be filled by AI -->
                                </div>
                            </div>

                            <!-- Side Cards -->
                            <div class="side-cards">
                                <!-- Quick Stats -->
                                <div class="quick-stats-card">
                                    <h4 class="quick-stats-title">Quick Stats</h4>
                                    <div class="stat-row">
                                        <span class="stat-label">Trend Strength</span>
                                        <span class="stat-value positive" id="trendStrength">Strong ↑</span>
                                    </div>
                                    <div class="stat-row">
                                        <span class="stat-label">Volatility</span>
                                        <span class="stat-value" id="volatility">Moderate</span>
                                    </div>
                                    <div class="stat-row">
                                        <span class="stat-label">Volume Trend</span>
                                        <span class="stat-value positive" id="volumeTrend">Increasing</span>
                                    </div>
                                    <div class="stat-row">
                                        <span class="stat-label">Risk Level</span>
                                        <span class="stat-value" id="riskLevelStat">Low-Medium</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Premium Recommendations -->
                        <div class="recommendation-card" id="recommendationCard">
                            <div class="recommendation-header">
                                <div class="recommendation-icon">🎯</div>
                                <h3 class="recommendation-title">Premium Recommendations</h3>
                            </div>
                            
                            <!-- Non-Premium Message -->
                            <div id="nonPremiumMessage" style="display: none;">
                                <div style="background: rgba(255, 255, 255, 0.1); border: 1px solid rgba(255, 255, 255, 0.2); border-radius: 12px; padding: 24px; text-align: center;">
                                    <div style="font-size: 32px; margin-bottom: 16px;">👑</div>
                                    <h4 style="font-size: 18px; margin-bottom: 12px; color: white;">Premium Feature</h4>
                                    <p style="font-size: 15px; color: rgba(255, 255, 255, 0.9); line-height: 1.6;">
                                        Advanced trading recommendations and AI profit strategies are only available with Professional Mode analysis.
                                    </p>
                                    <p style="font-size: 14px; color: rgba(255, 255, 255, 0.7); margin-top: 16px;">
                                        Upgrade to Professional Mode to unlock detailed entry/exit strategies and profit maximization insights.
                                    </p>
                                </div>
                            </div>
                            
                            <!-- Warning Section for High Risk -->
                            <div class="high-risk-warning" id="highRiskWarning" style="display: none;">
                                <div class="warning-icon">⚠️</div>
                                <div class="warning-content">
                                    <h4 class="warning-title">HIGH RISK DETECTED</h4>
                                    <p class="warning-text">This chart shows extremely bearish signals. Trading is NOT recommended. This could be a rugpull or critical breakdown.</p>
                                    <button class="show-levels-btn" onclick="showTradingLevels()">
                                        <span>Show AI Analysis Anyway</span>
                                        <span>→</span>
                                    </button>
                                </div>
                            </div>
                            
                            <!-- Normal Trading Details -->
                            <div id="normalTradingDetails">
                                <div class="recommendation-action-white">
                                    <span>⚡</span>
                                    <span id="tradeAction">AI TRADING STRATEGY</span>
                                </div>
                                <div class="ai-profit-strategy" id="aiProfitStrategy" style="padding: 20px; background: rgba(255, 255, 255, 0.1); border-radius: 12px; margin-top: 20px;">
                                    <p style="font-size: 16px; line-height: 1.8; color: white; font-weight: 400;">
                                        <!-- AI profit strategy will be inserted here -->
                                    </p>
                                </div>
                                <div class="recommendation-details">
                                    <div class="recommendation-detail">
                                        <div class="detail-label">Entry Point</div>
                                        <div class="detail-value" id="entryPoint">1.0850</div>
                                    </div>
                                    <div class="recommendation-detail">
                                        <div class="detail-label">Stop Loss</div>
                                        <div class="detail-value" id="stopLoss">1.0820</div>
                                    </div>
                                    <div class="recommendation-detail">
                                        <div class="detail-label">Take Profit</div>
                                        <div class="detail-value" id="takeProfit">1.0910</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <style>
            /* INSERT ALL YOUR CSS STYLES HERE - KEEPING THEM EXACTLY THE SAME */
            ${getAllStyles()}
        </style>
    `;
    
    // Initialize upload functionality
    initializeUpload();
    // Initialize strategy dropdown with default state
    updateStrategyDropdown();
}

// Get all styles function (truncated - use your full CSS)
function getAllStyles() {
    // Return your complete CSS string here
    return `/* Your complete CSS styles */`;
}

// Initialize upload functionality
function initializeUpload() {
    const uploadBox = document.getElementById('uploadBox');
    const fileInput = document.getElementById('chartFileInput');
    
    if (uploadBox && fileInput) {
        // Click handler
        uploadBox.addEventListener('click', (e) => {
            if (e.target.classList.contains('upload-btn') || e.target.parentElement?.classList.contains('upload-btn')) {
                return;
            }
            fileInput.click();
        });
        
        // Drag and drop
        uploadBox.addEventListener('dragover', (e) => {
            e.preventDefault();
            uploadBox.classList.add('drag-active');
        });
        
        uploadBox.addEventListener('dragleave', () => {
            uploadBox.classList.remove('drag-active');
        });
        
        uploadBox.addEventListener('drop', (e) => {
            e.preventDefault();
            e.stopPropagation();
            uploadBox.classList.remove('drag-active');
            
            const file = e.dataTransfer.files[0];
            if (file && file.type.startsWith('image/')) {
                handleChartFileUpload({ target: { files: [file] } });
            }
        });
        
        // File input change
        fileInput.addEventListener('change', handleChartFileUpload);
    }
}

// Handle file upload - WICHTIG: Setze window.currentChartData
function handleChartFileUpload(event) {
    const file = event.target.files[0];
    if (!file) return;
    
    // Store file in userData
    window.uploadedFile = file;
    
    const reader = new FileReader();
    reader.onload = function(e) {
        const imageData = e.target.result;
        window.currentChartData = imageData; // WICHTIG FÜR AI ANALYSE
        document.getElementById('chartImage').src = imageData;
        document.getElementById('resultChartImage').src = imageData;
        document.getElementById('uploadArea').style.display = 'none';
        document.getElementById('previewSection').style.display = 'block';
    };
    reader.readAsDataURL(file);
}

// Change chart
function changeChart() {
    document.getElementById('uploadArea').style.display = 'block';
    document.getElementById('previewSection').style.display = 'none';
    document.getElementById('chartFileInput').value = '';
    window.uploadedFile = null;
    window.currentChartData = null;
    window.selectedAnalysisMode = null;
    
    // Clear mode display
    const modeDisplay = document.getElementById('selectedModeDisplay');
    if (modeDisplay) {
        modeDisplay.textContent = '';
    }
    
    // Reset strategy dropdown
    updateStrategyDropdown();
}

// NEW FUNCTION: Update strategy dropdown based on selected mode
function updateStrategyDropdown(selectedMode = null) {
    const strategySelect = document.getElementById('strategySelect');
    if (!strategySelect) return;
    
    const allStrategies = {
        'simple': [
            { value: 'price-action', label: 'Price Action (Simple)' },
            { value: 'support-resistance', label: 'Support & Resistance (Simple)' },
            { value: 'breakout', label: 'Breakout Strategy (Simple)' }
        ],
        'scalping': [
            { value: 'technical', label: 'Technical Analysis (Scalping)' },
            { value: 'supply-demand', label: 'Supply & Demand (Scalping)' },
            { value: 'fibonacci', label: 'Fibonacci Analysis (Scalping)' }
        ],
        'professional': [
            { value: 'ict', label: 'ICT (Professional)' },
            { value: 'elliott-wave', label: 'Elliott Wave (Professional)' },
            { value: 'smart-money', label: 'Smart Money Concepts (Professional)' }
        ]
    };
    
    // Clear current options
    strategySelect.innerHTML = '';
    
    if (!selectedMode) {
        // Show all strategies if no mode selected
        const defaultOption = document.createElement('option');
        defaultOption.value = '';
        defaultOption.textContent = 'Select a mode first...';
        strategySelect.appendChild(defaultOption);
        
        Object.keys(allStrategies).forEach(mode => {
            const optgroup = document.createElement('optgroup');
            const modeLabel = mode.charAt(0).toUpperCase() + mode.slice(1);
            optgroup.label = `${modeLabel} Mode Strategies`;
            optgroup.style.color = mode === 'simple' ? '#6366f1' : mode === 'scalping' ? '#f59e0b' : '#ec4899';
            optgroup.style.fontWeight = '700';
            
            allStrategies[mode].forEach(strategy => {
                const option = document.createElement('option');
                option.value = strategy.value;
                option.textContent = strategy.label;
                option.style.color = '#111827';
                optgroup.appendChild(option);
            });
            
            strategySelect.appendChild(optgroup);
        });
    } else {
        // Show selected mode strategies first, then others as collapsed
        allStrategies[selectedMode].forEach(strategy => {
            const option = document.createElement('option');
            option.value = strategy.value;
            option.textContent = strategy.label;
            option.style.color = '#111827';
            option.style.fontWeight = '500';
            strategySelect.appendChild(option);
        });
        
        // Add separator
        const separator = document.createElement('option');
        separator.disabled = true;
        separator.textContent = '──────────────────';
        strategySelect.appendChild(separator);
        
        // Add other modes as optgroups
        Object.keys(allStrategies).forEach(mode => {
            if (mode !== selectedMode) {
                const optgroup = document.createElement('optgroup');
                const modeLabel = mode.charAt(0).toUpperCase() + mode.slice(1);
                optgroup.label = `${modeLabel} Mode Strategies`;
                optgroup.style.color = mode === 'simple' ? '#6366f1' : mode === 'scalping' ? '#f59e0b' : '#ec4899';
                optgroup.style.fontWeight = '700';
                
                allStrategies[mode].forEach(strategy => {
                    const option = document.createElement('option');
                    option.value = strategy.value;
                    option.textContent = strategy.label;
                    option.style.color = '#111827';
                    optgroup.appendChild(option);
                });
                
                strategySelect.appendChild(optgroup);
            }
        });
        
        // Select first strategy of the mode
        strategySelect.value = allStrategies[selectedMode][0].value;
    }
}

// NEW FUNCTION: Handle strategy change to update mode selection
function handleStrategyChange(strategyValue) {
    // Define strategy to mode mapping
    const strategyToMode = {
        'price-action': 'simple',
        'support-resistance': 'simple',
        'breakout': 'simple',
        'technical': 'scalping',
        'supply-demand': 'scalping',
        'fibonacci': 'scalping',
        'ict': 'professional',
        'elliott-wave': 'professional',
        'smart-money': 'professional'
    };
    
    // Get the mode for this strategy
    const mode = strategyToMode[strategyValue];
    
    if (mode && mode !== window.selectedAnalysisMode) {
        // Find the corresponding mode card
        const modeCards = document.querySelectorAll('.mode-card');
        let targetCard = null;
        
        modeCards.forEach(card => {
            const modeName = card.querySelector('.mode-name').textContent.toLowerCase();
            if (modeName.includes(mode)) {
                targetCard = card;
            }
        });
        
        // Select the mode and update dropdown
        if (targetCard) {
            selectMode(mode, targetCard);
        }
    }
}

// Select analysis mode - UPDATED WITH STRATEGY MAPPING AND MODE DISPLAY
function selectMode(mode, element) {
    window.selectedAnalysisMode = mode;
    
    // Update UI
    document.querySelectorAll('.mode-card').forEach(card => {
        card.classList.remove('selected');
    });
    element.classList.add('selected');
    
    // Update button text
    element.querySelector('.select-mode-btn').innerHTML = '<span>✓ Selected</span>';
    
    // Reset other buttons
    document.querySelectorAll('.mode-card:not(.selected) .select-mode-btn').forEach(btn => {
        const modeName = btn.closest('.mode-card').querySelector('.mode-name').textContent;
        const modeType = modeName.includes('Simple') ? 'Simple' : 
                        modeName.includes('Scalping') ? 'Scalping' : 'Pro';
        btn.innerHTML = `<span>Start ${modeType} Analysis</span><span>→</span>`;
    });
    
    // Update strategy dropdown to show only selected mode strategies
    updateStrategyDropdown(mode);
    
    // Update mode display next to Analysis Strategy label with correct color
    const modeDisplay = document.getElementById('selectedModeDisplay');
    if (modeDisplay) {
        const modeNames = {
            'simple': 'Simple / Swing Mode',
            'scalping': 'Scalping Mode',
            'professional': 'Professional Mode'
        };
        const modeColors = {
            'simple': '#6366f1',
            'scalping': '#f59e0b',
            'professional': '#ec4899'
        };
        modeDisplay.textContent = `(${modeNames[mode]})`;
        modeDisplay.style.color = modeColors[mode];
    }
    
    // Enable analyze button
    document.getElementById('analyzeBtn').classList.add('ready');
}

// NEW FUNCTION: Show price popup
function showPricePopup() {
    if (!window.selectedAnalysisMode || !window.uploadedFile) {
        alert('Please select an analysis mode first');
        return;
    }
    
    document.getElementById('pricePopup').style.display = 'flex';
    document.getElementById('currentPriceInput').focus();
}

// NEW FUNCTION: Close price popup
function closePricePopup() {
    document.getElementById('pricePopup').style.display = 'none';
    document.getElementById('currentPriceInput').value = '';
    document.getElementById('marketCapInput').value = '';
    document.getElementById('forceBullBearToggle').checked = false;
}

// NEW FUNCTION: Start analysis with price - UPDATED FOR OPTIONAL PRICE AND TOGGLE
function startChartAnalysisWithPrice() {
    const currentPrice = document.getElementById('currentPriceInput').value;
    const marketCap = document.getElementById('marketCapInput').value;
    
    // Store toggle state
    window.forceBullBearMode = document.getElementById('forceBullBearToggle').checked;
    
    // Current price is now optional
    if (currentPrice && currentPrice.trim() !== '') {
        window.currentPrice = parseFloat(currentPrice.replace(',', ''));
    } else {
        window.currentPrice = null; // AI will use price from chart
    }
    
    // Parse market cap if provided
    if (marketCap) {
        let marketCapValue = marketCap.toUpperCase().replace(/,/g, '');
        if (marketCapValue.includes('B')) {
            window.marketCap = parseFloat(marketCapValue.replace('B', '')) * 1000000000;
        } else if (marketCapValue.includes('M')) {
            window.marketCap = parseFloat(marketCapValue.replace('M', '')) * 1000000;
        } else if (marketCapValue.includes('K')) {
            window.marketCap = parseFloat(marketCapValue.replace('K', '')) * 1000;
        } else {
            window.marketCap = parseFloat(marketCapValue);
        }
    } else {
        window.marketCap = null;
    }
    
    closePricePopup();
    startChartAnalysis();
}

// NEW FUNCTION: Show trading levels for high risk charts
function showTradingLevels() {
    document.getElementById('highRiskWarning').style.display = 'none';
    document.getElementById('normalTradingDetails').style.display = 'block';
}

// NEW FUNCTION: Show trading levels in sentiment card
function showSentimentTradingLevels() {
    document.getElementById('sentimentHighRiskWarning').style.display = 'none';
    document.getElementById('sentimentTradingLevels').style.display = 'block';
}

// Loading messages
const LOADING_MESSAGES = [
    "Analyzing chart patterns...",
    "Detecting support and resistance levels...",
    "Calculating market sentiment...",
    "Identifying trend lines...",
    "Evaluating volume patterns...",
    "Generating trading recommendations..."
];

let currentMessageIndex = 0;
let messageInterval;
let progressInterval;

// Start chart analysis - MIT ECHTER AI
async function startChartAnalysis() {
    if (!window.selectedAnalysisMode || !window.uploadedFile) {
        alert('Please select an analysis mode first');
        return;
    }
    
    // Hide preview, show progress
    document.getElementById('previewSection').style.display = 'none';
    document.getElementById('progressSection').style.display = 'block';
    
    // Start progress animation
    startProgressAnimation();
    
    try {
        // Execute real AI analysis
        await executeAnalysis();
    } catch (error) {
        console.error('Analysis error:', error);
        alert('Analysis failed: ' + error.message);
        
        // Go back to preview
        document.getElementById('progressSection').style.display = 'none';
        document.getElementById('previewSection').style.display = 'block';
        
        clearInterval(messageInterval);
        clearInterval(progressInterval);
    }
}

// Progress animation
function startProgressAnimation() {
    currentMessageIndex = 0;
    let progress = 0;
    const progressFill = document.getElementById('progressFill');
    const progressPercentage = document.getElementById('progressPercentage');
    const progressStatus = document.getElementById('progressStatus');
    
    // Reset all steps
    document.querySelectorAll('.analysis-step').forEach(step => {
        step.classList.remove('active', 'completed');
    });
    
    // Update loading message
    const updateMessage = () => {
        if (progressStatus) {
            progressStatus.textContent = LOADING_MESSAGES[currentMessageIndex % LOADING_MESSAGES.length];
            currentMessageIndex++;
        }
    };
    
    updateMessage();
    messageInterval = setInterval(updateMessage, 2000);
    
    // Update progress
    progressInterval = setInterval(() => {
        progress += Math.random() * 15;
        if (progress > 90) progress = 90;
        
        progressFill.style.width = progress + '%';
        progressPercentage.textContent = Math.floor(progress) + '%';
        
        // Update steps
        if (progress > 0) document.getElementById('step1').classList.add('active');
        if (progress > 25) {
            document.getElementById('step1').classList.remove('active');
            document.getElementById('step1').classList.add('completed');
            document.getElementById('step2').classList.add('active');
        }
        if (progress > 50) {
            document.getElementById('step2').classList.remove('active');
            document.getElementById('step2').classList.add('completed');
            document.getElementById('step3').classList.add('active');
        }
        if (progress > 75) {
            document.getElementById('step3').classList.remove('active');
            document.getElementById('step3').classList.add('completed');
            document.getElementById('step4').classList.add('active');
        }
    }, 500);
}

// Execute AI analysis - UPDATED WITH OPTIONAL PRICE AND TOGGLE MODE
async function executeAnalysis() {
    if (!window.currentChartData) {
        throw new Error('No chart data available');
    }
    
    // Get input values
    const symbol = document.getElementById('symbolInput').value || 'Unknown';
    const timeframe = document.getElementById('timeframeSelect').value || 'Unknown';
    const currentPrice = window.currentPrice || null;
    const marketCap = window.marketCap || null;
    const forceBullBearMode = window.forceBullBearMode || false;
    let style = document.getElementById('strategySelect').value;
    const specificRequest = document.getElementById('specificRequest').value;
    
    // If a mode is selected, use mode-specific strategies
    if (window.selectedAnalysisMode) {
        const modeStrategies = {
            'simple': ['price-action', 'support-resistance', 'breakout'],
            'scalping': ['technical', 'supply-demand', 'fibonacci'],
            'professional': ['ict', 'elliott-wave', 'smart-money']
        };
        
        // If the selected strategy is not in the mode's strategies, use all mode strategies
        const strategies = modeStrategies[window.selectedAnalysisMode] || [];
        if (strategies.length > 0 && !strategies.includes(style)) {
            style = strategies.join(', '); // Use all strategies for the mode
        }
    }
    
    // Style prompts
    const stylePrompts = {
        'technical': 'Focus on technical indicators like RSI, MACD, Moving Averages',
        'price-action': 'Analyze price action, market structure, and candlestick patterns',
        'elliott-wave': 'Apply Elliott Wave theory and identify wave counts',
        'fibonacci': 'Focus on Fibonacci retracements, extensions, and key levels',
        'ict': 'Analyze using ICT (Inner Circle Trader) concepts including market structure, order blocks, fair value gaps, and institutional order flow',
        'support-resistance': 'Focus on identifying key support and resistance levels, pivot points, and horizontal price levels',
        'breakout': 'Analyze for breakout opportunities, consolidation patterns, and volume confirmation',
        'supply-demand': 'Identify supply and demand zones, accumulation and distribution areas',
        'harmonic': 'Look for harmonic patterns like Gartley, Butterfly, Bat patterns',
        'smart-money': 'Analyze using Smart Money Concepts including order blocks, fair value gaps, liquidity pools, and institutional footprints',
        'simple': 'Focus on Price Action, Support & Resistance levels, and Breakout patterns for beginner-friendly analysis',
        'scalping': 'Provide Technical Analysis with focus on Supply & Demand zones and Fibonacci levels for quick scalping trades',
        'professional': 'Apply advanced ICT concepts, Elliott Wave analysis, and Smart Money Concepts for professional trading'
    };
    
    // Add force bull/bear mode instruction if toggle is active
    const forceBullBearInstruction = forceBullBearMode ? `
IMPORTANT: FORCED BULLISH/BEARISH MODE ACTIVE
You MUST give either "bullish" or "bearish" sentiment only.
DO NOT return "neutral" sentiment under any circumstances.
If the chart is unclear or sideways, you must still choose either bullish or bearish based on which direction has slightly more probability.
Never say "wait for breakout" or "neutral" - you must pick a side.
` : '';
    
    const prompt = `You are a professional technical analyst. Analyze the trading chart and respond in this exact JSON format:

{
    "sentiment": "bullish" or "bearish" or "neutral",
    "confidence": <number 0-100>,
    "recommendation": "<clear trading recommendation>",
    "profitStrategy": "<DETAILED AI TRADING STRATEGY: Explain what YOU as an AI would do RIGHT NOW with this chart. Focus on: What specific price levels or patterns you're waiting for, what signals would trigger your entry, how you would manage the position if those conditions are met. Example: 'I'm waiting for a breakout above the resistance at X with volume confirmation. If that happens, I would enter long and place stop loss at Y. I would watch for rejection at Z level and consider taking partial profits there.' Be specific about price levels and conditions, NOT position sizing. Minimum 3-4 sentences>",
    "analysis": "<detailed technical analysis>",
    "patterns": ["<pattern1>", "<pattern2>", ...],
    "support": [<price1>, <price2>, ...],
    "resistance": [<price1>, <price2>, ...],
    "entry": <suggested entry price or null>,
    "stopLoss": <stop loss price or null>,
    "takeProfit": [<TP1>, <TP2>, ...],
    "isHighRisk": <true if chart shows rugpull/extreme bearish signals/crash pattern, false otherwise>
}

${forceBullBearInstruction}

${currentPrice ? `IMPORTANT: The user provided a current market price of ${currentPrice}. Use this price if the chart doesn't show a clear current price. If the chart clearly shows a different current price, use the price from the chart and mention the discrepancy.` : 'Extract the current price from the chart if visible. Use the chart price for all calculations.'}
${marketCap ? `Market Cap: ${marketCap} (Consider this for risk assessment, especially for low-cap tokens)` : ''}

PROFIT STRATEGY REQUIREMENTS:
The "profitStrategy" field MUST contain what the AI would do with this exact chart situation. Include:
- What specific conditions or price levels you're waiting for
- What would trigger your entry (breakout, pullback, pattern completion, etc.)
- Where you would place stops and why
- What levels you're watching for profit taking
- DO NOT mention position sizing or capital percentages
- Focus on price action and technical triggers

RUGPULL DETECTION RULES - VERY IMPORTANT:
Set "isHighRisk" to true ONLY if the chart shows CLEAR rugpull patterns:
1. Sudden massive vertical drop (>70% in short timeframe) - waterfall pattern
2. Complete breakdown with no bounce or recovery attempts
3. Death spiral pattern with continuous red candles and no support
4. Chart showing clear pump and dump pattern that already dumped
5. Volume completely dried up after massive selloff

DO NOT set isHighRisk to true just because:
- The market cap is low (unless combined with actual rugpull chart patterns)
- The sentiment is bearish (normal corrections are not rugpulls)
- There's a downtrend (healthy pullbacks are normal)

Only flag as high risk if the chart VISUALLY shows catastrophic collapse patterns typical of rugpulls, not just low market cap or bearish trends.

Analysis style: ${stylePrompts[style] || stylePrompts[window.selectedAnalysisMode] || stylePrompts['technical']}
${symbol ? `Symbol: ${symbol}` : ''}
${timeframe ? `Timeframe: ${timeframe}` : ''}
${specificRequest ? `Additional notes: ${specificRequest}` : ''}

Be specific with price levels. If you cannot determine exact levels from the chart or if the data is insufficient, state "Unable to determine exact levels from chart" and explain why.`;

    // OpenAI API Key
    const API_KEY = '';
    
    let analysisText;
    
    try {
        // Try GPT-4o first
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${API_KEY}`
            },
            body: JSON.stringify({
                model: "gpt-4o",
                messages: [{
                    role: "user",
                    content: [
                        { type: "text", text: prompt },
                        { 
                            type: "image_url", 
                            image_url: { 
                                url: window.currentChartData,
                                detail: "high"
                            } 
                        }
                    ]
                }],
                max_tokens: 1500,
                temperature: 0.3
            })
        });
        
        if (!response.ok) {
            // Fallback to GPT-4o-mini
            const miniResponse = await fetch('https://api.openai.com/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${API_KEY}`
                },
                body: JSON.stringify({
                    model: "gpt-4o-mini",
                    messages: [{
                        role: "user",
                        content: [
                            { type: "text", text: prompt },
                            { 
                                type: "image_url", 
                                image_url: { 
                                    url: window.currentChartData,
                                    detail: "high"
                                } 
                            }
                        ]
                    }],
                    max_tokens: 1500,
                    temperature: 0.3
                })
            });
            
            if (!miniResponse.ok) {
                throw new Error('API request failed');
            }
            
            const miniData = await miniResponse.json();
            analysisText = miniData.choices[0]?.message?.content;
        } else {
            const data = await response.json();
            analysisText = data.choices[0]?.message?.content;
        }
        
        if (!analysisText) {
            throw new Error('No response from AI');
        }
        
        const analysis = parseAnalysisResponse(analysisText, forceBullBearMode);
        
        // Calculate price levels if current price is available (from user or AI)
        if (currentPrice && analysis) {
            analysis.currentPrice = currentPrice;
            analysis.marketCap = marketCap;
            
            // Only flag as rugpull if BOTH conditions are met:
            // 1. Low market cap
            // 2. AI detected actual rugpull patterns in the chart
            if (marketCap && marketCap < 100000 && analysis.isHighRisk === true) {
                // Only override if AI already detected rugpull patterns
                analysis.recommendation = "⚠️ CRITICAL RUGPULL WARNING - Market cap under $100k combined with chart showing rugpull pattern.";
            }
            // Don't automatically flag as rugpull just because of low market cap
            
            // If AI didn't provide specific levels, calculate them
            if (!analysis.entry || analysis.entry === null) {
                if (analysis.sentiment === 'bullish') {
                    analysis.entry = currentPrice;
                } else if (analysis.sentiment === 'bearish') {
                    analysis.entry = currentPrice;
                } else {
                    analysis.entry = 'Wait for breakout';
                }
            }
            
            if (!analysis.stopLoss || analysis.stopLoss === null) {
                if (analysis.sentiment === 'bullish') {
                    analysis.stopLoss = (currentPrice * 0.97).toFixed(4); // 3% below
                } else if (analysis.sentiment === 'bearish') {
                    analysis.stopLoss = (currentPrice * 1.03).toFixed(4); // 3% above
                } else {
                    analysis.stopLoss = 'N/A';
                }
            }
            
            if (!analysis.takeProfit || analysis.takeProfit.length === 0) {
                if (analysis.sentiment === 'bullish') {
                    analysis.takeProfit = [
                        (currentPrice * 1.03).toFixed(4), // 3% above
                        (currentPrice * 1.05).toFixed(4), // 5% above
                        (currentPrice * 1.10).toFixed(4)  // 10% above
                    ];
                } else if (analysis.sentiment === 'bearish') {
                    analysis.takeProfit = [
                        (currentPrice * 0.97).toFixed(4), // 3% below
                        (currentPrice * 0.95).toFixed(4), // 5% below
                        (currentPrice * 0.90).toFixed(4)  // 10% below
                    ];
                } else {
                    analysis.takeProfit = ['N/A'];
                }
            }
        }
        
        // Show results with AI data
        showAnalysisResults(analysis);
        
    } catch (error) {
        console.error('API Error:', error);
        throw error;
    } finally {
        clearInterval(messageInterval);
        clearInterval(progressInterval);
    }
}

// Parse analysis response - UPDATED WITH NEW profitStrategy AND FORCE MODE
function parseAnalysisResponse(text, forceBullBearMode = false) {
    try {
        // Try to extract JSON from the response
        const jsonMatch = text.match(/\{[\s\S]*\}/);
        const jsonText = jsonMatch ? jsonMatch[0] : text;
        
        const parsed = JSON.parse(jsonText);
        
        // Force bullish/bearish if toggle is active
        let sentiment = parsed.sentiment;
        if (forceBullBearMode && sentiment === 'neutral') {
            // If neutral is returned despite force mode, default to bearish (more conservative)
            sentiment = 'bearish';
        }
        
        // Validate and sanitize fields
        return {
            sentiment: ['bullish', 'bearish', 'neutral'].includes(sentiment) 
                ? sentiment 
                : (forceBullBearMode ? 'bearish' : 'neutral'),
            confidence: typeof parsed.confidence === 'number' 
                ? Math.max(0, Math.min(100, parsed.confidence))
                : 50,
            patterns: Array.isArray(parsed.patterns) 
                ? parsed.patterns.filter(p => typeof p === 'string')
                : [],
            recommendation: typeof parsed.recommendation === 'string' 
                ? parsed.recommendation 
                : 'No recommendation available',
            profitStrategy: typeof parsed.profitStrategy === 'string' 
                ? parsed.profitStrategy 
                : 'Based on the current chart setup, I would wait for a clear breakout above the nearest resistance level with increased volume. Once confirmed, I would enter a position with a stop loss placed just below the breakout level. I would monitor the next resistance zone for potential profit-taking opportunities and adjust my stop loss to breakeven once the trade moves in my favor.',
            analysis: typeof parsed.analysis === 'string' 
                ? parsed.analysis 
                : 'No detailed analysis available',
            support: Array.isArray(parsed.support) ? parsed.support : [],
            resistance: Array.isArray(parsed.resistance) ? parsed.resistance : [],
            entry: parsed.entry || null,
            stopLoss: parsed.stopLoss || null,
            takeProfit: Array.isArray(parsed.takeProfit) ? parsed.takeProfit : [],
            isHighRisk: parsed.isHighRisk === true  // Only true if AI detected actual rugpull patterns
        };
    } catch (error) {
        console.error('JSON parsing error:', error);
        return {
            sentiment: forceBullBearMode ? 'bearish' : 'neutral',
            confidence: 50,
            patterns: [],
            recommendation: 'Unable to provide recommendation due to analysis error',
            profitStrategy: 'Unable to generate trading strategy due to analysis error. Please try again with a clearer chart image.',
            analysis: `Analysis error: ${text}`,
            support: [],
            resistance: [],
            entry: null,
            stopLoss: null,
            takeProfit: [],
            isHighRisk: false
        };
    }
}

// Show analysis results - MIT AI DATEN UND HIGH RISK HANDLING
function showAnalysisResults(analysis) {
    // Complete progress
    const progressFill = document.getElementById('progressFill');
    const progressPercentage = document.getElementById('progressPercentage');
    progressFill.style.width = '100%';
    progressPercentage.textContent = '100%';
    
    // Update all steps to completed
    document.querySelectorAll('.analysis-step').forEach(step => {
        step.classList.remove('active');
        step.classList.add('completed');
    });
    
    // Store analysis globally for the show levels button
    window.currentAnalysisData = analysis;
    
    setTimeout(() => {
        // Hide progress, show results
        document.getElementById('progressSection').style.display = 'none';
        document.getElementById('resultsSection').style.display = 'block';
        
        // Update sentiment card
        updateSentimentCard(analysis);
        
        // Update analysis tabs with AI content
        updateAnalysisTabs(analysis);
        
        // Update quick stats
        updateQuickStats(analysis);
        
        // Update trading recommendation with profit strategy
        updateTradingRecommendation(analysis);
        
    }, 500);
}

// Update sentiment card - UPDATED TO SHOW POSITION INSTEAD OF SIGNAL
function updateSentimentCard(analysis) {
    const sentimentScoreCard = document.getElementById('sentimentScoreCard');
    const sentimentScore = document.getElementById('sentimentScore');
    const sentimentDirection = document.getElementById('sentimentDirection');
    const sentimentMeterFill = document.getElementById('sentimentMeterFill');
    const recommendationText = document.getElementById('recommendationText');
    
    // High risk warning and trading levels elements
    const sentimentHighRiskWarning = document.getElementById('sentimentHighRiskWarning');
    const sentimentTradingLevels = document.getElementById('sentimentTradingLevels');
    
    // Update trading levels in sentiment card
    const sentimentEntry = document.getElementById('sentimentEntry');
    const sentimentStopLoss = document.getElementById('sentimentStopLoss');
    const sentimentTakeProfit = document.getElementById('sentimentTakeProfit');
    
    const confidence = analysis.confidence;
    const sentiment = analysis.sentiment;
    
    sentimentScore.textContent = confidence + '%';
    sentimentMeterFill.style.width = confidence + '%';
    
    // Check if high risk (only if AI detected rugpull patterns)
    if (analysis.isHighRisk === true) {
        sentimentHighRiskWarning.style.display = 'block';
        sentimentTradingLevels.style.display = 'none';
        
        // Update warning text based on market cap
        if (analysis.marketCap && analysis.marketCap < 100000) {
            document.querySelector('#sentimentHighRiskWarning .warning-text').textContent = 
                'RUGPULL WARNING: Extremely low market cap with bearish chart pattern detected.';
        } else {
            document.querySelector('#sentimentHighRiskWarning .warning-text').textContent = 
                'This chart shows extreme risk signals. Trading is strongly discouraged.';
        }
    } else {
        sentimentHighRiskWarning.style.display = 'none';
        sentimentTradingLevels.style.display = 'block';
    }
    
    // Always update trading levels (for when user clicks "show anyway")
    if (analysis.entry !== null && analysis.entry !== undefined) {
        sentimentEntry.textContent = typeof analysis.entry === 'string' ? analysis.entry : analysis.entry.toString();
    } else {
        sentimentEntry.textContent = '-';
    }
    
    if (analysis.stopLoss !== null && analysis.stopLoss !== undefined) {
        sentimentStopLoss.textContent = typeof analysis.stopLoss === 'string' ? analysis.stopLoss : analysis.stopLoss.toString();
    } else {
        sentimentStopLoss.textContent = '-';
    }
    
    if (analysis.takeProfit && analysis.takeProfit.length > 0) {
        sentimentTakeProfit.textContent = analysis.takeProfit[0].toString();
    } else {
        sentimentTakeProfit.textContent = '-';
    }
    
    // Remove all previous classes
    sentimentScoreCard.classList.remove('bullish', 'bearish', 'neutral');
    
    // UPDATED: Show POSITION instead of SIGNAL
    if (sentiment === 'bearish') {
        // RED - Bearish
        sentimentScoreCard.classList.add('bearish');
        sentimentDirection.textContent = confidence >= 70 ? 'STRONG BEARISH' : 'BEARISH';
        sentimentDirection.style.color = '#EF4444';
        recommendationText.textContent = analysis.isHighRisk ? 'AVOID - HIGH RISK' : 'SHORT POSITION';
        sentimentScore.style.background = 'linear-gradient(135deg, #EF4444 0%, #DC2626 100%)';
        sentimentScore.style.webkitBackgroundClip = 'text';
        sentimentScore.style.webkitTextFillColor = 'transparent';
        sentimentScore.style.backgroundClip = 'text';
        sentimentMeterFill.style.background = 'linear-gradient(90deg, #EF4444, #DC2626)';
    } else if (sentiment === 'neutral') {
        // YELLOW - Neutral
        sentimentScoreCard.classList.add('neutral');
        sentimentDirection.textContent = 'NEUTRAL';
        sentimentDirection.style.color = '#F59E0B';
        recommendationText.textContent = 'NO POSITION - WAIT';
        sentimentScore.style.background = 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)';
        sentimentScore.style.webkitBackgroundClip = 'text';
        sentimentScore.style.webkitTextFillColor = 'transparent';
        sentimentScore.style.backgroundClip = 'text';
        sentimentMeterFill.style.background = 'linear-gradient(90deg, #F59E0B, #D97706)';
    } else { // bullish
        // GREEN - Bullish
        sentimentScoreCard.classList.add('bullish');
        sentimentDirection.textContent = confidence >= 70 ? 'STRONG BULLISH' : 'BULLISH';
        sentimentDirection.style.color = '#10B981';
        recommendationText.textContent = 'LONG POSITION';
        sentimentScore.style.background = 'linear-gradient(135deg, #10B981 0%, #059669 100%)';
        sentimentScore.style.webkitBackgroundClip = 'text';
        sentimentScore.style.webkitTextFillColor = 'transparent';
        sentimentScore.style.backgroundClip = 'text';
        sentimentMeterFill.style.background = 'linear-gradient(90deg, #10B981, #059669)';
    }
}

// Update analysis tabs with AI content - MODIFIED FOR NEW STRUCTURE
function updateAnalysisTabs(analysis) {
    // Set Overview tab as default
    const content = document.getElementById('analysisContent');
    
    content.innerHTML = `
        <div class="analysis-section">
            <h4 class="section-title">
                <span>🎯</span>
                <span>Market Overview</span>
            </h4>
            <p class="section-content">${analysis.analysis}</p>
        </div>
        <div class="analysis-section">
            <h4 class="section-title">
                <span>💡</span>
                <span>Trading Recommendation</span>
            </h4>
            <p class="section-content">${analysis.recommendation}</p>
        </div>
        <div class="analysis-section">
            <h4 class="section-title">
                <span>📊</span>
                <span>Potential Outcomes</span>
            </h4>
            <p class="section-content">Based on the analysis, if the ${analysis.sentiment} sentiment continues, we could see price movement towards ${analysis.takeProfit && analysis.takeProfit.length > 0 ? analysis.takeProfit[0] : 'the next resistance level'}. Risk management suggests placing stops at ${analysis.stopLoss || 'recent support levels'}.</p>
        </div>
        ${analysis.patterns.length > 0 ? `
        <div class="analysis-section">
            <h4 class="section-title">
                <span>📐</span>
                <span>Detected Patterns</span>
            </h4>
            <p class="section-content">${analysis.patterns.join(', ')}</p>
        </div>` : ''}
    `;
    
    // Store analysis data for tab switching
    window.currentAnalysisData = analysis;
}

// Update quick stats based on AI analysis - UPDATED WITH COLORS
function updateQuickStats(analysis) {
    const trendStrength = document.getElementById('trendStrength');
    const volatility = document.getElementById('volatility');
    const volumeTrend = document.getElementById('volumeTrend');
    const riskLevel = document.getElementById('riskLevelStat');
    
    if (analysis.sentiment === 'bullish') {
        trendStrength.textContent = analysis.confidence >= 70 ? 'Strong ↑' : 'Moderate ↑';
        trendStrength.className = 'stat-value stat-green';
        trendStrength.style.color = '#10B981';
        
        volumeTrend.textContent = 'Increasing';
        volumeTrend.className = 'stat-value stat-green';
        volumeTrend.style.color = '#10B981';
        
        riskLevel.textContent = analysis.confidence >= 70 ? 'Low' : 'Low-Medium';
        riskLevel.className = 'stat-value stat-green';
        riskLevel.style.color = '#10B981';
    } else if (analysis.sentiment === 'bearish') {
        trendStrength.textContent = analysis.confidence >= 70 ? 'Strong ↓' : 'Moderate ↓';
        trendStrength.className = 'stat-value stat-red';
        trendStrength.style.color = '#EF4444';
        
        volumeTrend.textContent = 'Decreasing';
        volumeTrend.className = 'stat-value stat-red';
        volumeTrend.style.color = '#EF4444';
        
        // Special handling for rugpull risk
        if (analysis.isHighRisk) {
            riskLevel.textContent = 'EXTREME';
            riskLevel.className = 'stat-value stat-red';
            riskLevel.style.color = '#EF4444';
            riskLevel.style.fontWeight = '700';
        } else {
            riskLevel.textContent = analysis.confidence >= 70 ? 'High' : 'Medium-High';
            riskLevel.className = 'stat-value stat-orange';
            riskLevel.style.color = '#F59E0B';
        }
    } else {
        trendStrength.textContent = 'Sideways →';
        trendStrength.className = 'stat-value stat-yellow';
        trendStrength.style.color = '#F59E0B';
        
        volumeTrend.textContent = 'Mixed';
        volumeTrend.className = 'stat-value stat-yellow';
        volumeTrend.style.color = '#F59E0B';
        
        riskLevel.textContent = 'Medium';
        riskLevel.className = 'stat-value stat-yellow';
        riskLevel.style.color = '#F59E0B';
    }
    
    // Volatility coloring
    if (analysis.isHighRisk) {
        volatility.textContent = 'Extreme';
        volatility.className = 'stat-value stat-red';
        volatility.style.color = '#EF4444';
    } else if (analysis.confidence >= 70) {
        volatility.textContent = 'Low';
        volatility.className = 'stat-value stat-green';
        volatility.style.color = '#10B981';
    } else {
        volatility.textContent = 'Moderate';
        volatility.className = 'stat-value stat-yellow';
        volatility.style.color = '#F59E0B';
    }
}

// Update trading recommendation - UPDATED WITH PREMIUM CHECK
function updateTradingRecommendation(analysis) {
    const tradeAction = document.getElementById('tradeAction');
    const entryPoint = document.getElementById('entryPoint');
    const stopLoss = document.getElementById('stopLoss');
    const takeProfit = document.getElementById('takeProfit');
    const highRiskWarning = document.getElementById('highRiskWarning');
    const normalTradingDetails = document.getElementById('normalTradingDetails');
    const nonPremiumMessage = document.getElementById('nonPremiumMessage');
    const aiProfitStrategy = document.getElementById('aiProfitStrategy');
    
    // Check if professional mode was used
    const isProfessional = window.selectedAnalysisMode === 'professional';
    
    if (!isProfessional) {
        // Show non-premium message for Simple and Scalping modes
        nonPremiumMessage.style.display = 'block';
        highRiskWarning.style.display = 'none';
        normalTradingDetails.style.display = 'none';
    } else {
        // Professional mode - show full recommendations
        nonPremiumMessage.style.display = 'none';
        
        // Always show AI trading strategy title for premium
        tradeAction.textContent = 'AI TRADING STRATEGY';
        
        // Update profit strategy content
        if (aiProfitStrategy) {
            aiProfitStrategy.innerHTML = `<p style="font-size: 16px; line-height: 1.8; color: white; font-weight: 400;">${analysis.profitStrategy || 'Based on the current chart setup, I would wait for a clear confirmation signal before entering. Monitor key levels for breakout or reversal patterns, and manage risk with appropriate stop placement.'}</p>`;
        }
        
        // Check if high risk
        if (analysis.isHighRisk === true) {
            // Show warning, hide normal details
            highRiskWarning.style.display = 'block';
            normalTradingDetails.style.display = 'none';
            
            // Update warning text based on market cap
            if (analysis.marketCap && analysis.marketCap < 100000) {
                document.querySelector('#highRiskWarning .warning-text').textContent = 
                    'Chart shows rugpull pattern with very low market cap. This appears to be a scam token.';
            } else {
                document.querySelector('#highRiskWarning .warning-text').textContent = 
                    'This chart shows extremely bearish signals. Trading is NOT recommended.';
            }
        } else {
            // Show normal details
            highRiskWarning.style.display = 'none';
            normalTradingDetails.style.display = 'block';
        }
        
        // Always set the values (for both normal and when "show anyway" is clicked)
        if (analysis.entry !== null && analysis.entry !== undefined) {
            if (typeof analysis.entry === 'string') {
                entryPoint.textContent = analysis.entry;
            } else {
                entryPoint.textContent = analysis.entry.toString();
            }
        } else {
            entryPoint.textContent = 'Unable to determine';
        }
        
        if (analysis.stopLoss !== null && analysis.stopLoss !== undefined) {
            if (typeof analysis.stopLoss === 'string') {
                stopLoss.textContent = analysis.stopLoss;
            } else {
                stopLoss.textContent = analysis.stopLoss.toString();
            }
        } else {
            stopLoss.textContent = 'Unable to determine';
        }
        
        if (analysis.takeProfit && analysis.takeProfit.length > 0) {
            takeProfit.textContent = analysis.takeProfit[0].toString();
        } else {
            takeProfit.textContent = 'Unable to determine';
        }
    }
}

// Switch analysis tabs - MODIFIED WITH NEW CONTENT STRUCTURE
function switchAnalysisTab(tab, tabName) {
    // Update active tab
    document.querySelectorAll('.analysis-tab').forEach(t => {
        t.classList.remove('active');
    });
    tab.classList.add('active');
    
    // Update content based on stored analysis data
    const content = document.getElementById('analysisContent');
    const analysis = window.currentAnalysisData || {};
    
    if (tabName === 'overview') {
        content.innerHTML = `
            <div class="analysis-section">
                <h4 class="section-title">
                    <span>🎯</span>
                    <span>Market Overview</span>
                </h4>
                <p class="section-content">${analysis.analysis || 'No analysis available'}</p>
            </div>
            <div class="analysis-section">
                <h4 class="section-title">
                    <span>💡</span>
                    <span>Trading Recommendation</span>
                </h4>
                <p class="section-content">${analysis.recommendation || 'No recommendation available'}</p>
            </div>
            <div class="analysis-section">
                <h4 class="section-title">
                    <span>📊</span>
                    <span>Potential Outcomes</span>
                </h4>
                <p class="section-content">Based on the analysis, if the ${analysis.sentiment || 'current'} sentiment continues, we could see price movement towards ${analysis.takeProfit && analysis.takeProfit.length > 0 ? analysis.takeProfit[0] : 'the next resistance level'}. Risk management suggests placing stops at ${analysis.stopLoss || 'recent support levels'}.</p>
            </div>
            ${analysis.patterns && analysis.patterns.length > 0 ? `
            <div class="analysis-section">
                <h4 class="section-title">
                    <span>📐</span>
                    <span>Detected Patterns</span>
                </h4>
                <p class="section-content">${analysis.patterns.join(', ')}</p>
            </div>` : ''}
        `;
    } else if (tabName === 'technical') {
        const priceInfo = analysis.currentPrice ? 
            `<div class="analysis-section">
                <h4 class="section-title">
                    <span>💰</span>
                    <span>Current Market Price</span>
                </h4>
                <p class="section-content"><strong>${analysis.currentPrice}</strong></p>
            </div>` : '';
        
        const marketCapInfo = analysis.marketCap ? 
            `<div class="analysis-section">
                <h4 class="section-title">
                    <span>📊</span>
                    <span>Market Cap</span>
                </h4>
                <p class="section-content"><strong>$${analysis.marketCap.toLocaleString()}</strong></p>
            </div>` : '';
        
        content.innerHTML = `
            ${priceInfo}
            ${marketCapInfo}
            <div class="analysis-section">
                <h4 class="section-title">
                    <span>📈</span>
                    <span>Technical Analysis</span>
                </h4>
                <p class="section-content">${analysis.analysis || 'No technical analysis available'}</p>
            </div>
            ${analysis.support && analysis.support.length > 0 ? `
            <div class="analysis-section">
                <h4 class="section-title">
                    <span>🛡️</span>
                    <span>Support Levels</span>
                </h4>
                <p class="section-content">${analysis.support.join(', ')}</p>
            </div>` : ''}
            ${analysis.resistance && analysis.resistance.length > 0 ? `
            <div class="analysis-section">
                <h4 class="section-title">
                    <span>🚧</span>
                    <span>Resistance Levels</span>
                </h4>
                <p class="section-content">${analysis.resistance.join(', ')}</p>
            </div>` : ''}
        `;
    } else if (tabName === 'patterns') {
        content.innerHTML = `
            <div class="analysis-section">
                <h4 class="section-title">
                    <span>🔍</span>
                    <span>Chart Patterns Detected</span>
                </h4>
                <p class="section-content">
                    ${analysis.patterns && analysis.patterns.length > 0 
                        ? analysis.patterns.map(p => `• ${p}`).join('<br>') 
                        : 'No specific patterns detected'}
                </p>
            </div>
            <div class="analysis-section">
                <h4 class="section-title">
                    <span>📊</span>
                    <span>Pattern Analysis</span>
                </h4>
                <p class="section-content">
                    ${analysis.patterns && analysis.patterns.length > 0 
                        ? 'The detected patterns suggest ' + analysis.sentiment + ' market sentiment with ' + analysis.confidence + '% confidence.'
                        : 'No pattern-based analysis available'}
                </p>
            </div>
        `;
    }
}

// Save analysis
function saveAnalysis() {
    // Get analysis data
    const symbol = document.getElementById('symbolInput')?.value || 'EUR/USD';
    const timeframe = document.getElementById('timeframeSelect')?.value || '1h';
    const sentiment = document.getElementById('sentimentDirection')?.textContent.toLowerCase().includes('bull') ? 'bullish' : 
                     document.getElementById('sentimentDirection')?.textContent.toLowerCase().includes('bear') ? 'bearish' : 'neutral';
    const confidence = parseInt(document.getElementById('sentimentScore')?.textContent) || 75;
    
    // Create analysis object
    const analysis = {
        id: Date.now(),
        symbol: symbol,
        timeframe: timeframe,
        sentiment: sentiment,
        confidence: confidence,
        date: new Date().toISOString(),
        image: document.getElementById('resultChartImage')?.src || '',
        mode: window.selectedAnalysisMode || 'simple',
        currentPrice: window.currentPrice || null,
        marketCap: window.marketCap || null
    };
    
    // Save to localStorage
    const analyses = JSON.parse(localStorage.getItem('analyses') || '[]');
    analyses.unshift(analysis);
    localStorage.setItem('analyses', JSON.stringify(analyses));
    
    // Update user data
    const userData = JSON.parse(localStorage.getItem('userData') || '{}');
    userData.analysisCount = (userData.analysisCount || 0) + 1;
    localStorage.setItem('userData', JSON.stringify(userData));
    
    // Show confirmation
    alert('Analysis saved successfully!');
}

// Start new analysis
function startNewAnalysis() {
    document.getElementById('resultsSection').style.display = 'none';
    document.getElementById('uploadArea').style.display = 'block';
    document.getElementById('chartFileInput').value = '';
    window.uploadedFile = null;
    window.currentChartData = null;
    window.selectedAnalysisMode = null;
    window.currentAnalysisData = null;
    window.currentPrice = null;
    window.marketCap = null;
    window.forceBullBearMode = false;
    
    // Clear mode display
    const modeDisplay = document.getElementById('selectedModeDisplay');
    if (modeDisplay) {
        modeDisplay.textContent = '';
    }
    
    // Reset strategy dropdown
    updateStrategyDropdown();
}

// Get all styles function - VOLLSTÄNDIGES CSS MIT NEUEN FARBEN UND TOGGLE STYLES
function getAllStyles() {
    return `
        /* Upload Container Styles */
        .upload-container {
            min-height: 100vh;
            background: linear-gradient(180deg, #FFFFFF 0%, #F9FAFB 100%);
            position: relative;
            overflow: hidden;
            padding: 40px 20px 60px 20px;
        }

        .bg-pattern {
            position: absolute;
            inset: 0;
            background-image: 
                radial-gradient(circle at 20% 50%, rgba(99, 102, 241, 0.03) 0%, transparent 50%),
                radial-gradient(circle at 80% 80%, rgba(139, 92, 246, 0.03) 0%, transparent 50%),
                radial-gradient(circle at 40% 20%, rgba(236, 72, 153, 0.02) 0%, transparent 50%);
            pointer-events: none;
            animation: patternShift 30s ease-in-out infinite;
        }

        @keyframes patternShift {
            0%, 100% { transform: translateX(0) translateY(0); }
            25% { transform: translateX(20px) translateY(-20px); }
            50% { transform: translateX(-20px) translateY(20px); }
            75% { transform: translateX(20px) translateY(20px); }
        }

        .floating-orb {
            position: absolute;
            border-radius: 50%;
            filter: blur(60px);
            opacity: 0.1;
            animation: float 20s ease-in-out infinite;
        }

        .orb-1 {
            width: 400px;
            height: 400px;
            background: linear-gradient(135deg, #6366f1, #8b5cf6);
            top: -300px;
            left: -200px;
            animation-duration: 25s;
        }

        .orb-2 {
            width: 300px;
            height: 300px;
            background: linear-gradient(135deg, #8b5cf6, #ec4899);
            bottom: -150px;
            right: -150px;
            animation-duration: 30s;
            animation-delay: -5s;
        }

        @keyframes float {
            0%, 100% { 
                transform: translate(0, 0) scale(1) rotate(0deg); 
            }
            33% { 
                transform: translate(30px, -50px) scale(1.1) rotate(120deg); 
            }
            66% { 
                transform: translate(-20px, 30px) scale(0.9) rotate(240deg); 
            }
        }

        /* Price Popup Styles */
        .price-popup-overlay {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.6);
            backdrop-filter: blur(5px);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 9999;
            animation: fadeIn 0.3s ease-out;
        }

        .price-popup {
            background: white;
            border-radius: 20px;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
            width: 90%;
            max-width: 500px;
            animation: slideUpPop 0.3s ease-out;
        }

        @keyframes slideUpPop {
            from {
                opacity: 0;
                transform: translateY(30px) scale(0.95);
            }
            to {
                opacity: 1;
                transform: translateY(0) scale(1);
            }
        }

        .popup-header {
            padding: 24px 24px 0;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .popup-header h3 {
            font-size: 24px;
            font-weight: 700;
            color: #111827;
            margin: 0;
        }

        .popup-close {
            width: 32px;
            height: 32px;
            border: none;
            background: #F3F4F6;
            border-radius: 8px;
            color: #6B7280;
            font-size: 18px;
            cursor: pointer;
            transition: all 0.2s;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .popup-close:hover {
            background: #E5E7EB;
            color: #111827;
        }

        .popup-body {
            padding: 24px;
        }

        .popup-description {
            color: #6B7280;
            font-size: 14px;
            margin-bottom: 24px;
            line-height: 1.6;
        }

        .popup-input-group {
            margin-bottom: 24px;
        }

        .popup-label {
            display: block;
            font-size: 14px;
            font-weight: 600;
            color: #374151;
            margin-bottom: 8px;
        }

        .popup-input {
            width: 100%;
            padding: 12px 16px;
            background: #F9FAFB;
            border: 2px solid #E5E7EB;
            border-radius: 10px;
            font-size: 16px;
            color: #111827;
            transition: all 0.3s;
        }

        .popup-input:focus {
            outline: none;
            border-color: #6366f1;
            background: white;
            box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
        }

        /* IMPROVED Toggle Button Styles - PROFESSIONAL SLIDER */
        .popup-toggle-group {
            margin-bottom: 24px;
            padding: 24px;
            background: linear-gradient(135deg, #FAFBFC 0%, #F9FAFB 100%);
            border-radius: 16px;
            border: 1px solid #E5E7EB;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.02);
        }

        .toggle-container {
            display: flex;
            align-items: center;
            cursor: pointer;
            user-select: none;
            position: relative;
        }

        .toggle-checkbox {
            display: none;
        }

        .toggle-slider {
            position: relative;
            width: 64px;
            height: 32px;
            background: linear-gradient(135deg, #E5E7EB 0%, #D1D5DB 100%);
            border-radius: 100px;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            margin-right: 16px;
            box-shadow: 
                inset 0 2px 4px rgba(0, 0, 0, 0.06),
                inset 0 1px 2px rgba(0, 0, 0, 0.08);
            border: 1px solid rgba(0, 0, 0, 0.05);
        }

        .toggle-slider::before {
            content: 'OFF';
            position: absolute;
            left: 8px;
            top: 50%;
            transform: translateY(-50%);
            font-size: 9px;
            font-weight: 700;
            color: #9CA3AF;
            letter-spacing: 0.5px;
            transition: opacity 0.3s;
            opacity: 1;
        }

        .toggle-slider::after {
            content: '';
            position: absolute;
            width: 26px;
            height: 26px;
            left: 3px;
            top: 3px;
            background: linear-gradient(135deg, #FFFFFF 0%, #F9FAFB 100%);
            border-radius: 50%;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            box-shadow: 
                0 2px 4px rgba(0, 0, 0, 0.1),
                0 1px 2px rgba(0, 0, 0, 0.06);
            border: 1px solid rgba(0, 0, 0, 0.04);
        }

        .toggle-checkbox:checked + .toggle-slider {
            background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
            box-shadow: 
                inset 0 2px 4px rgba(99, 102, 241, 0.2),
                inset 0 1px 2px rgba(99, 102, 241, 0.15),
                0 0 20px rgba(99, 102, 241, 0.2);
            border-color: rgba(99, 102, 241, 0.3);
        }

        .toggle-checkbox:checked + .toggle-slider::before {
            content: 'ON';
            left: auto;
            right: 8px;
            color: rgba(255, 255, 255, 0.9);
            opacity: 1;
        }

        .toggle-checkbox:checked + .toggle-slider::after {
            transform: translateX(32px);
            background: linear-gradient(135deg, #FFFFFF 0%, #F9F5FF 100%);
            box-shadow: 
                0 3px 8px rgba(99, 102, 241, 0.3),
                0 1px 3px rgba(99, 102, 241, 0.2);
        }

        .toggle-container:hover .toggle-slider {
            box-shadow: 
                inset 0 2px 4px rgba(0, 0, 0, 0.08),
                inset 0 1px 2px rgba(0, 0, 0, 0.1),
                0 0 0 3px rgba(99, 102, 241, 0.05);
        }

        .toggle-checkbox:checked + .toggle-slider:hover {
            box-shadow: 
                inset 0 2px 4px rgba(99, 102, 241, 0.25),
                inset 0 1px 2px rgba(99, 102, 241, 0.2),
                0 0 25px rgba(99, 102, 241, 0.3),
                0 0 0 3px rgba(99, 102, 241, 0.1);
        }

        .toggle-label {
            font-size: 15px;
            font-weight: 600;
            color: #1E293B;
            letter-spacing: -0.2px;
        }

        .toggle-description {
            margin-top: 10px;
            margin-left: 80px;
            font-size: 13px;
            color: #6B7280;
            line-height: 1.5;
        }

        .popup-buttons {
            display: flex;
            gap: 12px;
            justify-content: flex-end;
        }

        .popup-btn-cancel {
            padding: 12px 24px;
            background: #F3F4F6;
            border: none;
            border-radius: 10px;
            color: #374151;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.2s;
        }

        .popup-btn-cancel:hover {
            background: #E5E7EB;
        }

        .popup-btn-confirm {
            padding: 12px 24px;
            background: linear-gradient(135deg, #6366f1, #8b5cf6);
            border: none;
            border-radius: 10px;
            color: white;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.2s;
            box-shadow: 0 4px 12px rgba(99, 102, 241, 0.25);
        }

        .popup-btn-confirm:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 20px rgba(99, 102, 241, 0.35);
        }

        /* High Risk Warning Styles */
        .high-risk-warning {
            background: linear-gradient(145deg, #FEF2F2, #FEE2E2);
            border: 2px solid #EF4444;
            border-radius: 16px;
            padding: 24px;
            margin-bottom: 24px;
            text-align: center;
        }

        /* Sentiment High Risk Warning Styles */
        .sentiment-high-risk-warning {
            background: linear-gradient(145deg, #FEF2F2, #FEE2E2);
            border: 2px solid #EF4444;
            border-radius: 16px;
            padding: 24px;
            margin-top: 24px;
            text-align: center;
        }

        .warning-icon {
            font-size: 48px;
            margin-bottom: 16px;
            animation: warningPulse 2s ease-in-out infinite;
        }

        @keyframes warningPulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.1); }
        }

        .warning-title {
            font-size: 20px;
            font-weight: 700;
            color: #DC2626;
            margin-bottom: 12px;
            text-transform: uppercase;
            letter-spacing: 1px;
        }

        .warning-text {
            font-size: 15px;
            color: #7F1D1D;
            margin-bottom: 20px;
            line-height: 1.6;
        }

        .show-levels-btn {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 12px 24px;
            background: rgba(255, 255, 255, 0.8);
            border: 1px solid #EF4444;
            border-radius: 10px;
            color: #DC2626;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s;
        }

        .show-levels-btn:hover {
            background: white;
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(239, 68, 68, 0.2);
        }

        /* Trading Levels in Sentiment Card - UPDATED WITH COLORS */
        .sentiment-trading-levels {
            margin-top: 24px;
            padding-top: 24px;
            border-top: 1px solid rgba(0, 0, 0, 0.1);
        }

        .trading-level-row {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 16px;
        }

        .trading-level-item {
            text-align: center;
            padding: 12px;
            background: rgba(255, 255, 255, 0.5);
            border-radius: 12px;
            border: 1px solid rgba(0, 0, 0, 0.05);
        }

        .level-label {
            display: block;
            font-size: 11px;
            font-weight: 600;
            color: #64748B;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-bottom: 4px;
        }

        .level-label-stop {
            color: #EF4444 !important;
        }

        .level-label-profit {
            color: #10B981 !important;
        }

        .level-value {
            display: block;
            font-size: 16px;
            font-weight: 700;
            color: #1E293B;
        }

        .level-value-stop {
            color: #EF4444 !important;
        }

        .level-value-profit {
            color: #10B981 !important;
        }

        /* Quick Stats Color Classes */
        .stat-green {
            color: #10B981 !important;
        }

        .stat-red {
            color: #EF4444 !important;
        }

        .stat-yellow {
            color: #F59E0B !important;
        }

        .stat-orange {
            color: #F97316 !important;
        }

        .upload-section {
            position: relative;
            z-index: 10;
            max-width: 1400px;
            margin: 0 auto;
        }

        .upload-header {
            text-align: center;
            margin-bottom: 60px;
            animation: fadeInDown 0.8s ease-out;
        }

        @keyframes fadeInDown {
            from {
                opacity: 0;
                transform: translateY(-30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .header-badge {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 8px 20px;
            background: linear-gradient(145deg, #F3F4F6, #E5E7EB);
            border: 1px solid #E5E7EB;
            border-radius: 100px;
            margin-bottom: 40px;
            animation: badgePulse 3s ease-in-out infinite;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
        }

        @keyframes badgePulse {
            0%, 100% { 
                transform: scale(1); 
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
            }
            50% { 
                transform: scale(1.02); 
                box-shadow: 0 6px 20px rgba(99, 102, 241, 0.15);
            }
        }

        .badge-dot {
            width: 6px;
            height: 6px;
            background: #10B981;
            border-radius: 50%;
            animation: pulse 2s ease-in-out infinite;
            box-shadow: 0 0 10px rgba(16, 185, 129, 0.5);
        }

        @keyframes pulse {
            0%, 100% { 
                opacity: 1; 
                transform: scale(1); 
                box-shadow: 0 0 10px rgba(16, 185, 129, 0.5);
            }
            50% { 
                opacity: 0.5; 
                transform: scale(1.5); 
                box-shadow: 0 0 20px rgba(16, 185, 129, 0.8);
            }
        }

        .badge-text {
            font-size: 12px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 1.2px;
            background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 25%, #ec4899 50%, #6366f1 75%, #8b5cf6 100%);
            background-size: 200% 200%;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            animation: gradientShift 5s ease infinite;
        }

        .upload-title {
            font-size: 48px;
            font-weight: 900;
            color: #111827;
            margin-bottom: 28px;
            letter-spacing: -1.5px;
            line-height: 1.1;
        }

        .gradient-text-primary {
            background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 25%, #ec4899 50%, #6366f1 75%, #8b5cf6 100%);
            background-size: 200% 200%;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            animation: gradientShift 5s ease infinite;
        }

        @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }

        .upload-subtitle {
            font-size: 20px;
            color: #6B7280;
            font-weight: 400;
            opacity: 0;
            animation: fadeInUp 0.8s ease-out 0.3s forwards;
            margin-bottom: 8px;
        }

        .upload-box {
            background: linear-gradient(145deg, #FFFFFF, #FAFAFA);
            border: 2px solid #E5E7EB;
            border-radius: 24px;
            padding: 40px;
            text-align: center;
            position: relative;
            overflow: hidden;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
            cursor: pointer;
            animation: fadeInUp 0.8s ease-out;
        }

        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .upload-box::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: linear-gradient(45deg, transparent, rgba(99, 102, 241, 0.1), transparent);
            transform: rotate(45deg);
            transition: all 0.6s;
            opacity: 0;
        }

        .upload-box:hover::before {
            animation: shimmer 0.6s ease;
        }

        @keyframes shimmer {
            0% {
                transform: translateX(-100%) translateY(-100%) rotate(45deg);
                opacity: 0;
            }
            50% {
                opacity: 1;
            }
            100% {
                transform: translateX(100%) translateY(100%) rotate(45deg);
                opacity: 0;
            }
        }

        .upload-box:hover {
            border-color: #6366f1;
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 0 50px rgba(99, 102, 241, 0.1);
            transform: translateY(-5px) scale(1.01);
            background: linear-gradient(145deg, #FFFFFF, #F9F5FF);
        }

        .upload-box.drag-active {
            background: linear-gradient(135deg, rgba(99, 102, 241, 0.05) 0%, rgba(139, 92, 246, 0.05) 100%);
            border-color: #6366f1;
            border-style: dashed;
            animation: dragActive 0.5s ease;
        }

        @keyframes dragActive {
            0% { transform: scale(1); }
            50% { transform: scale(1.02); }
            100% { transform: scale(1); }
        }

        .upload-icon-container {
            width: 120px;
            height: 120px;
            margin: 0 auto 32px;
            position: relative;
        }

        .upload-icon-wrapper {
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(139, 92, 246, 0.05) 100%);
            border-radius: 24px;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            animation: iconFloat 3s ease-in-out infinite;
            box-shadow: 0 10px 30px rgba(99, 102, 241, 0.15);
        }

        @keyframes iconFloat {
            0%, 100% { 
                transform: translateY(0) rotate(0deg); 
                box-shadow: 0 10px 30px rgba(99, 102, 241, 0.15);
            }
            50% { 
                transform: translateY(-10px) rotate(5deg); 
                box-shadow: 0 20px 40px rgba(99, 102, 241, 0.25);
            }
        }

        .upload-icon {
            font-size: 48px;
            animation: iconRotate 8s linear infinite;
        }

        @keyframes iconRotate {
            0% { transform: rotate(0deg) scale(1); }
            25% { transform: rotate(5deg) scale(1.05); }
            50% { transform: rotate(0deg) scale(1); }
            75% { transform: rotate(-5deg) scale(1.05); }
            100% { transform: rotate(0deg) scale(1); }
        }

        .icon-ring {
            position: absolute;
            inset: -20px;
            border: 2px solid #6366f1;
            border-radius: 50%;
            opacity: 0.2;
            animation: ringPulse 3s ease-in-out infinite;
        }

        .icon-ring::after {
            content: '';
            position: absolute;
            inset: -10px;
            border: 1px solid #8b5cf6;
            border-radius: 50%;
            opacity: 0.1;
            animation: ringPulse 3s ease-in-out infinite 0.5s;
        }

        @keyframes ringPulse {
            0%, 100% { 
                transform: scale(0.8); 
                opacity: 0; 
            }
            50% { 
                transform: scale(1.2); 
                opacity: 0.3; 
            }
        }

        .upload-content h3 {
            font-size: 24px;
            font-weight: 700;
            color: #111827;
            margin-bottom: 12px;
            letter-spacing: -0.5px;
        }

        .upload-content p {
            font-size: 16px;
            color: #6B7280;
            margin-bottom: 32px;
            font-weight: 400;
        }

        .upload-btn {
            display: inline-flex;
            align-items: center;
            gap: 12px;
            padding: 16px 32px;
            background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%);
            color: white;
            border: none;
            border-radius: 12px;
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            box-shadow: 0 4px 20px rgba(99, 102, 241, 0.25);
            position: relative;
            overflow: hidden;
        }

        .upload-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 30px rgba(99, 102, 241, 0.35);
            background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%);
        }

        .upload-btn span {
            position: relative;
            color: white;
        }

        .file-formats {
            margin-top: 40px;
            padding-top: 40px;
            border-top: 1px solid #E5E7EB;
        }

        .format-pills {
            display: flex;
            justify-content: center;
            gap: 12px;
            margin-bottom: 12px;
        }

        .format-pill {
            padding: 6px 16px;
            background: linear-gradient(145deg, #F3F4F6, #E5E7EB);
            border: 1px solid #E5E7EB;
            border-radius: 100px;
            font-size: 14px;
            font-weight: 600;
            color: #4B5563;
            transition: all 0.3s ease;
        }

        .format-pill:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            background: linear-gradient(145deg, #6366f1, #8b5cf6);
            color: white;
            border-color: transparent;
        }

        .file-size-info {
            font-size: 14px;
            color: #9CA3AF;
            font-weight: 400;
        }

        /* Preview Section */
        .preview-section {
            animation: fadeIn 0.5s ease-out;
        }

        @keyframes fadeIn {
            from { opacity: 0; transform: scale(0.95); }
            to { opacity: 1; transform: scale(1); }
        }

        .preview-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 32px;
            padding: 20px;
            background: linear-gradient(145deg, #FFFFFF, #F9FAFB);
            border-radius: 16px;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
            animation: slideInFromTop 0.6s ease-out;
        }

        @keyframes slideInFromTop {
            from {
                opacity: 0;
                transform: translateY(-20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .preview-title {
            font-size: 24px;
            font-weight: 700;
            color: #111827;
            letter-spacing: -0.5px;
        }

        .change-btn {
            display: flex;
            align-items: center;
            gap: 8px;
            padding: 10px 20px;
            background: linear-gradient(145deg, #F3F4F6, #E5E7EB);
            border: 1px solid #E5E7EB;
            border-radius: 10px;
            color: #374151;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            position: relative;
            overflow: hidden;
        }

        .change-btn:hover {
            background: linear-gradient(145deg, #E5E7EB, #D1D5DB);
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            color: #374151;
        }

        .chart-display {
            background: linear-gradient(145deg, #FFFFFF, #F9FAFB);
            border-radius: 16px;
            padding: 20px;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
            margin-bottom: 40px;
            animation: fadeInScale 0.6s ease-out 0.2s both;
        }

        @keyframes fadeInScale {
            from {
                opacity: 0;
                transform: scale(0.9);
            }
            to {
                opacity: 1;
                transform: scale(1);
            }
        }

        .chart-image {
            width: 100%;
            max-height: 400px;
            object-fit: contain;
            border-radius: 12px;
        }

        /* Settings Section */
        .settings-section {
            background: linear-gradient(145deg, #FFFFFF, #FAFAFA);
            border-radius: 16px;
            padding: 40px;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
            max-width: 100%;
            animation: fadeInUp 0.6s ease-out 0.3s both;
        }

        .settings-title {
            font-size: 32px;
            font-weight: 800;
            text-align: center;
            margin-bottom: 40px;
            background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 25%, #ec4899 50%, #6366f1 75%, #8b5cf6 100%);
            background-size: 200% 200%;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            animation: gradientShift 5s ease infinite;
            letter-spacing: -1px;
        }

        .settings-subtitle {
            text-align: center;
            color: #6B7280;
            font-size: 16px;
            margin-bottom: 40px;
            margin-top: -24px;
            font-weight: 400;
        }

        /* Mode Cards */
        .mode-cards-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 24px;
            margin-bottom: 40px;
        }

        @media (max-width: 1200px) {
            .mode-cards-grid {
                grid-template-columns: repeat(2, 1fr);
            }
        }

        @media (max-width: 768px) {
            .mode-cards-grid {
                grid-template-columns: 1fr;
            }
        }

        .mode-card {
            background: linear-gradient(145deg, #FFFFFF 0%, #fafafa 100%);
            border: 2px solid #E5E7EB;
            border-radius: 20px;
            padding: 0;
            cursor: pointer;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            position: relative;
            overflow: hidden;
            min-height: 480px;
            display: flex;
            flex-direction: column;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
            width: 100%;
            animation: cardEntrance 0.6s ease-out both;
        }

        .mode-card:nth-child(1) {
            animation-delay: 0.1s;
        }

        .mode-card:nth-child(2) {
            animation-delay: 0.2s;
        }

        .mode-card:nth-child(3) {
            animation-delay: 0.3s;
        }

        @keyframes cardEntrance {
            from {
                opacity: 0;
                transform: translateY(30px) scale(0.95);
            }
            to {
                opacity: 1;
                transform: translateY(0) scale(1);
            }
        }

        .mode-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 4px;
            background: linear-gradient(90deg, transparent, #6366f1, transparent);
            transform: translateX(-100%);
            transition: transform 0.6s;
        }

        .mode-card:hover::before {
            transform: translateX(100%);
        }

        .mode-card:hover {
            transform: translateY(-8px) scale(1.02);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }

        .mode-card.selected {
            transform: translateY(-4px) scale(1.01);
            background: linear-gradient(145deg, #F9F5FF 0%, #FFF7ED 100%);
        }

        .mode-card:nth-child(1):hover,
        .mode-card:nth-child(1).selected {
            border-color: #6366f1;
            box-shadow: 0 20px 40px rgba(99, 102, 241, 0.2);
        }

        .mode-card:nth-child(2):hover,
        .mode-card:nth-child(2).selected {
            border-color: #f59e0b;
            box-shadow: 0 20px 40px rgba(245, 158, 11, 0.2);
        }

        .mode-card:nth-child(3):hover,
        .mode-card:nth-child(3).selected {
            border-color: #ec4899;
            box-shadow: 0 20px 40px rgba(236, 72, 153, 0.2);
        }

        .mode-card-header {
            padding: 40px 24px 20px;
            background: linear-gradient(180deg, rgba(249, 250, 251, 0.8) 0%, transparent 100%);
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .mode-badge {
            position: absolute;
            top: 12px;
            left: 50%;
            transform: translateX(-50%);
            padding: 8px 16px;
            border-radius: 100px;
            font-size: 11px;
            font-weight: 800;
            text-transform: uppercase;
            letter-spacing: 1px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 5px;
            white-space: nowrap;
            z-index: 10;
            animation: badgeGlow 2s ease-in-out infinite;
        }

        @keyframes badgeGlow {
            0%, 100% { 
                transform: translateX(-50%) scale(1); 
                filter: brightness(1);
            }
            50% { 
                transform: translateX(-50%) scale(1.05); 
                filter: brightness(1.1);
            }
        }

        .mode-badge.beginner {
            background: linear-gradient(135deg, #6366f1 0%, #818cf8 100%);
            color: white;
            box-shadow: 0 4px 12px rgba(99, 102, 241, 0.3);
        }

        .mode-badge.popular {
            background: linear-gradient(135deg, #f59e0b 0%, #f97316 100%);
            color: white;
            box-shadow: 0 4px 12px rgba(245, 158, 11, 0.35);
        }

        .mode-badge.premium {
            background: linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%);
            color: white;
            box-shadow: 0 4px 12px rgba(139, 92, 246, 0.35);
        }

        .mode-icon-container {
            width: 80px;
            height: 80px;
            margin: 28px auto 0;
            position: relative;
        }

        .mode-icon {
            width: 100%;
            height: 100%;
            border-radius: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 36px;
            position: relative;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            animation: iconBounce 3s ease-in-out infinite;
        }

        @keyframes iconBounce {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            25% { transform: translateY(-5px) rotate(-5deg); }
            75% { transform: translateY(-5px) rotate(5deg); }
        }

        .mode-card:hover .mode-icon {
            transform: scale(1.1) rotate(360deg);
        }

        .mode-card:nth-child(1) .mode-icon {
            background: linear-gradient(145deg, rgba(99, 102, 241, 0.1) 0%, rgba(99, 102, 241, 0.05) 100%);
        }

        .mode-card:nth-child(2) .mode-icon {
            background: linear-gradient(145deg, rgba(245, 158, 11, 0.1) 0%, rgba(245, 158, 11, 0.05) 100%);
        }

        .mode-card:nth-child(3) .mode-icon {
            background: linear-gradient(145deg, rgba(236, 72, 153, 0.1) 0%, rgba(236, 72, 153, 0.05) 100%);
        }

        .mode-card-body {
            padding: 20px 24px 24px;
            flex: 1;
            display: flex;
            flex-direction: column;
        }

        .mode-name {
            font-size: 24px;
            font-weight: 700;
            color: #111827;
            margin-bottom: 10px;
            letter-spacing: -0.5px;
        }

        .mode-description {
            font-size: 15px;
            color: #4B5563;
            line-height: 1.6;
            margin-bottom: 24px;
            font-weight: 400;
        }

        .mode-features {
            display: flex;
            flex-direction: column;
            gap: 12px;
            flex: 1;
        }

        .feature {
            display: flex;
            align-items: center;
            padding: 10px 12px;
            background: linear-gradient(145deg, #F9FAFB, #F3F4F6);
            border-radius: 10px;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            font-size: 14px;
            color: #374151;
            font-weight: 500;
            position: relative;
            overflow: hidden;
        }

        .feature::before {
            content: "•";
            font-weight: bold;
            margin-right: 8px;
            font-size: 20px;
            animation: featurePulse 2s ease-in-out infinite;
        }

        @keyframes featurePulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.2); }
        }

        .feature:hover {
            transform: translateX(5px);
            background: linear-gradient(145deg, #FFFFFF, #F9FAFB);
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
        }

        .mode-card:nth-child(1) .feature::before {
            color: #6366f1;
        }

        .mode-card:nth-child(2) .feature::before {
            color: #f59e0b;
        }

        .mode-card:nth-child(3) .feature::before {
            color: #ec4899;
        }

        .mode-card-footer {
            padding: 20px 24px;
            background: linear-gradient(180deg, transparent 0%, rgba(249, 250, 251, 0.8) 100%);
            border-top: 1px solid #F3F4F6;
        }

        .select-mode-btn {
            width: 100%;
            padding: 16px 24px;
            border: none;
            border-radius: 12px;
            font-size: 16px;
            font-weight: 600;
            color: white !important;
            cursor: pointer;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            position: relative;
            overflow: hidden;
            min-height: 54px;
        }

        .select-mode-btn span {
            color: white !important;
        }

        .mode-card:nth-child(1) .select-mode-btn {
            background: linear-gradient(135deg, #6366f1 0%, #818cf8 100%);
        }

        .mode-card:nth-child(2) .select-mode-btn {
            background: linear-gradient(135deg, #f59e0b 0%, #f97316 100%);
        }

        .mode-card:nth-child(3) .select-mode-btn {
            background: linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%);
        }

        .select-mode-btn:hover {
            transform: translateY(-2px);
        }

        .mode-card:nth-child(1) .select-mode-btn:hover {
            box-shadow: 0 8px 20px rgba(99, 102, 241, 0.3);
            background: linear-gradient(135deg, #6366f1 0%, #818cf8 100%);
        }

        .mode-card:nth-child(2) .select-mode-btn:hover {
            box-shadow: 0 8px 20px rgba(245, 158, 11, 0.3);
            background: linear-gradient(135deg, #f59e0b 0%, #f97316 100%);
        }

        .mode-card:nth-child(3) .select-mode-btn:hover {
            box-shadow: 0 8px 20px rgba(236, 72, 153, 0.3);
            background: linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%);
        }

        .mode-card.selected .select-mode-btn {
            opacity: 0.9;
        }

        /* Additional Settings */
        .additional-settings {
            background: linear-gradient(145deg, #F9FAFB, #F3F4F6);
            border-radius: 16px;
            padding: 32px;
            margin-bottom: 40px;
            animation: fadeInUp 0.6s ease-out 0.4s both;
        }

        .settings-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 24px;
        }

        .setting-group {
            display: flex;
            flex-direction: column;
        }

        .setting-label {
            font-size: 14px;
            font-weight: 600;
            color: #374151;
            margin-bottom: 8px;
            letter-spacing: 0.2px;
        }

        .setting-input,
        .setting-select,
        .setting-textarea {
            padding: 12px 16px;
            background: #FFFFFF;
            border: 1px solid #D1D5DB;
            border-radius: 10px;
            font-size: 15px;
            color: #111827;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            font-family: 'Inter', sans-serif;
            font-weight: 400;
        }

        .setting-input:focus,
        .setting-select:focus,
        .setting-textarea:focus {
            outline: none;
            border-color: #6366f1;
            box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
        }

        .setting-textarea {
            resize: vertical;
            min-height: 100px;
            font-family: 'Inter', sans-serif;
        }

        /* Style for optgroup labels - NEW STYLES FOR COLORED DROPDOWN */
        optgroup {
            font-weight: 700;
            color: #111827;
            font-size: 14px;
        }

        optgroup.strategy-optgroup-simple {
            color: #6366f1;
        }

        optgroup.strategy-optgroup-scalping {
            color: #f59e0b;
        }

        optgroup.strategy-optgroup-professional {
            color: #ec4899;
        }

        option {
            font-weight: 400;
            padding: 8px;
        }

        option.strategy-option-simple {
            color: #6366f1 !important;
            background-color: rgba(99, 102, 241, 0.05);
        }

        option.strategy-option-scalping {
            color: #f59e0b !important;
            background-color: rgba(245, 158, 11, 0.05);
        }

        option.strategy-option-professional {
            color: #ec4899 !important;
            background-color: rgba(236, 72, 153, 0.05);
        }

        option.strategy-option-simple:hover {
            background-color: rgba(99, 102, 241, 0.1) !important;
        }

        option.strategy-option-scalping:hover {
            background-color: rgba(245, 158, 11, 0.1) !important;
        }

        option.strategy-option-professional:hover {
            background-color: rgba(236, 72, 153, 0.1) !important;
        }

        /* Analyze Button */
        .analyze-btn {
            width: 100%;
            padding: 20px;
            background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%);
            color: white;
            border: none;
            border-radius: 12px;
            font-size: 18px;
            font-weight: 700;
            cursor: pointer;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            box-shadow: 0 4px 20px rgba(99, 102, 241, 0.25);
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 12px;
            position: relative;
            overflow: hidden;
            animation: analyzeButtonPulse 2s ease-in-out infinite;
        }

        .analyze-btn span {
            color: white;
        }

        @keyframes analyzeButtonPulse {
            0%, 100% { 
                box-shadow: 0 4px 20px rgba(99, 102, 241, 0.25);
            }
            50% { 
                box-shadow: 0 8px 30px rgba(99, 102, 241, 0.4);
            }
        }

        .analyze-btn:not(.ready) {
            opacity: 0.5;
            cursor: not-allowed;
            animation: none;
        }

        .analyze-btn.ready:hover {
            transform: translateY(-2px) scale(1.02);
            box-shadow: 0 12px 40px rgba(99, 102, 241, 0.5);
            background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%);
        }

        /* Progress Section */
        .progress-section {
            text-align: center;
            padding: 40px 20px 100px 20px;
        }

        .progress-container {
            max-width: 600px;
            margin: 0 auto;
            background: linear-gradient(145deg, #FFFFFF, #F9FAFB);
            border-radius: 24px;
            padding: 40px;
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
            animation: progressFadeIn 0.6s ease-out;
        }

        @keyframes progressFadeIn {
            from {
                opacity: 0;
                transform: scale(0.9) translateY(20px);
            }
            to {
                opacity: 1;
                transform: scale(1) translateY(0);
            }
        }

        .ai-animation {
            width: 120px;
            height: 120px;
            margin: 0 auto 40px;
        }

        .ai-brain {
            width: 120px;
            height: 120px;
            background: linear-gradient(135deg, #6366f1, #8b5cf6, #ec4899);
            border-radius: 50%;
            position: relative;
            animation: brainPulse 2s ease-in-out infinite;
            box-shadow: 0 0 40px rgba(99, 102, 241, 0.4);
        }

        @keyframes brainPulse {
            0%, 100% { 
                transform: scale(1) rotate(0deg); 
                box-shadow: 0 0 40px rgba(99, 102, 241, 0.4);
            }
            25% { 
                transform: scale(1.1) rotate(5deg); 
                box-shadow: 0 0 60px rgba(139, 92, 246, 0.5);
            }
            50% { 
                transform: scale(1.15) rotate(-5deg); 
                box-shadow: 0 0 80px rgba(236, 72, 153, 0.6);
            }
            75% { 
                transform: scale(1.1) rotate(5deg); 
                box-shadow: 0 0 60px rgba(139, 92, 246, 0.5);
            }
        }

        .progress-title {
            font-size: 28px;
            font-weight: 700;
            color: #111827;
            margin-bottom: 16px;
            letter-spacing: -0.5px;
        }

        .progress-status {
            font-size: 16px;
            color: #6B7280;
            margin-bottom: 32px;
            font-weight: 400;
            animation: statusFade 2s ease-in-out infinite;
        }

        @keyframes statusFade {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.6; }
        }

        /* Analysis Steps */
        .analysis-steps {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
            margin-bottom: 32px;
        }

        .analysis-step {
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 16px;
            background: linear-gradient(145deg, #F9FAFB, #F3F4F6);
            border-radius: 12px;
            border: 2px solid transparent;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            opacity: 0.3;
        }

        .analysis-step.active {
            opacity: 1;
            border-color: #6366f1;
            background: linear-gradient(145deg, #FFFFFF, #F9F5FF);
            transform: scale(1.05);
            box-shadow: 0 4px 12px rgba(99, 102, 241, 0.2);
        }

        .analysis-step.completed {
            opacity: 0.7;
            border-color: #10B981;
            background: linear-gradient(145deg, #F0FDF4, #DCFCE7);
        }

        .step-icon {
            font-size: 24px;
            animation: stepIconPulse 1.5s ease-in-out infinite;
        }

        .analysis-step.active .step-icon {
            animation: stepIconSpin 1s linear infinite;
        }

        @keyframes stepIconPulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.1); }
        }

        @keyframes stepIconSpin {
            0% { transform: rotate(0deg) scale(1); }
            50% { transform: rotate(180deg) scale(1.1); }
            100% { transform: rotate(360deg) scale(1); }
        }

        .step-text {
            font-size: 14px;
            font-weight: 600;
            color: #4B5563;
            letter-spacing: 0.2px;
        }

        .analysis-step.active .step-text {
            color: #6366f1;
        }

        .analysis-step.completed .step-text {
            color: #10B981;
        }

        .progress-bar {
            width: 100%;
            height: 8px;
            background: #E5E7EB;
            border-radius: 4px;
            overflow: hidden;
            margin-bottom: 16px;
            box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.06);
        }

        .progress-fill {
            height: 100%;
            background: linear-gradient(90deg, #6366f1, #8b5cf6, #ec4899);
            background-size: 200% 100%;
            border-radius: 4px;
            transition: width 0.5s ease;
            width: 0%;
            animation: progressGradient 2s linear infinite;
        }

        @keyframes progressGradient {
            0% { background-position: 0% 50%; }
            100% { background-position: 200% 50%; }
        }

        .progress-percentage {
            font-size: 18px;
            font-weight: 700;
            color: #6366f1;
        }

        /* Results Section */
        .results-section {
            min-height: 100vh;
            background: linear-gradient(180deg, #FAFBFC 0%, #F3F4F6 100%);
            padding: 0;
            animation: resultsFadeIn 0.6s ease-out;
        }

        @keyframes resultsFadeIn {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        /* Results Hero */
        .results-hero {
            background: linear-gradient(180deg, #FFFFFF 0%, #F9FAFB 100%);
            padding: 60px 40px;
            position: relative;
            overflow: hidden;
            border-bottom: 1px solid #E5E7EB;
        }

        .results-hero::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: radial-gradient(circle at 20% 50%, rgba(99, 102, 241, 0.05) 0%, transparent 50%),
                        radial-gradient(circle at 80% 80%, rgba(139, 92, 246, 0.05) 0%, transparent 50%);
            pointer-events: none;
        }

        .results-hero-content {
            max-width: 1400px;
            margin: 0 auto;
            position: relative;
            z-index: 1;
        }

        .results-status {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 8px 16px;
            background: linear-gradient(145deg, #F0FDF4, #DCFCE7);
            border: 1px solid #10B981;
            border-radius: 100px;
            margin-bottom: 24px;
        }

        .status-dot {
            width: 8px;
            height: 8px;
            background: #10B981;
            border-radius: 50%;
            animation: pulse 2s ease-in-out infinite;
        }

        .status-text {
            font-size: 12px;
            font-weight: 600;
            color: #10B981;
            text-transform: uppercase;
            letter-spacing: 1px;
        }

        .results-main-title {
            font-size: 48px;
            font-weight: 800;
            color: #111827;
            margin-bottom: 16px;
            letter-spacing: -1px;
            background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 25%, #ec4899 50%, #6366f1 75%, #8b5cf6 100%);
            background-size: 200% 200%;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            animation: gradientShift 5s ease infinite;
        }

        .results-subtitle {
            font-size: 18px;
            color: #6B7280;
            margin-bottom: 32px;
        }

        .results-actions {
            display: flex;
            gap: 16px;
            flex-wrap: wrap;
        }

        .action-btn {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 14px 28px;
            border-radius: 12px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            border: none;
            font-size: 15px;
        }

        .save-btn {
            background: linear-gradient(135deg, #6366f1, #8b5cf6);
            color: white;
            box-shadow: 0 4px 16px rgba(99, 102, 241, 0.25);
        }

        .save-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 24px rgba(99, 102, 241, 0.35);
        }

        .new-btn {
            background: linear-gradient(145deg, #F3F4F6, #E5E7EB);
            color: #374151;
            border: 1px solid #E5E7EB;
        }

        .new-btn:hover {
            background: linear-gradient(145deg, #E5E7EB, #D1D5DB);
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        /* Results Container */
        .results-container {
            max-width: 1400px;
            margin: -40px auto 0;
            padding: 0 40px 60px;
            position: relative;
            z-index: 2;
        }

        /* Chart Preview Card */
        .chart-preview-card {
            background: white;
            border-radius: 20px;
            overflow: hidden;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
            margin-bottom: 32px;
            animation: slideUp 0.6s ease-out;
        }

        @keyframes slideUp {
            from {
                opacity: 0;
                transform: translateY(40px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .chart-preview-header {
            padding: 24px 32px;
            border-bottom: 1px solid #E5E7EB;
            background: linear-gradient(180deg, #FAFBFC 0%, #FFFFFF 100%);
        }

        .chart-preview-title {
            font-size: 18px;
            font-weight: 700;
            color: #1E293B;
            display: flex;
            align-items: center;
            gap: 12px;
        }

        .chart-preview-body {
            padding: 24px;
            background: #FAFBFC;
        }

        .chart-preview-image {
            width: 100%;
            max-height: 500px;
            object-fit: contain;
            border-radius: 12px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
        }

        /* Analysis Grid */
        .analysis-grid {
            display: grid;
            grid-template-columns: 2fr 1fr;
            gap: 32px;
            margin-bottom: 32px;
        }

        @media (max-width: 1024px) {
            .analysis-grid {
                grid-template-columns: 1fr;
            }
        }

        /* Main Analysis Card */
        .main-analysis-card {
            background: white;
            border-radius: 20px;
            overflow: hidden;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
            animation: slideUp 0.6s ease-out 0.1s both;
        }

        .analysis-tabs {
            display: flex;
            background: linear-gradient(180deg, #FAFBFC 0%, #F9FAFB 100%);
            border-bottom: 1px solid #E5E7EB;
        }

        .analysis-tab {
            flex: 1;
            padding: 20px;
            background: none;
            border: none;
            font-size: 14px;
            font-weight: 600;
            color: #64748B;
            cursor: pointer;
            transition: all 0.3s ease;
            position: relative;
        }

        .analysis-tab.active {
            color: #6366f1;
            background: white;
        }

        .analysis-tab.active::after {
            content: '';
            position: absolute;
            bottom: -1px;
            left: 0;
            right: 0;
            height: 3px;
            background: linear-gradient(90deg, #6366f1, #8b5cf6);
        }

        .analysis-content {
            padding: 32px;
        }

        .analysis-section {
            margin-bottom: 32px;
        }

        .analysis-section:last-child {
            margin-bottom: 0;
        }

        .section-title {
            font-size: 16px;
            font-weight: 700;
            color: #1E293B;
            margin-bottom: 16px;
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .section-content {
            font-size: 15px;
            line-height: 1.8;
            color: #475569;
        }

        /* Side Cards */
        .side-cards {
            display: flex;
            flex-direction: column;
            gap: 24px;
        }

        /* Sentiment Score Card - UPDATED WITH NEUTRAL STYLES */
        .sentiment-score-card {
            background: white;
            border-radius: 20px;
            padding: 40px;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
            text-align: center;
            position: relative;
            overflow: hidden;
            animation: slideUp 0.6s ease-out 0.2s both;
            max-width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .sentiment-score-card.bullish {
            background: linear-gradient(145deg, #FFFFFF 0%, #F0FDF4 100%);
            border: 2px solid rgba(16, 185, 129, 0.2);
        }

        .sentiment-score-card.bearish {
            background: linear-gradient(145deg, #FFFFFF 0%, #FEF2F2 100%);
            border: 2px solid rgba(239, 68, 68, 0.2);
        }

        .sentiment-score-card.neutral {
            background: linear-gradient(145deg, #FFFFFF 0%, #FEF9E7 100%);
            border: 2px solid rgba(245, 158, 11, 0.2);
        }

        .sentiment-label {
            font-size: 12px;
            font-weight: 700;
            color: #64748B;
            text-transform: uppercase;
            letter-spacing: 1px;
            margin-bottom: 16px;
        }

        .sentiment-score {
            font-size: 72px;
            font-weight: 900;
            margin-bottom: 8px;
            background: linear-gradient(135deg, #10B981 0%, #059669 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            line-height: 1;
        }

        .sentiment-score-card.bearish .sentiment-score {
            background: linear-gradient(135deg, #EF4444 0%, #DC2626 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .sentiment-score-card.neutral .sentiment-score {
            background: linear-gradient(135deg, #F59E0B 0%, #D97706 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .sentiment-direction {
            font-size: 18px;
            font-weight: 700;
            color: #10B981;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-bottom: 20px;
        }

        .sentiment-score-card.bearish .sentiment-direction {
            color: #EF4444;
        }

        .sentiment-score-card.neutral .sentiment-direction {
            color: #F59E0B;
        }

        .sentiment-meter {
            width: 100%;
            height: 8px;
            background: #E5E7EB;
            border-radius: 100px;
            overflow: hidden;
            margin-bottom: 24px;
        }

        .sentiment-meter-fill {
            height: 100%;
            background: linear-gradient(90deg, #10B981, #059669);
            border-radius: 100px;
            transition: width 1s ease-out;
        }

        .sentiment-score-card.bearish .sentiment-meter-fill {
            background: linear-gradient(90deg, #EF4444, #DC2626);
        }

        .sentiment-score-card.neutral .sentiment-meter-fill {
            background: linear-gradient(90deg, #F59E0B, #D97706);
        }

        .recommendation-action {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 8px 16px;
            background: rgba(99, 102, 241, 0.1);
            border-radius: 100px;
            font-size: 13px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            color: #6366f1;
        }

        /* Quick Stats Card */
        .quick-stats-card {
            background: white;
            border-radius: 20px;
            padding: 24px;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
            animation: slideUp 0.6s ease-out 0.3s both;
        }

        .quick-stats-title {
            font-size: 16px;
            font-weight: 700;
            color: #1E293B;
            margin-bottom: 20px;
        }

        .stat-row {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 12px 0;
            border-bottom: 1px solid #F1F5F9;
        }

        .stat-row:last-child {
            border-bottom: none;
        }

        .stat-label {
            font-size: 14px;
            color: #64748B;
        }

        .stat-value {
            font-size: 14px;
            font-weight: 600;
            color: #1E293B;
        }

        .stat-value.positive {
            color: #10B981;
        }

        .stat-value.negative {
            color: #EF4444;
        }

        /* Trading Recommendation Card */
        .recommendation-card {
            background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
            border-radius: 20px;
            padding: 32px;
            color: white;
            box-shadow: 0 20px 40px rgba(99, 102, 241, 0.3);
            animation: slideUp 0.6s ease-out 0.4s both;
        }

        .recommendation-header {
            display: flex;
            align-items: center;
            gap: 12px;
            margin-bottom: 24px;
        }

        .recommendation-icon {
            width: 48px;
            height: 48px;
            background: rgba(255, 255, 255, 0.2);
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 24px;
        }

        .recommendation-title {
            font-size: 20px;
            font-weight: 700;
        }

        .recommendation-action-white {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 8px 16px;
            background: rgba(255, 255, 255, 0.2);
            border-radius: 100px;
            margin-bottom: 20px;
            font-size: 14px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }

        .recommendation-details {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
        }

        .recommendation-detail {
            padding: 16px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 12px;
            border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .detail-label {
            font-size: 12px;
            opacity: 0.8;
            margin-bottom: 4px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }

        .detail-value {
            font-size: 20px;
            font-weight: 700;
        }

        /* AI Profit Strategy Section */
        .ai-profit-strategy {
            padding: 20px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 12px;
            margin-top: 20px;
            border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .ai-profit-strategy p {
            font-size: 16px;
            line-height: 1.8;
            color: white;
            font-weight: 400;
            margin: 0;
        }

        /* Responsive */
        @media (max-width: 768px) {
            .results-hero {
                padding: 40px 20px;
            }

            .results-main-title {
                font-size: 32px;
            }

            .results-container {
                padding: 0 20px 40px;
            }

            .analysis-grid {
                grid-template-columns: 1fr;
            }

            .recommendation-details {
                grid-template-columns: 1fr;
            }

            .upload-title {
                font-size: 36px;
            }
            
            .mode-cards-grid {
                grid-template-columns: 1fr;
            }
            
            .settings-grid {
                grid-template-columns: 1fr;
            }

            .trading-level-row {
                grid-template-columns: 1fr;
                gap: 12px;
            }
        }
    
    /* WICHTIGER FIX FÜR WEISSE BUTTONS - GANZ AM ENDE EINFÜGEN */

    /* Entferne alle Pseudo-Elemente AUSSER unsere benötigten */
    *::before,
    *::after {
        content: none !important;
    }

    /* Stelle nur die benötigten Pseudo-Elemente wieder her */
    .feature::before {
        content: "•" !important;
        font-weight: bold;
        margin-right: 8px;
        font-size: 20px;
    }

    .icon-ring::after {
        content: '' !important;
        position: absolute;
        inset: -10px;
        border: 1px solid #8b5cf6;
        border-radius: 50%;
        opacity: 0.1;
    }

    /* Force Button Farben beim Hover */
    .upload-btn:hover {
        background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%) !important;
        color: white !important;
    }

    .upload-btn:hover span {
        color: white !important;
    }

    .select-mode-btn {
        background: inherit !important;
    }

    .mode-card:nth-child(1) .select-mode-btn {
        background: linear-gradient(135deg, #6366f1 0%, #818cf8 100%) !important;
    }

    .mode-card:nth-child(2) .select-mode-btn {
        background: linear-gradient(135deg, #f59e0b 0%, #f97316 100%) !important;
    }

    .mode-card:nth-child(3) .select-mode-btn {
        background: linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%) !important;
    }

    .select-mode-btn:hover {
        opacity: 1 !important;
        background: inherit !important;
    }

    .mode-card:nth-child(1) .select-mode-btn:hover {
        background: linear-gradient(135deg, #6366f1 0%, #818cf8 100%) !important;
    }

    .mode-card:nth-child(2) .select-mode-btn:hover {
        background: linear-gradient(135deg, #f59e0b 0%, #f97316 100%) !important;
    }

    .mode-card:nth-child(3) .select-mode-btn:hover {
        background: linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%) !important;
    }

    .select-mode-btn:hover span {
        color: white !important;
    }

    .analyze-btn.ready:hover {
        background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%) !important;
        color: white !important;
    }

    .analyze-btn:hover span {
        color: white !important;
    }

    .change-btn:hover {
        background: linear-gradient(145deg, #E5E7EB, #D1D5DB) !important;
        color: #374151 !important;
    }

    .format-pill {
        position: relative !important;
    }

    .format-pill:hover {
        background: linear-gradient(145deg, #6366f1, #8b5cf6) !important;
        color: white !important;
    }

    /* Verhindere transparente Overlays */
    button::before,
    button::after,
    .upload-btn::before,
    .upload-btn::after,
    .select-mode-btn::before,
    .select-mode-btn::after,
    .analyze-btn::before,
    .analyze-btn::after {
        display: none !important;
        content: none !important;
        opacity: 0 !important;
        visibility: hidden !important;
    }
    `;
}