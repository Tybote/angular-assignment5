(function () {
    "use strict";
    
    angular.module('public')
    .controller('MyInfoController', MyInfoController);
    
    MyInfoController.$inject = ['MenuService', 'userInfo'];
    function MyInfoController(MenuService, userInfo) {
        var $ctrl = this;
        $ctrl.user = userInfo;
        console.log($ctrl.user);
    }
    
})();
    