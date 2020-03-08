function Calculator() {
    this.array = [];
}

Calculator.prototype.start = function () {
    let currentThis = this;
    addEventListener('click', function () {
        if (event.target.value !== '=') {
            currentThis.array.push(event.target.value);
            console.log(currentThis.array);
            document.querySelector('#resulr h1').innerHTML = currentThis.array.join(' ');
        } else {
            console.log(currentThis.array);
            let sumString = currentThis.array.join('');
            console.log(sumString);
            console.log(eval(sumString));
            document.querySelector('#resulr h1').innerHTML = eval(sumString)
        }
    })
}
