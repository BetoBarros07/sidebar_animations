window.addEventListener('load', () => {
  const sidebarElements = document.querySelectorAll('.sidebar-open');
  sidebarElements.forEach((element, index) => {
    element.addEventListener('click', () => {
      let sidebar = element.parentElement;
      sidebar.classList.toggle('active');
      if (element.textContent === 'opened') element.textContent = 'closed';
      else element.textContent = 'opened';
    });
  });
});
