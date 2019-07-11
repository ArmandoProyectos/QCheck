import { TestBed } from '@angular/core/testing';
import { PushService } from './push.service';
describe('PushService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(PushService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=push.service.spec.js.map