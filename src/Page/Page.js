import Header from "../components/Header/Header";
import CredentialList from "../components/CredentialList/CredentialList";
import CardList from "../components/CardList/CardList";
import TopDesk from "../components/TopDesk/TopDesk";

const users = [
  { id: "001" },
  { id: "002" },
  { id: "003" },
  { id: "004" },
  { id: "005" },
 ];
const credentials = [{ id: "01" }, { id: "02" }, { id: "03" }, { id: "04" }];

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <div style={{display: 'flex', width: '1400px', marginTop: '10px'}}>
        <TopDesk />
        <CredentialList items={credentials} />
        </div>
        <CardList items={users} />
      </main>
    </>
  );
}
