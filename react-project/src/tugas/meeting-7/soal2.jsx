// SOAL 2
export function EventPropagationExample() {
    function handleDivClick() {
        console.log("Parent div clicked!");
    }

    function handleButtonClick() {
        console.log("Button clicked!");
    }


  return (
    <div onClick={handleDivClick} style={{ width: "100px", height: "100px", backgroundColor: "red" }}>
      <button
        onClick={(e) => {
          e.stopPropagation();
          handleButtonClick();
        }}
      > Child Button Stop Propagation</button>
    </div>
  );
}
