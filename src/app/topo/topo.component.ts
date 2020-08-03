import { Component } from '@angular/core'

@Component({
    selector: 'app-topo',
    //selector: '[app-topo]',
    //selector: '.app-topo',
    templateUrl: './topo.component.html',
    styleUrls: ['./topo.component.css']
    // styles: [`
    //         .exemplo { color: red }
    //         `] 
    // template: `
    //     <p>Esse é o componente Topo</p>
    //     `
})

export class TopoComponent {
    public titulo: string = 'Aprendendo Angular'
}