// Ideas Section Component
function loadIdeasSection() {
    const contentArea = document.getElementById('contentArea');
    
    contentArea.innerHTML = `
        <div class="support-section">
            <h2>Suggest an Idea</h2>
            <p style="color: #6b7280; margin-bottom: 32px;">We'd love to hear your feedback and suggestions!</p>
            
            <div style="background: white; border-radius: 12px; padding: 32px;">
                <form onsubmit="submitIdea(event)">
                    <div class="form-group">
                        <label>Your Name:</label>
                        <input type="text" placeholder="John Doe" required>
                    </div>
                    
                    <div class="form-group">
                        <label>Email:</label>
                        <input type="email" placeholder="your@email.com" required>
                    </div>
                    
                    <div class="form-group">
                        <label>Idea Category:</label>
                        <select required>
                            <option value="">Select a category</option>
                            <option>New Feature</option>
                            <option>Improvement</option>
                            <option>Bug Report</option>
                            <option>Integration</option>
                            <option>Other</option>
                        </select>
                    </div>
                    
                    <div class="form-group">
                        <label>Your Idea:</label>
                        <textarea rows="6" placeholder="Describe your idea in detail..." required></textarea>
                    </div>
                    
                    <button type="submit" class="save-btn">
                        <span>💡</span>
                        Submit Idea
                    </button>
                </form>
            </div>
        </div>
    `;
}