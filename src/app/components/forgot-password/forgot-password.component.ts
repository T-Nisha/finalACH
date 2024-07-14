import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Import Router from Angular router module

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  email: string = '';

  // Inject Router into the constructor
  constructor(private router: Router) {}

  submitForm() {
    const resetToken = Math.random().toString(36).substr(2);
    localStorage.setItem('resetToken', resetToken);
    localStorage.setItem('resetEmail', this.email);

    confirm(`Your Password changed successfully. \n Your new password is: ${resetToken}. Also sent on the : ${this.email} `);
    {
      this.router.navigate(['/login']);
    }
    // Navigate to '/reset-password' route
    
  }
}
