// Guide Section Component
function loadGuideSection() {
    const contentArea = document.getElementById('contentArea');
    
    contentArea.innerHTML = `
        <div class="support-section">
            <h2>Getting Started Guide</h2>
            <p style="color: #6b7280; margin-bottom: 32px;">Learn how to make the most of ChartMaster AI</p>
            
            <div style="background: white; border-radius: 12px; padding: 32px; margin-bottom: 24px;">
                <h3 style="margin-bottom: 24px;">Quick Start Tutorial</h3>
                
                <ol style="line-height: 2;">
                    <li><strong>Upload Your Chart:</strong> Click "Upload Chart" and select your trading chart image</li>
                    <li><strong>Choose Analysis Style:</strong> Select from our pre-built styles or create your own</li>
                    <li><strong>Get AI Analysis:</strong> Our AI will analyze patterns, trends, and provide recommendations</li>
                    <li><strong>Export Results:</strong> Save, share, or export your analysis in multiple formats</li>
                </ol>
            </div>
            
            <div style="background: white; border-radius: 12px; padding: 32px;">
                <h3 style="margin-bottom: 24px;">Pro Tips</h3>
                
                <ul style="line-height: 2;">
                    <li>📊 Use high-resolution chart images for better analysis accuracy</li>
                    <li>🎯 Create custom styles for specific trading strategies</li>
                    <li>🔔 Set up alerts for important price levels</li>
                    <li>📱 Download our mobile app for on-the-go analysis</li>
                    <li>🔗 Connect with Zapier to automate your workflow</li>
                </ul>
            </div>
        </div>
    `;
}