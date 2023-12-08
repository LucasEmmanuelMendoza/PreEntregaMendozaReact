import { Item } from "./Item";

export const ItemList = ({items}) =>{
    return (
        <div className="d-flex flex-wrap gap-2 justify-center align-items-center">
            {items.map((item) => <Item item={item} key={item.id}/>)}
        </div>
    )
}