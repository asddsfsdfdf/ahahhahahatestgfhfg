function loadProfessionalMode() {
    const contentArea = document.getElementById('contentArea');
    
    contentArea.innerHTML = `
        <div class="mode-container professional-mode">
            <div class="mode-hero pro-hero">
                <div class="hero-grid"></div>
                <div class="hero-content">
                    <h1 class="mode-title">Professional Mode</h1>
                    <p class="mode-subtitle">Advanced tools for institutional-grade analysis</p>
                    <div class="pro-features">
                        <div class="feature-badge">Multi-Timeframe</div>
                        <div class="feature-badge">Smart Money</div>
                        <div class="feature-badge">Order Flow</div>
                        <div class="feature-badge">AI Predictions</div>
                    </div>
                </div>
            </div>
            
            <div class="pro-workspace">
                <div class="workspace-header">
                    <div class="workspace-tabs">
                        <button class="workspace-tab active">Analysis Studio</button>
                        <button class="workspace-tab">Market Scanner</button>
                        <button class="workspace-tab">Risk Manager</button>
                        <button class="workspace-tab">Strategy Builder</button>
                    </div>
                    <div class="workspace-actions">
                        <button class="action-btn primary">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M12 5v14M5 12h14"/>
                            </svg>
                            New Analysis
                        </button>
                    </div>
                </div>
                
                <div class="analysis-studio">
                    <div class="studio-sidebar">
                        <div class="tool-section">
                            <h4>Analysis Tools</h4>
                            <div class="tool-list">
                                <div class="tool-item active">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <path d="M3 3v18h18"/>
                                        <path d="M7 12l4-4 4 4 4-4"/>
                                    </svg>
                                    <span>Smart Money Flow</span>
                                </div>
                                <div class="tool-item">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <circle cx="12" cy="12" r="3"/>
                                        <path d="M12 1v6m0 6v6m11-7h-6m-6 0H1"/>
                                    </svg>
                                    <span>Order Blocks</span>
                                </div>
                                <div class="tool-item">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                                    </svg>
                                    <span>Market Structure</span>
                                </div>
                                <div class="tool-item">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/>
                                    </svg>
                                    <span>Volume Profile</span>
                                </div>
                            </div>
                        </div>
                        
                        <div class="tool-section">
                            <h4>Indicators</h4>
                            <div class="indicator-grid">
                                <div class="indicator-item">RSI</div>
                                <div class="indicator-item">MACD</div>
                                <div class="indicator-item">BB</div>
                                <div class="indicator-item">EMA</div>
                                <div class="indicator-item">VWAP</div>
                                <div class="indicator-item">ATR</div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="studio-main">
                        <div class="chart-area" onclick="document.getElementById('proUpload').click()">
                            <input type="file" id="proUpload" accept="image/*" style="display: none;" onchange="handleProUpload(event)">
                            <div class="chart-placeholder">
                                <div class="grid-overlay"></div>
                                <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" opacity="0.3">
                                    <rect x="3" y="3" width="18" height="18" rx="2"/>
                                    <path d="M3 9h18M9 21V9"/>
                                    <path d="M7 3l5 6-5 6"/>
                                </svg>
                                <h3>Professional Chart Analysis</h3>
                                <p>Drop your chart here for institutional-grade analysis</p>
                                <div class="supported-formats">
                                    Supports: PNG, JPG, TradingView, MT4/MT5 exports
                                </div>
                            </div>
                        </div>
                        
                        <div class="analysis-panel">
                            <div class="panel-header">
                                <h3>Analysis Results</h3>
                                <div class="panel-tools">
                                    <button class="tool-btn">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                            <path d="M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z"/>
                                        </svg>
                                    </button>
                                    <button class="tool-btn">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                            <polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/>
                                            <path d="M5.45 5.11L2 12v6a2 2 0 002 2h16a2 2 0 002-2v-6l-3.45-6.89A2 2 0 0016.76 4H7.24a2 2 0 00-1.79 1.11z"/>
                                        </svg>
                                    </button>
                                    <button class="tool-btn">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                            <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12"/>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div class="panel-content">
                                <div class="empty-state">
                                    <p>Upload a chart to see professional analysis</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="pro-stats">
                <div class="stat-card">
                    <div class="stat-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                    </div>
                    <div class="stat-content">
                        <div class="stat-number">98.5%</div>
                        <div class="stat-label">Accuracy Rate</div>
                    </div>
                </div>
                <div class="stat-card">
                    <div class="stat-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="12" cy="12" r="10"/>
                            <polyline points="12 6 12 12 16 14"/>
                        </svg>
                    </div>
                    <div class="stat-content">
                        <div class="stat-number">< 30s</div>
                        <div class="stat-label">Analysis Time</div>
                    </div>
                </div>
                <div class="stat-card">
                    <div class="stat-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                        </svg>
                    </div>
                    <div class="stat-content">
                        <div class="stat-number">50+</div>
                        <div class="stat-label">Indicators</div>
                    </div>
                </div>
                <div class="stat-card">
                    <div class="stat-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
                            <circle cx="9" cy="7" r="4"/>
                            <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
                        </svg>
                    </div>
                    <div class="stat-content">
                        <div class="stat-number">10k+</div>
                        <div class="stat-label">Pro Traders</div>
                    </div>
                </div>
            </div>
        </div>
        
        <style>
            .pro-hero {
                background: linear-gradient(135deg, #6366F1 0%, #4F46E5 100%);
                position: relative;
                overflow: hidden;
            }
            
            .hero-grid {
                position: absolute;
                width: 100%;
                height: 100%;
                background-image: 
                    linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px);
                background-size: 50px 50px;
                animation: grid-move 20s linear infinite;
            }
            
            @keyframes grid-move {
                0% { transform: translate(0, 0); }
                100% { transform: translate(50px, 50px); }
            }
            
            .pro-features {
                display: flex;
                gap: 16px;
                margin-top: 24px;
            }
            
            .feature-badge {
                background: rgba(255,255,255,0.2);
                backdrop-filter: blur(10px);
                padding: 8px 16px;
                border-radius: 8px;
                font-size: 14px;
                font-weight: 600;
                color: white;
                border: 1px solid rgba(255,255,255,0.2);
            }
            
            .pro-workspace {
                background: white;
                border-radius: 24px;
                margin-top: 32px;
                overflow: hidden;
                box-shadow: 0 10px 30px rgba(0,0,0,0.1);
            }
            
            .workspace-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 24px;
                border-bottom: 1px solid #E5E7EB;
            }
            
            .workspace-tabs {
                display: flex;
                gap: 8px;
            }
            
            .workspace-tab {
                padding: 8px 20px;
                background: none;
                border: none;
                font-weight: 600;
                color: #6B7280;
                cursor: pointer;
                border-radius: 8px;
                transition: all 0.2s ease;
            }
            
            .workspace-tab:hover {
                background: #F3F4F6;
                color: #111827;
            }
            
            .workspace-tab.active {
                background: #6366F1;
                color: white;
            }
            
            .action-btn {
                display: flex;
                align-items: center;
                gap: 8px;
                padding: 10px 20px;
                border: none;
                border-radius: 8px;
                font-weight: 600;
                cursor: pointer;
                transition: all 0.2s ease;
            }
            
            .action-btn.primary {
                background: #6366F1;
                color: white;
            }
            
            .action-btn.primary:hover {
                background: #4F46E5;
                transform: translateY(-1px);
            }
            
            .analysis-studio {
                display: grid;
                grid-template-columns: 280px 1fr;
                height: 600px;
            }
            
            .studio-sidebar {
                background: #F9FAFB;
                padding: 24px;
                border-right: 1px solid #E5E7EB;
            }
            
            .tool-section {
                margin-bottom: 32px;
            }
            
            .tool-section h4 {
                font-size: 14px;
                font-weight: 700;
                text-transform: uppercase;
                color: #6B7280;
                margin-bottom: 16px;
                letter-spacing: 0.05em;
            }
            
            .tool-list {
                display: flex;
                flex-direction: column;
                gap: 8px;
            }
            
            .tool-item {
                display: flex;
                align-items: center;
                gap: 12px;
                padding: 12px;
                border-radius: 8px;
                cursor: pointer;
                transition: all 0.2s ease;
            }
            
            .tool-item:hover {
                background: white;
                box-shadow: 0 2px 8px rgba(0,0,0,0.05);
            }
            
            .tool-item.active {
                background: #6366F1;
                color: white;
            }
            
            .tool-item.active svg {
                stroke: white;
            }
            
            .indicator-grid {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 8px;
            }
            
            .indicator-item {
                padding: 8px;
                background: white;
                border: 1px solid #E5E7EB;
                border-radius: 6px;
                text-align: center;
                font-size: 12px;
                font-weight: 600;
                cursor: pointer;
                transition: all 0.2s ease;
            }
            
            .indicator-item:hover {
                border-color: #6366F1;
                color: #6366F1;
            }
            
            .studio-main {
                display: grid;
                grid-template-rows: 1fr auto;
            }
            
            .chart-area {
                position: relative;
                background: #F9FAFB;
                cursor: pointer;
                overflow: hidden;
            }
            
            .chart-placeholder {
                height: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                position: relative;
            }
            
            .grid-overlay {
                position: absolute;
                width: 100%;
                height: 100%;
                background-image: 
                    linear-gradient(#E5E7EB 1px, transparent 1px),
                    linear-gradient(90deg, #E5E7EB 1px, transparent 1px);
                background-size: 20px 20px;
                opacity: 0.3;
            }
            
            .chart-placeholder h3 {
                font-size: 24px;
                font-weight: 700;
                color: #111827;
                margin: 24px 0 8px;
            }
            
            .chart-placeholder p {
                color: #6B7280;
                margin-bottom: 16px;
            }
            
            .supported-formats {
                font-size: 12px;
                color: #9CA3AF;
                background: white;
                padding: 4px 12px;
                border-radius: 6px;
            }
            
            .analysis-panel {
                background: white;
                border-top: 1px solid #E5E7EB;
            }
            
            .panel-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 16px 24px;
                border-bottom: 1px solid #E5E7EB;
            }
            
            .panel-header h3 {
                font-size: 18px;
                font-weight: 700;
                color: #111827;
            }
            
            .panel-tools {
                display: flex;
                gap: 8px;
            }
            
            .tool-btn {
                width: 36px;
                height: 36px;
                display: flex;
                align-items: center;
                justify-content: center;
                background: white;
                border: 1px solid #E5E7EB;
                border-radius: 8px;
                cursor: pointer;
                transition: all 0.2s ease;
            }
            
            .tool-btn:hover {
                background: #F3F4F6;
                border-color: #D1D5DB;
            }
            
            .panel-content {
                padding: 24px;
                min-height: 200px;
            }
            
            .empty-state {
                text-align: center;
                color: #9CA3AF;
                padding: 48px;
            }
            
            .pro-stats {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                gap: 24px;
                margin-top: 48px;
            }
            
            .stat-card {
                background: white;
                border-radius: 16px;
                padding: 24px;
                display: flex;
                align-items: center;
                gap: 20px;
                transition: all 0.3s ease;
            }
            
            .stat-card:hover {
                transform: translateY(-4px);
                box-shadow: 0 20px 40px rgba(99, 102, 241, 0.1);
            }
            
            .stat-icon {
                width: 56px;
                height: 56px;
                background: linear-gradient(135deg, #6366F1, #4F46E5);
                border-radius: 16px;
                display: flex;
                align-items: center;
                justify-content: center;
                flex-shrink: 0;
            }
            
            .stat-icon svg {
                color: white;
            }
            
            .stat-content {
                flex: 1;
            }
            
            .stat-number {
                font-size: 32px;
                font-weight: 800;
                color: #111827;
                line-height: 1;
            }
            
            .stat-label {
                font-size: 14px;
                color: #6B7280;
                margin-top: 4px;
            }
        </style>
    `;
}

function handleProUpload(event) {
    const file = event.target.files[0];
    if (file) {
        showSection('upload');
        setTimeout(() => {
            const uploadInput = document.getElementById('chartFileInput');
            if (uploadInput) {
                const dataTransfer = new DataTransfer();
                dataTransfer.items.add(file);
                uploadInput.files = dataTransfer.files;
                handleChartFileUpload({ target: uploadInput });
                
                // Select professional analysis styles
                const strategySelect = document.getElementById('strategySelect');
                if (strategySelect) {
                    strategySelect.value = 'smart-money';
                }
            }
        }, 100);
    }
}