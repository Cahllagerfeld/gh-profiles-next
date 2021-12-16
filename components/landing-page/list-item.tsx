import type { List } from "../../types/list.interface";
import Screenshot from "./screenshot";

export interface ListItemInterface {
  item: List.ListItem;
}

const Listitem = ({ item }: { item: List.ListItem }) => {
  return (
    <div>
      <a href={`https://github.com/${item.username}`} target="_blank">
        <Screenshot url={item.image} alt={`profile from ${item.username}`} />
      </a>
    </div>
  );
};

export default Listitem;
