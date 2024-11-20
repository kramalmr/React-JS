import { PreventDefaultExample } from "./soal1";
import { EventPropagationExample } from "./soal2";
import { ShowAlert } from "./soal3";
import { SimpleClick } from "./soal4";

export default function App() {
  return (
    <div>
      {/* SOAL 1 */}
      <p>SOAL 1</p>
      <PreventDefaultExample />
      <br />

      {/* SOAL 2 */}
      <p>SOAL 2</p>
      <EventPropagationExample />
      <br />

      {/* SOAL 3 */}
      <p>SOAL 3</p>
      <ShowAlert message="Hello, world!" />
      <br />

      {/* SOAL 4 */}
      <p>SOAL 4</p>
      <SimpleClick />
    </div>
  );
}
