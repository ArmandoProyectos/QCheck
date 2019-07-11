var Registro = /** @class */ (function () {
    function Registro(format, text) {
        this.format = format;
        this.text = text;
        this.created = new Date();
        this.determinarTipo();
    }
    Registro.prototype.determinarTipo = function () {
        var inicioTexto = this.text.substr(0, 4);
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
    };
    return Registro;
}());
export { Registro };
//# sourceMappingURL=registro.model.js.map