import ResultMap from "./map/result.jsx";
import { FilterAge, FilterName, NonFilter } from "./filter/result.jsx";

export default function App() {
    return (
        <div>
            <h1>Result PRAKTEK</h1>
            <h2>MAP</h2>
            <ResultMap />

            <h2>FILTER</h2>
            <NonFilter />

            <FilterAge />

            <FilterName />

        </div>
    )
}