const createItem = (todo, id) => {
    let item = `
        <li 
            key="${id}" 
            class=${todo.checked ? 'taskItem-done' : 'taskItem'}>
                ${todo.title} ${todo.date ? todo.date : ''} 
                <img src="./check-icon.png" onclick="completeTodo(event)" class="btn"/>
                <img src="./delete-icon.png" onclick="deleteTodo(event)" class="btn"/>
        </li>
`
    return item
}
const renderTodoItems = () => {
    list.innerHTML = ''
    let items = []
    todosArray.length ?
        todosArray.map((todo, id) => {
            items.unshift(createItem(todo, id))
            list.innerHTML = items.join('')
        }) :
        list.prepend('Учурда тапшырма жок')
}
renderTodoItems()