import { rackets } from "./data";
import card from "./element";
import "./card.css";


export default function ResultMap() {
    const list = rackets.map((rackets) => card(rackets));
    return (
        <li key = {rackets.id}>
            {list}
        </li>
    );
}