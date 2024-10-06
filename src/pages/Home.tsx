import Header from "../components/Header";
import IntroCon from "../components/forHome/IntroCon";
import Seamless from "../components/forHome/Seamless";
import Security from "../components/forHome/Security";

import UnlockPotential from "../components/forHome/UnlockPotential";

export default function Home() {
  return (
    <div>
      {/* <Header /> */}
      <IntroCon />
      <UnlockPotential />
      <Seamless />
      <Security />
    </div>
  );
}
