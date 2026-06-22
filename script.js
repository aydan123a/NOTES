let notes=JSON.parse(localStorage.getItem("notes"))||[];
let editIndex=null;

function addNote(){

let title=document.getElementById("title").value;
let text=document.getElementById("text").value;

if(title==""||text=="")return;
if(editIndex==null){
notes.push({
title:title,
text:text
});

}else{

notes[editIndex]={
title:title,
text:text
};
editIndex=null;
}
localStorage.setItem("notes",JSON.stringify(notes));
document.getElementById("title").value="";
document.getElementById("text").value="";
render();
}
function render(){

let div=document.getElementById("notes");

div.innerHTML="";

notes.forEach((note,index)=>{

div.innerHTML+=`

<div class="note">

<h3>${note.title}</h3>

<p>${note.text}</p>

<button onclick="editNote(${index})">Edit</button>

<button onclick="deleteNote(${index})">Delete</button>

</div>

`;

});

}

function editNote(index){

document.getElementById("title").value=notes[index].title;

document.getElementById("text").value=notes[index].text;

editIndex=index;

}

function deleteNote(index){

notes.splice(index,1);

localStorage.setItem("notes",JSON.stringify(notes));

render();
}
render();
