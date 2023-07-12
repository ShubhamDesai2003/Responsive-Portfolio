const darkMode = ()=>{
    const themeToggleBtns = document.querySelectorAll('#theme-toggle');

    // to get local key(theme)
    const theme = localStorage.getItem('theme');
    
    // It will addd theme is if it is true (Reload Page)
    theme && document.body.classList.add(theme);

    //handlers
    const handleThemeToggle = ()=>{
        document.body.classList.toggle('light-mode');
    
        // Local Storage
        if(document.body.classList.contains('light-mode')){
            localStorage.setItem('theme', 'light-mode');
        }else{
            localStorage.removeItem('theme');
            document.body.removeAttribute('class');
        }
    }


    // Events
    themeToggleBtns.forEach( btn =>
        btn.addEventListener('click', handleThemeToggle)
    );
}

export default darkMode;