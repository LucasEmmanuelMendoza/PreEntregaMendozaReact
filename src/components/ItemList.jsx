import { Item } from "./Item";

export const ItemList = ({items}) =>{
    return (
        <div className="cardsContainer">
            {items.map((item) => <Item item={item} key={item.id}/>)}
        </div>
    )
}