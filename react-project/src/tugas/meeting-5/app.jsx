import list from "./coba/coba.jsx";
import { WelcomeMessage, DeliveryStatus, Notification, Greeting } from "./praktek/praktek.jsx";

export default function app() {
  return (
    <div>
      <div>
        <h1>Result COBA</h1>
        {list()}
      </div>

      <div>
        <h1>Result PRAKTEK</h1>
        <h2>SOAL 1</h2>
        <WelcomeMessage isLoggedIn={true} />
        <WelcomeMessage isLoggedIn={false} />
        <h2>SOAL 2</h2>
        <DeliveryStatus status="processing" />
        <DeliveryStatus status="shipped" />
        <DeliveryStatus status="delivered" />
        <h2>SOAL 3</h2>
        <Notification priority="high"/>
        <Notification priority="medium"/>
        <Notification priority="low"/>
        <h2>SOAL 4</h2>
        <Greeting time={8} />
        <Greeting time={12} />
        <Greeting time={23} />
        <Greeting time={18} />


      </div>
    </div>
  );
}
