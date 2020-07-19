let html = document.querySelector("#html")
let style = document.querySelector("#style")
let string = `/* 大家好，我叫小刘
* 今天给大家展示一下我的前端功底
* 首先准备一个div */
#div1{
    border: 1px red solid;
    height: 200px;
    width: 200px;
}
/* 接下来我要把div变成一个八卦图，注意看好了 */


/* 首先，把div变成一个圆 */
#div1{
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    border: none;
}
/* 接下来，我要将这个圆分割成一白一黑 */
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/* 接下来，上下分别加上一黑球和一白球 */
#div1::before{
    height: 100px;
    width: 100px;
    border: 1px solid red;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 50%;
    background: black;
    border: none;
}
#div1::after{
    height: 100px;
    width: 100px;
    border: 1px solid red;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 50%;
    background: white;
    border: none;
}
/* 接下来，在上下分别加上两个白色圆心和黑色圆心 */
#div1::before{
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1::after{
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}
/* 大功告成 */
`
let string2 = ''
let n = 0
let step = () => {
    setTimeout(() => {
        if (string[n] === '\n') {
            string2 += '<br>'
        } else if (string[n] === ' ') {
            string2 += '&nbsp'
        } else {
            string2 += string[n]
        }
        html.innerHTML = string2
        style.innerHTML = string.substring(0, n)
        window.scrollTo(0, 10000)
        html.scrollTo(0, 10000)
        n += 1
        if (n >= string.length) {
            return
        }
        step()
    }, 30)
}

step()