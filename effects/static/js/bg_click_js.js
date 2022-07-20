const bg_click_row1=document.getElementById('bg_click_row1');
const bg_click_container1=document.getElementById('bg_click_container1');
const bg_click_box1=document.getElementById('bg_click_box1');
const base_container=document.getElementById('base_container');
const rainy_symbol=document.getElementById('rainy_symbol');
const bg_click_row2=document.getElementById('bg_click_row2');
const status_1=document.getElementById('status_1');
const status_2=document.getElementById('status_2');

const box_animation_style=function(element, pause_mode)
{
    element.style.animationName='move-the-box';
    element.style.animationDuration='5s';
    element.style.animationTimingFunction='ease-in-out';
    element.style.animationIterationCount='infinite';
    element.style.animationFillMode='forwards';
    element.style.animationDirection='normal';
    element.style.animationPlayState=pause_mode;
}

const symbol_animation_style=function(element, pause_mode)
{
    element.style.animationName='rotate-symbol';
    element.style.animationDuration='1s';
    element.style.animationTimingFunction='linear';
    element.style.animationIterationCount='infinite';
    element.style.animationFillMode='forwards';
    element.style.animationDirection='normal';
    element.style.animationPlayState=pause_mode;
}

const invert_pause_mode=function(pause_mode)
{
    if (pause_mode=='running')
    {
        pause_mode='paused';
    }
    else
    {
        pause_mode='running';
    }
    return pause_mode
}

box_pause_mode='running';
if (bg_click_row1)
{
    bg_click_row1.addEventListener('click', function(){
        box_animation_style(bg_click_box1, box_pause_mode);
        status_1.innerHTML='Status: '+box_pause_mode;
        status_1.style.textTransform='capitalize';
        box_pause_mode=invert_pause_mode(box_pause_mode);
    });
}

symbol_pause_mode='running';
if (bg_click_row2)
{
    bg_click_row2.addEventListener('click', function(){
        symbol_animation_style(rainy_symbol, symbol_pause_mode);
        status_2.innerHTML='Status: '+symbol_pause_mode;
        status_2.style.textTransform='capitalize';
        symbol_pause_mode=invert_pause_mode(symbol_pause_mode);
    });
}