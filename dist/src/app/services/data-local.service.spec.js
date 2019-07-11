"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const data_local_service_1 = require("./data-local.service");
describe('DataLocalService', () => {
    beforeEach(() => testing_1.TestBed.configureTestingModule({}));
    it('should be created', () => {
        const service = testing_1.TestBed.get(data_local_service_1.DataLocalService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=data-local.service.spec.js.map