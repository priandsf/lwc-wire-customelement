import { LightningElement, buildCustomElementConstructor, wire } from 'lwc';
import { adapter } from './wireadapter'

import {CUSTOM_ELEMENT} from '../../options'

export default class App extends LightningElement {

    message='Hello World!';

    @wire(adapter,{message:'$message'}) adapter ={};
}

if(CUSTOM_ELEMENT) {
    customElements.define("app-body", buildCustomElementConstructor(App));
}
