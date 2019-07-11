"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const push_service_1 = require("./push.service");
describe('PushService', () => {
    beforeEach(() => testing_1.TestBed.configureTestingModule({}));
    it('should be created', () => {
        const service = testing_1.TestBed.get(push_service_1.PushService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=push.service.spec.js.map