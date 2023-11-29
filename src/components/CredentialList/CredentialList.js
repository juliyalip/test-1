import style from "./CredentialList.module.scss";
import Box from "../Box/Box";
import TitleForTable from "../TitleForTable/TitleForTable";

export default function CredentialList({ items }) {
  return (
    <Box width={400} height={320} left={10}>
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
    </Box>
  );
}
