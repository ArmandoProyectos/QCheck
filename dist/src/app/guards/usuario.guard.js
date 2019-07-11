"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const usuario_service_1 = require("../services/usuario.service");
let UsuarioGuard = class UsuarioGuard {
    constructor(usuarioService) {
        this.usuarioService = usuarioService;
    }
    canLoad() {
        return this.usuarioService.validarToken();
    }
};
UsuarioGuard = tslib_1.__decorate([
    core_1.Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [usuario_service_1.UsuarioService])
], UsuarioGuard);
exports.UsuarioGuard = UsuarioGuard;
//# sourceMappingURL=usuario.guard.js.map