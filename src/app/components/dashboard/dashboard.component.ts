import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Detail {
  image: string;
  description: string;
  contact: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userName: string = '';
  userDetailsList: Detail[] = [];
  isModalOpen: boolean = false;
  detail: Detail = { image: '', description: '', contact: '' };

  constructor(private router: Router) {}

  ngOnInit(): void {
    const isAuthenticated = localStorage.getItem('authenticated') === 'true';
    this.userName = localStorage.getItem('username') || '';

    if (!isAuthenticated) {
      this.router.navigate(['/login']);
      return;
    }

    this.loadUserDetailsList();
  }

  logout(): void {
    if (confirm(`Do you want to logout?`)) {
      localStorage.removeItem('authenticated');
      this.router.navigate(['/login']);
    }
  }

  openModal(): void {
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false;
  }

  onFileChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      this.resizeImage(file, 300, 200).then(resizedImage => {
        this.detail.image = resizedImage;
      });
    }
  }

  onSubmit(): void {
    this.userDetailsList.push({ ...this.detail });
    this.saveUserDetailsList();
    this.closeModal();
    this.detail = { image: '', description: '', contact: '' };
    alert("Your data successfully submitted");
  }

  resizeImage(file: File, width: number, height: number): Promise<string> {
    return new Promise(resolve => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      const image = new Image();

      image.onload = () => {
        canvas.width = width;
        canvas.height = height;
        ctx?.drawImage(image, 0, 0, width, height);
        resolve(canvas.toDataURL('image/jpeg'));
      };

      image.src = URL.createObjectURL(file);
    });
  }

  addDetailToPage(detail: Detail): void {
    this.userDetailsList.push(detail);
    this.saveUserDetailsList();
  }

  deleteDetail(index: number): void {
    if (confirm('Are you sure you want to delete this item?')) {
      this.userDetailsList.splice(index, 1);
      this.saveUserDetailsList();
    }
  }

  private loadUserDetailsList(): void {
    this.userDetailsList = JSON.parse(localStorage.getItem(`${this.userName}_detailsList`) || '[]');
  }

  private saveUserDetailsList(): void {
    localStorage.setItem(`${this.userName}_detailsList`, JSON.stringify(this.userDetailsList));
  }
}
