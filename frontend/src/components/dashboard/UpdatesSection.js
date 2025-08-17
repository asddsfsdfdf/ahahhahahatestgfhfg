// Updates Section Component
function loadUpdatesSection() {
    const contentArea = document.getElementById('contentArea');
    
    contentArea.innerHTML = `
        <div class="support-section">
            <h2>Latest Updates</h2>
            <p style="color: #6b7280; margin-bottom: 32px;">Stay up to date with the latest features and improvements</p>
            
            <div style="background: white; border-radius: 12px; padding: 32px;">
                <div class="update-item">
                    <span class="update-badge">NEW</span>
                    <h4 class="update-title">Version 1.3</h4>
                    <p class="update-description">New features and bug fixes include: Mobile apps can now record in the background...</p>
                    <div class="update-meta">2 days ago</div>
                </div>
                
                <div class="update-item">
                    <span class="update-badge">NEW</span>
                    <h4 class="update-title">1.2.2</h4>
                    <p class="update-description">Added an option for permanent passwords. Fixed the status bar over-flowing on iOS</p>
                    <div class="update-meta">1 week ago</div>
                </div>
                
                <div class="update-item">
                    <span class="update-badge">NEW</span>
                    <h4 class="update-title">V 1.2</h4>
                    <p class="update-description">Tons of new requested features! 🔥 Support for markdown! You can now write your note's...</p>
                    <div class="update-meta">2 weeks ago</div>
                </div>
                
                <div class="update-item">
                    <h4 class="update-title">V 1.1</h4>
                    <p class="update-description">Major update with pattern recognition improvements and new analysis styles.</p>
                    <div class="update-meta">1 month ago</div>
                </div>
                
                <div class="update-item">
                    <h4 class="update-title">V 1.0</h4>
                    <p class="update-description">Initial release of ChartMaster AI with core features.</p>
                    <div class="update-meta">2 months ago</div>
                </div>
            </div>
            
            <div style="margin-top: 24px; text-align: center;">
                <a href="#" class="footer-link">See all changes</a>
            </div>
        </div>
    `;
}