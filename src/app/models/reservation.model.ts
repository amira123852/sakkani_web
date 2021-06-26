import { Maison } from "./maison.model";
import { User } from "./user.model";

export class Reservation {
  _id?: string;
  client: User[];
  house: Maison[];
  confirmation?: boolean;

}
