import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: '.app-servers',
	templateUrl: './servers.component.html',
	styleUrls: [ './servers.component.css' ]
})
export class ServersComponent implements OnInit {
	allowNewServer = false;
	serverCreationStatus = 'Offline';
	serverName = 'TestServer';
	serverCreated = false;
	servers = [ 'TestServer', 'TestServer 2' ];

	constructor() {
		setTimeout(() => {
			this.allowNewServer = true;
		}, 2000);
	}

	ngOnInit(): void {}
	onCreateServer() {
		this.serverCreated = true;
		this.servers.push(this.serverName);
		this.serverCreationStatus = 'The server has been created with name ' + this.serverName;
	}
	onUpdationServerName(event: Event) {
		this.serverName = (<HTMLInputElement>event.target).value;
	}
}
