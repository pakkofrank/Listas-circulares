export default class Base{
    constructor(base){
        this._ubicacion = base.ubicacion;
        this._tLlegada = base.tLlegada;
        this._tSalida = base.tSalida;
        this._sig = null;
    }
    get ubicacion(){
        return this._ubicacion;
    }
    get tLlegada(){
        return this._tLlegada;
    }
    get tSalida(){
        return this._tSalida
    }
}