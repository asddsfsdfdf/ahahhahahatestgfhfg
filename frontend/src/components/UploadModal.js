// Upload Modal Component
function createUploadModal() {
    return `
        <div class="upload-modal" id="uploadModal">
            <div class="modal-content">
                <button class="modal-close" onclick="closeUploadModal()">×</button>
                <h2 class="modal-title">Upload Chart</h2>
                
                <div class="upload-area" onclick="document.getElementById('modalChartInput').click()">
                    <input type="file" id="modalChartInput" accept="image/*" style="display: none;" onchange="handleModalChartUpload(event)">
                    <div class="upload-icon">📊</div>
                    <div class="upload-text">Click to upload</div>
                    <div class="upload-subtext">or drag and drop your chart here</div>
                </div>
                
                <div id="modalPreview" style="display: none;">
                    <img id="modalPreviewImage" style="max-width: 100%; max-height: 200px; margin: 20px 0;">
                    <button class="analyze-btn" onclick="analyzeModalChart()">
                        <span>🤖</span>
                        Analyze Chart
                    </button>
                </div>
            </div>
        </div>
    `;
}

// Handle modal chart upload
function handleModalChartUpload(event) {
    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();
        
        reader.onload = function(e) {
            // Show preview
            document.getElementById('modalPreview').style.display = 'block';
            document.getElementById('modalPreviewImage').src = e.target.result;
            
            // Store for analysis
            window.modalChartData = e.target.result;
        };
        
        reader.readAsDataURL(file);
    }
}

// Close upload modal
function closeUploadModal() {
    const modal = document.getElementById('uploadModal');
    if (modal) {
        modal.classList.remove('show');
        // Reset modal
        document.getElementById('modalPreview').style.display = 'none';
        document.getElementById('modalChartInput').value = '';
        window.modalChartData = null;
    }
}

// Show upload modal
function showUploadModal() {
    const modal = document.getElementById('uploadModal');
    if (modal) {
        modal.classList.add('show');
    }
}

// Analyze chart from modal
function analyzeModalChart() {
    if (!window.modalChartData) {
        alert('Please upload a chart first');
        return;
    }
    
    // Close modal
    closeUploadModal();
    
    // Switch to upload section with the chart data
    window.uploadedChartData = window.modalChartData;
    showSection('upload');
    
    // Trigger the upload section to show preview
    setTimeout(() => {
        if (document.getElementById('uploadArea')) {
            document.getElementById('uploadArea').style.display = 'none';
        }
        if (document.getElementById('previewArea')) {
            document.getElementById('previewArea').style.display = 'block';
            document.getElementById('chartPreview').src = window.uploadedChartData;
        }
    }, 100);
}