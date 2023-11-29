import style from "./CredentialList.module.scss";
import TitleForTable from "../TitleForTable/TitleForTable";

export default function CredentialList({ items }) {
  return (
    <ul className={style.list}>
      {items.map((item) => (
        <li key={item.id} className={style.item}>
          <TitleForTable>Dormant credentials</TitleForTable>

          <div className={style.counterContainer}>
            <span className={style.counterValue}>67</span>
            <span>Credentions</span>
          </div>
        </li>
      ))}
    </ul>
  );
}
