export class Maison {
  _id: string;
  type_immobilier: string;
  description: string;
  Photo: string;
  prix: string;
  constructor(type_immobilier: string,description: string,Photo: string,prix: string){
    this.type_immobilier= type_immobilier;
    this.description = description;
    this.Photo= Photo;
    this.prix=prix;
  }
}
