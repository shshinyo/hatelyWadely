import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { Subject } from "rxjs";
import { loginUser, newUser } from "../Interfaces/authUser";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  currentUser: newUser;
  redirectUrl;

  errorMessageSubject = new Subject<string>();
  errorMessage$ = this.errorMessageSubject.asObservable();

  get isLoggedIn(): boolean {
    return !!this.currentUser;
  }
  constructor(private router: Router, private toastr: ToastrService) {}

  login(email: string, password: string) {
    const user = localUsers.find((u) => u.email === email && u.password === password);

    if (user) {
      this.currentUser = {
        id: user.id,
        name: user.name,
        phone: user.phone,
        location: user.location,
        email: user.email,
        password: user.password,
      };
      this.toastr.success("تم تسجيل الدخول بنجاح");
      this.errorMessageSubject.next("");
      console.log(this.isLoggedIn);
    } else {
      this.currentUser = null;
      this.errorMessageSubject.next("البريد الذي ادخلته او كلمة المرور غير صحيحة.");
      this.toastr.error("حدث خطأ اثناء التسجيل.");
    }
  }

  logOut(): void {
    this.currentUser = null;
  }
}

export const localUsers: newUser[] = [
  {
    id: 1,
    name: "mohamed eldeeb",
    phone: "01098799837",
    location: "كوم حمادة",
    email: "mohamed.eldeib5@gmail.com",
    password: "hamo2222002",
  },
  {
    id: 2,
    name: "eldeeb",
    phone: "01098799837",
    location: "كوم حمادة",
    email: "moahmned.eldeeb@gmail.com",
    password: "hamo012548",
  },
  {
    id: 3,
    name: "soso",
    phone: "01098799837",
    location: "كوم حمادة",
    email: "moahmned.eldeiib@gmail.com",
    password: "hamo012548",
  },
];
