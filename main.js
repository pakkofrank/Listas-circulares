import Base from "./Base.js";
import Ruta from "./Ruta.js";

class Main {
    constructor(){
        let objRuta = {
            numero: 380,
            conductor: 'levi',
            placas: 'h25jb'
        };
        console.log(objRuta);
        let ruta = new Ruta(objRuta);
        document.querySelector("#agregar").addEventListener('click', ()=>{
            let objBase = {
                ubicacion: document.querySelector("#ubicacion").values , 
                tLlegada: document.querySelector("#tLlegada").value , 
                tSalida: document.querySelector("#tSalida").value ,
            }
            let base = new Base(objBase);
            ruta.agregar(base);

        });
        document.querySelector("#btnEliminar").addEventListener('click', () =>{
            let eliminar = document.querySelector("#codigoE").value;
            ruta.eliminar(eliminar);

        });
    }
    
    
}
let m = new Main();