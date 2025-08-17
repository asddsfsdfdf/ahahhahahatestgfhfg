// Main JavaScript file for ChartMaster AI

// Show/Hide Upgrade Modal
function showUpgradeModal() {
    const modal = document.getElementById('upgradeModal');
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Prevent scrolling
}

function closeUpgradeModal() {
    const modal = document.getElementById('upgradeModal');
    modal.style.display = 'none';
    document.body.style.overflow = ''; // Re-enable scrolling
}

// Close modal on ESC key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeUpgradeModal();
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'start' 
            });
        }
    });
});

// Header scroll effect
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    const header = document.querySelector('.header');
    
    if (currentScroll > lastScroll && currentScroll > 100) {
        header.style.transform = 'translateY(-100%)';
    } else {
        header.style.transform = 'translateY(0)';
    }
    
    lastScroll = currentScroll;
});

// Toggle FAQ items
function toggleFAQ(element) {
    const faqItem = element.parentElement;
    const wasActive = faqItem.classList.contains('active');
    
    // Close all FAQ items
    document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // Open clicked item if it wasn't active
    if (!wasActive) {
        faqItem.classList.add('active');
    }
}

// Toggle Step items
function toggleStep(element) {
    const wasActive = element.classList.contains('active');
    
    // Close all other steps
    document.querySelectorAll('.step').forEach(step => {
        if (step !== element) {
            step.classList.remove('active');
        }
    });
    
    // Toggle current step
    if (!wasActive) {
        element.classList.add('active');
    } else {
        element.classList.remove('active');
    }
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', function() {
    // Add any initialization code here
    console.log('ChartMaster AI loaded successfully');
});