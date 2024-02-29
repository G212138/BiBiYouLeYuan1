
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
        this.isShowNum = false;
        this.isShowXuxian = [];
        this.isShowXuxian2 = [];
        this.step = 0;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZVxcc2NyaXB0c1xcRGF0YVxcQ3VzdG9tU3luY0RhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7OztHQUdHO0FBQ0g7SUFBQTtRQUNXLGFBQVEsR0FBVyxDQUFDLENBQUMsQ0FBQyxjQUFjO1FBQzNDLFdBQVc7UUFFSixlQUFVLEdBQVksS0FBSyxDQUFDO1FBQzVCLGdCQUFXLEdBQVksS0FBSyxDQUFDO1FBQzdCLGlCQUFZLEdBQVcsQ0FBQyxDQUFDO1FBQ3pCLGlCQUFZLEdBQVksS0FBSyxDQUFDO1FBQzlCLG9CQUFlLEdBQWEsRUFBRSxDQUFDO1FBQy9CLHFCQUFnQixHQUFhLEVBQUUsQ0FBQztRQUNoQyxjQUFTLEdBQVksS0FBSyxDQUFDO1FBQzNCLGlCQUFZLEdBQWMsRUFBRSxDQUFDO1FBQzdCLGtCQUFhLEdBQWMsRUFBRSxDQUFDO1FBQzlCLFNBQUksR0FBVyxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUFELHFCQUFDO0FBQUQsQ0FkQSxBQWNDLElBQUE7QUFkWSx3Q0FBYyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICog6ZyA6KaB5ZCM5q2l55qE6Ieq5a6a5LmJ5pWw5o2uXG4gKiDmuLjmiI/kuJrliqHlsYLlkIzmraXmlbDmja7lnKjov5nph4zmt7vliqBcbiAqL1xuZXhwb3J0IGNsYXNzIEN1c3RvbVN5bmNEYXRhIHtcbiAgICBwdWJsaWMgY3VyTGV2ZWw6IG51bWJlciA9IDA7IC8vIOW9k+WJjeWFs+WNoSjnrKzkuIDlhbPkuLowKVxuICAgIC8vIFRPRE8g6Ieq5a6a5LmJXG5cbiAgICBwdWJsaWMgaXNTaG93TGluZTogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHB1YmxpYyBpc1Nob3dMaW5lMjogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHB1YmxpYyBzaG93TnVtQ291bnQ6IG51bWJlciA9IDA7XG4gICAgcHVibGljIGlzU2hvd0NpcmNsZTogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHB1YmxpYyBmaWxsQXJlYU9wdGlvbnM6IHN0cmluZ1tdID0gW107XG4gICAgcHVibGljIGZpbGxBcmVhT3B0aW9uczI6IHN0cmluZ1tdID0gW107XG4gICAgcHVibGljIGlzU2hvd051bTogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHB1YmxpYyBpc1Nob3dYdXhpYW46IGJvb2xlYW5bXSA9IFtdO1xuICAgIHB1YmxpYyBpc1Nob3dYdXhpYW4yOiBib29sZWFuW10gPSBbXTtcbiAgICBwdWJsaWMgc3RlcDogbnVtYmVyID0gMDtcbn1cbiJdfQ==