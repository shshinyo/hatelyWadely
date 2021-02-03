export interface loginUser {
  id?: number;
  email: string;
  password: string;
}

export interface newUser extends loginUser {
  name?: string;
  phone?: string;
  location?: string;
  confirmPassword?: string;
}
