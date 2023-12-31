import TitleForTable from "../TitleForTable/TitleForTable";
import Box from "../Box/Box";
import style from "./TopDesk.module.scss";

export default function TopDesk() {
  return (
    <Box height={320} width={600} paddingLeft={10} left={10}>
      <TitleForTable>Top risky profiles</TitleForTable>
      <div style={{ display: "flex" }}>
        <ul className={style.list}>
          <li>Tim Hanniford</li>
          <li>SCott Davis</li>
          <li>Sam</li>
          <li>Nimish Vishnoi</li>
          <li>Ed Alvarado</li>
        </ul>
        <div className={style.textarea}></div>
       </div>
    </Box>
  );
}
