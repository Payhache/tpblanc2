export class Message {
    id:number;
    auteur:string;
    titre:string;
    message:string;
    img:string;
    constructor(id:number=null,auteur:string=null,titre:string=null,message:string=null,img:string=null) {
        this.id = id;
        this.auteur = auteur;
        this.titre = titre;
        this.message = message;
        this.img = img;
    }
}
