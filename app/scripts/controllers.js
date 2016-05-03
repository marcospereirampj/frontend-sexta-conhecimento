/**
 * Demo application for the event Friday of Knowledge.
 * Marcos Perira - ITEC 2016
 */


 angular
     .module('coffeeManager')
     .controller('MainCtrl', MainCtrl)
     .controller('ModalCtrl', ModalCtrl)
     .controller('ModalInstanceCtrl', ModalInstanceCtrl)


/**
 * MainCtrl - controller
 */
function MainCtrl() {
    var vm = this;

    vm.helloText = 'Welcome in CoffeeMananger';
    vm.descriptionText = 'Demo application for the event "Friday of Knowledge".';
};

/**
 * MemberCtrl - controller
 */
function MemberCtrl(Member) {
    var vm = this;
    vm.members = Member.list();
};


/**
 * QueueCtrl - controller
 */
function QueueCtrl(Member) {
    var vm = this;
    vm.members = Member.list();
};


/**
 * ModalCtrl - controller
 */
function ModalCtrl($scope, $modal, $log, Member) {
    var vm = this;

    vm.showForm = function () {
        var modalInstance = $modal.open({
            templateUrl: 'views/modal-form.html',
            controller: ModalInstanceCtrl,
            scope: $scope,
                  resolve: {
                        memberForm: function () {
                            return this.memberForm;
                        }
                    }
            });
    };
};


/**
 * ModalInstanceCtrl - controller
 */
function ModalInstanceCtrl($scope, $modalInstance, $location, memberForm, Member) {
    $scope.form = {}
    $scope.member = new Member();

    $scope.submitForm = function () {
        if ($scope.form.memberForm.$valid) {
            $scope.member.$save(function(obj) {
        			   $location.path("/queue");
        		});
            $modalInstance.close('closed');
        }
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
};
