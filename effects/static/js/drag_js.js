const drag_row=document.getElementById('drag_row');
const drag_status=document.getElementById('drag_status');
const cursor=document.getElementById('cursor');

cursor.style.display='none';

if (cursor)
{
    document.addEventListener('mousemove', function(e){
        var ypos=e.pageY+10;
        var xpos=e.pageX+10;
        cursor.style.top=ypos+'px';
        cursor.style.left=xpos+'px';
    });
}

if (drag_row)
{
    document.addEventListener('dragstart', function(){
        //add cursor when dragging
        cursor.style.display='block';
        drag_status.innerHTML='Drag started';
    });
    document.addEventListener('drag', function(){
        
        setTimeout(()=>{drag_status.innerHTML="Dragging";}, 1000);
        drag_row.style.cursor='grabbing';
    });
    document.addEventListener('dragend', function(){
        drag_row.style.cursor='auto';
        cursor.style.display='none';
        setTimeout(()=>{drag_status.innerHTML="Drag ended";}, 500);
        setTimeout(()=>{drag_status.innerHTML="None";}, 1500);
    });
}
