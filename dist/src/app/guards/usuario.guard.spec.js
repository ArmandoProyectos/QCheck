"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const usuario_guard_1 = require("./usuario.guard");
describe('UsuarioGuard', () => {
    beforeEach(() => {
        testing_1.TestBed.configureTestingModule({
            providers: [usuario_guard_1.UsuarioGuard]
        });
    });
    it('should ...', testing_1.inject([usuario_guard_1.UsuarioGuard], (guard) => {
        expect(guard).toBeTruthy();
    }));
});
//# sourceMappingURL=usuario.guard.spec.js.map