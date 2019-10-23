export default class Ruta{
    constructor(ruta){
        this._numero = ruta.numero;
        this._conductor = ruta.conductor;
        this._placas = ruta.placas;
        this._inicio = null;
        this._final = null;

    }
    get numero(){
        return this._numero;
    }
    get conductor(){
        return this._conductor;
    }
    get placas(){
        return this._placas;
    }

    agregar(base){
        if(this._inicio == null){
            this._inicio = base;
            this._final = base;
            this._inicio.sig = this._final;
            this._final.sig = this._inicio; 
            console.log(this._inicio);

        }else{
            this._final.sig = base;
            this._final = base;
            this._final.sig = this._inicio;
            console.log(this._inicio);
        }
    }

    eliminar(ubicacion){
        let b = this.buscarAnterior(ubicacion);
        if(b.sig == this._inicio && b == this._final){
            this._inicio = this._final = null;
            
        }else if(b.sig == this._inicio){
            b.sig = b.sig.sig;
            this._inicio = b.sig;
        }else if(b.sig == this._final){
            b.sig = b.sig.sig;
            this._final = b;

        }else{
            b.sig = b.sig.sig;
        }
    }

    buscar(ubicacion){
        let a = this._inicio;
        let u = this._final;
        while(a.ubicacion != ubicacion && u.codigo != ubicacion){
            a = a.sig;
        }
        return a;

    }

    buscarAnterior(){
        let a = this._inicio;
        let u = this._final;
        if(a.ubucacion == ubucacion){
            return u;

        }else{
            while(a.sig.ubucacion != ubucacion && u.codigo != ubucacion){
                a = a.sig;
            }
        }
        return a;
    }
    imprimir(row){
        row.innerHTML == "";
        let a = this._inicio;
        let u = this._final;
        let c = 1;
        if(a != null){
            do{
                row.innerHTML += `base${contador}: ${a.ubicacion} llegada:${a.llegada}m   salida:${a.u}m`;
                c++
                a = a.sig;
            }while(a != u);
        }

    }
}