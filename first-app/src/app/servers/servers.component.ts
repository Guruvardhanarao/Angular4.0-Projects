import {Component} from '@angular/core'

@Component({
    selector: '.app-servers',
    templateUrl: './servers.component.html',
    
})
export class ServersComponent {
    buttonDisable: Boolean = false;
    serverCreate: String = "Server Not Created";
    serverName = "test server";
    constructor() {
        setTimeout(() => {
            this.buttonDisable = true;
        },3000)
    }

    addServer() {
        return this.serverCreate = "One Server Created.Name is " + this.serverName;
    }

onUpdateServerName(event){
    this.serverName = event.target.value;
}
}