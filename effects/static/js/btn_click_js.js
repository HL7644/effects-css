/* document elements */
const snowy_symbol=document.getElementById('snowy_symbol');
const cw_button=document.getElementById('cw_button');
const ccw_button=document.getElementById('ccw_button');
const pause_button=document.getElementById('pause_button');
const symbol_status=document.getElementById('symbol_status');
const test=document.getElementById('btn_test');

const first_text=document.getElementById('first_text');
const second_text=document.getElementById('second_text');
const third_text=document.getElementById('third_text');

const show_more_btn=document.getElementById('show_more_btn');
const show_less_btn=document.getElementById('show_less_btn');

/* functions */
const cw_rotation_style=function(element, pause_mode)
{
    element.style.animationName='cw-rotation';
    element.style.animationDuration='1s';
    element.style.animationTimingFunction='linear';
    element.style.animationIterationCount='infinite';
    element.style.animationFillMode='forwards';
    element.style.animationDirection='normal';
    element.style.animationPlayState=pause_mode;
}

const ccw_rotation_style=function(element, pause_mode)
{
    element.style.animationName='ccw-rotation';
    element.style.animationDuration='1s';
    element.style.animationTimingFunction='linear';
    element.style.animationIterationCount='infinite';
    element.style.animationFillMode='forwards';
    element.style.animationDirection='normal';
    element.style.animationPlayState=pause_mode;
}

const pause_animation=function(element)
{
    if (element.style.animationName=='cw-rotation')
    {
        cw_rotation_style(element, 'paused');
    }
    else
    {
        ccw_rotation_style(element, 'paused');
    }
}

const show_element=function(element)
{
    element.style.animationName='show';
    element.style.animationDuration='5s';
    element.style.animationTimingFunction='linear';
    element.style.animationIterationCount=1;
    element.style.animationFillMode='forwards';
    element.style.animationDirection='normal';
    element.style.animationPlayState='running';
}

const hide_element=function(element)
{
    element.style.animationName='hide';
    element.style.animationDuration='5s';
    element.style.animationTimingFunction='linear';
    element.style.animationIterationCount=1;
    element.style.animationFillMode='forwards';
    element.style.animationDirection='normal';
    element.style.animationPlayState='running';
}

/* main */
if (cw_button)
{
    cw_button.addEventListener('click', function(){
        cw_rotation_style(snowy_symbol, 'running');
        symbol_status.innerHTML='Rotating Clockwise';
    });
}

if (ccw_button)
{
    ccw_button.addEventListener('click', function(){
        ccw_rotation_style(snowy_symbol, 'running');
        symbol_status.innerHTML='Rotating Counter Clockwise';
    });
}

if (pause_button)
{
    pause_button.addEventListener('click', function(){
        pause_animation(snowy_symbol);
        symbol_status.innerHTML='Paused';
    });
}

first_text.style.display='none';
second_text.style.display='none';
third_text.style.display='none';
show_less_btn.style.display='none';

if (show_more_btn)
{
    show_more_btn.addEventListener('click', function(){
        if (first_text.style.display=='none')
        {
            first_text.style.display='block';
            show_less_btn.style.display='block';
        }
        else if (second_text.style.display=='none')
        {
            second_text.style.display='block';
        }
        else if (third_text.style.display=='none')
        {
            third_text.style.display='block';
            show_more_btn.style.display='none';
        }

    });
}

if (show_less_btn)
{
    show_less_btn.addEventListener('click', function(){
        if (third_text.style.display=='block')
        {
            third_text.style.display='none';
            show_more_btn.style.display='block';
        }
        else if (second_text.style.display=='block')
        {
            second_text.style.display='none';
        }
        else if (first_text.style.display=='block')
        {
            first_text.style.display='none';
            show_less_btn.style.display='none';
        }
    });
}
