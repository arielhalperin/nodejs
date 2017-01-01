/**
 * Created by arielh on 1/1/2017.
 */
import { Component } from '@angular/core';

import {Message} from "./message.model";

@Component({
    selector: 'app-message-input',
    templateUrl: './message-input.component.html'
})
export class MessageInputComponent{
    onSave(value: string){
        console.log(value);
    }
}