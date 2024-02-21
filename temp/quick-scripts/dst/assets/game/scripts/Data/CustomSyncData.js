
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game/scripts/Data/CustomSyncData.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
    }
    return CustomSyncData;
}());
exports.CustomSyncData = CustomSyncData;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZVxcc2NyaXB0c1xcRGF0YVxcQ3VzdG9tU3luY0RhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7OztHQUdHO0FBQ0g7SUFBQTtRQUNXLGFBQVEsR0FBVyxDQUFDLENBQUMsQ0FBQyxjQUFjO1FBQzNDLFdBQVc7UUFFSixlQUFVLEdBQVksS0FBSyxDQUFDO1FBQzVCLGdCQUFXLEdBQVksS0FBSyxDQUFDO1FBQzdCLGlCQUFZLEdBQVcsQ0FBQyxDQUFDO1FBQ3pCLGlCQUFZLEdBQVksS0FBSyxDQUFDO1FBQzlCLG9CQUFlLEdBQWEsRUFBRSxDQUFDO1FBQy9CLHFCQUFnQixHQUFhLEVBQUUsQ0FBQztJQUMzQyxDQUFDO0lBQUQscUJBQUM7QUFBRCxDQVZBLEFBVUMsSUFBQTtBQVZZLHdDQUFjIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiDpnIDopoHlkIzmraXnmoToh6rlrprkuYnmlbDmja5cbiAqIOa4uOaIj+S4muWKoeWxguWQjOatpeaVsOaNruWcqOi/memHjOa3u+WKoFxuICovXG5leHBvcnQgY2xhc3MgQ3VzdG9tU3luY0RhdGEge1xuICAgIHB1YmxpYyBjdXJMZXZlbDogbnVtYmVyID0gMDsgLy8g5b2T5YmN5YWz5Y2hKOesrOS4gOWFs+S4ujApXG4gICAgLy8gVE9ETyDoh6rlrprkuYlcblxuICAgIHB1YmxpYyBpc1Nob3dMaW5lOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHVibGljIGlzU2hvd0xpbmUyOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHVibGljIHNob3dOdW1Db3VudDogbnVtYmVyID0gMDtcbiAgICBwdWJsaWMgaXNTaG93Q2lyY2xlOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHVibGljIGZpbGxBcmVhT3B0aW9uczogc3RyaW5nW10gPSBbXTtcbiAgICBwdWJsaWMgZmlsbEFyZWFPcHRpb25zMjogc3RyaW5nW10gPSBbXTtcbn1cbiJdfQ==