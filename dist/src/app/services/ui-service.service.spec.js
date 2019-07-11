"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const ui_service_service_1 = require("./ui-service.service");
describe('UiServiceService', () => {
    beforeEach(() => testing_1.TestBed.configureTestingModule({}));
    it('should be created', () => {
        const service = testing_1.TestBed.get(ui_service_service_1.UiServiceService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=ui-service.service.spec.js.map