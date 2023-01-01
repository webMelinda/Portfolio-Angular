export class Educacion {
    id?: number;
    institucion: string;
    titulo: string;
    logo: string;
    

    constructor (institucion: string,logo: string,titulo: string){
        this.institucion = institucion;
        this.titulo = titulo;
        this.logo = logo;
        
    }
}

