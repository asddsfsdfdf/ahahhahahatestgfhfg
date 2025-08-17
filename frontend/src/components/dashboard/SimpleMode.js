function loadSimpleMode() {
    const contentArea = document.getElementById('contentArea');
    
    contentArea.innerHTML = `
        <div class="mode-container simple-mode">
            <div class="mode-hero">
                <div class="hero-gradient"></div>
                <div class="hero-content">
                    <h1 class="mode-title">Simple Mode</h1>
                    <p class="mode-subtitle">Perfect for beginners - Get instant AI analysis with one click</p>
                </div>
            </div>
            
            <div class="quick-actions">
                <div class="action-card" onclick="quickAnalysis('bullish')">
                    <div class="action-icon bullish">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M7 17L17 7M17 7H7M17 7V17"/>
                        </svg>
                    </div>
                    <h3>Bullish Analysis</h3>
                    <p>Find uptrend opportunities</p>
                </div>
                
                <div class="action-card" onclick="quickAnalysis('bearish')">
                    <div class="action-icon bearish">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M7 7L17 17M7 17H17M7 17V7"/>
                        </svg>
                    </div>
                    <h3>Bearish Analysis</h3>
                    <p>Identify downtrend signals</p>
                </div>
                
                <div class="action-card" onclick="quickAnalysis('neutral')">
                    <div class="action-icon neutral">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M5 12h14M12 5v14"/>
                        </svg>
                    </div>
                    <h3>Market Overview</h3>
                    <p>General market analysis</p>
                </div>
            </div>
            
            <div class="upload-area-simple" onclick="document.getElementById('simpleUpload').click()">
                <input type="file" id="simpleUpload" accept="image/*" style="display: none;" onchange="handleSimpleUpload(event)">
                <div class="upload-content">
                    <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                        <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
                        <polyline points="17 8 12 3 7 8"/>
                        <line x1="12" y1="3" x2="12" y2="15"/>
                    </svg>
                    <h3>Drop your chart here</h3>
                    <p>or click to browse</p>
                </div>
            </div>
            
            <div class="recent-analyses">
                <h2>Recent Simple Analyses</h2>
                <div class="analyses-grid" id="simpleAnalysesList">
                    <!-- Dynamically loaded -->
                </div>
            </div>
        </div>
        
        <style>
            .mode-container {
                animation: fadeIn 0.5s ease-out;
            }
            
            @keyframes fadeIn {
                from { opacity: 0; transform: translateY(20px); }
                to { opacity: 1; transform: translateY(0); }
            }
            
            .mode-hero {
                position: relative;
                background: linear-gradient(135deg, #10B981 0%, #059669 100%);
                border-radius: 24px;
                padding: 48px;
                margin-bottom: 32px;
                overflow: hidden;
            }
            
            .hero-gradient {
                position: absolute;
                top: -50%;
                right: -25%;
                width: 100%;
                height: 200%;
                background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
                animation: float 20s ease-in-out infinite;
            }
            
            @keyframes float {
                0%, 100% { transform: translate(0, 0) rotate(0deg); }
                50% { transform: translate(-30px, -30px) rotate(180deg); }
            }
            
            .hero-content {
                position: relative;
                color: white;
            }
            
            .mode-title {
                font-size: 48px;
                font-weight: 800;
                margin-bottom: 16px;
                letter-spacing: -1px;
            }
            
            .mode-subtitle {
                font-size: 20px;
                opacity: 0.9;
            }
            
            .quick-actions {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                gap: 24px;
                margin-bottom: 32px;
            }
            
            .action-card {
                background: white;
                border-radius: 16px;
                padding: 32px;
                text-align: center;
                cursor: pointer;
                transition: all 0.3s ease;
                border: 2px solid transparent;
            }
            
            .action-card:hover {
                transform: translateY(-8px);
                box-shadow: 0 20px 40px rgba(0,0,0,0.1);
                border-color: #10B981;
            }
            
            .action-icon {
                width: 80px;
                height: 80px;
                margin: 0 auto 24px;
                border-radius: 20px;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: all 0.3s ease;
            }
            
            .action-icon.bullish {
                background: linear-gradient(135deg, #10B981, #059669);
                color: white;
            }
            
            .action-icon.bearish {
                background: linear-gradient(135deg, #EF4444, #DC2626);
                color: white;
            }
            
            .action-icon.neutral {
                background: linear-gradient(135deg, #6B7280, #4B5563);
                color: white;
            }
            
            .action-card:hover .action-icon {
                transform: scale(1.1) rotate(5deg);
            }
            
            .action-card h3 {
                font-size: 24px;
                font-weight: 700;
                margin-bottom: 8px;
                color: #111827;
            }
            
            .action-card p {
                color: #6B7280;
                font-size: 16px;
            }
            
            .upload-area-simple {
                background: linear-gradient(135deg, #F3F4F6, #E5E7EB);
                border: 3px dashed #D1D5DB;
                border-radius: 24px;
                padding: 60px;
                text-align: center;
                cursor: pointer;
                transition: all 0.3s ease;
                margin-bottom: 48px;
            }
            
            .upload-area-simple:hover {
                border-color: #10B981;
                background: linear-gradient(135deg, #F0FDF4, #DCFCE7);
                transform: scale(1.02);
            }
            
            .upload-content svg {
                color: #6B7280;
                margin-bottom: 16px;
            }
            
            .upload-content h3 {
                font-size: 24px;
                font-weight: 700;
                color: #111827;
                margin-bottom: 8px;
            }
            
            .upload-content p {
                color: #6B7280;
            }
            
            .recent-analyses h2 {
                font-size: 28px;
                font-weight: 700;
                margin-bottom: 24px;
                color: #111827;
            }
            
            .analyses-grid {
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
                gap: 20px;
            }
        </style>
    `;
    
    // Load recent analyses
    loadSimpleAnalyses();
}

function quickAnalysis(type) {
    // Navigate to upload with pre-selected analysis type
    showSection('upload');
    setTimeout(() => {
        const strategySelect = document.getElementById('strategySelect');
        if (strategySelect) {
            strategySelect.value = type === 'bullish' ? 'signal' : type === 'bearish' ? 'price-action' : 'comprehensive';
        }
    }, 100);
}

function handleSimpleUpload(event) {
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
                
                // Auto-select simple analysis style
                const strategySelect = document.getElementById('strategySelect');
                if (strategySelect) {
                    strategySelect.value = 'comprehensive';
                }
            }
        }, 100);
    }
}

function loadSimpleAnalyses() {
    // Placeholder for loading analyses
    const analysesList = document.getElementById('simpleAnalysesList');
    analysesList.innerHTML = `
        <div class="analysis-card">
            <div class="analysis-preview">📈</div>
            <h4>EUR/USD Analysis</h4>
            <p>Bullish trend detected</p>
            <span class="analysis-time">2 hours ago</span>
        </div>
    `;
}