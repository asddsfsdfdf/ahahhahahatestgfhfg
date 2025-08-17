// Dashboard Helper Functions

// Load analyses
function loadAnalyses() {
    // For now, we'll use localStorage to simulate saved analyses
    const analyses = JSON.parse(localStorage.getItem('analyses') || '[]');
    
    if (analyses.length > 0) {
        document.getElementById('emptyState').style.display = 'none';
        document.getElementById('analysisList').style.display = 'grid';
        
        const analysisList = document.getElementById('analysisList');
        analysisList.innerHTML = analyses.map(analysis => `
            <div class="analysis-item">
                <div class="analysis-icon">📈</div>
                <div class="analysis-content">
                    <div class="analysis-title">${analysis.symbol || 'Chart Analysis'}</div>
                    <div class="analysis-meta">
                        ${new Date(analysis.date).toLocaleDateString()} • 
                        <span class="analysis-sentiment sentiment-${analysis.sentiment}">
                            ${analysis.sentiment.toUpperCase()}
                        </span>
                    </div>
                </div>
            </div>
        `).join('');
    }
}

// Show upload modal
function showUploadModal() {
    // Redirect to upload section instead of showing modal
    showSection('upload');
}

// Close upload modal
function closeUploadModal() {
    // Not needed anymore since we use a section
}

// Handle chart upload - UPDATED VERSION
function handleChartUpload(event) {
    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
        // Close modal if it exists
        const modal = document.getElementById('uploadModal');
        if (modal) {
            modal.classList.remove('show');
        }
        
        // Switch to upload section and handle the file
        showSection('upload');
        
        // Wait a bit for the section to load, then trigger the upload
        setTimeout(() => {
            const uploadInput = document.getElementById('chartFileInput');
            if (uploadInput) {
                const dataTransfer = new DataTransfer();
                dataTransfer.items.add(file);
                uploadInput.files = dataTransfer.files;
                handleChartFileUpload({ target: uploadInput });
            }
        }, 100);
    }
}

// Toggle alert
function toggleAlert(element) {
    element.classList.toggle('active');
}

// Create new alert
function createNewAlert() {
    alert('Alert creation feature coming soon!');
}

// Toggle password visibility
function togglePasswordVisibility(inputId) {
    const input = document.getElementById(inputId);
    const button = input.nextElementSibling;
    
    if (input.type === 'password') {
        input.type = 'text';
        button.textContent = '👁️‍🗨️';
    } else {
        input.type = 'password';
        button.textContent = '👁️';
    }
}

// Copy to clipboard
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        // Show success message
        const successMsg = document.createElement('div');
        successMsg.className = 'success-message show';
        successMsg.innerHTML = '<span>✅</span><span>Copied to clipboard!</span>';
        
        // Insert at beginning of current section
        const contentArea = document.getElementById('contentArea');
        contentArea.insertBefore(successMsg, contentArea.firstChild);
        
        // Remove after 3 seconds
        setTimeout(() => {
            successMsg.remove();
        }, 3000);
    });
}

// Submit idea
function submitIdea(event) {
    event.preventDefault();
    
    // Show success message
    alert('Thank you for your feedback! We\'ll review your idea and get back to you soon.');
    
    // Clear form
    event.target.reset();
}

// Logout
function logout() {
    if (confirm('Are you sure you want to logout?')) {
        localStorage.removeItem('token');
        window.location.href = '/';
    }
}