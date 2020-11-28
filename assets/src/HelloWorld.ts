import { director, Label } from "cc";
import { MyLabelNode } from "./components/MyLabelNode";

declare global {
    interface IModuleMap {
        helloWorld: HelloWorld
    }
}
export class HelloWorld implements egf.IModule {
    key: string = "helloWorld";
    say(str?: string) {
        const helloSay = `hello ${str ? str : "world"}`;
        console.log(helloSay);

        const labelNode = director.getScene().getChildByName("Canvas").getChildByName("Label");
        labelNode.getComponent(Label).string = helloSay;
    }
}