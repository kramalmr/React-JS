// SOAL 1

export function PreventDefaultExample() {
    return (
        <form onSubmit={e => {e.preventDefault(); console.log("Form submitted!")}}>
            <input type="text" />
            <button type="submit">Submit</button>
        </form>
    )
}