import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class SampleUiLibraryService {

    constructor() { }

    sayHi() {
        return "hi I have rebuilt again"
    }
}
