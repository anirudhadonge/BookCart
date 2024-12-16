import CartItem from "./CartItem";

export default interface CartDetails{
    cartItems:CartItem[],
    Total:number
}