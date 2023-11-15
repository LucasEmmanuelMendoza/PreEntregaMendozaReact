import { Item } from "./Item";

export const ItemList = ({items}) =>{
    return (
        <div className="d-flex flex-wrap gap-2">
            {items.map((item) => <Item item={item}/>)}
        </div>
    )
}