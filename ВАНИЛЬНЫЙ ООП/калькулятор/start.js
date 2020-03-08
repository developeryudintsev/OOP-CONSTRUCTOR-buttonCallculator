let calculator = {
    number1: document.querySelector('#number1'),
    number2: document.querySelector('#number2'),
    result: document.querySelector('#result'),

    plusBtn: function () {
        let currentThis = this;
        addEventListener('click', currentThis.start);
    },

    start: function (key) {
        this.result.style.opacity = '0';
        if (key.target.value == '-' || key.target.value == '+') {
            this.result.style.opacity = '1';
            result.innerHTML = eval(number1.value + key.target.value + number2.value);
        }
    }
}








