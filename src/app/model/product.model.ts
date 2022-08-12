export class Product{
    id:number  = 0
    name:String = ""
    price:number = 0
    image:String = "" 
    quantity:number=0
    constructor(id:number=0,name:String="",price:number=0,image:String="",quantity:number=0){
        this.id = id
        this.name = name
        this.price = price
        this.image = image
        this.quantity = quantity
    }

}