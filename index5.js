var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);

// Add item
function addItem(e){
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById('item').value;
  var desItem = document.getElementById('description').value;
  

  // Create new li element
  var li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));
  li.appendChild(document.createTextNode(desItem));

  // Create del button element
  var deleteBtn = document.createElement('button');
  var editBtn = document.createElement('button');

  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
  editBtn.className =  'btn btn-danger btn-sm float-right delete';

  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));
  editBtn.appendChild(document.createTextNode('Edit'));

  // Append button to li
  li.appendChild(deleteBtn);
  li.appendChild(editBtn);

  // Append li to list
  itemList.appendChild(li);
}

// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// Filter Items
function filterItems(e){
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
  // Get lis
  const items = itemList.getElementsByTagName('li');
  // Convert to an array
  Array.from(items).forEach(function(item){
    const itemName = item.firstChild.textContent;
    const description = item.childNodes[1].textContent;
    
    if(itemName.toLowerCase().indexOf(text) != -1 || description.toLowerCase().indexOf(text) != -1 ){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });

  

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
    
    parent[0].appendChild(li);
}



function showUserOnScreen(obj){
  const parentElem = document.getElementById('items');

  const childElem = document.createElement('li');
  childElem.textContent = obj.name + '-' + obj.email + '-' + obj.phone;

  const deleteBtn = document.createElement('input');
  deleteBtn.type = 'button';
  deleteBtn.value = 'Delete';
  deleteBtn.onClick = () => {
      localStorage.removeItem(obj.email);
      parentElem.removeChild(childElem);
  }
  childElem.appendChild(deleteBtn);
  parentElem.appendChild(childElem);
}