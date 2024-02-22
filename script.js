"use strict";

// Opens sidebar when clicked
function openNav() {
    document.getElementById("mySidebar").style.width = "15.625rem";
    document.getElementById("main").style.paddingRight = "15.625rem";
    document.getElementById("button").classList.add("hide");
  
    //close sidebar when clicking outside
    document.addEventListener("click", closeSidebarOutside);
  }
  
  // Closes sidebar when clicked
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.paddingRight = "0";
    document.getElementById("button").classList.remove("hide");
  
    // Close sidebar when clicking outside
    document.removeEventListener("click", closeSidebarOutside);
  }
  
  // Close sidebar when clicking outside
      function closeSidebarOutside(event) {
        const sidebar = document.getElementById("mySidebar");
        const button = document.getElementById("button");
  
        if (!sidebar.contains(event.target) && event.target !== button) {
          closeNav();
        }
      }
 
  
// Toggle dropdown
  function toggleListItem(toggleButton) {
    const listItem = toggleButton.parentElement;
    const content = listItem.querySelector('.content');
    
    // Toggle the 'active' class on the list item
    listItem.classList.toggle('active');
    
    // Toggle the display of the content
    if (content.style.display === 'none') {
      content.style.display = 'block';
    } else {
      content.style.display = 'none';
    }
  }
  