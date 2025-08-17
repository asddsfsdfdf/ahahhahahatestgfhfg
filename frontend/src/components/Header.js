// Header Component
function createHeader() {
    return `
        <header class="content-header">
            <h1 class="page-title" id="pageTitle">My Analyses</h1>
            
            <div class="header-actions">
                <div class="search-box">
                    <span class="search-icon">🔍</span>
                    <input type="text" class="search-input" placeholder="Search analyses..." id="searchInput">
                </div>
                
                <div class="user-menu">
                    <div class="user-avatar" id="userAvatar">L</div>
                </div>
            </div>
        </header>
    `;
}