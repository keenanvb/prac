/*
Create a timer count down 1 min
*/
let time = 60; // 1 min
let min = 0;
let seconds = 0;
let timer = '';
let completed = false;
let start = () => {
    min = parseInt(time / 60);
    seconds = parseInt(time % 60);
    time--;
    console.log(`${min} ${seconds}`);


    if (time <= -1) {
        console.log('Done');
        clearTimeout(timer);
        completed = true;

    }

    if (!completed) {
        timer = setTimeout(function () {
            start();
        }, 1000);
    }
}





start();