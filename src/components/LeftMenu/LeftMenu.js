import Box from "../Box/Box";
import TitleForTable from "../TitleForTable/TitleForTable";
import style from "./LeftMenu.module.scss";

export default function LeftMenu() {
  return (
    <div className={style.container}>
      <Box paddingLeft={10}>
        <TitleForTable>Facility</TitleForTable>
        <input type="text" className={style.input} />
      </Box>
      <Box paddingLeft={10} height={200}>
        <TitleForTable>Date range</TitleForTable>
      </Box>
    </div>
  );
}
