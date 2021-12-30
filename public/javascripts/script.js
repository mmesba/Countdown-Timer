let start = document.getElementById('start');
let reset = document.getElementById('reset');

let hour = document.getElementById('hour');
let minute = document.getElementById('minute')
let second = document.getElementById('sec')


// reference store
let startTimer = null;

function timer(){
    if(hour.value == 0 && minute.value == 0 && second.value == 0){
        hour.value = 0;
        minute.value = 0;
        second.value = 0;
    } else if(second.value !=0 ) {
        second.value --;
    } else if(minute.value != 0 && second.value == 0){
        second.value = 59;
        minute.value --;
    } else if(hour.value != 0 && minute.value == 0){
        minute.value = 60;
        hour.value --;   
    }
    return;

}

function stopTimer() {
    clearInterval(startTimer)
}


start.addEventListener('click', ()=>{
    // Initialize the variable startTimer
    function startInterval() {
        startTimer = setInterval(() => {
            timer();
        }, 1000);
    }

    startInterval()

})

reset.addEventListener('click', ()=>{
    hour.value = 0;
    minute.value = 0;
    second.value = 0;


    stopTimer();
})