import { Component, OnInit } from '@angular/core';
import { ComentarioService } from '../../services/comentario.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  nombre: any = '';
  comentario: any = '';

  /*   comentarios: any[] = [{
      nombre: "Cristian Muñoz",
      alias: "@cris26",
      comentario: "Angular sigue evolucionando"
    },
    {
      nombre: "Dario Muñoz",
      alias: "@darjav",
      comentario: "Angular es fascinante"
    }] */
  comentarios: any;
  constructor(private _comentarioService: ComentarioService) { }

  ngOnInit(): void {
    this.cargarComentarios();
  }


  cargarComentarios(): void {
    this._comentarioService.obtenerComentarios().subscribe(resp => {
      this.comentarios = resp
    })
  }

  agregarCometario() {
    console.log(this.nombre);
    console.log(this.comentario);

    let comentarioAux = {
      nombre: this.nombre,
      //alias: `@ ${this.nombre}`,
      comentario: this.comentario
    }

    //this.comentarios.push(comentarioAux);
    this._comentarioService.guardar(comentarioAux).subscribe(data => {
      console.log('Comentario Guardado')
      this.cargarComentarios();
    });
  }

  eliminar(indice: any) {
    //this.comentarios.splice(indice, 1);
    this._comentarioService.eliminar(indice).subscribe(
      data => {
        console.log('Comentario Eliminado')
        this.cargarComentarios();
      }
    )
  }
}
