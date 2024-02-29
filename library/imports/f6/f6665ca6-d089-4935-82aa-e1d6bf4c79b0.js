"use strict";
cc._RF.push(module, 'f6665ym0IlJNYKq4da/THmw', 'CustomSyncData');
// game/scripts/Data/CustomSyncData.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomSyncData = void 0;
/**
 * 需要同步的自定义数据
 * 游戏业务层同步数据在这里添加
 */
var CustomSyncData = /** @class */ (function () {
    function CustomSyncData() {
        this.curLevel = 0; // 当前关卡(第一关为0)
        // TODO 自定义
        this.isShowLine = false;
        this.isShowLine2 = false;
        this.showNumCount = 0;
        this.isShowCircle = false;
        this.fillAreaOptions = [];
        this.fillAreaOptions2 = [];
        this.isShowNum = false;
        this.isShowXuxian = [];
        this.isShowXuxian2 = [];
        this.step = 0;
    }
    return CustomSyncData;
}());
exports.CustomSyncData = CustomSyncData;

cc._RF.pop();