export class Red {
    id?: number;
    nombre: string;
    url: string;
    icono: string;

    constructor (nombre: string, url: string,  icono: string){
        this.nombre = nombre;
        this.url = url;
        this.icono = icono;
    }
}
