import CardItem from "../CardItem/CardItem";
import style from "./CardList.module.scss";

export default function CardList({ items }) {
  return (
    <ul className={style.cardListContainer} >
      {items.map((item) => (
        <CardItem key={item.id} />
      ))}
    </ul>
  );
}
