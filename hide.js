function changeContent()
{
    const text=document.getElementById('content');
    text.innerHTML="JAvascript is dynamically changed the content of html and css";
}
function showbutton()
{
    const text=document.getElementById('content');
    text.style.display='block';  
}
function hidebutton()
{
    const text=document.getElementById('content');
    text.style.display='none';
}
function hideshow()
{
    const text=document.getElementById('content');
   if(text.style.display=='none'){
    text.style.display='block';
   }
   else{
    text.style.display='none';
   }
    

    }
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <p id="content">this ia a avascript</p>
    <button onclick="changeContent()">change content</button>
    <button onclick="showbutton()">showbutton</button>
    <button onclick="hidebutton()">hidebutton</button>
    <button onclick="hideshow()">hide/show</button>
    <script src="hide.js"defer></script>
    </body>
    </html>