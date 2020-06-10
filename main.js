showNotes();
let addBtn = document.getElementById('b1');

addBtn.addEventListener("click", function(e) {

    let addTxt = document.getElementById("tx1");
    let title =document.getElementById("tx2")
    
    let notes =localStorage.getItem("notes");
    if(notes == null)
    {
        notesObj = [];
    }
    else
    {
        notesObj = JSON.parse(notes)

    }
    let both ={
        title : title.value,
        text1 : addTxt.value
       



    }

    notesObj.push(both);

    localStorage.setItem("notes", JSON.stringify(notesObj))
    addTxt.value= ""; 
    title.value =""
    showNotes();
})


function showNotes(){


    let notes =localStorage.getItem("notes");
    if(notes == null)
    {
        notesObj = [];
    }
    else
    {
        notesObj = JSON.parse(notes)

    }
    let html="";
    notesObj.forEach(function(element,index) {
        html += 
        `<div class=" notecard mx-2 my-2 card" style="width: 18rem;">
               
        <div class="card-body">
          <h5 class="card-title">${index+1})   ${element.title}</h5>
          <p class="card-text">${element.text1}</p>
         <button onclick="deleteN(this.id)" id ="${index}"lass="btn btn-primary">Delete</button>
        </div>
        </div> 
    `

        
    });

    let noteElm = document.getElementById('notes')
    if(notesObj.length != 0)
    {
        noteElm.innerHTML=html; 
    }
    else 
    {
        noteElm.innerHTML ="Nothing to Show" ;
    }


}




function deleteN(index){
    console.log('Deleting',index)
    let notes =localStorage.getItem("notes");
    if(notes == null)
    {
        notesObj = [];
    }
    else
    {
        notesObj = JSON.parse(notes)

    }
    notesObj.splice(index,1)
    localStorage.setItem("notes", JSON.stringify(notesObj))
    
    showNotes();


}

let search=document.getElementById("s1")
search.addEventListener("input",function(){

    let inputV = search.value
    let noteCard = document.getElementsByClassName('notecard');
    Array.from(noteCard).forEach(function(element)
    {
        let cardText = element.getElementsByTagName("p")[0].innerText;
       
        if(cardText.includes(inputV))
        {
            element.style.display = "block";
        }
        else
        {

            element.style.display = "none";
        
        }


        

    })


    
})
