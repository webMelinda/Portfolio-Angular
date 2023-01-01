export class Proyecto {
    id?: number;
    foto: string;
    url: string;
    nombre: string;
    descripcion: string;

    constructor (foto: string, url: string,  nombre: string, descripcion: string){
        this.foto = foto;
        this.url = url;
        this.nombre = nombre;
        this.descripcion = descripcion;
    }
}
