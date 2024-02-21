/**
 * 需要同步的自定义数据
 * 游戏业务层同步数据在这里添加
 */
export class CustomSyncData {
    public curLevel: number = 0; // 当前关卡(第一关为0)
    // TODO 自定义

    public isShowLine: boolean = false;
    public isShowLine2: boolean = false;
    public showNumCount: number = 0;
    public isShowCircle: boolean = false;
    public fillAreaOptions: string[] = [];
    public fillAreaOptions2: string[] = [];
}
