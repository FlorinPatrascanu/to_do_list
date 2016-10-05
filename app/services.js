angular.module('todo')
    .factory('todoItemsFactory', itemsFactory)
    .factory('categoriesFactory', categoriesFactory);

function itemsFactory($window) {
    var items = [
        {
          title: 'Implemented functionalities ',
          description: "The following functionalities were added to the app : Add task , Remove task , Complete task , Categorize task , Add date limit ,                               Filter by title via a searchbox , Sort by title , Persist task , Add category , Remove category , Animations on tasks and categories on                         hover. ",
          complete: false,
          dueDate: '',
          category: 'Work'   
        }
    ];
    var saveItems = JSON.parse(localStorage.getItem('items'));
    
    if(saveItems) {
        items = saveItems;
    }
    

    function createItem() {
        return {
            title: '',
            description: '',
            complete: false,
            dueDate: '',
            category: ''
        }
    }

    function getItems() {
        return items;
    }

    function addNewItem(item) {
        item.dueDate = new Date(item.dueDate);        
        items.push(item);
        localStorage.setItem('items',JSON.stringify(items));
    };
    
    function removeItem(item) {
        var index = items.indexOf(item);
        items.splice(index, 1);
        localStorage.setItem('items',JSON.stringify(items));
    }
    
    function itemsLength() {
        return items.length;
    }

    

    return {
        createItem: createItem,
        getItems: getItems,
        addNewItem: addNewItem,
        removeItem: removeItem,
        itemsLength: itemsLength
    }
};


function categoriesFactory() {
    var initialCategories = ['Home', 'Work', 'Extra'];


    return {
        getCategories: getCategories,
        addNewCategory: addNewCategory,
    };

    function getCategories() {
        return initialCategories;
    }

    function addNewCategory(item) {
        initialCategories.push(item);
    };
    
    
    
}
