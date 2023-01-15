export class Produit{
    name:string;
    description:string[];
    isBuyed:boolean;
    imgUrl:string;

    constructor(name:string,description:string[],imageUrl:string) {
        this.name=name;
        this.isBuyed=false;
        this.description=description=[];
        this.imgUrl=imageUrl;
    }
}