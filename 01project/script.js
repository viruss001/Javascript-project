let display= document.querySelectorAll(".num")
let interval = 5000
display.forEach((i)=>{
    let start = 0
    let end = parseInt(i.getAttribute("data-val"))
    let dur = Math.floor(interval/end)
    let counter = setInterval(()=>{
        start+=1
        i.textContent=start
        if(start ==end){
            clearInterval(counter)
        }

    },dur)
})
/*
setInterval(func, delay)




*/