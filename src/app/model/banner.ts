export class Banner {
    id?: number;
    nombre: string;
    foto: string;
    titulo: string;

    constructor (nombre: string,foto: string,titulo: string){
        this.nombre = nombre;
        this.foto = foto;
        this.titulo = titulo;
    }
}
