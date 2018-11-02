var nowIndex = 0;
var itemWidth = 500;
var len = 4;
var timer = null;
var key = true;
init();
function init(){
    //绑定点击事件
    bindEvent();
    autoMove();
}
function bindEvent(){
    $('.leftBtn').add($('.rightBtn')).add($('.point li')).on('click', function(){
        // console.log($(this).attr('class'))
        if($(this).attr('class') == 'leftBtn'){
            // nowIndex --
            changeIndex('left');
        }else if($(this).attr('class') == 'rightBtn'){
            // nowIndex ++
            changeIndex('right');
        }else{
            var index = $(this).index();
            // console.log(nowIndex)
            changeIndex(index);
        }
    })
    $('.wrapper').on('mouseenter', function(){
        clearTimeout(timer);
    }).on('mouseleave', function(){
        autoMove();
    })
}
function changeIndex(dir){
    if(key){
        key = false;
        if(dir == 'left' || dir == 'right'){
            if(dir == 'left'){
                if(nowIndex == 0){
                    $('.img-box').css('left', -(len *  itemWidth));
                    nowIndex = len - 1;
                }else{
                    nowIndex --;
                }
            }else{
                if(nowIndex == 3){
                    $('.img-box').animate({left : -(len * itemWidth)},1000, 'swing',function(){
                        $(this).css('left', '0')
                    })
                    nowIndex = 0;
                }else{
                    nowIndex ++;
                }
            }
       }else{
           nowIndex = dir;
       }
       move();
       changeStyle(nowIndex)
    }
  
}
function move(){
    $('.img-box').animate({
        'left': -(itemWidth * nowIndex)
    },1000,'swing',function(){
        autoMove();
        key = true;
    })
}
function changeStyle(index){
    $('.active').removeClass('active');
    $('.point li').eq(index).addClass('active');
}
function autoMove(){
    clearTimeout(timer);
    timer = setTimeout(function(){
        changeIndex('right');
    },2000)
}