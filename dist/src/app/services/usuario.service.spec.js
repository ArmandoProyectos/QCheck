"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const usuario_service_1 = require("./usuario.service");
describe('UsuarioService', () => {
    beforeEach(() => testing_1.TestBed.configureTestingModule({}));
    it('should be created', () => {
        const service = testing_1.TestBed.get(usuario_service_1.UsuarioService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=usuario.service.spec.js.map