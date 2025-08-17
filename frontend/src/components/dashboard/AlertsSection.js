// Alerts Section Component
function loadAlertsSection() {
    const contentArea = document.getElementById('contentArea');
    
    contentArea.innerHTML = `
        <div class="alerts-container">
            <button class="create-alert-btn" onclick="createNewAlert()">
                <span>🔔</span>
                Create New Alert
            </button>
            
            <div class="alerts-list">
                <h3 style="margin-bottom: 24px;">Active Alerts</h3>
                
                <div class="alert-item">
                    <div class="alert-info">
                        <div class="alert-symbol">BTC/USD</div>
                        <div class="alert-condition">Price crosses above $65,000</div>
                    </div>
                    <div class="alert-toggle">
                        <div class="toggle-switch active" onclick="toggleAlert(this)">
                            <div class="toggle-knob"></div>
                        </div>
                    </div>
                </div>
                
                <div class="alert-item">
                    <div class="alert-info">
                        <div class="alert-symbol">ETH/USD</div>
                        <div class="alert-condition">RSI crosses below 30</div>
                    </div>
                    <div class="alert-toggle">
                        <div class="toggle-switch" onclick="toggleAlert(this)">
                            <div class="toggle-knob"></div>
                        </div>
                    </div>
                </div>
                
                <div class="alert-item">
                    <div class="alert-info">
                        <div class="alert-symbol">EUR/USD</div>
                        <div class="alert-condition">MACD bullish crossover</div>
                    </div>
                    <div class="alert-toggle">
                        <div class="toggle-switch active" onclick="toggleAlert(this)">
                            <div class="toggle-knob"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}