{/* <input id="font-size-control" type="range" />
<br />
<span id="text">Абракадабра!</span> */}

const inputTextRef = document.querySelector("#text");
const inputSizeRef = document.querySelector("#font-size-control");
const handleInput = () => {
  inputTextRef.style.fontSize = `${inputSizeRef.value}px`;
};

inputSizeRef.addEventListener("input", handleInput);