import { _decorator, Component, Node } from 'cc';
import { m } from './ModuleMap';
const { ccclass, property } = _decorator;

@ccclass('TestCallFrameworkComp')
export class TestCallFrameworkComp extends Component {
    /* class member could be defined like this */
    // dummy = '';

    /* use `property` decorator if your want the member to be serializable */
    @property
    label: string = "0";

    start() {
        // Your initialization goes here.
        m.helloWorld.say(this.label);
    }

    // update (deltaTime: number) {
    //     // Your update function goes here.
    // }
}
