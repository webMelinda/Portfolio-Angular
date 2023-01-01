export class About {
    id?: number;
    nombre: string;
    second_name: string;
    apellido: string;
    perfil_img: string;
    about: string;
    edad: number;
    residencia: string;
    email: string;

    constructor (nombre: string,second_name: string,apellido: string,perfil_img: string, about:string, edad:number, residencia:string, email:string){
        this.nombre = nombre;
        this.second_name = second_name;
        this.apellido = apellido;
        this.perfil_img = perfil_img;
        this.about = about;
        this.edad = edad;
        this.residencia = residencia;
        this.email = email;
    }
}
