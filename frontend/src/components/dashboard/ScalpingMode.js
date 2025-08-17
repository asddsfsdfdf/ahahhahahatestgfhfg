function loadScalpingMode() {
    const contentArea = document.getElementById('contentArea');
    
    contentArea.innerHTML = `
        <div class="mode-container scalping-mode">
            <div class="mode-hero scalping-hero">
                <div class="hero-gradient"></div>
                <div class="hero-particles"></div>
                <div class="hero-content">
                    <h1 class="mode-title">Scalping Mode</h1>
                    <p class="mode-subtitle">Lightning-fast analysis for quick trades</p>
                    <div class="hero-stats">
                        <div class="stat-item">
                            <span class="stat-value">< 5s</span>
                            <span class="stat-label">Analysis Time</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-value">1-5m</span>
                            <span class="stat-label">Timeframes</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-value">Real-time</span>
                            <span class="stat-label">Signals</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="scalping-dashboard">
                <div class="scalping-sidebar">
                    <h3>Quick Pairs</h3>
                    <div class="pairs-list">
                        <div class="pair-item active" onclick="selectPair('EUR/USD')">
                            <span class="pair-name">EUR/USD</span>
                            <span class="pair-spread">0.2</span>
                        </div>
                        <div class="pair-item" onclick="selectPair('GBP/USD')">
                            <span class="pair-name">GBP/USD</span>
                            <span class="pair-spread">0.8</span>
                        </div>
                        <div class="pair-item" onclick="selectPair('USD/JPY')">
                            <span class="pair-name">USD/JPY</span>
                            <span class="pair-spread">0.3</span>
                        </div>
                        <div class="pair-item" onclick="selectPair('BTC/USD')">
                            <span class="pair-name">BTC/USD</span>
                            <span class="pair-spread">15</span>
                        </div>
                    </div>
                    
                    <h3>Timeframes</h3>
                    <div class="timeframe-buttons">
                        <button class="tf-btn active">1m</button>
                        <button class="tf-btn">3m</button>
                        <button class="tf-btn">5m</button>
                        <button class="tf-btn">15m</button>
                    </div>
                </div>
                
                <div class="scalping-main">
                    <div class="scalping-upload" onclick="document.getElementById('scalpingUpload').click()">
                        <input type="file" id="scalpingUpload" accept="image/*" style="display: none;" onchange="handleScalpingUpload(event)">
                        <div class="upload-zone">
                            <div class="pulse-ring"></div>
                            <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                            </svg>
                            <h3>Drop Chart for Instant Analysis</h3>
                            <p>Get scalping signals in under 5 seconds</p>
                        </div>
                    </div>
                    
                    <div class="scalping-signals">
                        <h3>Live Signals</h3>
                        <div class="signals-list">
                            <div class="signal-item buy">
                                <div class="signal-icon">↗</div>
                                <div class="signal-info">
                                    <span class="signal-action">BUY</span>
                                    <span class="signal-pair">EUR/USD</span>
                                </div>
                                <div class="signal-details">
                                    <span class="signal-entry">1.0845</span>
                                    <span class="signal-target">+5 pips</span>
                                </div>
                                <div class="signal-timer">2:45</div>
                            </div>
                            <div class="signal-item sell">
                                <div class="signal-icon">↘</div>
                                <div class="signal-info">
                                    <span class="signal-action">SELL</span>
                                    <span class="signal-pair">GBP/USD</span>
                                </div>
                                <div class="signal-details">
                                    <span class="signal-entry">1.2654</span>
                                    <span class="signal-target">+8 pips</span>
                                </div>
                                <div class="signal-timer">5:12</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <style>
            .scalping-hero {
                background: linear-gradient(135deg, #F59E0B 0%, #D97706 100%);
                position: relative;
                overflow: hidden;
            }
            
            .hero-particles {
                position: absolute;
                width: 100%;
                height: 100%;
                top: 0;
                left: 0;
            }
            
            .hero-particles::before,
            .hero-particles::after {
                content: '';
                position: absolute;
                width: 2px;
                height: 2px;
                background: white;
                border-radius: 50%;
                animation: particle 10s linear infinite;
            }
            
            @keyframes particle {
                0% { transform: translateY(100%) translateX(0); opacity: 0; }
                10% { opacity: 1; }
                90% { opacity: 1; }
                100% { transform: translateY(-100%) translateX(100px); opacity: 0; }
            }
            
            .hero-stats {
                display: flex;
                gap: 48px;
                margin-top: 32px;
            }
            
            .stat-item {
                display: flex;
                flex-direction: column;
            }
            
            .stat-value {
                font-size: 32px;
                font-weight: 800;
                color: white;
            }
            
            .stat-label {
                font-size: 14px;
                color: rgba(255,255,255,0.8);
                margin-top: 4px;
            }
            
            .scalping-dashboard {
                display: grid;
                grid-template-columns: 250px 1fr;
                gap: 24px;
                margin-top: 32px;
            }
            
            .scalping-sidebar {
                background: white;
                border-radius: 16px;
                padding: 24px;
            }
            
            .scalping-sidebar h3 {
                font-size: 18px;
                font-weight: 700;
                margin-bottom: 16px;
                color: #111827;
            }
            
            .pairs-list {
                display: flex;
                flex-direction: column;
                gap: 8px;
                margin-bottom: 32px;
            }
            
            .pair-item {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 12px 16px;
                border-radius: 8px;
                cursor: pointer;
                transition: all 0.2s ease;
                border: 2px solid transparent;
            }
            
            .pair-item:hover {
                background: #FEF3C7;
                border-color: #F59E0B;
            }
            
            .pair-item.active {
                background: #FEF3C7;
                border-color: #F59E0B;
            }
            
            .pair-name {
                font-weight: 600;
                color: #111827;
            }
            
            .pair-spread {
                font-size: 14px;
                color: #6B7280;
            }
            
            .timeframe-buttons {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 8px;
            }
            
            .tf-btn {
                padding: 8px 16px;
                border: 2px solid #E5E7EB;
                background: white;
                border-radius: 8px;
                font-weight: 600;
                cursor: pointer;
                transition: all 0.2s ease;
            }
            
            .tf-btn:hover {
                border-color: #F59E0B;
                color: #F59E0B;
            }
            
            .tf-btn.active {
                background: #F59E0B;
                color: white;
                border-color: #F59E0B;
            }
            
            .scalping-main {
                display: grid;
                gap: 24px;
            }
            
            .scalping-upload {
                background: white;
                border-radius: 16px;
                padding: 48px;
                cursor: pointer;
                transition: all 0.3s ease;
                position: relative;
                overflow: hidden;
            }
            
            .scalping-upload:hover {
                transform: scale(1.02);
                box-shadow: 0 20px 40px rgba(245, 158, 11, 0.2);
            }
            
            .upload-zone {
                text-align: center;
                position: relative;
                z-index: 2;
            }
            
            .pulse-ring {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                width: 120px;
                height: 120px;
                border: 3px solid #F59E0B;
                border-radius: 50%;
                animation: pulse-ring 2s ease-out infinite;
            }
            
            @keyframes pulse-ring {
                0% { transform: translate(-50%, -50%) scale(0.8); opacity: 1; }
                100% { transform: translate(-50%, -50%) scale(1.5); opacity: 0; }
            }
            
            .upload-zone svg {
                color: #F59E0B;
                margin-bottom: 24px;
                position: relative;
                z-index: 1;
            }
            
            .scalping-signals {
                background: white;
                border-radius: 16px;
                padding: 24px;
            }
            
            .signals-list {
                display: flex;
                flex-direction: column;
                gap: 12px;
            }
            
            .signal-item {
                display: flex;
                align-items: center;
                gap: 16px;
                padding: 16px;
                border-radius: 12px;
                border: 2px solid;
                transition: all 0.3s ease;
            }
            
            .signal-item.buy {
                border-color: #10B981;
                background: #F0FDF4;
            }
            
            .signal-item.sell {
                border-color: #EF4444;
                background: #FEF2F2;
            }
            
            .signal-icon {
                font-size: 24px;
                font-weight: 800;
            }
            
            .signal-item.buy .signal-icon {
                color: #10B981;
            }
            
            .signal-item.sell .signal-icon {
                color: #EF4444;
            }
            
            .signal-info {
                display: flex;
                flex-direction: column;
                flex: 1;
            }
            
            .signal-action {
                font-weight: 700;
                font-size: 14px;
            }
            
            .signal-pair {
                font-size: 18px;
                font-weight: 600;
                color: #111827;
            }
            
            .signal-details {
                display: flex;
                flex-direction: column;
                align-items: flex-end;
            }
            
            .signal-entry {
                font-size: 16px;
                font-weight: 600;
                color: #111827;
            }
            
            .signal-target {
                font-size: 14px;
                color: #6B7280;
            }
            
            .signal-timer {
                font-size: 14px;
                font-weight: 600;
                color: #6B7280;
                min-width: 50px;
                text-align: center;
            }
        </style>
    `;
}

function selectPair(pair) {
    console.log('Selected pair:', pair);
    // Update UI
    document.querySelectorAll('.pair-item').forEach(item => {
        item.classList.remove('active');
        if (item.querySelector('.pair-name').textContent === pair) {
            item.classList.add('active');
        }
    });
}

function handleScalpingUpload(event) {
    const file = event.target.files[0];
    if (file) {
        // Quick analysis for scalping
        showSection('upload');
        setTimeout(() => {
            const uploadInput = document.getElementById('chartFileInput');
            if (uploadInput) {
                const dataTransfer = new DataTransfer();
                dataTransfer.items.add(file);
                uploadInput.files = dataTransfer.files;
                handleChartFileUpload({ target: uploadInput });
                
                // Auto-select scalping-friendly analysis
                const strategySelect = document.getElementById('strategySelect');
                if (strategySelect) {
                    strategySelect.value = 'signal';
                }
                
                // Set timeframe to 5m
                const timeframeSelect = document.getElementById('timeframeSelect');
                if (timeframeSelect) {
                    timeframeSelect.value = '5m';
                }
            }
        }, 100);
    }
}