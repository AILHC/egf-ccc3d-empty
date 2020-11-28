import { _decorator, Component, Node, Label } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('MyLabelNode')
export class MyLabelNode extends Component {
    /* class member could be defined like this */
    // dummy = '';

    /* use `property` decorator if your want the member to be serializable */
    // @property
    // serializableDummy = 0;
    @property({ type: Label })
    labelNode: Label = null;

    start() {
        // Your initialization goes here.
    }
    setLabelShow(str: string) {
        this.labelNode.string = str;
    }
    // update (deltaTime: number) {
    //     // Your update function goes here.
    // }
}
