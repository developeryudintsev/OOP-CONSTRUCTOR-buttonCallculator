let factory = {
    create: function () {
        let newSlider = {
            next: null,
            before: null,
            picture: null,
            array: ['1.jpg', '2.jpg', '3.jpg'],
            index: 0,

            start: function (slider) {
                let currentThis = this;
                let sliderId = document.querySelector('#' + slider);
                currentThis.next = sliderId.querySelector('#next');
                currentThis.before = sliderId.querySelector('#before');
                currentThis.picture = sliderId.querySelector('#picture');

                currentThis.picture.src = currentThis.array[currentThis.index];
                this.before.disabled = true;


                currentThis.next.addEventListener('click', function () {
                    currentThis.nextBtn();
                })

                currentThis.before.addEventListener('click', function () {
                    currentThis.beforeBtn();
                })

            },

            nextBtn: function () {
                this.picture.src = this.array[++this.index];
                this.before.disabled = false;
                if (this.index === this.array.length - 1) {
                    this.next.disabled = true;
                }
            },

            beforeBtn: function () {
                this.picture.src = this.array[--this.index];
                this.next.disabled = false;
                if (this.index === 0) {
                    this.before.disabled = true;
                }
            }
        }
        return newSlider;
    }
}