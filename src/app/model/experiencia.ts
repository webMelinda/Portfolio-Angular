export class Experiencia {
    id?: number;
    institucion: string;
    puesto: string;
    periodo: string;
    logo: string;

    constructor (institucion: string,puesto:string, periodo: string,logo: string){
        this.institucion = institucion;
        this.puesto = puesto;
        this.periodo = periodo;
        this.logo = logo;
    }
}
