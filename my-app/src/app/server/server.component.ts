import { Component } from '@angular/core';

@Component({
	selector: 'app-server',
	templateUrl: './server.component.html',
	styles: [
		`
		.onli-ne{
			color:white;
		}
	`
	]
})
export class ServerComponent {
	serverStatus: string = 'offline';
	serverId: number = 10;

	constructor() {
		this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
	}

	getServerStatus() {
		return this.serverStatus;
	}

	getColor() {
		return this.serverStatus === 'online' ? 'green' : 'red';
	}
}
