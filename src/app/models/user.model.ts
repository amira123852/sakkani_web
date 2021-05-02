export interface User{
  _id?: string;
  nom: string;
  email: string;
  password: string;
  telephone?: string;
  ville?:string;
  datenaissance?: string;
  role: string;
  isGranted: boolean;
  token?: string;
}





