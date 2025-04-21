
    function toggleAccordion(id, btn) {
      const allSections = document.querySelectorAll('#sidebarNav div > div');
      const allIcons = document.querySelectorAll('#sidebarNav .toggle-icon');
  
      allSections.forEach(section => {
        if (section.id !== id) section.classList.add('hidden');
      });
  
      allIcons.forEach(icon => {
        if (btn.querySelector('.toggle-icon') !== icon) icon.textContent = '+';
      });
  
      const current = document.getElementById(id);
      const icon = btn.querySelector('.toggle-icon');
  
      if (current.classList.contains('hidden')) {
        current.classList.remove('hidden');
        icon.textContent = '–';
      } else {
        current.classList.add('hidden');
        icon.textContent = '+';
      }
    }
