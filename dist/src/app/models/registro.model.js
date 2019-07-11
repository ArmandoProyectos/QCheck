"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Registro {
    constructor(format, text) {
        this.format = format;
        this.text = text;
        this.created = new Date();
        this.determinarTipo();
    }
    determinarTipo() {
        const inicioTexto = this.text.substr(0, 4);
        console.log(inicioTexto);
        switch (inicioTexto) {
            case 'http':
                this.type = 'http';
                this.icon = 'globe';
                break;
            case 'geo:':
                this.type = 'geo';
                this.icon = 'pin';
                break;
            default:
                this.type = 'No reconocido';
                this.icon = 'create';
                break;
        }
    }
}
exports.Registro = Registro;
//# sourceMappingURL=registro.model.js.map