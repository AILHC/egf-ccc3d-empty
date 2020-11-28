import { HelloWorld } from "../HelloWorld";


export class FrameworkLoader implements egf.IBootLoader {
    onBoot(app, bootEnd): void {
        const helloWorld = new HelloWorld();
        app.loadModule(helloWorld);
        bootEnd(true)
    }

}