document.addEventListener('DOMContentLoaded', function () {

    let iner;
    let clock = document.querySelector('#clock');
    clock.addEventListener('click', function () {
        iner = setInterval(function () {
            let time = new Date();
            document.querySelector('#hour').innerHTML = time.getHours() + ':';
            document.querySelector('#minute').innerHTML = time.getMinutes() + ':';
            document.querySelector('#second').innerHTML = time.getSeconds();
        }, 1000)
    })

    let hide = document.querySelector('#hide');
    hide.addEventListener('click', function () {
        let hour = document.querySelector('#hour');
        hour.style.opacity = 0;
        let minute = document.querySelector('#minute');
        minute.style.opacity = 0;
        let second = document.querySelector('#second');
        second.style.opacity = 0;
    })
    let update = document.querySelector('#update');
    update.addEventListener('click', function () {
        let hour = document.querySelector('#hour');
        hour.style.opacity = 1;
        let minute = document.querySelector('#minute');
        minute.style.opacity = 1;
        let second = document.querySelector('#second');
        second.style.opacity = 1;
    })

    let stop = document.querySelector('#stop');
    stop.addEventListener('click', function () {
        clearInterval(iner);
    })
})
