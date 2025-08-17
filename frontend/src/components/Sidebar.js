function createSidebar() {
    return `
        <!-- Sidebar -->
        <aside class="sidebar">
            <div class="logo-section">
                <a href="/" class="logo">
                    <span class="logo-icon">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="3" y="10" width="4" height="11" rx="1" fill="url(#grad1)"/>
                            <rect x="10" y="3" width="4" height="18" rx="1" fill="url(#grad2)"/>
                            <rect x="17" y="7" width="4" height="14" rx="1" fill="url(#grad3)"/>
                            <defs>
                                <linearGradient id="grad1" x1="5" y1="10" x2="5" y2="21">
                                    <stop offset="0%" stop-color="#3B82F6"/>
                                    <stop offset="100%" stop-color="#1E40AF"/>
                                </linearGradient>
                                <linearGradient id="grad2" x1="12" y1="3" x2="12" y2="21">
                                    <stop offset="0%" stop-color="#8B5CF6"/>
                                    <stop offset="100%" stop-color="#6D28D9"/>
                                </linearGradient>
                                <linearGradient id="grad3" x1="19" y1="7" x2="19" y2="21">
                                    <stop offset="0%" stop-color="#EC4899"/>
                                    <stop offset="100%" stop-color="#DB2777"/>
                                </linearGradient>
                            </defs>
                        </svg>
                    </span>
                    <span class="logo-text">ChartMaster</span>
                    <span class="logo-ai">AI</span>
                </a>
            </div>
            
            <nav class="nav-menu">
                <a href="#" class="nav-item nav-item-premium active" onclick="showSection('analyses')" data-section="analyses">
                    <span class="nav-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M3 3v18h18"/>
                            <path d="M18 9l-5 5-4-4-3 3"/>
                            <circle cx="18" cy="9" r="2" fill="currentColor" stroke="none" class="icon-dot"/>
                            <circle cx="13" cy="14" r="2" fill="currentColor" stroke="none" class="icon-dot"/>
                            <circle cx="9" cy="10" r="2" fill="currentColor" stroke="none" class="icon-dot"/>
                            <circle cx="6" cy="13" r="2" fill="currentColor" stroke="none" class="icon-dot"/>
                        </svg>
                    </span>
                    <span>Analyses</span>
                </a>
                <a href="#" class="nav-item nav-item-premium" onclick="showSection('upload')" data-section="upload">
                    <span class="nav-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
                            <polyline points="17 8 12 3 7 8" class="upload-arrow"/>
                            <line x1="12" y1="3" x2="12" y2="15" class="upload-line"/>
                            <circle cx="12" cy="11" r="1" fill="currentColor" class="upload-dot"/>
                        </svg>
                    </span>
                    <span>Upload Chart</span>
                </a>
                <a href="#" class="nav-item nav-item-premium" onclick="showSection('simple')" data-section="simple">
                    <span class="nav-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <circle cx="12" cy="12" r="10" class="mode-circle"/>
                            <path d="M8 12h4M12 8v4" class="mode-cross"/>
                            <circle cx="12" cy="12" r="1" fill="currentColor" class="mode-dot"/>
                        </svg>
                    </span>
                    <span>Simple Mode</span>
                </a>
                <a href="#" class="nav-item nav-item-premium" onclick="showSection('scalping')" data-section="scalping">
                    <span class="nav-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M22 12h-6l-3 9L9 3l-3 9H2" class="scalp-line"/>
                            <circle cx="16" cy="12" r="2" fill="currentColor" class="scalp-dot-1"/>
                            <circle cx="6" cy="12" r="2" fill="currentColor" class="scalp-dot-2"/>
                        </svg>
                    </span>
                    <span>Scalping Mode</span>
                </a>
                <a href="#" class="nav-item nav-item-premium nav-item-professional" onclick="showSection('professional')" data-section="professional">
                    <span class="nav-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M12 2L2 7l10 5 10-5-10-5z" class="pro-top"/>
                            <path d="M2 17l10 5 10-5M2 12l10 5 10-5" class="pro-layers"/>
                            <circle cx="12" cy="12" r="1" fill="currentColor" class="pro-core"/>
                        </svg>
                    </span>
                    <span class="nav-text-wrapper">
                        <span class="nav-text">Professional Mode</span>
                        <span class="pro-badge">PRO</span>
                    </span>
                </a>
                <a href="#" class="nav-item nav-item-premium" onclick="showSection('settings')" data-section="settings">
                    <span class="nav-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="settings-gear"/>
                        </svg>
                    </span>
                    <span>Settings</span>
                </a>
            </nav>
            
            <!-- Footer Links -->
            <div class="sidebar-footer">
                <div class="footer-links">
                    <a href="#" class="footer-link" onclick="showSection('updates')">
                        <span>What's new</span>
                    </a>
                    <a href="#" class="footer-link" onclick="showSection('support')">
                        <span>Support</span>
                    </a>
                    <a href="#" class="footer-link" onclick="showSection('guide')">
                        <span>Guide</span>
                    </a>
                    <a href="#" class="footer-link" onclick="showSection('plans')">
                        <span>Plans</span>
                    </a>
                </div>
                
                <!-- User Profile Section -->
                <div class="user-profile">
                    <div class="user-avatar" id="userAvatar">U</div>
                    <div class="user-info">
                        <div class="user-name">User</div>
                        <div class="user-plan">Premium Plan</div>
                    </div>
                    <button class="logout-btn" onclick="logout()">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                            <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4M16 17l5-5-5-5M21 12H9" 
                                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                </div>
            </div>
        </aside>
        
        <style>
            /* Sidebar - White Mode with Premium Design */
            .sidebar {
                width: 280px;
                height: 100vh;
                background: #ffffff;
                border-right: 1px solid #e5e7eb;
                display: flex;
                flex-direction: column;
                position: relative;
                overflow: hidden;
                /* Sehr subtiles Hintergrundmuster */
                background-image: 
                    radial-gradient(circle at 20% 80%, rgba(99, 102, 241, 0.03) 0%, transparent 50%),
                    radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.03) 0%, transparent 50%),
                    radial-gradient(circle at 40% 40%, rgba(236, 72, 153, 0.02) 0%, transparent 50%);
            }

            /* Logo Section mit verbessertem Design */
            .logo-section {
                padding: 24px;
                border-bottom: 1px solid #e5e7eb;
                background: #fafbfc;
                position: relative;
            }

            .logo {
                display: flex;
                align-items: center;
                gap: 8px;
                text-decoration: none;
                transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            }

            .logo:hover {
                transform: translateX(4px);
            }

            .logo-icon {
                display: flex;
                align-items: center;
                justify-content: center;
                filter: drop-shadow(0 2px 4px rgba(99, 102, 241, 0.15));
            }

            .logo-icon svg {
                /* animation: float 6s ease-in-out infinite; */ /* LOGO ANIMATION ENTFERNT */
            }

            .logo-text {
                font-size: 24px;
                font-weight: 800;
                color: #111827;
                letter-spacing: -0.5px;
            }

            .logo-ai {
                font-size: 24px;
                font-weight: 900;
                background: linear-gradient(135deg, #3B82F6 0%, #8B5CF6 50%, #EC4899 100%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
                margin-left: -2px;
            }

            /* Navigation */
            .nav-menu {
                flex: 1;
                padding: 12px;
                overflow-y: auto;
            }

            .nav-item {
                display: flex;
                align-items: center;
                gap: 14px;
                padding: 14px 20px;
                border-radius: 12px;
                color: #374151;
                text-decoration: none;
                margin-bottom: 6px;
                transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                font-weight: 600;
                position: relative;
                overflow: hidden;
                cursor: pointer;
                width: 100%;
                background: transparent;
                border: none;
                -webkit-tap-highlight-color: transparent;
                user-select: none;
                z-index: 1;
            }

            /* Fix für verschwindenden Text beim Hover */
            .nav-item span {
                transition: color 0.3s ease;
                pointer-events: none;
                color: #374151 !important;
                position: relative;
                z-index: 20;
                display: inline-block;
            }

            .nav-item:hover span {
                color: #111827 !important;
            }

            .nav-item.active span {
                color: white !important;
            }

            /* Special wrapper for professional mode */
            .nav-text-wrapper {
                display: flex !important;
                align-items: center;
                gap: 8px;
                flex: 1;
                min-width: 0;
            }

            .nav-text {
                white-space: nowrap;
            }

            /* Icon styling */
            .nav-icon {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 20px;
                height: 20px;
                transition: transform 0.3s ease;
                z-index: 2;
                flex-shrink: 0;
            }

            .nav-icon svg {
                width: 100%;
                height: 100%;
            }

            /* Unterschiedliche Farben für jede Section */
            .nav-item[data-section="analyses"] .nav-icon svg {
                stroke: #3B82F6; /* Blau */
            }
            
            .nav-item[data-section="upload"] .nav-icon svg {
                stroke: #10B981; /* Grün */
            }
            
            .nav-item[data-section="simple"] .nav-icon svg {
                stroke: #06B6D4; /* Cyan */
            }
            
            .nav-item[data-section="scalping"] .nav-icon svg {
                stroke: #F59E0B; /* Orange */
            }
            
            .nav-item[data-section="professional"] .nav-icon svg {
                stroke: #8B5CF6; /* Lila */
            }
            
            .nav-item[data-section="settings"] .nav-icon svg {
                stroke: #EC4899; /* Pink */
            }

            /* Hover-Effekte anpassen */
            .nav-item:hover[data-section="analyses"] .nav-icon svg {
                stroke: #2563EB;
                filter: drop-shadow(0 0 8px rgba(59, 130, 246, 0.5));
            }
            
            .nav-item:hover[data-section="upload"] .nav-icon svg {
                stroke: #059669;
                filter: drop-shadow(0 0 8px rgba(16, 185, 129, 0.5));
            }
            
            .nav-item:hover[data-section="simple"] .nav-icon svg {
                stroke: #0891B2;
                filter: drop-shadow(0 0 8px rgba(6, 182, 212, 0.5));
            }
            
            .nav-item:hover[data-section="scalping"] .nav-icon svg {
                stroke: #D97706;
                filter: drop-shadow(0 0 8px rgba(245, 158, 11, 0.5));
            }
            
            .nav-item:hover[data-section="professional"] .nav-icon svg {
                stroke: #7C3AED;
                filter: drop-shadow(0 0 8px rgba(139, 92, 246, 0.5));
            }
            
            .nav-item:hover[data-section="settings"] .nav-icon svg {
                stroke: #DB2777;
                filter: drop-shadow(0 0 8px rgba(236, 72, 153, 0.5));
            }

            /* Active state - Icons werden weiß */
            .nav-item.active .nav-icon svg {
                stroke: white !important;
                filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2)) !important;
            }

            .nav-item::before {
                content: '';
                position: absolute;
                top: 0;
                left: -100%;
                width: 100%;
                height: 100%;
                background: linear-gradient(90deg, transparent, rgba(99, 102, 241, 0.05), transparent);
                transition: left 0.6s;
            }

            .nav-item:hover::before {
                left: 100%;
            }

            .nav-item:hover {
                background: #f3f4f6;
                transform: translateX(4px);
            }

            .nav-item:hover .nav-icon {
                transform: scale(1.1) rotate(5deg);
            }

            /* Active state für ALLE Sections - ohne Ausnahme */
            .nav-item.active {
                background: linear-gradient(135deg, #3B82F6 0%, #8B5CF6 50%, #EC4899 100%) !important;
                color: white !important;
                font-weight: 600;
                box-shadow: 0 4px 16px rgba(99, 102, 241, 0.3);
                position: relative;
                overflow: hidden;
            }

            .nav-item.active .nav-icon {
                animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
            }

            @keyframes pulse {
                0%, 100% {
                    opacity: 1;
                    transform: scale(1);
                }
                50% {
                    opacity: .8;
                    transform: scale(0.95);
                }
            }

            /* Shine effect on active button */
            .nav-item.active::after {
                content: '';
                position: absolute;
                top: -50%;
                left: -50%;
                width: 200%;
                height: 200%;
                background: linear-gradient(
                    45deg,
                    transparent 30%,
                    rgba(255, 255, 255, 0.2) 50%,
                    transparent 70%
                );
                transform: rotate(45deg);
                animation: shine 3s infinite;
                z-index: 0;
                pointer-events: none;
            }

            @keyframes shine {
                0% {
                    transform: translateX(-100%) translateY(-100%) rotate(45deg);
                }
                100% {
                    transform: translateX(100%) translateY(100%) rotate(45deg);
                }
            }

            /* Kein schwarzes Blinken beim Klicken */
            .nav-item:active {
                transform: translateX(4px) scale(0.98);
            }

            /* Verhindert Farbwechsel beim Klick */
            .nav-item:active:not(.active) span {
                color: #374151 !important;
            }

            .nav-item:active.active span {
                color: white !important;
            }

            /* Zusätzliche Sicherheit gegen unerwünschte Styles */
            .nav-item:focus {
                outline: none;
            }

            .nav-item:focus:not(.active) span {
                color: #374151 !important;
            }

            /* Hochprofessioneller PRO Badge */
            .pro-badge {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                padding: 2px 8px;
                font-size: 10px;
                font-weight: 700;
                letter-spacing: 0.5px;
                border-radius: 4px;
                background: linear-gradient(135deg, #8B5CF6 0%, #6366F1 100%);
                color: white !important; /* WICHTIG: Immer weiß */
                box-shadow: 0 2px 4px rgba(139, 92, 246, 0.3);
                margin-left: auto;
                flex-shrink: 0;
                position: relative;
                overflow: hidden;
            }

            /* Stelle sicher, dass die Farbe wirklich überall weiß bleibt */
            .nav-item .pro-badge,
            .nav-item:hover .pro-badge,
            .nav-item.active .pro-badge,
            .nav-item-professional .pro-badge {
                color: white !important;
            }

            /* Subtiler Glow für Badge */
            .pro-badge::before {
                content: '';
                position: absolute;
                inset: -1px;
                background: linear-gradient(135deg, #8B5CF6, #6366F1);
                border-radius: 4px;
                opacity: 0;
                z-index: -1;
                transition: opacity 0.3s ease;
                filter: blur(8px);
            }

            .nav-item:hover .pro-badge::before {
                opacity: 0.5;
            }

            /* Badge bleibt lila wenn active */
            .nav-item.active .pro-badge {
                background: linear-gradient(135deg, #8B5CF6 0%, #6366F1 100%);
                color: white !important;
                box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
            }

            /* Verbesserte Mode Icons */
            .mode-circle {
                animation: pulse-ring 3s ease-out infinite;
            }

            @keyframes pulse-ring {
                0%, 100% { 
                    stroke-width: 2;
                    opacity: 1;
                }
                50% { 
                    stroke-width: 3;
                    opacity: 0.8;
                }
            }

            .scalp-line {
                stroke-dasharray: 100;
                stroke-dashoffset: 100;
                animation: draw-line 2s ease-in-out infinite;
            }

            @keyframes draw-line {
                0% { stroke-dashoffset: 100; }
                50% { stroke-dashoffset: 0; }
                100% { stroke-dashoffset: -100; }
            }

            .pro-top, .pro-layers {
                animation: layer-float 3s ease-in-out infinite;
            }

            .pro-layers {
                animation-delay: 0.5s;
            }

            @keyframes layer-float {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-2px); }
            }

            /* Icon-spezifische Animationen */
            .upload-arrow {
                animation: bounce 2s ease-in-out infinite;
            }

            @keyframes bounce {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-2px); }
            }

            /* Settings Icon - Rotating Gear */
            .nav-item[data-section="settings"] .settings-gear {
                transform-origin: center;
                animation: slowSpin 30s linear infinite;
            }
            
            .nav-item:hover[data-section="settings"] .settings-gear {
                animation: slowSpin 3s linear infinite;
            }
            
            @keyframes slowSpin {
                from { transform: rotate(0deg); }
                to { transform: rotate(360deg); }
            }
            
            /* Active state - alle Fills werden weiß */
            .nav-item.active .icon-dot,
            .nav-item.active .upload-dot,
            .nav-item.active .mode-dot,
            .nav-item.active .scalp-dot-1,
            .nav-item.active .scalp-dot-2,
            .nav-item.active .pro-core {
                fill: white !important;
            }

            /* Fill-Farben entsprechend anpassen */
            .nav-item[data-section="analyses"] .icon-dot {
                fill: #3B82F6;
            }
            
            .nav-item[data-section="upload"] .upload-dot {
                fill: #10B981;
            }
            
            .nav-item[data-section="simple"] .mode-dot {
                fill: #06B6D4;
            }
            
            .nav-item[data-section="scalping"] .scalp-dot-1,
            .nav-item[data-section="scalping"] .scalp-dot-2 {
                fill: #F59E0B;
            }
            
            .nav-item[data-section="professional"] .pro-core {
                fill: #8B5CF6;
            }

            .sidebar-footer {
                padding: 16px;
                border-top: 1px solid #e5e7eb;
                background: #fafbfc;
            }
            
            .footer-links {
                margin-bottom: 16px;
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 8px;
            }
            
            .footer-link {
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 10px 8px;
                color: #374151;
                text-decoration: none;
                font-size: 13px;
                font-weight: 600;
                transition: all 0.2s ease;
                border-radius: 8px;
                position: relative;
                overflow: hidden;
                -webkit-tap-highlight-color: transparent;
                background: white;
                border: 1px solid #e5e7eb;
            }

            .footer-link span {
                position: relative;
                z-index: 1;
            }

            .footer-link::before {
                content: '';
                position: absolute;
                top: 50%;
                left: 50%;
                width: 0;
                height: 0;
                background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1));
                border-radius: 50%;
                transform: translate(-50%, -50%);
                transition: width 0.6s, height 0.6s;
            }

            .footer-link:hover::before {
                width: 150px;
                height: 150px;
            }
            
            .footer-link:hover {
                color: #4338ca;
                border-color: rgba(99, 102, 241, 0.3);
                transform: translateY(-2px);
                box-shadow: 0 4px 12px rgba(99, 102, 241, 0.1);
            }
            
            /* User Profile with Premium Styling */
            .user-profile {
                display: flex;
                align-items: center;
                gap: 12px;
                padding: 12px;
                background: white;
                border-radius: 10px;
                border: 1px solid #e5e7eb;
                transition: all 0.3s ease;
            }

            .user-profile:hover {
                border-color: #d1d5db;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
            }
            
            .user-avatar {
                width: 40px;
                height: 40px;
                border-radius: 50%;
                background: linear-gradient(135deg, #3B82F6 0%, #8B5CF6 50%, #EC4899 100%);
                display: flex;
                align-items: center;
                justify-content: center;
                color: white;
                font-weight: 700;
                font-size: 16px;
                box-shadow: 0 2px 8px rgba(99, 102, 241, 0.2);
                position: relative;
                overflow: hidden;
            }

            .user-avatar::after {
                content: '';
                position: absolute;
                top: -50%;
                right: -50%;
                width: 100%;
                height: 100%;
                background: linear-gradient(135deg, transparent, rgba(255, 255, 255, 0.3), transparent);
                transform: rotate(45deg);
                animation: shimmer 3s ease-in-out infinite;
            }

            @keyframes shimmer {
                0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
                100% { transform: translateX(200%) translateY(200%) rotate(45deg); }
            }
            
            .user-info {
                flex: 1;
            }
            
            .user-name {
                font-size: 14px;
                font-weight: 600;
                color: #111827;
                line-height: 1.2;
            }
            
            .user-plan {
                font-size: 12px;
                color: #6366f1;
                font-weight: 500;
            }
            
            .logout-btn {
                width: 36px;
                height: 36px;
                border: none;
                background: #fee2e2;
                color: #ef4444;
                border-radius: 8px;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: all 0.2s ease;
                -webkit-tap-highlight-color: transparent;
            }
            
            .logout-btn:hover {
                background: #ef4444;
                color: white;
                transform: scale(1.05);
            }

            .logout-btn:active {
                transform: scale(0.95);
            }
            
            /* Scrollbar */
            .nav-menu::-webkit-scrollbar {
                width: 6px;
            }
            
            .nav-menu::-webkit-scrollbar-track {
                background: #f3f4f6;
                border-radius: 3px;
            }
            
            .nav-menu::-webkit-scrollbar-thumb {
                background: #d1d5db;
                border-radius: 3px;
            }
            
            .nav-menu::-webkit-scrollbar-thumb:hover {
                background: #9ca3af;
            }
            
            /* Mobile */
            @media (max-width: 768px) {
                .sidebar {
                    position: fixed;
                    left: -280px;
                    z-index: 1000;
                    transition: left 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    box-shadow: 2px 0 12px rgba(0, 0, 0, 0.1);
                }
                
                .sidebar.mobile-active {
                    left: 0;
                }
            }

            /* Absolute Sicherheit für weißen Badge-Text */
            .pro-badge {
                color: white !important;
                -webkit-text-fill-color: white !important;
            }
        </style>
    `;
}