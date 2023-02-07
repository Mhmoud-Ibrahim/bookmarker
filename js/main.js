
var siteNameInput = document.getElementById('siteName');
var siteUrlINput = document.getElementById('siteUrl');
var submitBtn = document.getElementById('submitBtn');
var deleteBtn = document.getElementById('deleteBtn')

var bookmarksContainer = [];
if(localStorage.getItem('bookmark') != null){ // check localstorage
  bookmarksContainer=JSON.parse(localStorage.getItem('bookmark')) 
  displayMarks(bookmarksContainer)
}
 function addBookMark(){ //add function

  if(validateBookmarkName() == true){

    var  mark= {
         siteName:siteNameInput.value,
         siteUrl:siteUrlINput.value,
     }
     bookmarksContainer.push(mark);
     localStorage.setItem('bookmark',JSON.stringify(bookmarksContainer))
     displayMarks()
     clearFrom()
    }else{
      // alert('name is required')
       document.getElementById('alert').classList.replace('d-none','d-inline-block')
    }
  }
submitBtn.addEventListener('click',function(){
  addBookMark()
})

function displayMarks(){ //display function
  var marks = '';
  for(i=0;i<bookmarksContainer.length;i++){
    marks+=`
    <div class="webwell row mt-4 ">
    <h2 class="d-inline">${bookmarksContainer[i].siteName}</h2>
    <a class="btn btn-primary m-1 "  href="${bookmarksContainer[i].siteUrl}">visit</a>
    <button id="deleteBtn" class="btn btn-danger  m-1 " onclick="deletebBookMark(${i})" >delete</button>
    </div>
    `
  }
  document.getElementById('bookmarklist').innerHTML= marks;
}

function clearFrom(){  //clear form
        siteNameInput.value="",
        siteUrlINput.value = ""
}

function deletebBookMark(index){ //delet function
  bookmarksContainer.splice(index,1);
  localStorage.setItem('bookmark',JSON.stringify(bookmarksContainer))
    displayMarks()

}
// deleteBtn.addEventListener('click',function(){
//   deletebBookMark(i);

// })
function validateBookmarkName(){
  var regex = /^[A-z][a-z]{3,10}$/ 
 return regex.test(siteNameInput.value)
}
// function validateBookmarkName(){
//   var regex = /^https://www{1}.$/ 
//  return regex.test(siteUrlINput.value)
// }
