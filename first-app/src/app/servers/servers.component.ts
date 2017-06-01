import {Component} from '@angular/core'

@Component({
    selector: '.app-servers',
    templateUrl: './servers.component.html',
    
})
export class ServersComponent {
    buttonDisable: Boolean = false;
    constructor() {
        setTimeout(() => {
            this.buttonDisable = true;
        },3000)
    }

}