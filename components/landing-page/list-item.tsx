import type { List } from "../../types/list.interface";
import Screenshot from "./screenshot";

export interface ListItemInterface {
  item: List.ListItem;
}

const Listitem = ({ item }: { item: List.ListItem }) => {
  return (
    <div>
      <Screenshot url={item.image} alt={`profile from ${item.username}`} />
    </div>
  );
};

export default Listitem;
