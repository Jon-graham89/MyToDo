
const output = document.getElementById('output'); 
const inputItem = document.getElementById('inputItem');
const submit = document.getElementById('submit');
//const li = document.createElement('li')



let listItemsArray = [];




class Item {
    constructor(item, complete, id){
        this.item = item;
        this.complete = false;
        this.id = Date.now();
    }

    static addItemToList(){
        const list = document.getElementById('list');
        const li = document.createElement('li');
        listItemsArray.forEach(item => {
            li.innerHTML = `
            
                <input type="checkbox" class="listItem">${item.item}<button id=${item.id}>delete</button>
            
        `});
        list.appendChild(li);        
    }

    static taskComplete(){
        let elems = document.querySelectorAll('input');
        Array.from(elems).forEach(element => element.addEventListener('change', (e) => {
        e.target.parentNode.classList.toggle('checked');
    }))
 }

    static deleteItem(){
        let deleteButton = document.querySelectorAll('button');
        Array.from(deleteButton).forEach(button => button.addEventListener('click', (e)=>{
            e.target.parentNode.remove();
        }))
    }
    
    static clearField(){
        inputItem.value = '';
    }
}


document.getElementById('input').addEventListener('submit', (e) => {
    e.preventDefault();
    const item = new Item(inputItem.value);
    if (item.item !== ''){
        listItemsArray.push(item);
        Item.addItemToList();
        Item.taskComplete();
        Item.deleteItem();
        Item.clearField();
    }
    
})




// elems.addEventListener('change', () => {
//     Array.from(elems).forEach(element => element.parentNode.classList.toggle('checked'))
//     })

// window.addEventListener('DOMContentLoaded', (event) => {
//         Array.from(elems).forEach(element => element.addEventListener('change', (e) => {
//             if (e.target.checked){
//                 console.log('checked')
//             } else if (!e.target.checked){
//                 console.log('not checked')
//             }
            
//         }))
//     })