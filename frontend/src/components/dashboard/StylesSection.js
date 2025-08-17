// Styles Section Component
function loadStylesSection() {
    const contentArea = document.getElementById('contentArea');
    
    contentArea.innerHTML = `
        <div class="styles-container">
            <button class="create-style-btn">
                <span>➕</span>
                Create custom style
            </button>
            
            <h3 style="margin-bottom: 24px;">Default Styles:</h3>
            <p style="color: #6b7280; margin-bottom: 32px;">These are the default styles provided by ChartMaster.</p>
            
            <div class="styles-grid">
                <!-- Technical Analysis Styles -->
                <div class="style-card">
                    <div class="style-header">
                        <div class="style-icon-box">📝</div>
                        <h4 class="style-name">Technical Analysis</h4>
                    </div>
                    <p class="style-description">Complete technical analysis with support/resistance levels, indicators, and trading recommendations.</p>
                </div>
                
                <div class="style-card">
                    <div class="style-header">
                        <div class="style-icon-box">📊</div>
                        <h4 class="style-name">Price Action</h4>
                    </div>
                    <p class="style-description">Pure price action analysis focusing on candlestick patterns and market structure.</p>
                </div>
                
                <div class="style-card">
                    <div class="style-header">
                        <div class="style-icon-box">📈</div>
                        <h4 class="style-name">Trading Signal</h4>
                    </div>
                    <p class="style-description">Transform chart patterns into clear trading signals with entry, stop-loss and take-profit levels.</p>
                </div>
                
                <div class="style-card">
                    <div class="style-header">
                        <div class="style-icon-box">🎯</div>
                        <h4 class="style-name">Elliott Wave</h4>
                    </div>
                    <p class="style-description">Elliott Wave analysis with wave counts and projections for future price movements.</p>
                </div>
                
                <div class="style-card">
                    <div class="style-header">
                        <div class="style-icon-box">📐</div>
                        <h4 class="style-name">Fibonacci Analysis</h4>
                    </div>
                    <p class="style-description">Fibonacci retracement and extension levels with key support and resistance zones.</p>
                </div>
                
                <div class="style-card">
                    <div class="style-header">
                        <div class="style-icon-box">📧</div>
                        <h4 class="style-name">Email Report</h4>
                    </div>
                    <p class="style-description">Your analysis will be turned into a formal email. Perfect for a business email.</p>
                </div>
                
                <div class="style-card">
                    <div class="style-header">
                        <div class="style-icon-box">🐦</div>
                        <h4 class="style-name">Tweet</h4>
                    </div>
                    <p class="style-description">Your analysis will be turned into a tweet. Perfect for a short tweet.</p>
                </div>
                
                <div class="style-card">
                    <div class="style-header">
                        <div class="style-icon-box">📋</div>
                        <h4 class="style-name">Task List</h4>
                    </div>
                    <p class="style-description">Your analysis will be turned into a task list. Perfect for a to-do list.</p>
                </div>
                
                <div class="style-card">
                    <div class="style-header">
                        <div class="style-icon-box">❓</div>
                        <h4 class="style-name">Q & A</h4>
                    </div>
                    <p class="style-description">Your analysis will be turned into a list of questions and answers. Perfect for a FAQ page.</p>
                </div>
                
                <div class="style-card">
                    <div class="style-header">
                        <div class="style-icon-box">📚</div>
                        <h4 class="style-name">Academic Paper</h4>
                    </div>
                    <p class="style-description">Your analysis will turned into an academic paper, with structured headings and paragraphs.</p>
                </div>
                
                <div class="style-card">
                    <div class="style-header">
                        <div class="style-icon-box">📰</div>
                        <h4 class="style-name">Blog Post</h4>
                    </div>
                    <p class="style-description">Your analysis will turned into a long-form blog post, with structured headings and paragraphs.</p>
                </div>
                
                <div class="style-card">
                    <div class="style-header">
                        <div class="style-icon-box">🎥</div>
                        <h4 class="style-name">Video Script</h4>
                    </div>
                    <p class="style-description">Your analysis will be turned into a video script. Perfect for a youtube video.</p>
                </div>
            </div>
        </div>
    `;
}