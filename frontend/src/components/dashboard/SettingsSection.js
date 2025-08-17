// Settings Section Component
function loadSettingsSection() {
    const contentArea = document.getElementById('contentArea');
    
    contentArea.innerHTML = `
        <div class="settings-container">
            <!-- Preferences Section -->
            <div class="settings-section">
                <h2>Preferences</h2>
                <p class="settings-subtitle">These settings will be used as defaults for new analyses.</p>
                
                <div class="form-group">
                    <label>Default Style:</label>
                    <select>
                        <option>Technical Analysis</option>
                        <option>Price Action</option>
                        <option>Elliott Wave</option>
                        <option>Fibonacci</option>
                    </select>
                </div>
                
                <div class="form-group">
                    <label>Language:</label>
                    <select>
                        <option>Auto</option>
                        <option>English</option>
                        <option>German</option>
                        <option>Spanish</option>
                        <option>French</option>
                    </select>
                </div>
                
                <div class="form-group">
                    <label>Custom Words:</label>
                    <textarea rows="3" placeholder="List of custom words/expressions the AI can use, separated by a comma (240 characters max)"></textarea>
                    <div class="form-hint">These words will help the AI better understand your trading terminology.</div>
                </div>
                
                <button class="save-btn">
                    <span>💾</span>
                    Save changes
                </button>
            </div>
            
            <div class="divider"></div>
            
            <!-- Account Info Section -->
            <div class="settings-section">
                <h2>Account Info</h2>
                <p class="settings-subtitle">Update your account information.</p>
                
                <div class="form-group">
                    <label>First name:</label>
                    <input type="text" placeholder="Your first name">
                </div>
                
                <div class="form-group">
                    <label>Last name:</label>
                    <input type="text" placeholder="Your last name">
                </div>
                
                <div class="form-group">
                    <label>Email:</label>
                    <input type="email" value="${userData.email}" disabled style="background: #f3f4f6;">
                </div>
                
                <button class="save-btn">
                    <span>💾</span>
                    Save changes
                </button>
            </div>
            
            <div class="divider"></div>
            
            <!-- Create Password Section -->
            <div class="settings-section">
                <h2>Create Password</h2>
                <p class="settings-subtitle">Define or change your account's permanent password.</p>
                
                <div class="form-group">
                    <label>New Password:</label>
                    <div class="password-input-wrapper">
                        <input type="password" id="newPassword" placeholder="••••••••••••">
                        <button type="button" class="show-password-btn" onclick="togglePasswordVisibility('newPassword')">👁️</button>
                    </div>
                </div>
                
                <div class="form-group">
                    <label>New Password Confirmation:</label>
                    <div class="password-input-wrapper">
                        <input type="password" id="confirmPassword" placeholder="••••••••••••">
                        <button type="button" class="show-password-btn" onclick="togglePasswordVisibility('confirmPassword')">👁️</button>
                    </div>
                </div>
                
                <button class="save-btn">
                    <span>🔒</span>
                    Create Password
                </button>
            </div>
            
            <div class="divider"></div>
            
            <!-- AI Transcription Model Section -->
            <div class="settings-section">
                <h2>AI Transcription Model</h2>
                <p class="settings-subtitle">Select the model you want to use for transcriptions. The default model is recommended for most users.</p>
                
                <div class="form-group">
                    <label>Transcription Model:</label>
                    <select>
                        <option>Automatic (Recommended)</option>
                        <option>High Accuracy</option>
                        <option>Fast Processing</option>
                    </select>
                    <div class="form-hint">ChartMaster selects the best model based on factors like speed, quality, and language.</div>
                </div>
                
                <button class="save-btn">
                    <span>💾</span>
                    Save changes
                </button>
            </div>
            
            <div class="divider"></div>
            
            <!-- Integrations Section -->
            <div class="settings-section">
                <h2>Integrations</h2>
                <p class="settings-subtitle">Give superpower to ChartMaster by integrating it with other apps & automatically export your analyses.</p>
                
                <div class="form-group">
                    <label>Zapier Key:</label>
                    <input type="text" value="e20df0b25367981745ceb5cb280f34b7d17400522a525e6" readonly class="webhook-url-input">
                    <button class="copy-btn" onclick="copyToClipboard('e20df0b25367981745ceb5cb280f34b7d17400522a525e6')">
                        📋 Copy
                    </button>
                </div>
                
                <button class="save-btn" style="background: #FF6B35;">
                    <span>🔗</span>
                    Open Zapier
                </button>
                
                <div style="margin-top: 24px;">
                    <label>Webhook URL:</label>
                    <input type="url" placeholder="https://mywebhook.com/..." class="webhook-url-input">
                    <div class="form-hint">Automatically send your analyses to this webhook endpoint.</div>
                </div>
                
                <button class="save-btn">
                    <span>🧪</span>
                    Test webhook
                </button>
            </div>
            
            <div class="divider"></div>
            
            <!-- Plan Section -->
            <div class="settings-section">
                <h2>Plan</h2>
                <p class="settings-subtitle">Manage your subscription.</p>
                
                <p style="font-size: 16px; margin-bottom: 16px;">
                    You are on the <strong>plus</strong> plan (until ${new Date(userData.subscription?.trialEnd).toLocaleDateString()}).
                </p>
                
                <button class="save-btn" style="background: #6366F1;">
                    <span>💳</span>
                    Manage subscription in Paddle
                </button>
            </div>
            
            <div class="divider"></div>
            
            <!-- Other Section -->
            <div class="settings-section">
                <h2>Other</h2>
                
                <button class="save-btn" style="background: #374151; margin-bottom: 16px;">
                    <span>🚪</span>
                    Logout
                </button>
                
                <button class="delete-account-btn">
                    <span>🗑️</span>
                    Delete account
                </button>
                
                <p style="color: #ef4444; font-size: 14px; margin-top: 12px;">
                    You have an active subscription or trial. Please cancel the subscription or trial before deleting your account.
                </p>
            </div>
        </div>
    `;
}