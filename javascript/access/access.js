//assigning all elements to their appropriate methods
/*query selectors is not limited to anything so can use class, id  n tag
and will pick the first it comes across*/
const demoId = document.getElementById('demo')
const demoClass = document.getElementsByClassName('demo')
const demoTag = document.getElementsByTagName('article')
const demoQuery = document.querySelector('#demo-query')
const demoQueryAll = document.querySelectorAll('.demo-query-all')

//changing the border color of id demo to purple
//demoId.style.border = '2px solid purple'

//applying an orange border to divs with the 'demoClass' class 
for(i=0; i<demoClass.length; i++)
{
    demoClass[i].style.border = '2px solid orange'
}
//CHANGING border of all tags
for(i=0; i<demoTag.length; i++ ){
    demoTag[i].style.border = '2px solid blue'
}

//demoQuery.style.border = '2px solid red'

demoQueryAll.forEach(query=>{
    query.style.border = '2px solid green'
}

)