import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'agro-connect-hub';

  highlightSearch(event: Event): void {
    event.preventDefault();
    const searchTerm = (document.getElementById('search-input') as HTMLInputElement).value.toLowerCase();
    const detailsContainer = document.getElementById('details-container');

    if (detailsContainer) {
      const highlightedElements = detailsContainer.querySelectorAll('.highlight');
      highlightedElements.forEach(el => {
        el.classList.remove('highlight');
        if (el instanceof HTMLElement) {
          el.outerHTML = el.innerText; // Remove the span element but keep the text
        }
      });

      if (searchTerm) {
        const elementsToSearch = detailsContainer.querySelectorAll('.card-title, .card-text');
        elementsToSearch.forEach(el => {
          if (el instanceof HTMLElement) {
            const regex = new RegExp(`(${searchTerm})`, 'gi');
            el.innerHTML = el.innerHTML.replace(regex, `<span class="highlight">$1</span>`);
          }
        });

        const firstHighlight = detailsContainer.querySelector('.highlight');
        if (firstHighlight && firstHighlight instanceof HTMLElement) {
          firstHighlight.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    }
  }
}
