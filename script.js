;(function tablet__animation(){
    
    let buy = document.querySelectorAll('.btn__buy')
    let tablet = document.querySelector('.main__script')
    let tablet2 = document.querySelector('.main__script2')
    let confirmn = document.querySelector('.cnfrmn__btn')
    let ok = document.querySelector('.ok__btn')
    for(let elim of buy){
        elim.addEventListener('click',function(){
            tablet.style.top='0'
        })
    }
    console.log(confirmn)
    confirmn.addEventListener('click',function(){
        tablet.style.top='-500px'
    })
    confirmn.addEventListener('click',function(){
        tablet2.style.top='0px'
    })
    ok.addEventListener('click',function(){
        tablet2.style.top='-400px'
    })
    

})();    




;(function img__animation(){

let key1 = document.querySelector('.keyboard1')
let key2 = document.querySelector('.keyboard2')
let mouse1 = document.querySelector('.mouse1')
let mouse2 = document.querySelector('.mouse2')
let rtx = document.querySelector('.rtx')
let intel = document.querySelector('.intel')
let amd = document.querySelector('.amd')
let sams = document.querySelector('.sams')
let text1 = document.querySelector('.div__p__text1')
let text2 = document.querySelector('.div__p__text2')
let text3 = document.querySelector('.div__p__text3')
let text4 = document.querySelector('.div__p__text4')
let text5 = document.querySelector('.div__p__text5')
let text6 = document.querySelector('.div__p__text6')
let text7 = document.querySelector('.div__p__text7')
let text8 = document.querySelector('.div__p__text8')
let text9 = document.querySelector('.div__p__text9')
let text10 = document.querySelector('.div__p__text10')
let text11 = document.querySelector('.div__p__text11')
let text12 = document.querySelector('.div__p__text12')
let text13 = document.querySelector('.div__p__text13')
let text14 = document.querySelector('.div__p__text14')
let text15 = document.querySelector('.div__p__text15')
let text16 = document.querySelector('.div__p__text16')

// keyboard1
key1.addEventListener('mouseover',function(){
    text1.style.top='75%'
    text2.style.top='60%'
    
    
})
key1.addEventListener('mouseout',function(){
    text1.style.top='-2000px'
    text2.style.top='-2000px'
})
key2.addEventListener('mouseover',function(){
    text3.style.top='40%'
    text4.style.top='40%'
    
    
})
key2.addEventListener('mouseout',function(){
    text3.style.top='-1500px'
    text4.style.top='-1500px'
})
mouse1.addEventListener('mouseover',function(){
    text5.style.top='40%'
    text6.style.top='40%'
    
    
})
mouse1.addEventListener('mouseout',function(){
    text5.style.top='-2300px'
    text6.style.top='-2300px'
})
mouse2.addEventListener('mouseover',function(){
    text7.style.top='40%'
    text8.style.top='40%'
    
    
})
mouse2.addEventListener('mouseout',function(){
    text7.style.top='-2500px'
    text8.style.top='-2500px'
})
rtx.addEventListener('mouseover',function(){
    text9.style.top='40%'
    text10.style.top='40%'
    
    
})
rtx.addEventListener('mouseout',function(){
    text9.style.top='-3500px'
    text10.style.top='-3500px'
})
intel.addEventListener('mouseover',function(){
    text11.style.top='40%'
    text12.style.top='40%'
    
    
})
intel.addEventListener('mouseout',function(){
    text11.style.top='-3500px'
    text12.style.top='-3500px'
})
amd.addEventListener('mouseover',function(){
    text13.style.top='40%'
    text14.style.top='40%'
    
    
})
amd.addEventListener('mouseout',function(){
    text13.style.top='-4000px'
    text14.style.top='-4000px'
})
sams.addEventListener('mouseover',function(){
    text15.style.top='40%'
    text16.style.top='40%'
    
    
})
sams.addEventListener('mouseout',function(){
    text15.style.top='-4500px'
    text16.style.top='-4500px'
})
})();