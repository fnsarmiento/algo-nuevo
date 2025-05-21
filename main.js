let pTag = document.querySelector("p");
let pStyle = pTag.style;
let span = document.querySelector("pre");

function changeDesc() {
    span.textContent = ""
    for (const prop in pStyle) {
        if (Object.hasOwn(pStyle, prop) && !isNaN(parseInt(prop))) {
        span.textContent += `${pStyle[prop]} = '${pStyle.getPropertyValue(pStyle[prop])}'\n`;
      }
    }
}

function changeP(e) {
    e.preventDefault();
    let form = e.target;
    pTag.style[form.name.value] = form.val.value;
    changeDesc();
    form.reset();
}