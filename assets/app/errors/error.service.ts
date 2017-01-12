import {EventEmitter} from "@angular/core";

import {Error} from "./error.model";
/**
 * Created by halpe_000 on 12-Jan-17.
 */
export class ErrorService{
    errorOccurred = new EventEmitter<Error>();

    handleError(error: any){
        const errorData = new Error(error.title, error.error.message);
        this.errorOccurred.emit(errorData);
    }
}