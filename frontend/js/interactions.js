// Demo scan tracking
const DEMO_STORAGE_KEY = 'chartmaster_demo_scans';
const MAX_FREE_SCANS = 2;

// Check if running on localhost
function isLocalhost() {
    return window.location.hostname === 'localhost' || 
           window.location.hostname === '127.0.0.1' ||
           window.location.hostname === '';
}

// Get device fingerprint (combination of various browser properties)
function getDeviceFingerprint() {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    ctx.textBaseline = 'top';
    ctx.font = '14px Arial';
    ctx.fillText('fingerprint', 2, 2);
    const canvasData = canvas.toDataURL();
    
    const fingerprint = {
        userAgent: navigator.userAgent,
        language: navigator.language,
        screenResolution: `${screen.width}x${screen.height}`,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        canvas: canvasData
    };
    
    // Create a simple hash from the fingerprint
    const fp = JSON.stringify(fingerprint);
    let hash = 0;
    for (let i = 0; i < fp.length; i++) {
        const char = fp.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash;
    }
    return Math.abs(hash).toString(36);
}

// Get or create demo scan data
function getDemoScanData() {
    const stored = localStorage.getItem(DEMO_STORAGE_KEY);
    if (stored) {
        return JSON.parse(stored);
    }
    
    const newData = {
        deviceId: getDeviceFingerprint(),
        scansUsed: 0,
        firstScan: null,
        lastScan: null,
        ipAddress: null
    };
    
    localStorage.setItem(DEMO_STORAGE_KEY, JSON.stringify(newData));
    return newData;
}

// Update scan count
function updateScanCount() {
    // Skip counting on localhost
    if (isLocalhost()) {
        return getDemoScanData();
    }
    
    const data = getDemoScanData();
    data.scansUsed += 1;
    data.lastScan = new Date().toISOString();
    if (!data.firstScan) {
        data.firstScan = data.lastScan;
    }
    localStorage.setItem(DEMO_STORAGE_KEY, JSON.stringify(data));
    return data;
}

// Check if user can scan
function canUserScan() {
    // Always allow on localhost
    if (isLocalhost()) {
        return true;
    }
    
    const data = getDemoScanData();
    return data.scansUsed < MAX_FREE_SCANS;
}

// Get remaining scans
function getRemainingScans() {
    // Always show full scans on localhost
    if (isLocalhost()) {
        return MAX_FREE_SCANS;
    }
    
    const data = getDemoScanData();
    return Math.max(0, MAX_FREE_SCANS - data.scansUsed);
}

// Update the scan counter display
function updateScanCounter() {
    const remaining = getRemainingScans();
    const counterContainer = document.getElementById('uploadInfo');
    const scansRemainingEl = document.getElementById('scansRemaining');
    
    if (!counterContainer) return;
    
    // Show special indicator for localhost
    if (isLocalhost()) {
        counterContainer.innerHTML = `
            <div class="scan-counter-inline dev-mode">
                <span class="counter-icon">🚀</span>
                <span class="counter-text">Dev Mode:</span>
                <span class="counter-number">∞</span>
            </div>
        `;
    } else {
        // Update the existing counter
        if (scansRemainingEl) {
            scansRemainingEl.textContent = `${remaining}/${MAX_FREE_SCANS}`;
            
            const scanCounterEl = counterContainer.querySelector('.scan-counter-inline');
            if (scanCounterEl) {
                // Update classes based on remaining scans
                scanCounterEl.classList.remove('warning', 'exhausted');
                if (remaining === 0) {
                    scanCounterEl.classList.add('exhausted');
                } else if (remaining === 1) {
                    scanCounterEl.classList.add('warning');
                }
            }
        }
    }
}

// Show upgrade modal
function showUpgradeModal() {
    const modal = document.createElement('div');
    modal.className = 'demo-upgrade-modal';
    modal.innerHTML = `
        <div class="modal-overlay" onclick="closeDemoModal()"></div>
        <div class="modal-content">
            <button class="modal-close" onclick="closeDemoModal()">×</button>
            <div class="modal-icon">🚀</div>
            <h2>You've Used Your Free Scans!</h2>
            <p>You've experienced the power of ChartMaster AI with your 2 free demo scans.</p>
            
            <div class="scan-stats">
                <div class="stat-item">
                    <div class="stat-number">2</div>
                    <div class="stat-label">Scans Used</div>
                </div>
                <div class="stat-item">
                    <div class="stat-number">0</div>
                    <div class="stat-label">Remaining</div>
                </div>
            </div>
            
            <div class="upgrade-benefits">
                <h3>Unlock Unlimited Analysis</h3>
                <ul>
                    <li>✓ Unlimited chart scans</li>
                    <li>✓ Advanced AI models</li>
                    <li>✓ Real-time alerts</li>
                    <li>✓ API access</li>
                    <li>✓ Priority support</li>
                </ul>
            </div>
            
            <div class="upgrade-actions">
                <a href="#pricing" class="upgrade-btn-primary" onclick="closeDemoModal()">
                    Start 7-Day Free Trial
                </a>
                <button class="upgrade-btn-secondary" onclick="closeDemoModal()">
                    Maybe Later
                </button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    setTimeout(() => modal.classList.add('show'), 10);
}

// Close modal
function closeDemoModal() {
    const modal = document.querySelector('.demo-upgrade-modal');
    if (modal) {
        modal.classList.remove('show');
        setTimeout(() => modal.remove(), 300);
    }
}

// Interactive elements for ChartMaster AI

// Demo interaction
let demoInterval;
let demoSeconds = 0;
let isRecording = false;

function playDemo() {
    const playBtn = document.querySelector('.play-btn');
    if (playBtn.innerHTML === '▶') {
        playBtn.innerHTML = '⏸';
    } else {
        playBtn.innerHTML = '▶';
    }
}

function startAnalysis() {
    const recordBtn = document.querySelector('.record-btn');
    const timer = document.querySelector('.demo-timer');
    
    if (!isRecording) {
        isRecording = true;
        recordBtn.style.background = 'var(--success-color)';
        demoSeconds = 0;
        
        demoInterval = setInterval(() => {
            demoSeconds++;
            const minutes = Math.floor(demoSeconds / 60);
            const seconds = demoSeconds % 60;
            timer.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
            
            // Simulate analysis complete after 3 seconds
            if (demoSeconds === 3) {
                completeAnalysis();
            }
        }, 1000);
    }
}

function completeAnalysis() {
    clearInterval(demoInterval);
    isRecording = false;
    
    const timer = document.querySelector('.demo-timer');
    timer.style.color = 'var(--success-color)';
    
    // Show success message
    setTimeout(() => {
        alert('Analysis Complete! Result: BUY - 87% Confidence');
        resetDemo();
    }, 500);
}

function resetDemo() {
    clearInterval(demoInterval);
    isRecording = false;
    demoSeconds = 0;
    
    const timer = document.querySelector('.demo-timer');
    const recordBtn = document.querySelector('.record-btn');
    const playBtn = document.querySelector('.play-btn');
    
    timer.textContent = '00:00';
    timer.style.color = 'inherit';
    recordBtn.style.background = 'var(--secondary-color)';
    playBtn.innerHTML = '▶';
}

// Chart upload handling
function handleChartUpload(event) {
    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
        const uploadArea = document.querySelector('.chart-upload-area');
        const reader = new FileReader();
        
        reader.onload = function(e) {
            uploadArea.innerHTML = `
                <img src="${e.target.result}" style="max-width: 100%; max-height: 200px; border-radius: 8px;">
                <p style="margin-top: 16px; color: var(--success-color); font-weight: 600;">Chart uploaded! Click analyze to start.</p>
            `;
        };
        
        reader.readAsDataURL(file);
    }
}

// Mobile menu toggle
function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('mobile-active');
}

// Copy to clipboard functionality
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        // Show success message
        const tooltip = document.createElement('div');
        tooltip.className = 'copy-tooltip';
        tooltip.textContent = 'Copied!';
        document.body.appendChild(tooltip);
        
        setTimeout(() => {
            tooltip.remove();
        }, 2000);
    });
}

// Form validation
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Subscribe form handling
document.addEventListener('DOMContentLoaded', () => {
    const subscribeForms = document.querySelectorAll('.subscribe-form');
    
    subscribeForms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = form.querySelector('input[type="email"]').value;
            
            if (validateEmail(email)) {
                // Simulate subscription
                alert('Thank you for subscribing! Check your email for confirmation.');
                form.reset();
            } else {
                alert('Please enter a valid email address.');
            }
        });
    });
});

// Lazy loading for images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    const lazyImages = document.querySelectorAll('img.lazy');
    lazyImages.forEach(img => imageObserver.observe(img));
}

// AI Chart Analysis Demo
const OPENAI_API_KEY = ''; // Your API key

const LOADING_MESSAGES = [
    "Analyzing chart patterns...",
    "Detecting support and resistance levels...",
    "Calculating market sentiment...",
    "Identifying trend lines...",
    "Evaluating volume patterns...",
    "Generating trading recommendations..."
];

let loadingMessageIndex = 0;
let loadingInterval;

// Handle chart upload
function handleDemoChartUpload(event) {
    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();
        
        reader.onload = function(e) {
            // Hide upload state
            document.querySelector('.upload-state').style.display = 'none';
            
            // Show chart info inputs
            document.getElementById('chartInfoInputs').style.display = 'block';
            
            // Show preview
            document.getElementById('previewImage').src = e.target.result;
            
            // Store the base64 image
            window.chartImageData = e.target.result;
        };
        
        reader.readAsDataURL(file);
    }
}

// Parse analysis response
function parseAnalysisResponse(text) {
    try {
        // Try to extract JSON from the response
        const jsonMatch = text.match(/\{[\s\S]*\}/);
        const jsonText = jsonMatch ? jsonMatch[0] : text;
        
        const parsed = JSON.parse(jsonText);
        
        // Validate and sanitize fields
        return {
            sentiment: ['bullish', 'bearish', 'neutral'].includes(parsed.sentiment) 
                ? parsed.sentiment 
                : 'neutral',
            confidence: typeof parsed.confidence === 'number' 
                ? Math.max(0, Math.min(100, parsed.confidence))
                : 50,
            patterns: Array.isArray(parsed.patterns) 
                ? parsed.patterns.filter(p => typeof p === 'string')
                : [],
            recommendation: typeof parsed.recommendation === 'string' 
                ? parsed.recommendation 
                : 'No recommendation available',
            analysis: typeof parsed.analysis === 'string' 
                ? parsed.analysis 
                : 'No detailed analysis available'
        };
    } catch (error) {
        console.error('JSON parsing error:', error);
        return {
            sentiment: 'neutral',
            confidence: 50,
            patterns: [],
            recommendation: 'Unable to provide recommendation due to analysis error',
            analysis: `Error analyzing chart: ${text}`
        };
    }
}

async function analyzeChart() {
    // Check if user has remaining scans (will always return true on localhost)
    if (!canUserScan()) {
        showUpgradeModal();
        return;
    }
    
    if (!window.chartImageData) {
        alert('Please upload a chart first');
        return;
    }
    
    // Hide all states
    document.getElementById('demoContent').style.display = 'none';
    document.getElementById('chartInfoInputs').style.display = 'none';
    
    // Show loading state
    document.getElementById('loadingState').style.display = 'block';
    
    // Start loading messages
    loadingMessageIndex = 0;
    updateLoadingMessage();
    loadingInterval = setInterval(updateLoadingMessage, 2000);
    
    try {
        // Get optional inputs
        const symbol = document.getElementById('symbolInput').value;
        const timeframe = document.getElementById('timeframeInput').value;
        const notes = document.getElementById('notesInput').value;
        
        const prompt = `You are a professional technical analyst. Analyze the provided trading chart and respond STRICTLY in the following JSON format without any text outside the JSON structure:

{
  "sentiment": "bullish" or "bearish" or "neutral",
  "confidence": <number between 0-100>,
  "patterns": [<array of detected technical patterns>],
  "recommendation": "<clear, concise trading recommendation>",
  "analysis": "<detailed technical analysis in 2-3 sentences>"
}

${symbol || timeframe || notes ? `Additional context:
${symbol ? `Symbol: ${symbol}` : ''}
${timeframe ? `Timeframe: ${timeframe}` : ''}
${notes ? `Notes: ${notes}` : ''}` : ''}

Focus your analysis on:
1. Price action and trend direction
2. Key support/resistance levels
3. Technical patterns and formations
4. Volume analysis if visible
5. Key technical indicators

If the image is not a trading chart or you cannot analyze it, respond with valid JSON using "neutral" sentiment, 0 confidence, and explain in the analysis field that this is not a valid trading chart.

IMPORTANT: Your response must be valid JSON only. Do not include any text outside the JSON structure.`;

        // Make actual OpenAI API call
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${OPENAI_API_KEY}`
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
                                url: window.chartImageData,
                                detail: "high"
                            } 
                        }
                    ]
                }],
                max_tokens: 1000,
                temperature: 0.5
            })
        });
        
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error?.message || 'API request failed');
        }
        
        const data = await response.json();
        const analysisText = data.choices[0]?.message?.content;
        
        if (!analysisText) {
            throw new Error('No response received from AI');
        }
        
        const analysis = parseAnalysisResponse(analysisText);
        
        // Show results
        displayAnalysisResults(analysis);
        
        // Update scan count after successful analysis (won't increment on localhost)
        updateScanCount();
        updateScanCounter();
        
    } catch (error) {
        console.error('Analysis error:', error);
        alert('Failed to analyze chart: ' + error.message);
        resetDemo();
    } finally {
        clearInterval(loadingInterval);
    }
}

// Update loading message
function updateLoadingMessage() {
    const messageEl = document.getElementById('loadingMessage');
    if (messageEl) {
        messageEl.textContent = LOADING_MESSAGES[loadingMessageIndex];
        loadingMessageIndex = (loadingMessageIndex + 1) % LOADING_MESSAGES.length;
    }
}

// Display analysis results
function displayAnalysisResults(analysis) {
    // Hide loading, show results
    document.getElementById('loadingState').style.display = 'none';
    document.getElementById('resultState').style.display = 'block';
    
    // Update sentiment
    const sentimentIcon = document.getElementById('sentimentIcon');
    sentimentIcon.textContent = analysis.sentiment === 'bullish' ? '📈' : 
                               analysis.sentiment === 'bearish' ? '📉' : '➡️';
    
    // Update sentiment text
    const sentimentText = document.getElementById('sentimentText');
    sentimentText.textContent = analysis.sentiment.toUpperCase();
    sentimentText.className = `sentiment-value ${analysis.sentiment}`;
    
    // Update confidence
    document.getElementById('confidenceText').textContent = `${analysis.confidence}% Confidence`;
    document.getElementById('confidenceFill').style.width = `${analysis.confidence}%`;
    
    // Update recommendation
    document.getElementById('recommendationText').textContent = analysis.recommendation;
    
    // Update analysis
    document.getElementById('analysisText').textContent = analysis.analysis;
    
    // Update patterns
    if (analysis.patterns && analysis.patterns.length > 0) {
        const patternsSection = document.getElementById('patternsSection');
        const patternsList = document.getElementById('patternsList');
        
        patternsSection.style.display = 'block';
        patternsList.innerHTML = analysis.patterns
            .map(pattern => `<div class="pattern-chip">${pattern}</div>`)
            .join('');
    } else {
        document.getElementById('patternsSection').style.display = 'none';
    }
}

// Reset demo
function resetDemo() {
    // Reset all states
    document.getElementById('demoContent').style.display = 'block';
    document.getElementById('loadingState').style.display = 'none';
    document.getElementById('resultState').style.display = 'none';
    document.getElementById('chartInfoInputs').style.display = 'none';
    
    // Show upload state again
    const uploadState = document.querySelector('.upload-state');
    if (uploadState) {
        uploadState.style.display = 'block';
    }
    
    // Clear inputs
    document.getElementById('symbolInput').value = '';
    document.getElementById('timeframeInput').value = '';
    document.getElementById('notesInput').value = '';
    document.getElementById('demoChartInput').value = '';
    
    // Clear stored data
    window.chartImageData = null;
}

// Add drag and drop support
document.addEventListener('DOMContentLoaded', function() {
    const demoContent = document.getElementById('demoContent');
    
    if (demoContent) {
        demoContent.addEventListener('dragover', (e) => {
            e.preventDefault();
            const uploadState = demoContent.querySelector('.upload-state');
            if (uploadState) {
                uploadState.style.background = 'rgba(99, 102, 241, 0.05)';
            }
        });
        
        demoContent.addEventListener('dragleave', (e) => {
            const uploadState = demoContent.querySelector('.upload-state');
            if (uploadState) {
                uploadState.style.background = '';
            }
        });
        
        demoContent.addEventListener('drop', (e) => {
            e.preventDefault();
            const uploadState = demoContent.querySelector('.upload-state');
            if (uploadState) {
                uploadState.style.background = '';
            }
            
            const file = e.dataTransfer.files[0];
            if (file && file.type.startsWith('image/')) {
                const input = document.getElementById('demoChartInput');
                const dataTransfer = new DataTransfer();
                dataTransfer.items.add(file);
                input.files = dataTransfer.files;
                handleDemoChartUpload({ target: input });
            }
        });
    }
});

// Initialize scan counter when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Update scan counter on page load
    updateScanCounter();
    
    // Show localhost indicator in console
    if (isLocalhost()) {
        console.log('🔧 ChartMaster AI - Development Mode: Unlimited demo scans enabled');
    }
    
    // Also fetch IP address for additional tracking (optional)
    if (!isLocalhost()) {
        fetch('https://api.ipify.org?format=json')
            .then(response => response.json())
            .then(data => {
                const scanData = getDemoScanData();
                scanData.ipAddress = data.ip;
                localStorage.setItem(DEMO_STORAGE_KEY, JSON.stringify(scanData));
            })
            .catch(() => {
                // Ignore IP fetch errors
            });
    }
});