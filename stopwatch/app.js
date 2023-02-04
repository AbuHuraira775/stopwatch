let start = document.getElementById('start')
let pause = document.getElementById('pause')
let reset = document.getElementById('reset')

hrs = 0
mins = 0
sec = 0
count = 0

start.addEventListener('click',()=>{

let count = 0;

function timeinterval(){
    count++

document.getElementById('ns').innerHTML= count
document.getElementById('sec').innerHTML= sec
document.getElementById('mins').innerHTML= mins
document.getElementById('hrs').innerHTML= hrs

var hrStr = hrs
var minStr = mins
var secStr = sec
var countStr = count

if(hrs<10){
    hrStr == `0${hrs}`
}
if(mins<10){
    minStr == `0${mins}`
}
if(sec<10){
    secStr == `0${sec}`
}
if(count<10){
    countStr == `0${count}`
}

   
    document.getElementById('ns').innerHTML = countStr

  
    if(count == 100){

        count = 0
        document.getElementById('ns').innerHTML = countStr
        sec++
        document.getElementById('sec').innerHTML = secStr
     
        if(sec == 60){
    
            sec = 0
            document.getElementById('sec').innerHTML= secStr
            mins++
            document.getElementById('mins').innerHTML= minStr

                if(mins == 60){

                    mins = 0
                    document.getElementById('mins').innerHTML= minStr
                    hrs++
                    document.getElementById('hrs').innerHTML= hrStr
                }      
            }   
        }
    }


 interval = setInterval(timeinterval, 10)
 document.getElementById("start").disabled = true;
 start.style.cursor = 'text'
 reset.style.cursor = 'pointer'
 reset.disabled = false
 pause.disabled = false
 pause.style.cursor = 'pointer'

})

pause.addEventListener('click',()=>{
    clearInterval(interval)

    start.disabled = false
    start.style.cursor = 'pointer'
})

reset.addEventListener('click',()=>{

    hrs = 0
    mins = 0
    sec = 0
    count = 0
    clearInterval(interval)

    document.getElementById('hrs').innerHTML = hrs
    document.getElementById('mins').innerHTML = mins
    document.getElementById('sec').innerHTML = sec
    document.getElementById('ns').innerHTML = count

    
    start.disabled = false
    start.style.cursor = 'pointer'
})
