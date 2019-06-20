//main.js

let app = new Vue({
    el:'#app',
    data:{},
    methods:{},
    directives: {
        drag: {
            // 指令的定义
            bind: function (el) {
                let odiv = el;   //获取当前元素
                oDiv.onmousedown = (e) => {
                    //算出鼠标相对元素的位置
                    let disX = e.clientX - odiv.offsetLeft;
                    let disY = e.clientY - odiv.offsetTop;

                    document.onmousemove = (e)=>{
                        //用鼠标的位置减去鼠标相对元素的位置，得到元素的位置
                        let left = e.clientX - disX;
                        let top = e.clientY - disY;

                        //绑定元素位置到positionX和positionY上面
                        this.positionX = top;
                        this.positionY = left;

                        //移动当前元素
                        odiv.style.left = left + 'px';
                        odiv.style.top = top + 'px';
                    };
                    document.onmouseup = (e) => {
                        document.onmousemove = null;
                        document.onmouseup = null;
                    };
                };
            }
        }
    }
});
