/**
 * Created by arielh on 1/1/2017.
 */
import { Component } from '@angular/core';

import {Message} from "./message.model";
import {MessageService} from "./message.service";

@Component({
    selector: 'app-message-input',
    templateUrl: './message-input.component.html'
})
export class MessageInputComponent{

    constructor(private messageService: MessageService){}

    onSave(value: string){
       const message = new Message(value,'Ariel Halperin');
       this.messageService.addMessage(message);
    }
}