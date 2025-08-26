document.addEventListener("DOMContentLoaded", () => {
  
    const isHostConfirmed = true; 
  
    if (isHostConfirmed) {
      console.log("Host confirmation: Uganda is ready for CHAN 2025!");
    } else {
      console.log("Host confirmation: The host country is yet to be confirmed.");
    }
  
    console.log("Functions");
  
    function createMatchAnnouncement(team1, team2) {
      return `Get ready for the epic clash: ${team1} vs. ${team2}!`;
    }
  
    const announcement = createMatchAnnouncement("Uganda", "Kenya");
    console.log(announcement); 
  
    function toggleCardColor(element) {
      element.classList.toggle("highlight");
    }
    
    const style = document.createElement('style');
    style.innerHTML = `
    .highlight {
      background-color: #ffd633 !important; 
      transform: scale(1.03);
      transition: transform 0.3s ease, background-color 0.3s ease;
    }
    `;
    document.head.appendChild(style);
  
    console.log("Loops");
    const matchListItems = document.querySelectorAll("#match-list li");
  
    matchListItems.forEach((item) => {
      item.textContent = `⚽ Match: ${item.textContent}`;
      item.style.fontWeight = "bold"; 
    });
    const infoCards = document.querySelectorAll(".card");
  
    for (let i = 0; i < infoCards.length; i++) {
      const card = infoCards[i];
      card.addEventListener("click", () => {
        toggleCardColor(card);
        console.log(`Card ${i + 1} was clicked!`);
      });
    }
    console.log("Part 4: DOM Interactions");
  
    const mainHeader = document.getElementById("main-header");
    if (mainHeader) {
      mainHeader.textContent = "Welcome to CHAN 2025!"; 
    }
  
    const ticketButton = document.getElementById("ticket-btn");
    if (ticketButton) {
      ticketButton.addEventListener("click", () => {
        alert("Tickets will be available soon. Stay tuned!");
        ticketButton.textContent = "Coming Soon!"; 
      });
    }
    
    console.log("JavaScript setup is complete. The page is now interactive!");
  });