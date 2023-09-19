function function1()
{
let my1 = document.getElementById('check1')
    if(my1.checked)
    {
        let canvas = document.querySelector('.brush-container')
        canvas.style.cursor = 'url("./images/brush.png"), auto';
    }
    else
    {
    let canvas = document.querySelector('.brush-container')
    canvas.style.cursor = '';
    }
    
}
function function2()
{
let my1 = document.getElementById('check2')
    if(my1.checked)
    {
        let canvas = document.querySelector('.brush-container')
        canvas.style.cursor = 'url("./images/pen.png"), auto';
    }
    else
    {
    let canvas = document.querySelector('.brush-container')
    canvas.style.cursor = '';
    }
    
}
function function3()
{
let my1 = document.getElementById('check3')
    if(my1.checked)
    {
        
        let canvas = document.querySelector('.brush-container')
        canvas.style.cursor = 'url("./images/eraser.png"), auto';
        canvas.style.cursor.transform = '2s'
    }
    else
    {
    let canvas = document.querySelector('.brush-container')
    canvas.style.cursor = '';
    }
    
}

function function4()
{

console.log(document.querySelector('#range1').value)
}