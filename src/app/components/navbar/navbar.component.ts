import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  highlightSearch(event: Event): void {
    event.preventDefault(); // Prevent the form from submitting

    // Get the search term
    const searchTerm = (document.getElementById('search-input') as HTMLInputElement).value.toLowerCase();

    // Remove previous highlights
    const detailsContainer = document.getElementById('details-container');
    if (detailsContainer) {
      const highlightedElements = detailsContainer.querySelectorAll('.highlight');
      highlightedElements.forEach(el => {
        el.classList.remove('highlight');
        if (el instanceof HTMLElement) {
          el.outerHTML = el.innerText; // Remove the span element but keep the text
        }
      });

      // Highlight new search terms
      if (searchTerm) {
        const elementsToSearch = detailsContainer.querySelectorAll('.card-title, .card-text');
        elementsToSearch.forEach(el => {
          if (el instanceof HTMLElement) {
            const regex = new RegExp(`(${searchTerm})`, 'gi');
            el.innerHTML = el.innerHTML.replace(regex, `<span class="highlight">$1</span>`);
          }
        });

        // Scroll to the first highlighted element
        const firstHighlight = detailsContainer.querySelector('.highlight');
        if (firstHighlight && firstHighlight instanceof HTMLElement) {
          firstHighlight.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    }
  }

}
