/**
 * Created by arielh on 1/1/2017.
 */
import { Component, Input} from '@angular/core';
import {Message} from "./message.model";
import {MessageService} from "./message.service";

@Component({
    selector: 'app-message',
    templateUrl: './message.component.html',
    styles:[`
        .author {
            display: inline-block;
            font-style: italic;
            font-size: 12px;
            width: 80%;
        }
        .config{
            display: inline-block;
            text-align: right;
            font-size: 12px;
            width: 19%;
        }
    `]
})
export class MessageComponent{

    @Input() message: Message;

    color = 'red';

    constructor(private messageService: MessageService){}

    onDelete(){
        this.messageService.deleteMessage(this.message).subscribe(
            result => console.log(result)
        );
    }

    onEdit(){
        this.messageService.editMessage(this.message);
    }

    belongToUser(){
        return localStorage.getItem('userId') == this.message.userId;
    }
}
