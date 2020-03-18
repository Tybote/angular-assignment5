(function () {
    "use strict";
    
    angular.module('public')
    .component('signupForm', {
      templateUrl: 'src/public/user/signup-form.html',
      controller: SignupController
    });

    SignupController.$inject = ['MenuService'];
    function SignupController(MenuService) {
        var $ctrl = this;
        $ctrl.completed = false;
        $ctrl.invalid = false;

        $ctrl.$onInit = function() {
            if(!MenuService.menuItemsCached)
            {
                MenuService.getMenuItems()
                .then(function (response) {
                    var menuItems = response.menu_items;
                    menuItems.forEach(function(item, index) {
                        MenuService.menuItems[item.short_name] = item;
                    });
                });
                MenuService.menuItemsCached = true;
            }
        };

        $ctrl.submit = function () {
            console.log($ctrl.user.firstname);
            console.log($ctrl.user.lastname);
            console.log($ctrl.user.email);
            console.log($ctrl.user.phone);
            console.log($ctrl.favoriteDish);

            if(MenuService.menuItems[$ctrl.favoriteDish]){
                $ctrl.completed = true;
                $ctrl.invalid = false;
                $ctrl.user.favoriteDish = MenuService.menuItems[$ctrl.favoriteDish];
                MenuService.userInfo = $ctrl.user;
                MenuService.userInfo.saved = true;
            }
            else {
                $ctrl.completed = false;
                $ctrl.invalid = true;
            }
        };

        $ctrl.isFavoriteDishExist = function() {
            var isValid = MenuService.menuItems[$ctrl.favoriteDish] ? true:false;
            return isValid;
        }
    }
})();
    