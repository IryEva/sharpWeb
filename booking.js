function saveToLocalStorage(event){
    event.preventDefault();
    const name = event.target.name.value;
    const email= event.target.email.value;
    const phone = event.target.phone.value;
    localStorage.setItem('name',name);
    localStorage.setItem('email',email);
    localStorage.setItem('phone',phone);

}


var form = document.getElementById('submit').addEventListener('click',addItem);
function addItem(e){
    e.preventDefault();

    // Get input value
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var parent = document.getElementsByClassName('list-group');

    localStorage.setItem('name',name);
    localStorage.setItem('email',email);
    localStorage.setItem('phone',phone);


    // Create new li element
    let li = document.createElement('li');
    li.textContent = `${name}-${email}-${phone}`

    var deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete';
    deleteBtn.appendChild(document.createTextNode('Delete'));
    li.appendChild(deleteBtn);
    
    parent[0].appendChild(li);
}
var itemList = document.getElementById('items');
itemList.addEventListener('click', removeItem);

function removeItem(e) {
    if(e.target.classList.contains('delete')){
        var ul = e.target.parentElement;
        itemList.removeChild(ul);
        localStorage.removeItem('name');
        localStorage.removeItem('email');
        localStorage.removeItem('phone');
       
    }
}