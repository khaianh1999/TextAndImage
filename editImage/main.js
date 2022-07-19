document.addEventListener("DOMContentLoaded",function(){
    const width = document.getElementById('input__width')
    const height = document.getElementById('input__height')
    const link = document.getElementById('input__link')
    const content = document.getElementById('input__content')
    const color = document.getElementById('input__color')
    const blur = document.getElementById('input__blur')
    // const border = document.getElementById('input__border')
    
    
    width.onchange = () =>{
        myFunction('width');
    }
    height.onchange = () =>{
        myFunction('height');
    }
    link.onchange = () =>{
        myFunction('link');
    }
    content.onchange = () =>{
        myFunction('content');
    }
    color.onchange = () =>{
        myFunction('color');
    }
    blur.onchange = () =>{
        myFunction('blur');
    }
    // border.onchange = () =>{
    //     myFunction('border');
    // }
    function myFunction(type) {
        switch(type) {
            case 'width':
                document.querySelector(".box__content").style.width  = `${width.value}px`;
                break;
            case 'height':
                document.querySelector(".box__content").style.height  = `${height.value}px`;
                break;
            case 'link':
                document.querySelector(".box__content img").src = link.value;
                break;
            case 'content':
                document.querySelector(".content__text").innerHTML  = content.value;
                break;
            case 'color':
                document.querySelector(".content__text").style.color = color.value;
                break;
            case 'border':
                document.querySelector(".content__text").style.border = `4px solid ${border.value};`;
                break;
            case 'blur':
                console.log(`blur(${blur.value}px !important)`);
                document.querySelector(".box__content img").style.filter = `blur(${blur.value}px)`;
                break;
        }
        
    }
},false)