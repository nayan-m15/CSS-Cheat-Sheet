// Check for saved dark mode preference or default to light mode
        const currentMode = localStorage.getItem('darkMode');
        const modeIcon = document.getElementById('mode-icon');
        const modeText = document.getElementById('mode-text');
        
        if (currentMode === 'enabled') {
            document.body.classList.add('dark-mode');
            modeIcon.textContent = '☀️';
            modeText.textContent = 'Light Mode';
        }
        
        function toggleDarkMode() {
            document.body.classList.toggle('dark-mode');
            
            if (document.body.classList.contains('dark-mode')) {
                localStorage.setItem('darkMode', 'enabled');
                modeIcon.textContent = '☀️';
                modeText.textContent = 'Light Mode';
            } else {
                localStorage.setItem('darkMode', 'disabled');
                modeIcon.textContent = '🌙';
                modeText.textContent = 'Dark Mode';
            }
        }