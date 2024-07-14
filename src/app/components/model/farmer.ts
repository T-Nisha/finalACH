
// farmer.ts
import { MatDialog } from "@angular/material/dialog";

export class Farmer {
  id: number;
  fullName: string;
  address: string;
  gender: string;
  phone: number;
  email:String;
  userName: string;
  password: string;

  constructor();
  constructor(id: number, fullName: string, address: string, gender: string, phone: number, email: String, userName: string, password?: string);
  constructor(id?: number, fullName?: string, address?: string, gender?: string, phone?: number, email?: String, userName?: string, password?: string) {
    this.id = id ?? 0;
    this.fullName = fullName ?? "";
    this.address = address ?? "";
    this.gender = gender ?? "";
    this.phone = phone ?? 0;
    this.email=email?? "";
    this.userName = userName ?? "";
    this.password = password ?? this.generateRandomPassword();
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
