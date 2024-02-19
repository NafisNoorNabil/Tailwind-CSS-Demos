const tabs = document.querySelectorAll('.tab')
const panels = document.querySelectorAll('.panel')

// Tabs menu event listener
tabs.forEach((tab) => tab.addEventListener('click', onTabClick))
function onTabClick(e) {
  // Deactivate all tabs
    tabs.forEach((tab) => {
        tab.children[0].classList.remove(
            'border-slate-600',
            'border-b-4',
            'md:border-b-0',
            
        )})
// Hide all panels
    panels.forEach((panel) => panel.classList.add('hidden'))
// Activate a new tab and panel based on the target
    e.target.classList.add('border-slate-600', 'border-b-4','dark:border-white')
    const classString = e.target.getAttribute('data-target')
    document
        .getElementById('panels')
        .getElementsByClassName(classString)[0]
        .classList.remove('hidden')
}




const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');
// Function to toggle between light and dark mode
function toggleTheme() {
    document.documentElement.classList.toggle('dark');
    themeToggleDarkIcon.classList.toggle('hidden');
    themeToggleLightIcon.classList.toggle('hidden');
}
// Event listener for dark mode button
themeToggleDarkIcon.addEventListener('click', function() {
    toggleTheme();
});
// Event listener for light mode button
themeToggleLightIcon.addEventListener('click', function() {
    
    toggleTheme();
});


