// show-details.component.ts
import { Component, OnInit } from '@angular/core';
import { DetailsService } from '../service/details.service';
import { Detail } from '../components/model/detail';

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.css']
})
export class ShowDetailsComponent implements OnInit {
  details: Detail[] = [];
  loading: boolean = true;
  loadingPercentage: number = 0;
  interval: any;

  constructor(private detailsService: DetailsService) { }

  ngOnInit() {
    this.simulateLoadingProgress();
    this.loadDetails();
  }

  loadDetails() {
    this.detailsService.getDetails().subscribe(
      (data: Detail[]) => {
        this.details = data;
        this.finishLoading();
      },
      (error) => {
        console.error('Error loading details:', error);
        this.finishLoading();
      }
    );
  }

  simulateLoadingProgress() {
    this.interval = setInterval(() => {
      if (this.loadingPercentage < 90) {
        this.loadingPercentage += 10;
      }
    }, 300); // Adjust the speed of the progress increase as needed
  }

  finishLoading() {
    clearInterval(this.interval);
    const finishInterval = setInterval(() => {
      if (this.loadingPercentage < 100) {
        this.loadingPercentage += 5;
      } else {
        this.loading = false;
        clearInterval(finishInterval);
      }
    }, 100);
  }

  call(mobileNumber: string) {
    window.location.href = `tel:${mobileNumber}`;
  }

  message(mobileNumber: string, description: string) {
    const messageText = encodeURIComponent("Hello Sir/Mam, I got your contact from ACH. I want resource");
    window.open(`https://wa.me/${mobileNumber}?text=${messageText} ${description}`, '_blank');
  }

  getImageUrl(detail: Detail): string {
    return `http://localhost:8081/agroch/image/${detail.id}`;
  }

  deleteDetail(id: number): void {
    this.detailsService.deleteDetail(id).subscribe(
      () => {
        console.log('Detail deleted successfully');
        this.details = this.details.filter(detail => detail.id !== id); // Remove the deleted detail from the list
      },
      error => {
        console.error('Error deleting detail:', error);
      }
    );
  }
}
