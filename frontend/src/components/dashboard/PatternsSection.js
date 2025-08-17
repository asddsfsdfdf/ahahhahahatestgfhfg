// Patterns Section Component
function loadPatternsSection() {
    const contentArea = document.getElementById('contentArea');
    
    contentArea.innerHTML = `
        <div class="patterns-grid">
            <div class="pattern-card">
                <div class="pattern-icon" style="background: #0EA5E9; color: white;">📈</div>
                <h3 class="pattern-name">Head and Shoulders</h3>
                <p class="pattern-description">A reversal pattern that marks the end of an uptrend. Consists of three peaks with the middle peak being the highest.</p>
            </div>
            
            <div class="pattern-card">
                <div class="pattern-icon" style="background: #10B981; color: white;">📊</div>
                <h3 class="pattern-name">Double Top</h3>
                <p class="pattern-description">A bearish reversal pattern that occurs after an extended uptrend. Features two peaks at approximately the same level.</p>
            </div>
            
            <div class="pattern-card">
                <div class="pattern-icon" style="background: #F59E0B; color: white;">📉</div>
                <h3 class="pattern-name">Double Bottom</h3>
                <p class="pattern-description">A bullish reversal pattern that occurs after a downtrend. Features two troughs at approximately the same level.</p>
            </div>
            
            <div class="pattern-card">
                <div class="pattern-icon" style="background: #EF4444; color: white;">🔺</div>
                <h3 class="pattern-name">Ascending Triangle</h3>
                <p class="pattern-description">A bullish pattern that forms during an uptrend. Features a horizontal resistance line and rising support line.</p>
            </div>
            
            <div class="pattern-card">
                <div class="pattern-icon" style="background: #8B5CF6; color: white;">🔻</div>
                <h3 class="pattern-name">Descending Triangle</h3>
                <p class="pattern-description">A bearish pattern that forms during a downtrend. Features a horizontal support line and descending resistance line.</p>
            </div>
            
            <div class="pattern-card">
                <div class="pattern-icon" style="background: #EC4899; color: white;">⚡</div>
                <h3 class="pattern-name">Flag Pattern</h3>
                <p class="pattern-description">A continuation pattern that forms after a strong price movement. Represents a brief consolidation before trend continuation.</p>
            </div>
        </div>
    `;
}