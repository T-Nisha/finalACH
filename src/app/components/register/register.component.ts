import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  togglePasswordVisibility(): void {
    const passwordInput = document.getElementById('password') as HTMLInputElement;
    const eyeIcon = document.querySelector('.password-container i.fa-eye') as HTMLElement;
    const eyeSlashIcon = document.querySelector('.password-container i.fa-eye-slash') as HTMLElement;

    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      eyeIcon.style.display = 'none';
      eyeSlashIcon.style.display = 'inline-block';
    } else {
      passwordInput.type = 'password';
      eyeIcon.style.display = 'inline-block';
      eyeSlashIcon.style.display = 'none';
    }
  }

  register(): void {
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const mobile = (document.getElementById('mobile') as HTMLInputElement).value;
    const address = (document.getElementById('address') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const username = (document.getElementById('username') as HTMLInputElement).value;
    const password = this.generateRandomPassword();

    const user = { name, mobile, address, email, password };
    localStorage.setItem(username, JSON.stringify(user));

    alert(`Registration successful!\nUsername: ${username}\nPassword: ${password}`);
    window.location.href = '/login';
  }

  generateRandomPassword(length: number = 8): string {
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let password = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      password += charset[randomIndex];
    }
    return password;
  }
}
