# egf-ccc3d-empty
    基于EasyGameFramework的CocosCreator3D 1.2的空项目

## 简介
可以通过稍微麻烦一点的方式来安装npm包，或者通过typescript以添加模块扩展框架
## 安装
1. npm下载库
npm i @ailhc/egf-core
2. 复制dist/system 下的文件到assets里
3. 修改一下名字(防止冲突) 比如 将index.js index.d.ts 改成 egf-core.js egf-core.d.ts
4. 在编辑器中 将egf-core.js设置为插件，不要模拟高级全局变量，其他按需勾选

>PS: 其他扩展库类似，本地开发的，只需要复制dist/system发布目录下的文件就行
## 使用
1. 方式一:
打开 start 场景
看脚本 AppMain.ts
通过 CocosCreator加载脚本的逻辑，加载即运行框架的初始化
这个时机是在引擎加载完成后，插件脚本加载完后，场景组件脚本生命周期运行之前（场景加载运行之前）
但是如果你的其他脚本也是通过这种方式执行,那么这个时机就会有冲突，比如装饰器之类的

```ts
export class AppMain {
    public static app: App<IModuleMap>;
    public static initFramework() {
        const app = new App<IModuleMap>();
        AppMain.app = app;
        app.bootstrap([new FrameworkLoader()]);
        setModuleMap(app.moduleMap);
        app.init();
        window["m"] = m;//挂在到全局，方便控制台调试，生产环境可以屏蔽=>安全
        m.helloWorld.say();
    }

}
AppMain.initFramework();
```

2. 方式二:
打开 start-with-comp 场景
看脚本AppMainComp.ts
通过场景中的节点组件的生命周期来启动和初始化框架
这个时机是引擎加载完成后，插件脚本加载后，框架所在场景加载后，框架在挂节点的生命周期运行后开始。

>PS: 这里的时机就比较靠后了，依赖节点，注意这个组件实例会被切换场景后清掉。

3. 每个文件的作用说明
    
    a. AppMain.ts/AppMainComp.ts

        框架初始化用的
    b. ModuleMap.ts

        这是一个安全的全局引用依赖点 ，而且只需要将m这个变量挂载到window下就可以方便调试了
        IModuleMap 这是全局模块接口声明
        
        这些都是可以自定义和框架无关。
        没有它你也可以通过 获取app来获取和调用模块
    c. FrameworkLoader.ts

        这个的作用是进行模块加载，隔离模块加载的细节，可以通过替换来达到不同环境加载不同模块或者给予相同模块不同的初始化参数等等
    d. HelloWorld.ts

        扩展模块