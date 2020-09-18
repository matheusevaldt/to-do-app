// Variables
const addTodoInput = document.querySelector('.add-todo-input');
const addTodoButton = document.querySelector('.add-todo-button');
const todoList = document.querySelector('.to-do-list');
const sizeList = document.querySelector('.size-list');
const nameList = document.querySelector('.name-list');
const userLists = document.querySelector('.user-lists');
const newListButton = document.querySelector('.new-list-button');
const createListBox = document.querySelector('.create-list-box');
const createListInput = document.querySelector('.create-list-input');
const createListButton = document.querySelector('.create-list-button');
const closeCreateListButton = document.querySelector('.close-create-list-button');
const manageListButton = document.querySelector('.manage-list-button');
const usernameBox = document.querySelector('.username-box');
const usernameInput = document.querySelector('.username-input');
const usernameCloseButton = document.querySelector('.username-close-button');
const usernameSubmitButton = document.querySelector('.username-submit-button');
const greetingsUsername = document.querySelector('.greetings-username');
const greetings = document.querySelector('.greetings');
const username = document.querySelector('.username');
const menu = document.querySelector('.menu');
const menuContent = document.querySelector('.menu-content');
const openMenuButton = document.querySelector('.open-menu-button');
const renameTodoBox = document.querySelector('.rename-to-do-box');
const renameTodoInput = document.querySelector('.rename-to-do-input');
const renameTodoButton = document.querySelector('.rename-to-do-button');
const closeRenameTodoButton = document.querySelector('.close-rename-to-do-button');
const notification = document.querySelector('.notification');
const manageListBox = document.querySelector('.manage-list-box');
const closeManageListButton = document.querySelector('.close-manage-list-button');
const manageListButtons = document.querySelector('.manage-list-buttons');
const deleteListBox = document.querySelector('.delete-list-box');
const renameListBox = document.querySelector('.rename-list-box');
const renameListButton = document.querySelector('.rename-list-button');
const renameListInput = document.querySelector('.rename-list-input');
const renameListSubmit = document.querySelector('.rename-list-submit');
const clearListButton = document.querySelector('.clear-list-button');
const clearCompletedButton = document.querySelector('.clear-completed-button');
const returnToManageListFrontPage = document.querySelector('.return-to-manage-list-front-page');
const deleteListButton = document.querySelector('.delete-list-button');
const deleteListButtonConfirmation = document.querySelector('.delete-list-button-confirmation');
const container = document.querySelector('.container');
const containerHeader = document.querySelector('.container-header');
const manageList = document.querySelector('.manage-list');
const infoList = document.querySelector('.info-list');
const noListsAvailable = document.querySelector('.no-lists-available');
const recycleBinButton = document.querySelector('.recycle-bin-button');
const recycleBinFrontPage = document.querySelector('.recycle-bin-front-page');
const recycleBinManage = document.querySelector('.recycle-bin-manage');
const recycleBinBox = document.querySelector('.recycle-bin-box');
const closeRecycleBinButton = document.querySelector('.close-recycle-bin-button');
const listsRecycleBin = document.querySelector('.lists-recycle-bin');
const listsInfoRecycleBin = document.querySelector('.lists-info-recycle-bin');
const clearRecycleBinFrontPage = document.querySelector('.clear-recycle-bin-front-page');
const switchButton = document.querySelector('.switch-button');
const recycleBinManageList = document.querySelector('.recycle-bin-manage-list');
const recycleBinManageStatus = document.querySelector('.recycle-bin-manage-status');
const recycleBinManageTodos = document.querySelector('.recycle-bin-manage-todos');
const recycleBinManageTodosHeader = document.querySelector('.recycle-bin-manage-todos-header');
const recycleBinTodosInfo = document.querySelector('.recycle-bin-todos-info');
const checkUncheckButton = document.querySelector('.check-uncheck-button');
const restoreButtonsHeader = document.querySelector('.restore-buttons-header');
const restoreOptionsText = document.querySelector('.restore-options-text');
const restoreButton = document.querySelector('.restore-button');
const restoreOnlyListButton = document.querySelector('.restore-only-list-button');
const returnToRecycleBinFrontPageButton = document.querySelector('.return-to-recycle-bin-front-page-button');
const clearRecycleBinConfirmation = document.querySelector('.clear-recycle-bin-confirmation');
const openClearRecycleBinConfirmationButton = document.querySelector('.open-clear-recycle-bin-confirmation-button');
const closeClearRecycleBinConfirmationButton = document.querySelector('.close-clear-recycle-bin-confirmation-button');
const clearRecycleBinButton = document.querySelector('.clear-recycle-bin-button');

const todoCompleted = 'fa-check-circle';
const todoIncompleted = 'fa-circle';
const solidStyleIcon = 'fas';
const regularStyleIcon = 'far';
const finished = 'item-completed';

let date;
let hours;
let minutes;
let seconds;
let todos;
let lists;
let currentNotification;
let todoToBeRenamed;
let listClickedRecycleBin;
let nextIdTodo;
let nextIdList;
let checkboxesArray;

addTodoButton.disabled = true;
createListButton.disabled = true;
usernameSubmitButton.disabled = true;
renameTodoButton.disabled = true;
renameListSubmit.disabled = true;
restoreButton.disabled = true;

// Local storage variables
let $todos = JSON.parse(localStorage.getItem('todos'));
let $lists = JSON.parse(localStorage.getItem('lists'));
let $currentList = JSON.parse(localStorage.getItem('current-list'));
let $username = JSON.parse(localStorage.getItem('username'));
let $dismissUsernameBox = JSON.parse(localStorage.getItem('dismiss-username-box'));
let $instructionsUsername = JSON.parse(localStorage.getItem('instructions-username'));
let $nextIdTodo = JSON.parse(localStorage.getItem('next-id-todo'));
let $nextIdList = JSON.parse(localStorage.getItem('next-id-list'));

// Event listeners
addTodoInput.addEventListener('input', addTodoButtonEnabled);
addTodoButton.addEventListener('click', event => event.preventDefault());
addTodoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', editTodo);
newListButton.addEventListener('click', openCreateList);
createListInput.addEventListener('input', createListButtonEnabled);
createListButton.addEventListener('click', event => event.preventDefault());
createListButton.addEventListener('click', createNewList);
closeCreateListButton.addEventListener('click', closeCreateList);
usernameInput.addEventListener('input', usernameSubmitButtonEnabled);
usernameSubmitButton.addEventListener('click', event => event.preventDefault());
usernameSubmitButton.addEventListener('click', getUsername);
greetingsUsername.addEventListener('click', openUsername);
usernameCloseButton.addEventListener('click', closeUsername);
usernameCloseButton.addEventListener('click', instructionsUsername);
openMenuButton.addEventListener('click', openMenu);
renameTodoInput.addEventListener('input', renameTodoButtonEnabled);
renameTodoButton.addEventListener('click', event => event.preventDefault());
renameTodoButton.addEventListener('click', renameTodo);
closeRenameTodoButton.addEventListener('click', closeRenameTodo);
manageListButton.addEventListener('click', openManageList);
closeManageListButton.addEventListener('click', closeManageList);
renameListButton.addEventListener('click', openRenameList);
renameListInput.addEventListener('input', renameListSubmitEnabled);
renameListSubmit.addEventListener('click', event => event.preventDefault());
renameListSubmit.addEventListener('click', renameList);
clearListButton.addEventListener('click', clearList);
clearCompletedButton.addEventListener('click', clearCompletedTodos);
returnToManageListFrontPage.addEventListener('click', manageListFrontPage);
deleteListButton.addEventListener('click', openDeleteList);
deleteListButtonConfirmation.addEventListener('click', deleteList);
switchButton.addEventListener('click', switchMenuButtons);
recycleBinButton.addEventListener('click', openRecycleBin);
closeRecycleBinButton.addEventListener('click', closeRecycleBin);
listsRecycleBin.addEventListener('click', getListRecycleBin);
restoreButton.addEventListener('click', restore);
restoreOnlyListButton.addEventListener('click', restoreList);
restoreOnlyListButton.addEventListener('click', restoreOnlyListNotifyUser);
checkUncheckButton.addEventListener('click', checkUncheckAll);
returnToRecycleBinFrontPageButton.addEventListener('click', returnToRecycleBinFrontPage);
openClearRecycleBinConfirmationButton.addEventListener('click', openClearRecycleBin);
closeClearRecycleBinConfirmationButton.addEventListener('click', closeClearRecycleBin)
clearRecycleBinButton.addEventListener('click', clearRecycleBin);

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', updateHeader);
    document.addEventListener('DOMContentLoaded', updateTime);
    document.addEventListener('DOMContentLoaded', updateDate);
    document.addEventListener('DOMContentLoaded', updateBackground);
    document.addEventListener('DOMContentLoaded', loadLists);
    document.addEventListener('DOMContentLoaded', loadCurrentList);
    document.addEventListener('DOMContentLoaded', updateListSize);
    document.addEventListener('DOMContentLoaded', loadTodos);
    document.addEventListener('DOMContentLoaded', loadUsernamePopup);
    document.addEventListener('DOMContentLoaded', loadNextIdTodo);
    document.addEventListener('DOMContentLoaded', loadNextIdList);
    document.addEventListener('DOMContentLoaded', fixViewHeightOnMobile);
} else {
    updateHeader();
    updateTime();
    updateDate();
    updateBackground();
    loadLists();
    loadCurrentList();
    updateListSize();
    loadTodos();
    loadUsernamePopup();
    loadNextIdTodo();
    loadNextIdList();
    fixViewHeightOnMobile();
}

function fixViewHeightOnMobile() {
    document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
}

function updateHeader() {
    date = new Date();
    hours = date.getHours();
    minutes = date.getMinutes();
    seconds = date.getSeconds();
    updateTime(); // every second
    if (hours == 0 && minutes == 0 && seconds == 0) { // at midnight
        updateDate();
    }
    if (minutes == 0 && seconds == 0) { // at a new hour
        updateBackground();
    }
}

setInterval(updateHeader, 1000);

function updateTime() {
    if (hours < 10 && hours.toString().length < 2) { 
        hours = '0' + hours;
    }
    if (minutes < 10 && minutes.toString().length < 2) {
        minutes = '0' + minutes;
    }
    const headerTime = document.querySelector('.header-time');
    headerTime.innerHTML = `${hours}:${minutes}`;
}

function updateDate() {
    const headerDate = document.querySelector('.header-date');
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    headerDate.innerHTML = date.toLocaleDateString('en-GB', options);
}

function updateBackground() {
    const header = document.querySelector('.header');
    if (hours == 6) {
        header.style.backgroundImage = 'url(images/sunrise.jpg)';
    } else if (hours >= 7 && hours <= 17) {
        header.style.backgroundImage = 'url(images/day.jpg)';
    } else if (hours == 18) {
        header.style.backgroundImage = 'url(images/sunset.jpg)';
    } else {
        header.style.backgroundImage = 'url(images/night.jpg)';
    }
}

function loadNextIdTodo() {
    if ($nextIdTodo) {
        nextIdTodo = JSON.parse(JSON.stringify($nextIdTodo));
    } else {
        nextIdTodo = 0;
        updateNextIdTodo(nextIdTodo);
    }
}

function updateNextIdTodo(id) {
    localStorage.setItem('next-id-todo', JSON.stringify(id));
    $nextIdTodo = JSON.parse(localStorage.getItem('next-id-todo'));
}

function loadNextIdList() {
    if ($nextIdList) {
        nextIdList = JSON.parse(JSON.stringify($nextIdList));
    } else {
        nextIdList = 0;
        updateNextIdList(nextIdList);
    }
}

function updateNextIdList(id) {
    localStorage.setItem('next-id-list', JSON.stringify(id));
    $nextIdList = JSON.parse(localStorage.getItem('next-id-list'));
}

function loadUsernamePopup() {
    if (!$username) {
        if (!$dismissUsernameBox) {
            openUsername();
        } else {
            closeUsername();
        }
    } else {
        closeUsername();
    }
}

function loadLists() {
    if ($lists) {
        lists = JSON.parse(JSON.stringify($lists));
        console.log('All the lists:');
        console.log(lists);
    } else {
        lists = [];
        updateCurrentList('None');
    }
}

function loadCurrentList() {
    if ($currentList === 'None') {
        manageList.style.display = 'none';
        infoList.style.display = 'none';
        noListsAvailable.style.display = 'block';
        containerHeader.classList.add('container-header-no-lists');
    } else {
        updateListName();
    }
    console.log(`Current list: ${$currentList}.`);
}

function updateListName() {
    lists.find(list => {
        if (list.id == $currentList) {
            nameList.innerHTML = list.name;
            nameList.id = list.id;
        }
    });
}

function updateCurrentList(id) {
    localStorage.setItem('current-list', JSON.stringify(id));
    $currentList = JSON.parse(localStorage.getItem('current-list'));
    console.log(`Current list: ${$currentList}.`);
}

function updateListSize() {
    let todos = todoList.childElementCount;
    if (todos === 0) {
        sizeList.innerHTML = 'empty'
    } else if (todos === 1) {
        sizeList.innerHTML = '1 item';
    } else {
        sizeList.innerHTML = `${todos} items`;
    }
}

function loadTodos() {
    if ($todos) {
        todos = JSON.parse(JSON.stringify($todos));
        displayCurrentTodos(todos);
        updateListSize();
        console.log('All the to-dos:');
        console.log(todos);
    } else {
        todos = [];
    }
}

function displayCurrentTodos(todos) {
    while (todoList.firstChild) { 
        todoList.removeChild(todoList.firstChild);
    }
    const todosFromCurrentList = todos.filter(todo => todo.isFromList == $currentList);
    const notInTheTrash = todosFromCurrentList.filter(todo => todo.trash === false);
    notInTheTrash.forEach(todo => createTodo(todo.name, todo.id, todo.completed, todo.trash, todo.isFromList));
}

function notifyUser(message, duration) {
    clearTimeout(currentNotification);
    notification.classList.add('display-notification');
    notification.innerHTML = message;
    currentNotification = setTimeout(() => notification.classList.remove('display-notification'), duration);
}

function addTodoButtonEnabled() {
    if (addTodoInput.value.length !== 0) {
        addTodoButton.disabled = false;
        addTodoButton.classList.add('add-todo-button-enabled');
    } else {
        addTodoButton.disabled = true;
        addTodoButton.classList.remove('add-todo-button-enabled');
    }
}

function addTodo() {
    if ($currentList === 'None') {
        createList(nextIdList, 'New list', false);
        updateCurrentList(nextIdList);
        nextIdList++;
        updateNextIdList(nextIdList);
        displayListInfo();
        updateListName();
    }
    const todo = addTodoInput.value;
    createTodo(todo, nextIdTodo, false);
    todos.push({name: todo, id: nextIdTodo, completed: false, trash: false, isFromList: $currentList});
    nextIdTodo++;
    updateNextIdTodo(nextIdTodo);
    updateTodos(todos);
    resetAddTodoInputs();
    notifyUser('<i class="fas fa-check-circle"></i> The to-do has been created.', 4000);
}

function createTodo(todo, id, completed) {
    const style = completed ? solidStyleIcon : regularStyleIcon;
    const icon = completed ? todoCompleted : todoIncompleted;
    const line = completed ? finished : '';
    const content = `
    <li class='to-do' id='${id}'>
        <i class='${style} ${icon} complete-to-do'></i>
        <p class='to-do-item ${line}'>${todo}</p>
        <i class="far fa-edit rename-to-do"></i>
        <i class='far fa-trash-alt delete-to-do'></i>
    </li>
    `;
    todoList.insertAdjacentHTML('beforeend', content);
    updateListSize();
}

function resetAddTodoInputs() {
    addTodoInput.value = '';
    addTodoButton.disabled = true;
    addTodoButton.classList.remove('add-todo-button-enabled');
}

function updateTodos(todos) {
    localStorage.setItem('todos', JSON.stringify(todos));
    $todos = JSON.parse(localStorage.getItem('todos'));
    console.log('All the to-dos:')
    console.log($todos);
}

function openCreateList() {
    createListBox.style.display = 'flex';
    createListInput.focus();
}

function closeCreateList() {
    createListBox.style.display = 'none';
    resetCreateList();
}

function resetCreateList() {
    createListInput.value = '';
    createListButton.disabled = true;
    createListButton.classList.remove('create-list-button-enabled');
}

function createListButtonEnabled() {
    if (createListInput.value.length !== 0) {
        createListButton.disabled = false;
        createListButton.classList.add('create-list-button-enabled');
    } else {
        createListButton.disabled = true;
        createListButton.classList.remove('create-list-button-enabled');
    }
}

function createNewList() { 
    createList(nextIdList, createListInput.value, false);
    updateCurrentList(nextIdList);
    nextIdList++;
    updateNextIdList(nextIdList);
    updateListsMenu();
    displayListInfo();
    displayCurrentTodos(todos);
    updateListSize();
    updateListName();
    closeCreateList();
    highlightCurrentList();
    closeMenu();
}

function createList(id, name, trash) {
    lists.push({id: id, name: name, trash: trash});
    updateLists(lists);
    notifyUser('<i class="fas fa-check-circle"></i> The list has been created.', 4000);
}

function updateLists(lists) {
    localStorage.setItem('lists', JSON.stringify(lists));
    $lists = JSON.parse(localStorage.getItem('lists'));
    console.log('All the lists:')
    console.log($lists);
}

function updateListsMenu() {
    while (userLists.firstChild) {
        userLists.removeChild(userLists.firstChild);
    }
    lists.forEach(list => {
        if (list.trash === false) {
            const listId = list.id;
            const listName = list.name;
            const p = document.createElement('p');
            p.className = `list ${listId}`;
            p.innerHTML = listName;
            userLists.appendChild(p);
        }
    });
}

function displayListInfo() {
    noListsAvailable.style.display = 'none';
    manageList.style.display = 'flex';
    infoList.style.display = 'block';
    containerHeader.classList.remove('container-header-no-lists');
}

function openMenu() {
    updateListsMenu();
    displayUsername($username);
    displayGreetings();
    menu.style.display = 'flex';
    setTimeout(() => menuContent.classList.add('menu-content-open'), 10);
    highlightCurrentList();
}

function displayUsername(name) {
    const commaOrDot = document.querySelector('.comma-or-dot');
    if ($username) {
        const toUpperCaseFirstLetterOfUsername = name.charAt(0).toUpperCase();
        const toLowerCaseRestOfUsername = name.slice(1).toLowerCase();
        let fullUsername = toUpperCaseFirstLetterOfUsername + toLowerCaseRestOfUsername;
        while (fullUsername.slice(-1) === ' ') {
            let removeBlankSpaceAtTheEnd = fullUsername.slice(0, -1);
            fullUsername = removeBlankSpaceAtTheEnd;
        }
        username.innerHTML = `${fullUsername}.`;
        commaOrDot.innerHTML = ',';
    } else {
        username.innerHTML = '';
        commaOrDot.innerHTML = '.';
    }
}

function displayGreetings() {
    if ((hours >= 6) && (hours <= 11 && minutes <= 59)) {
        greetings.innerHTML = 'Good morning';
    } else if ((hours >= 12) && (hours <= 16 && minutes <= 59)) {
        greetings.innerHTML = 'Good afternoon';
    } else {
        greetings.innerHTML = 'Good evening';
    }
}

function highlightCurrentList() {
    const listsInTheMenu = document.querySelectorAll('.list');
    listsInTheMenu.forEach(list => {
        const id = list.classList[1];
        if (id == $currentList) {
            list.classList.add('highlight');
            console.log(`List id: ${id}. Current list id: ${$currentList}. Highlight!`);
        } else {
            list.classList.remove('highlight');
            console.log(`List id: ${id}. Current list id: ${$currentList}. Don't highlight.`);
        }
    });
}

function closeMenu() {
    setTimeout(() => menuContent.classList.remove('menu-content-open'), 0);
    setTimeout(() => menu.style.display = 'none', 410);
}

window.addEventListener('click', event => {
    if (event.target === menu) {
        closeMenu();
    }   
});

userLists.addEventListener('click', event => {
    const element = event.target;
    const id = element.classList[1];
    closeMenu();
    updateCurrentList(id);
    displayCurrentTodos(todos);
    updateListSize();
    nameList.innerHTML = element.innerHTML;
    nameList.id = id;
});

document.querySelector('.lists').addEventListener('scroll', () => {
    const myLists = document.querySelector('.my-lists');
    let distance = myLists.getBoundingClientRect().top;
    if (distance === 0) {
        myLists.classList.add('my-lists-sticky');
    } else {
        myLists.classList.remove('my-lists-sticky');
    }
});

function switchMenuButtons() {
    const menuButtons = document.querySelector('.menu-buttons');
    menuButtons.classList.toggle('menu-buttons-toggle');
    newListButton.classList.toggle('new-list-button-toggle');
    recycleBinButton.classList.toggle('recycle-bin-button-toggle');
}

function openUsername() {
    closeMenu();
    usernameBox.style.display = 'flex';
    if (!$dismissUsernameBox && !$username) {
        usernameCloseButton.value = 'Dismiss';
    } else {
        usernameCloseButton.value = 'Close';
    }
}

function closeUsername() {
    usernameBox.style.display = 'none';
    localStorage.setItem('dismiss-username-box', JSON.stringify(true));
    $dismissUsernameBox = JSON.parse(localStorage.getItem('dismiss-username-box'));
    resetUsernameInputs();
}

function resetUsernameInputs() {
    usernameInput.value = '';
    usernameSubmitButton.classList.remove('username-submit-button-enabled');
    usernameSubmitButton.disabled = true;
}

function usernameSubmitButtonEnabled() {
    if (usernameInput.value.length !== 0) {
        usernameSubmitButton.disabled = false;
        usernameSubmitButton.classList.add('username-submit-button-enabled');
    } else {
        usernameSubmitButton.disabled = true;
        usernameSubmitButton.classList.remove('username-submit-button-enabled');
    }
}

function getUsername() {
    const usernameSubmitted = usernameInput.value;
    localStorage.setItem('username', JSON.stringify(usernameSubmitted));
    $username = JSON.parse(localStorage.getItem('username'));
    closeUsername();
    notifyUser('<i class="fas fa-check-circle"></i> Your username has been submitted.', 4000);
}

function instructionsUsername() {
    displayGreetings();
    const periodOfTheDay = greetings.textContent;
    if (!$instructionsUsername && !$username) {
        notifyUser(`You can submit your username anytime by just opening the menu and clicking in the <span style="font-weight: 700">${periodOfTheDay}</span> message.`, 7500);
        localStorage.setItem('instructions-username', JSON.stringify(true));
        $instructionsUsername = JSON.parse(localStorage.getItem('instructions-username'));
    }
}

function editTodo(event) {
    const element = event.target;
    const idTodo = element.parentElement.id;
    const interaction = JSON.stringify(element.classList);
    if (interaction.includes('complete-to-do')) {
        element.classList.toggle(todoCompleted);
        element.classList.toggle(todoIncompleted);
        element.classList.toggle(solidStyleIcon);
        element.classList.toggle(regularStyleIcon);
        element.nextElementSibling.classList.toggle('item-completed');
        todos.find(todo => {
            if (todo.id == idTodo) {
                todo.completed = todo.completed ? false : true;
            }
        });
        updateTodos(todos);
        if (interaction.includes('fa-circle')) {
            notifyUser(`<i class="fas fa-check-circle"></i> The to-do is now marked as completed.`, 3000);
        } else {
            notifyUser(`<i class="fas fa-check-circle"></i> The to-do is now marked as incompleted.`, 4000);
        }
    }
    if (interaction.includes('rename-to-do')) {
        renameTodoBox.style.display = 'flex';
        resetRenameTodo();
        renameTodoInput.focus();
        todos.find(todo => {
            if (todo.id == idTodo) {
                document.querySelector('.current-to-do-name').innerHTML = todo.name;
            }
        });
        todoToBeRenamed = idTodo;
    }
    if (interaction.includes('delete-to-do')) {
        todos.find(todo => {
            if (todo.id == idTodo) {
                todo.trash = true;
            }
        });
        updateTodos(todos);
        displayCurrentTodos(todos);
        updateListSize();
        notifyUser('<i class="fas fa-check-circle"></i> The to-do has been deleted.', 4000);
    }
}

function closeRenameTodo() {
    renameTodoBox.style.display = 'none';
    resetRenameTodo();
}

function resetRenameTodo() {
    renameTodoInput.value = '';
    renameTodoButton.disabled = true;
    renameTodoButton.classList.remove('rename-to-do-button-enabled');
}

function renameTodoButtonEnabled() {
    if (renameTodoInput.value.length !== 0) {
        renameTodoButton.disabled = false;
        renameTodoButton.classList.add('rename-to-do-button-enabled');
    } else {
        renameTodoButton.disabled = true;
        renameTodoButton.classList.remove('rename-to-do-button-enabled');
    }
}

function renameTodo() {
    todos.find(todo => {
        if (todo.id == todoToBeRenamed) {
            todo.name = renameTodoInput.value;
        }
    });
    updateTodos(todos);
    closeRenameTodo();
    displayCurrentTodos(todos);
    notifyUser('<i class="fas fa-check-circle"></i> The to-do has been renamed.', 4000);
}

function openManageList() {
    manageListBox.style.display = 'flex';
}

function closeManageList() {
    manageListBox.style.display = 'none';
    manageListFrontPage();
    resetRenameListInputs();
}

window.addEventListener('click', event => {
    if (event.target === manageListBox) {
        closeManageList();
    }
});

function manageListFrontPage() {
    deleteListBox.style.display = 'none';
    renameListBox.style.display = 'none';
    manageListButtons.style.display = 'flex';
}

function openRenameList() {
    manageListButtons.style.display = 'none';
    renameListBox.style.display = 'flex';
    lists.find(list => {
        if (list.id == $currentList) {
            document.querySelector('.current-list-name').innerHTML = list.name;
        }
    });
    renameListInput.focus();
}

function resetRenameListInputs() {
    renameListInput.value = '';
    renameListSubmit.disabled = true;
    renameListSubmit.classList.remove('rename-list-submit-enabled');
}

function renameListSubmitEnabled() {
    if (renameListInput.value.length !== 0) {
        renameListSubmit.disabled = false;
        renameListSubmit.classList.add('rename-list-submit-enabled');
    } else {
        renameListSubmit.disabled = true;
        renameListSubmit.classList.remove('rename-list-submit-enabled');
    }
}

function renameList() {
    lists.find(list => {
        if (list.id == $currentList) {
            list.name = renameListInput.value;
            nameList.innerHTML = list.name;
        }
    });
    updateLists(lists);
    closeManageList();
    notifyUser('<i class="fas fa-check-circle"></i> The list has been renamed.', 4000)
}

function clearCompletedTodos() {
    let amountOfCompletedTodos = 0;
    todos.forEach(todo => {
        if (todo.isFromList == $currentList && todo.completed === true) {
            todo.trash = true;
            updateTodos(todos);
            amountOfCompletedTodos++;
        }
    });
    manageListBox.style.display = 'none';
    displayCurrentTodos(todos);
    updateListSize();
    if (amountOfCompletedTodos === 1) {
        notifyUser('<i class="fas fa-check-circle"></i> The completed to-do has been removed.', 4000);
    } else if (amountOfCompletedTodos > 1) {
        notifyUser('<i class="fas fa-check-circle"></i> Completed to-dos have been removed.', 4000);
    }
}

function clearList() {
    let amountOfTodosDeleted = 0;
    todos.forEach(todo => {
        if (todo.isFromList == $currentList) {
            todo.trash = true;
            updateTodos(todos);
            amountOfTodosDeleted++;
        }
    });
    manageListBox.style.display = 'none';
    displayCurrentTodos(todos);
    updateListSize();
    if (amountOfTodosDeleted !== 0) {
        notifyUser('<i class="fas fa-check-circle"></i> The list has been cleared.', 4000);
    }
}

function openDeleteList() {
    manageListButtons.style.display = 'none';
    deleteListBox.style.display = 'flex';
    lists.find(list => {
        if (list.id == $currentList) {
            document.querySelector('.list-to-be-deleted').innerHTML = list.name;
        }
    });
}

function deleteList() {
    lists.find(list => {
        if (list.id == $currentList) {
            list.trash = true;
        }
    })
    updateLists(lists);
    closeManageList();
    deleteTodos(todos);
    displayAvailableList();
    displayCurrentTodos(todos);
    updateListSize();
    notifyUser('<i class="fas fa-check-circle"></i> The list has been deleted.', 4000);
}

function deleteTodos(todos) {
    todos.forEach(todo => {
        if (todo.isFromList == $currentList) {
            todo.trash = true;
            updateTodos(todos);
        }
    });
}

function displayAvailableList() {
    let isThereAvailableList;
    let idAvailableList;
    lists.find(list => {
        if (list.trash === false) {
            isThereAvailableList = true;
            idAvailableList = list.id;
            return true;
        }
    });
    if (isThereAvailableList === true) {
        updateCurrentList(idAvailableList);
        updateListName();
        console.log('TEM LISTA DISPONÍVEL')
    } else {
        console.log('NÃO TEM LISTA DISPONÍVEL');
        manageList.style.display = 'none';
        infoList.style.display = 'none';
        noListsAvailable.style.display = 'block';
        containerHeader.classList.add('container-header-no-lists');
        updateCurrentList('None');
    }
}

function openRecycleBin() {
    todoList.style.pointerEvents = 'none';
    recycleBinBox.style.display = 'flex';
    recycleBinFrontPage.style.display = 'block';
    closeMenu();
    displayListsRecycleBin(lists);
    displayInfoListsRecycleBin();
    getOpenClearRecycleBinButtonStatus();
}

function closeRecycleBin() {
    todoList.style.pointerEvents = 'auto';
    recycleBinBox.style.display = 'none';
    recycleBinManage.style.display = 'none';
    clearRecycleBinConfirmation.style.display = 'none';
}

function getOpenClearRecycleBinButtonStatus() {
    let openClearRecycleBinButtonStatus = false;
    lists.find(list => {
        if (list.trash === true) {
            openClearRecycleBinButtonStatus = true;
            return true;
        }
    });
    todos.find(todo => {
        if (todo.trash === true) {
            openClearRecycleBinButtonStatus = true;
            return true;
        }
    });
    if (openClearRecycleBinButtonStatus) {
        openClearRecycleBinConfirmationButton.disabled = false; 
        openClearRecycleBinConfirmationButton.classList.add('open-clear-recycle-bin-confirmation-button-enabled');
    } else {
        openClearRecycleBinConfirmationButton.disabled = true;
        openClearRecycleBinConfirmationButton.classList.remove('open-clear-recycle-bin-confirmation-button-enabled');
    }
}

function displayListsRecycleBin(lists) {
    while (listsRecycleBin.firstChild) {
        listsRecycleBin.removeChild(listsRecycleBin.firstChild);
    }
    lists.forEach(list => {
        const listId = list.id;
        const listName = list.name;
        const div = document.createElement('div');
        const p = document.createElement('p');
        const icon = document.createElement('i');
        div.className = `list-recycle-bin-box ${listId}`;
        p.className = `list-recycle-bin ${listId}`;
        icon.className = `restore-icon ${listId} fas fa-trash-restore-alt`;
        p.innerHTML = listName;
        div.appendChild(p);
        div.appendChild(icon);
        listsRecycleBin.appendChild(div);
    });
    if (listsRecycleBin.childElementCount > 4 && screen.width > 1110) {
        listsRecycleBin.style.paddingRight = '5px';
    } else {
        listsRecycleBin.style.paddingRight = '0';
    }
}

function displayInfoListsRecycleBin() {
    let listsInTheRecycleBin = listsRecycleBin.childElementCount;
    if (listsInTheRecycleBin !== 0) {
        listsInfoRecycleBin.innerHTML = 'Select a list to restore it and to restore to-dos that have been deleted.';
        clearRecycleBinFrontPage.style.display = 'flex';
    } else {
        listsInfoRecycleBin.innerHTML = 'You have no lists.';
        clearRecycleBinFrontPage.style.display = 'none';
    }
}

function getListRecycleBin(event) {
    const element = event.target;
    const interaction = JSON.stringify(element.classList);
    if (interaction.includes('list-recycle-bin-box') || interaction.includes('list-recycle-bin') || interaction.includes('restore-icon')) {
        listClickedRecycleBin = element.classList[1];
        displayManageRecycleBin();
        console.log(`List clicked: ${listClickedRecycleBin}.`)
    }
}

function displayManageRecycleBin() {
    recycleBinFrontPage.style.display = 'none';
    recycleBinManage.style.display = 'flex';
    let status;
    lists.find(list => {
        if (list.id == listClickedRecycleBin) {
            recycleBinManageList.innerHTML = list.name;
            status = list.trash ? 'in the recycle bin.' : 'currently active.';
        }
    });
    recycleBinManageStatus.innerHTML = `<span style="font-weight: 700">List status:</span> ${status}`;
    displayTodosRecycleBin(todos);
}

function displayTodosRecycleBin(todos) {
    while (recycleBinManageTodos.firstChild) {
        recycleBinManageTodos.removeChild(recycleBinManageTodos.firstChild);
    }
    todos.filter(todo => {
        if (todo.isFromList == listClickedRecycleBin && todo.trash === true) {
            const todoId = todo.id;
            const todoName = todo.name;
            const div = document.createElement('div');
            const p = document.createElement('p');
            const label = document.createElement('label');
            const checkbox = document.createElement('input');
            const icon = document.createElement('i');
            div.className = 'recycle-bin-todo-box';
            p.className = `recycle-bin-todo ${todoId}`;
            label.className = 'recycle-bin-label';
            checkbox.className = `recycle-bin-checkbox ${todoId}`;
            checkbox.type = 'checkbox';
            icon.className = 'recycle-bin-checkbox-custom far fa-square';
            p.innerHTML = todoName;
            div.appendChild(p);
            label.appendChild(checkbox);
            label.appendChild(icon);
            div.appendChild(label);
            recycleBinManageTodos.appendChild(div);
        }
    });
    if (recycleBinManageTodos.childElementCount > 4 && screen.width > 1100) {
        recycleBinManageTodos.style.paddingRight = '5px';
        checkUncheckButton.style.paddingRight = '28px';
    } else {
        recycleBinManageTodos.style.paddingRight = '0';
        checkUncheckButton.style.paddingRight = '13.2px';
    }
    setUpRecycleBinManage();
    setUpRecycleBinButtons();
}

function setUpRecycleBinManage() {
    if (recycleBinManageTodos.childElementCount !== 0) {
        checkboxesArray = [...document.querySelectorAll('.recycle-bin-checkbox')];
        checkboxesStatus();
        resetCheckUncheckAllAndRestoreButtons();
        checkUncheckButton.style.display = 'flex';
        recycleBinManageTodosHeader.classList.remove('recycle-bin-manage-todos-header-no-todos');
        recycleBinTodosInfo.innerHTML = `List's deleted to-dos`;
        recycleBinTodosInfo.classList.remove('recycle-bin-todos-info-no-todos');
        recycleBinManageTodos.style.display = 'flex';
    } else {
        checkUncheckButton.style.display = 'none';
        recycleBinManageTodosHeader.classList.add('recycle-bin-manage-todos-header-no-todos');
        recycleBinTodosInfo.innerHTML = `This list doesn't have any deleted to-do to be restored.`;
        recycleBinTodosInfo.classList.add('recycle-bin-todos-info-no-todos');
        recycleBinManageTodos.style.display = 'none';
    }
}

function setUpRecycleBinButtons() {
    let isListClickedInTheTrash = false;
    lists.find(list => {
        if (list.id == listClickedRecycleBin && list.trash === true) {
            isListClickedInTheTrash = true;
        }
    });
    if (recycleBinManageTodos.childElementCount !== 0) {
        if (isListClickedInTheTrash === false) {
            console.log('There ARE to-dos to be deleted. List is NOT in the trash.');
            restoreButton.style.display = 'block';
            restoreOnlyListButton.style.display = 'none';
            restoreButtonsHeader.classList.remove('restore-buttons-header-no-restore-options');
            returnToRecycleBinFrontPageButton.classList.remove('return-to-recycle-bin-front-page-button-center');
            restoreOptionsText.style.display = 'block';
        } else {
            console.log('There ARE to-dos to be deleted. List IS in the trash.');
            restoreButton.style.display = 'block';
            restoreOnlyListButton.style.display = 'block';
            restoreOnlyListButton.disabled = false;
            restoreButtonsHeader.classList.remove('restore-buttons-header-no-restore-options');
            returnToRecycleBinFrontPageButton.classList.remove('return-to-recycle-bin-front-page-button-center');
            restoreOptionsText.style.display = 'block';
        }
    } else {
        if (isListClickedInTheTrash === false) {
            console.log('There are NO to-dos to be deleted. List is NOT in the trash.');
            restoreButton.style.display = 'none';
            restoreOnlyListButton.style.display = 'none';
            restoreButtonsHeader.classList.add('restore-buttons-header-no-restore-options');
            returnToRecycleBinFrontPageButton.classList.add('return-to-recycle-bin-front-page-button-center');
            restoreOptionsText.style.display = 'none';
        } else {
            console.log('There are NO to-dos to be deleted. List IS in the trash.');
            restoreButton.style.display = 'none';
            restoreOnlyListButton.style.display = 'block';
            restoreButtonsHeader.classList.remove('restore-buttons-header-no-restore-options');
            returnToRecycleBinFrontPageButton.classList.remove('return-to-recycle-bin-front-page-button-center');
            restoreOptionsText.style.display = 'block';
        }
    }
}

function returnToRecycleBinFrontPage() {
    recycleBinFrontPage.style.display = 'block';
    recycleBinManage.style.display = 'none';
}

function checkboxesStatus() {
    checkboxesArray.forEach(checkbox => {
        checkbox.addEventListener('click', () => {
            let atLeastOne = checkboxesArray.some(checkbox => checkbox.checked === true);
            let all = checkboxesArray.every(checkbox => checkbox.checked === true);
            let none = checkboxesArray.every(checkbox => checkbox.checked === false);
            restoreButtonEnabled(atLeastOne);
            restoreOnlyListButtonEnabledPartOne(atLeastOne);
            checkUncheckStatus(all, none);
            if (checkbox.checked) {
                checkbox.nextElementSibling.classList.remove('far', 'fa-square');
                checkbox.nextElementSibling.classList.add('fas', 'fa-check-square');
            } else {
                checkbox.nextElementSibling.classList.remove('fas', 'fa-check-square');
                checkbox.nextElementSibling.classList.add('far', 'fa-square');
            }
        });
    });
}

function resetCheckUncheckAllAndRestoreButtons() {
    restoreButton.disabled = true;
    restoreOnlyListButton.disabled = false;
    restoreButton.classList.remove('restore-button-enabled');
    restoreOnlyListButton.classList.remove('restore-only-list-button-disabled');
    checkUncheckButton.classList.remove('fas', 'fa-check-square', 'check-all');
    checkUncheckButton.classList.add('far', 'fa-square', 'uncheck-all');
}

function restoreButtonEnabled(atLeastOne) {
    if (atLeastOne) {
        restoreButton.classList.add('restore-button-enabled');
        restoreButton.disabled = false;
    } else {
        restoreButton.classList.remove('restore-button-enabled');
        restoreButton.disabled = true;
    }
}

function restoreOnlyListButtonEnabledPartOne(atLeastOne) {
    let isListClickedInTheTrash = false;
    lists.find(list => {
        if (list.id == listClickedRecycleBin && list.trash === true) {
            isListClickedInTheTrash = true;
        }
    });
    if (isListClickedInTheTrash === true) {
        if (atLeastOne) {
            restoreOnlyListButton.classList.add('restore-only-list-button-disabled');
            restoreOnlyListButton.disabled = true;
        } else {
            restoreOnlyListButton.classList.remove('restore-only-list-button-disabled');
            restoreOnlyListButton.disabled = false;
        }
    }
}

function restoreOnlyListButtonEnabledPartTwo(all, none) {
    let isListClickedInTheTrash = false;
    lists.find(list => {
        if (list.id == listClickedRecycleBin && list.trash === true) {
            isListClickedInTheTrash = true;
        }
    });
    if (isListClickedInTheTrash === true) {
        if (all) {
            restoreOnlyListButton.classList.add('restore-only-list-button-disabled');
            restoreOnlyListButton.disabled = true;
        } 
        if (none) {
            restoreOnlyListButton.classList.remove('restore-only-list-button-disabled');
            restoreOnlyListButton.disabled = false;
        }
    }
}

function checkUncheckStatus(all, none) {
    if (all) {
        checkUncheckButton.classList.remove('far', 'fa-square', 'uncheck-all');
        checkUncheckButton.classList.add('fas', 'fa-check-square', 'check-all');
    }
    if (none) {
        checkUncheckButton.classList.remove('fas', 'fa-check-square', 'check-all');
        checkUncheckButton.classList.add('far', 'fa-square', 'uncheck-all');
    }
}

function checkUncheckAll() {
    const interaction = JSON.stringify(checkUncheckButton.classList);
    if (interaction.includes('uncheck-all')) {
        checkUncheckButton.classList.remove('far', 'fa-square', 'uncheck-all');
        checkUncheckButton.classList.add('fas', 'fa-check-square', 'check-all');
        checkAllTodos();
        restoreOnlyListButtonEnabledPartTwo(true, false);
        return;
    }
    if (interaction.includes('check-all')) {
        checkUncheckButton.classList.remove('fas', 'fa-check-square', 'check-all');
        checkUncheckButton.classList.add('far', 'fa-square', 'uncheck-all');
        uncheckAllTodos();
        restoreOnlyListButtonEnabledPartTwo(false, true);
        return;
    }
}

function checkAllTodos() {
    checkboxesArray.forEach(checkbox => {
        checkbox.checked = true;
        checkbox.nextElementSibling.classList.remove('far', 'fa-square');
        checkbox.nextElementSibling.classList.add('fas', 'fa-check-square');
    });
    restoreButton.classList.add('restore-button-enabled');
    restoreButton.disabled = false;
}

function uncheckAllTodos() {
    checkboxesArray.forEach(checkbox => {
        checkbox.checked = false;
        checkbox.nextElementSibling.classList.remove('fas', 'fa-check-square');
        checkbox.nextElementSibling.classList.add('far', 'fa-square');
    });
    restoreButton.classList.remove('restore-button-enabled');
    restoreButton.disabled = true;
}

function restore() {
    let restoreOnlyTodoAmount = 0;
    let restoreTodoWithListAmount = 0;
    let listTrashStatus;
    lists.find(list => {
        if (list.id == listClickedRecycleBin) {
            listTrashStatus = list.trash;
        }
    });
    checkboxesArray.forEach(checkbox => {
        if (checkbox.checked) {
            const id = checkbox.classList[1];
            console.log(`ID todo: ${id}. List status: ${listTrashStatus}.`)
            if (!listTrashStatus) {
                restoreTodo(id);
                restoreOnlyTodoAmount++;
            }
            if (listTrashStatus) {
                restoreTodo(id);
                restoreTodoWithListAmount++;
            }
        }
    });
    if (restoreOnlyTodoAmount !== 0) {
        restoreOnlyTodoNotifyUser(restoreOnlyTodoAmount);
    }
    if (restoreTodoWithListAmount !== 0) {
        restoreList();
        restoreTodoWithListNotifyUser(restoreTodoWithListAmount);
    }
}

function restoreTodo(idTodo) {
    todos.filter(todo => {
        if (todo.id == idTodo) {
            todo.trash = false;
            updateTodos(todos);
            updateCurrentList(listClickedRecycleBin);
            displayListInfo();
            updateListName();
            displayCurrentTodos(todos);
            updateListSize();
            closeRecycleBin();
            console.log(`Todo: '${todo.name}' has been restored.`);
        }
    });
}

function restoreList() {
    lists.find(list => {
        if (list.id == listClickedRecycleBin) {
            list.trash = false;
            updateLists(lists);
            updateCurrentList(listClickedRecycleBin);
            displayListInfo();
            updateListName();
            displayCurrentTodos(todos);
            updateListSize();
            closeRecycleBin();
            console.log(`List: '${list.name}' has been restored.`);
        }
    });
}

function restoreOnlyTodoNotifyUser(amount) {
    if (amount === 1) {
        notifyUser('<i class="fas fa-check-circle"></i> The to-do has been restored.', 4000);
    } else {
        notifyUser('<i class="fas fa-check-circle"></i> The to-dos have been restored.', 4000);
    }
}

function restoreTodoWithListNotifyUser(amount) {
    if (amount === 1) {
        notifyUser('<i class="fas fa-check-circle"></i> The to-do and its list have been restored.', 5000);
    } else {
        notifyUser('<i class="fas fa-check-circle"></i> The to-dos and its list have been restored.', 5000);
    }
}

function restoreOnlyListNotifyUser() {
    notifyUser('<i class="fas fa-check-circle"></i> The list has been been restored.', 4000);
}

function openClearRecycleBin() {
    recycleBinFrontPage.style.display = 'none';
    clearRecycleBinConfirmation.style.display = 'flex';
}

function closeClearRecycleBin() {
    clearRecycleBinConfirmation.style.display = 'none';
    recycleBinFrontPage.style.display = 'block';
}

function clearRecycleBin() {
    let listsUpdated = [];
    let todosUpdated = [];
    let listId;
    lists.forEach(list => {
        listId = list.id;
        if (list.trash === false) {
            todos.forEach(todo => {
                if (todo.isFromList == listId && todo.trash === false) {
                    todosUpdated.push(todo);
                }
            });
            listsUpdated.push(list);
        }
    });
    lists = listsUpdated;
    todos = todosUpdated;
    if (lists.length === 0) {
        localStorage.removeItem('lists');
        localStorage.removeItem('todos');
    } else {
        if (todos.length === 0) {
            console.log('There are only lists');
            localStorage.removeItem('todos');
            updateLists(lists);
            displayAvailableList();
        } else {
            console.log('There are lists and to-dos');
            updateLists(lists);
            updateTodos(todos);
            displayAvailableList();
            displayCurrentTodos(todos);
            updateListSize();
        }
    }
    closeRecycleBin();
    notifyUser('<i class="fas fa-check-circle"></i> The recycle bin has been cleared.', 4000);
}

window.addEventListener('click', () => {
    if (document.activeElement === addTodoInput
     || document.activeElement === createListInput
     || document.activeElement === renameTodoInput
     || document.activeElement === renameListInput
     || document.activeElement === usernameInput) {
        document.body.style.overflow = 'hidden';
        const isMobileDevice = window.navigator.userAgent.toLowerCase().includes("mobi");
        if (isMobileDevice) {
            container.classList.add('container-mobile-device-adjustment');
        }
    } else {
        document.body.style.overflow = 'visible';
        container.classList.remove('container-mobile-device-adjustment');
    }
});