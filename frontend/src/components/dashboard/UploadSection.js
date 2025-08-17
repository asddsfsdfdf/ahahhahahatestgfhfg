// Upload Section Component - COMPLETE VERSION
function loadUploadSection() {
    console.log('Loading Upload Section...');
    const contentArea = document.getElementById('contentArea');
    
    contentArea.innerHTML = `
        <div class="upload-section">
            <!-- Upload Area -->
            <div class="upload-container" id="uploadContainer">
                <div class="upload-area" id="uploadArea" onclick="document.getElementById('chartFileInput').click()">
                    <input type="file" id="chartFileInput" accept="image/*" style="display: none;" onchange="handleChartFileUpload(event)">
                    
                    <div class="upload-content">
                        <div class="upload-icon">📊</div>
                        <h3>Upload Your Chart</h3>
                        <p>Drop your chart image here or click to browse</p>
                        <div class="supported-formats">
                            Supports: PNG, JPG, GIF (max 10MB)
                        </div>
                    </div>
                </div>
                
                <!-- Scan Counter -->
                <div class="upload-info" id="uploadInfo">
                    <div class="scan-counter-inline">
                        <span class="counter-icon">🔍</span>
                        <span class="counter-text">Free scans remaining:</span>
                        <span class="counter-number" id="scansRemaining">2/2</span>
                    </div>
                </div>
            </div>
            
            <!-- Preview Area (initially hidden) -->
            <div class="preview-container" id="previewContainer" style="display: none;">
                <div class="preview-header">
                    <h3>Chart Preview</h3>
                    <button class="change-chart-btn" onclick="changeChart()">
                        <span>🔄</span>
                        Change Chart
                    </button>
                </div>
                
                <div class="chart-preview">
                    <img id="chartPreview" alt="Chart Preview" style="max-width: 100%; max-height: 400px; border-radius: 12px;">
                </div>
                
                <!-- Analysis Settings -->
                <div class="analysis-settings">
                    <h4>Analysis Settings</h4>
                    
                    <div class="settings-grid">
                        <div class="setting-group">
                            <label for="symbolInput">Symbol (Optional)</label>
                            <input type="text" id="symbolInput" placeholder="e.g., BTC/USD, EUR/USD" class="setting-input">
                        </div>
                        
                        <div class="setting-group">
                            <label for="timeframeSelect">Timeframe</label>
                            <select id="timeframeSelect" class="setting-select">
                                <option value="">Auto-detect</option>
                                <option value="1m">1 Minute</option>
                                <option value="5m">5 Minutes</option>
                                <option value="15m">15 Minutes</option>
                                <option value="1h">1 Hour</option>
                                <option value="4h">4 Hours</option>
                                <option value="1d">1 Day</option>
                                <option value="1w">1 Week</option>
                            </select>
                        </div>
                        
                        <div class="setting-group">
                            <label for="strategySelect">Analysis Style</label>
                            <select id="strategySelect" class="setting-select">
                                <option value="comprehensive">Comprehensive Analysis</option>
                                <option value="technical">Technical Analysis</option>
                                <option value="price-action">Price Action</option>
                                <option value="signal">Trading Signal</option>
                                <option value="elliott-wave">Elliott Wave</option>
                                <option value="fibonacci">Fibonacci Analysis</option>
                                <option value="smart-money">Smart Money (Pro)</option>
                            </select>
                        </div>
                        
                        <div class="setting-group full-width">
                            <label for="notesInput">Additional Notes (Optional)</label>
                            <textarea id="notesInput" placeholder="Any specific questions or context about this chart..." class="setting-textarea"></textarea>
                        </div>
                    </div>
                    
                    <button class="analyze-btn" id="analyzeBtn" onclick="startAnalysis()">
                        <span class="btn-icon">🤖</span>
                        <span class="btn-text">Analyze Chart</span>
                    </button>
                </div>
            </div>
            
            <!-- Loading State -->
            <div class="loading-container" id="loadingContainer" style="display: none;">
                <div class="loading-content">
                    <div class="loading-spinner-container">
                        <div class="ai-brain-icon">🧠</div>
                        <div class="loading-spinner"></div>
                    </div>
                    <h3 class="loading-title">Analyzing Your Chart</h3>
                    <p class="loading-message" id="loadingMessage">Initializing AI analysis...</p>
                    <div class="progress-bar">
                        <div class="progress-fill" id="progressFill"></div>
                    </div>
                </div>
            </div>
            
            <!-- Results Area -->
            <div class="results-container" id="resultsContainer" style="display: none;">
                <div class="results-header">
                    <h3>Analysis Results</h3>
                    <div class="results-actions">
                        <button class="action-btn secondary" onclick="newAnalysis()">
                            <span>🔄</span>
                            New Analysis
                        </button>
                        <button class="action-btn primary" onclick="exportResults()">
                            <span>📤</span>
                            Export
                        </button>
                    </div>
                </div>
                
                <!-- Sentiment Card -->
                <div class="sentiment-card" id="sentimentCard">
                    <div class="sentiment-indicator">
                        <div class="sentiment-icon" id="sentimentIcon">📈</div>
                        <div class="sentiment-details">
                            <div class="sentiment-label">Market Sentiment</div>
                            <div class="sentiment-value" id="sentimentValue">BULLISH</div>
                        </div>
                    </div>
                    <div class="confidence-meter">
                        <div class="confidence-label">Confidence Level</div>
                        <div class="confidence-bar">
                            <div class="confidence-fill" id="confidenceFill" style="width: 0%"></div>
                        </div>
                        <div class="confidence-text" id="confidenceText">0% Confidence</div>
                    </div>
                </div>
                
                <!-- Analysis Details -->
                <div class="analysis-details">
                    <div class="detail-section">
                        <h5>
                            <span class="section-icon">💡</span>
                            Key Recommendation
                        </h5>
                        <div class="recommendation-text" id="recommendationText">
                            Analysis results will appear here...
                        </div>
                    </div>
                    
                    <div class="detail-section">
                        <h5>
                            <span class="section-icon">📊</span>
                            Technical Analysis
                        </h5>
                        <div class="analysis-text" id="analysisText">
                            Detailed technical analysis will appear here...
                        </div>
                    </div>
                    
                    <div class="detail-section" id="patternsSection" style="display: none;">
                        <h5>
                            <span class="section-icon">🔍</span>
                            Detected Patterns
                        </h5>
                        <div class="patterns-list" id="patternsList">
                            <!-- Patterns will be added dynamically -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Initialize scan counter
    updateScanCounter();
    
    // Setup drag and drop
    setupDragAndDrop();
    
    console.log('Upload Section loaded successfully');
}

// Handle chart file upload
function handleChartFileUpload(event) {
    console.log('Chart file upload triggered');
    const file = event.target.files[0];
    
    if (!file) {
        console.log('No file selected');
        return;
    }
    
    if (!file.type.startsWith('image/')) {
        alert('Please select an image file (PNG, JPG, GIF)');
        return;
    }
    
    if (file.size > 10 * 1024 * 1024) { // 10MB limit
        alert('File size must be less than 10MB');
        return;
    }
    
    console.log('Processing file:', file.name);
    
    const reader = new FileReader();
    reader.onload = function(e) {
        console.log('File read successfully');
        
        // Hide upload area
        document.getElementById('uploadContainer').style.display = 'none';
        
        // Show preview area
        const previewContainer = document.getElementById('previewContainer');
        previewContainer.style.display = 'block';
        
        // Set preview image
        const chartPreview = document.getElementById('chartPreview');
        chartPreview.src = e.target.result;
        
        // Store image data for analysis
        window.currentChartData = e.target.result;
        
        console.log('Chart preview displayed');
    };
    
    reader.onerror = function() {
        console.error('Error reading file');
        alert('Error reading file. Please try again.');
    };
    
    reader.readAsDataURL(file);
}

// Change chart function
function changeChart() {
    console.log('Changing chart');
    
    // Hide preview and results
    document.getElementById('previewContainer').style.display = 'none';
    document.getElementById('resultsContainer').style.display = 'none';
    document.getElementById('loadingContainer').style.display = 'none';
    
    // Show upload area
    document.getElementById('uploadContainer').style.display = 'block';
    
    // Clear file input
    document.getElementById('chartFileInput').value = '';
    
    // Clear stored data
    window.currentChartData = null;
    
    console.log('Chart change completed');
}

// Start analysis function
function startAnalysis() {
    console.log('Starting analysis...');
    
    if (!window.currentChartData) {
        alert('Please upload a chart first');
        return;
    }
    
    // Check scan limits
    if (!canUserScan()) {
        showUpgradeModal();
        return;
    }
    
    // Hide preview, show loading
    document.getElementById('previewContainer').style.display = 'none';
    document.getElementById('loadingContainer').style.display = 'block';
    
    // Start loading animation
    startLoadingAnimation();
    
    // Simulate analysis (replace with actual API call)
    setTimeout(() => {
        completeAnalysis();
    }, 5000);
}

// Loading animation
function startLoadingAnimation() {
    const messages = [
        "Analyzing chart patterns...",
        "Detecting support and resistance levels...",
        "Calculating market sentiment...",
        "Identifying trend lines...",
        "Evaluating volume patterns...",
        "Generating trading recommendations..."
    ];
    
    let messageIndex = 0;
    const loadingMessage = document.getElementById('loadingMessage');
    const progressFill = document.getElementById('progressFill');
    
    // Update message every 2 seconds
    const messageInterval = setInterval(() => {
        if (messageIndex < messages.length) {
            loadingMessage.textContent = messages[messageIndex];
            messageIndex++;
        }
    }, 800);
    
    // Update progress bar
    let progress = 0;
    const progressInterval = setInterval(() => {
        progress += Math.random() * 20;
        if (progress > 90) progress = 90;
        progressFill.style.width = progress + '%';
    }, 500);
    
    // Store intervals for cleanup
    window.loadingIntervals = { messageInterval, progressInterval };
}

// Complete analysis
function completeAnalysis() {
    console.log('Completing analysis...');
    
    // Clear loading intervals
    if (window.loadingIntervals) {
        clearInterval(window.loadingIntervals.messageInterval);
        clearInterval(window.loadingIntervals.progressInterval);
    }
    
    // Complete progress bar
    document.getElementById('progressFill').style.width = '100%';
    
    // Hide loading, show results
    setTimeout(() => {
        document.getElementById('loadingContainer').style.display = 'none';
        document.getElementById('resultsContainer').style.display = 'block';
        
        // Display mock results
        displayMockResults();
        
        // Update scan count
        updateScanCount();
        updateScanCounter();
        
        console.log('Analysis completed');
    }, 1000);
}

// Display mock results
function displayMockResults() {
    // Mock sentiment
    const sentiments = ['bullish', 'bearish', 'neutral'];
    const sentiment = sentiments[Math.floor(Math.random() * sentiments.length)];
    const confidence = Math.floor(Math.random() * 40) + 60; // 60-100%
    
    // Update sentiment
    const sentimentIcon = document.getElementById('sentimentIcon');
    const sentimentValue = document.getElementById('sentimentValue');
    const confidenceFill = document.getElementById('confidenceFill');
    const confidenceText = document.getElementById('confidenceText');
    
    sentimentIcon.textContent = sentiment === 'bullish' ? '📈' : sentiment === 'bearish' ? '📉' : '➡️';
    sentimentValue.textContent = sentiment.toUpperCase();
    sentimentValue.className = `sentiment-value ${sentiment}`;
    
    confidenceFill.style.width = confidence + '%';
    confidenceText.textContent = `${confidence}% Confidence`;
    
    // Update recommendation
    const recommendations = {
        bullish: "Strong upward momentum detected. Consider long positions with proper risk management.",
        bearish: "Bearish signals identified. Consider short positions or exit long positions.",
        neutral: "Market shows mixed signals. Wait for clearer direction before entering positions."
    };
    
    document.getElementById('recommendationText').textContent = recommendations[sentiment];
    
    // Update analysis
    document.getElementById('analysisText').textContent = 
        "Technical indicators show " + sentiment + " momentum with key levels identified. " +
        "Volume analysis supports the current trend direction. Risk-reward ratio is favorable for the suggested direction.";
    
    // Show patterns
    const patterns = ['Double Top', 'Support Level', 'Trend Line', 'Moving Average Cross'];
    const selectedPatterns = patterns.slice(0, Math.floor(Math.random() * 3) + 1);
    
    if (selectedPatterns.length > 0) {
        document.getElementById('patternsSection').style.display = 'block';
        document.getElementById('patternsList').innerHTML = selectedPatterns
            .map(pattern => `<div class="pattern-chip">${pattern}</div>`)
            .join('');
    }
}

// New analysis function
function newAnalysis() {
    changeChart();
}

// Export results function
function exportResults() {
    alert('Export functionality coming soon!');
}

// Setup drag and drop
function setupDragAndDrop() {
    const uploadArea = document.getElementById('uploadArea');
    
    if (!uploadArea) return;
    
    uploadArea.addEventListener('dragover', (e) => {
        e.preventDefault();
        uploadArea.style.background = 'rgba(59, 130, 246, 0.05)';
        uploadArea.style.borderColor = '#3B82F6';
    });
    
    uploadArea.addEventListener('dragleave', () => {
        uploadArea.style.background = '';
        uploadArea.style.borderColor = '';
    });
    
    uploadArea.addEventListener('drop', (e) => {
        e.preventDefault();
        uploadArea.style.background = '';
        uploadArea.style.borderColor = '';
        
        const file = e.dataTransfer.files[0];
        if (file && file.type.startsWith('image/')) {
            const input = document.getElementById('chartFileInput');
            const dataTransfer = new DataTransfer();
            dataTransfer.items.add(file);
            input.files = dataTransfer.files;
            handleChartFileUpload({ target: input });
        }
    });
}