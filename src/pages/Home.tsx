import Header from "../components/Header";
import IntroCon from "../components/forHome/IntroCon";
import Seamless from "../components/forHome/Seamless";
import Securiry from "../components/forHome/Securiry";
import UnlockPotential from "../components/forHome/UnlockPotential";

export default function Home() {
  return (
    <div>
      {/* <Header /> */}
      <IntroCon />
      <UnlockPotential />
      <Seamless />
      <Securiry />
    </div>
  );
}
