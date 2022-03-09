import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes: string[] = ['Dr. Strange', 'Hulk', 'Thor', 'Nébula'];
  heroeBorrado: string = '';
  
  borrarHeroe() {
    this.heroeBorrado = this.heroes.shift() || '';
  }
}
