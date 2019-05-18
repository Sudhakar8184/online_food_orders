export class Post {
    public title: string;
    public image : string;
    public description : string;
    public price : string;
    public category: String;
    public location:string;
    constructor(title : string,image :string,description:string,price:string,category: string,location: string){
       this.title = title;
       this.image = image;
       this.description = description;
       this.price = price;
       this.category = category;
    }
    public static create(): Post{
    return new Post(null,null,null,null,null,null);
    }
   }