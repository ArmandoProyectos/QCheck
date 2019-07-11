import { TestBed } from '@angular/core/testing';
import { DataLocalService } from './data-local.service';
describe('DataLocalService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(DataLocalService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=data-local.service.spec.js.map