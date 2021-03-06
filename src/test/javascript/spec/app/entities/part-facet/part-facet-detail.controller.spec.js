'use strict';

describe('Controller Tests', function() {

    describe('PartFacet Management Detail Controller', function() {
        var $scope, $rootScope;
        var MockEntity, MockPartFacet, MockPart;
        var createController;

        beforeEach(inject(function($injector) {
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            MockEntity = jasmine.createSpy('MockEntity');
            MockPartFacet = jasmine.createSpy('MockPartFacet');
            MockPart = jasmine.createSpy('MockPart');
            

            var locals = {
                '$scope': $scope,
                '$rootScope': $rootScope,
                'entity': MockEntity ,
                'PartFacet': MockPartFacet,
                'Part': MockPart
            };
            createController = function() {
                $injector.get('$controller')("PartFacetDetailController", locals);
            };
        }));


        describe('Root Scope Listening', function() {
            it('Unregisters root scope listener upon scope destruction', function() {
                var eventType = 'mfgtoolingApp:partFacetUpdate';

                createController();
                expect($rootScope.$$listenerCount[eventType]).toEqual(1);

                $scope.$destroy();
                expect($rootScope.$$listenerCount[eventType]).toBeUndefined();
            });
        });
    });

});
