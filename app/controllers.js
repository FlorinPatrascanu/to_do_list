angular.module('todo')
    .controller('todoController', function ($scope, todoItemsFactory, categoriesFactory) {
        $scope.title = 'To do app';
        $scope.addItem = todoItemsFactory.createItem();
        $scope.categoriesList = categoriesFactory.getCategories();

        $scope.itemsFactory = todoItemsFactory;
        
        $scope.addNewItem = function addNewItem() {
            todoItemsFactory.addNewItem($scope.addItem);
            $scope.addItem = todoItemsFactory.createItem();
        };
    
        $scope.sortOrder = false;
    
        $scope.customSort = function(title) {
            $scope.sortOrder = title;
            return $scope.sortOrder;
        };
        
        
    })
    .controller('categoriesController', function ($scope, categoriesFactory) {
        $scope.categoriesList = categoriesFactory.getCategories();

        $scope.addNewCategory = function (item){
          categoriesFactory.addNewCategory(item);  
          $scope.newCategory = '';
        };
    
        $scope.removeCat = function(item) {
          var index = $scope.categoriesList.indexOf(item);
          $scope.categoriesList.splice(index , 1);
        }
    
    });