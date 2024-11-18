import { users } from "./data";

function NonFilter() {
    return (
        <div>
            <h2>Non Filter</h2>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    )
}

function FilterAge() {

    return (
        <div>
            <h2>Filter Age</h2>
            <ul>
                {users.filter((user) => user.age > 25).map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    )
}

function FilterName() {
    return (
        <div>
            <h2>Filter Name</h2>
            <ul>
                {users.filter((user) => user.name.includes("e")).map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    )
}

export { NonFilter, FilterAge, FilterName };