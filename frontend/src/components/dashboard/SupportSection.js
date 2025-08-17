// Support Section Component
function loadSupportSection() {
    const contentArea = document.getElementById('contentArea');
    
    contentArea.innerHTML = `
        <div class="support-section">
            <h2 style="text-align: center; margin-bottom: 12px;">How can we help you?</h2>
            <p style="text-align: center; color: #6b7280; margin-bottom: 48px;">Choose a support option below</p>
            
            <div class="support-cards">
                <div class="support-card" onclick="window.open('mailto:support@chartmaster-ai.com')">
                    <div class="support-icon">📧</div>
                    <h3 class="support-title">Email Support</h3>
                    <p class="support-description">Get help via email within 24 hours</p>
                </div>
                
                <div class="support-card">
                    <div class="support-icon">💬</div>
                    <h3 class="support-title">Live Chat</h3>
                    <p class="support-description">Chat with our support team in real-time</p>
                </div>
                
                <div class="support-card">
                    <div class="support-icon">📚</div>
                    <h3 class="support-title">Knowledge Base</h3>
                    <p class="support-description">Browse our comprehensive help articles</p>
                </div>
            </div>
            
            <div style="margin-top: 48px;">
                <h3 style="margin-bottom: 24px;">Frequently Asked Questions</h3>
                
                <div style="background: #f9fafb; padding: 24px; border-radius: 8px; margin-bottom: 16px;">
                    <h4 style="margin-bottom: 8px;">How do I upload a chart?</h4>
                    <p style="color: #6b7280;">Click the "Upload Chart" button in the sidebar or use the "New Analysis" button to upload your trading chart.</p>
                </div>
                
                <div style="background: #f9fafb; padding: 24px; border-radius: 8px; margin-bottom: 16px;">
                    <h4 style="margin-bottom: 8px;">What file formats are supported?</h4>
                    <p style="color: #6b7280;">We support JPG, PNG, GIF, and most common image formats up to 10MB in size.</p>
                </div>
                
                <div style="background: #f9fafb; padding: 24px; border-radius: 8px;">
                    <h4 style="margin-bottom: 8px;">How accurate is the AI analysis?</h4>
                    <p style="color: #6b7280;">Our AI achieves over 87% accuracy in pattern recognition and technical analysis, continuously improving with each analysis.</p>
                </div>
            </div>
        </div>
    `;
}