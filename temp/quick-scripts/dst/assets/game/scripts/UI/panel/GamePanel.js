
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game/scripts/UI/panel/GamePanel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '246c2OOkGlKHoa6ZJOVEHI+', 'GamePanel');
// game/scripts/UI/panel/GamePanel.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var ListenerManager_1 = require("../../../../frame/scripts/Manager/ListenerManager");
var SyncDataManager_1 = require("../../../../frame/scripts/Manager/SyncDataManager");
var BaseGamePanel_1 = require("../../../../frame/scripts/UI/Panel/BaseGamePanel");
var EventType_1 = require("../../Data/EventType");
var EditorManager_1 = require("../../Manager/EditorManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GamePanel = /** @class */ (function (_super) {
    __extends(GamePanel, _super);
    function GamePanel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.gameLevel = [];
        return _this;
    }
    GamePanel.prototype.start = function () {
        _super.prototype.start.call(this);
        ListenerManager_1.ListenerManager.on(EventType_1.EventType.GAME_OVER, this.gameOver, this);
        ListenerManager_1.ListenerManager.on(EventType_1.EventType.SUBMIT, this.submit, this);
    };
    GamePanel.prototype.onDestroy = function () {
        _super.prototype.onDestroy.call(this);
        ListenerManager_1.ListenerManager.off(EventType_1.EventType.GAME_OVER, this.gameOver, this);
        ListenerManager_1.ListenerManager.off(EventType_1.EventType.SUBMIT, this.submit, this);
    };
    GamePanel.prototype.submit = function (isRight) {
        if (isRight) {
            this.answerRight(true);
        }
        else {
            this.answerWrong(true);
        }
    };
    /**
     * 游戏入口
     * 这里已经拿到数据
     */
    GamePanel.prototype.setPanel = function () {
        _super.prototype.setPanel.call(this);
        // TODO 业务逻辑        
        for (var i = 0; i < this.gameLevel.length; i++) {
            this.gameLevel[i].active = false;
        }
        this.gameLevel[EditorManager_1.EditorManager.editorData.gameIndex].active = true;
        ListenerManager_1.ListenerManager.dispatch(EventType_1.EventType.ENTER_GAME);
        // if (EditorManager.editorData.gameIndex == 0) {
        //     this.gameLevel[EditorManager.editorData.gameIndex].getComponent(Level_1).init();
        // } else if (EditorManager.editorData.gameIndex == 1) {
        //     this.gameLevel[EditorManager.editorData.gameIndex].getComponent(Level_2).init();
        // } else if (EditorManager.editorData.gameIndex == 2) {
        //     this.gameLevel[EditorManager.editorData.gameIndex].getComponent(Level_3).init();
        // } else if (EditorManager.editorData.gameIndex == 3) {
        //     this.gameLevel[EditorManager.editorData.gameIndex].getComponent(Level_4).init();
        // }
    };
    /**
     * 心跳回调（当actionId不相等时才会触发）
     * @param recovery
     */
    GamePanel.prototype.onRecoveryData = function (recovery) {
        _super.prototype.onRecoveryData.call(this, recovery);
        for (var i = 0; i < this.gameLevel.length; i++) {
            this.gameLevel[i].active = false;
        }
        this.gameLevel[EditorManager_1.EditorManager.editorData.gameIndex].active = true;
        ListenerManager_1.ListenerManager.dispatch(EventType_1.EventType.ENTER_GAME);
        // ListenerManager.dispatch(EventType.GAME_RECONNECT);
    };
    /**
     * 作答正确
     * 父类实现了数据上报
     * @param isCurLevelFinish 本关是否完成
     */
    GamePanel.prototype.answerRight = function (isCurLevelFinish) {
        _super.prototype.answerRight.call(this, isCurLevelFinish);
    };
    /**
     * 作答错误
     * 父类实现了数据上报
     * @param isCurLevelFinish 本关是否完成
     */
    GamePanel.prototype.answerWrong = function (isCurLevelFinish) {
        if (isCurLevelFinish === void 0) { isCurLevelFinish = false; }
        _super.prototype.answerWrong.call(this, isCurLevelFinish);
    };
    /**
     * 游戏结束
     * 父类实现了结算界面（游戏结束或星级评判）的弹出
     */
    GamePanel.prototype.gameOver = function () {
        _super.prototype.gameOver.call(this);
    };
    /**
     * 重玩
     */
    GamePanel.prototype.onReplay = function () {
        _super.prototype.onReplay.call(this);
        SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.curLevel = 0;
        SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.isShowLine = false;
        SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.isShowLine2 = false;
        SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.showNumCount = 0;
        SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.isShowCircle = false;
        SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.fillAreaOptions = [];
        SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.fillAreaOptions2 = [];
        SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.isShowNum = false;
        SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.isShowXuxian = [];
        SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.isShowXuxian2 = [];
        SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.step = 0;
        for (var i = 0; i < this.gameLevel.length; i++) {
            this.gameLevel[i].active = false;
        }
        this.gameLevel[EditorManager_1.EditorManager.editorData.gameIndex].active = true;
        ListenerManager_1.ListenerManager.dispatch(EventType_1.EventType.ENTER_GAME);
        // ListenerManager.dispatch(EventType.GAME_REPLAY);
    };
    GamePanel.prototype.update = function (dt) {
        _super.prototype.update.call(this, dt);
    };
    GamePanel.className = 'GamePanel';
    __decorate([
        property(cc.Node)
    ], GamePanel.prototype, "gameLevel", void 0);
    GamePanel = __decorate([
        ccclass
    ], GamePanel);
    return GamePanel;
}(BaseGamePanel_1.default));
exports.default = GamePanel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZVxcc2NyaXB0c1xcVUlcXHBhbmVsXFxHYW1lUGFuZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscUZBQW9GO0FBQ3BGLHFGQUE4RjtBQUM5RixrRkFBNkU7QUFDN0Usa0RBQWlEO0FBQ2pELDZEQUE0RDtBQU10RCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF1Qyw2QkFBYTtJQUFwRDtRQUFBLHFFQW9IQztRQWhIVyxlQUFTLEdBQWMsRUFBRSxDQUFDOztJQWdIdEMsQ0FBQztJQTlHRyx5QkFBSyxHQUFMO1FBQ0ksaUJBQU0sS0FBSyxXQUFFLENBQUM7UUFDZCxpQ0FBZSxDQUFDLEVBQUUsQ0FBQyxxQkFBUyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzdELGlDQUFlLENBQUMsRUFBRSxDQUFDLHFCQUFTLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUVELDZCQUFTLEdBQVQ7UUFDSSxpQkFBTSxTQUFTLFdBQUUsQ0FBQztRQUNsQixpQ0FBZSxDQUFDLEdBQUcsQ0FBQyxxQkFBUyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzlELGlDQUFlLENBQUMsR0FBRyxDQUFDLHFCQUFTLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUVPLDBCQUFNLEdBQWQsVUFBZSxPQUFPO1FBQ2xCLElBQUksT0FBTyxFQUFFO1lBQ1QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUMxQjthQUFNO1lBQ0gsSUFBSSxDQUFDLFdBQVcsQ0FB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QztRQUMvRCxpQ0FBZSxDQUFDLFdBQVcsRUFBRSxDQUFDLGNBQWMsQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDO1FBQ2hFLGlDQUFlLENBQUMsV0FBVyxFQUFFLENBQUMsY0FBYyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7UUFDdEQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzVDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztTQUNwQztRQUNELElBQUksQ0FBQyxTQUFTLENBQUMsNkJBQWEsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNqRSxpQ0FBZSxDQUFDLFFBQVEsQ0FBQyxxQkFBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQy9DLG1EQUFtRDtJQUN2RCxDQUFDO0lBRUQsMEJBQU0sR0FBTixVQUFPLEVBQUU7UUFDTCxpQkFBTSxNQUFNLFlBQUMsRUFBRSxDQUFDLENBQUM7SUFDckIsQ0FBQztJQWxIYSxtQkFBUyxHQUFHLFdBQVcsQ0FBQztJQUd0QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2dEQUNnQjtJQUpqQixTQUFTO1FBRDdCLE9BQU87T0FDYSxTQUFTLENBb0g3QjtJQUFELGdCQUFDO0NBcEhELEFBb0hDLENBcEhzQyx1QkFBYSxHQW9IbkQ7a0JBcEhvQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGlzdGVuZXJNYW5hZ2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vZnJhbWUvc2NyaXB0cy9NYW5hZ2VyL0xpc3RlbmVyTWFuYWdlcic7XG5pbXBvcnQgeyBTeW5jRGF0YSwgU3luY0RhdGFNYW5hZ2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vZnJhbWUvc2NyaXB0cy9NYW5hZ2VyL1N5bmNEYXRhTWFuYWdlcic7XG5pbXBvcnQgQmFzZUdhbWVQYW5lbCBmcm9tICcuLi8uLi8uLi8uLi9mcmFtZS9zY3JpcHRzL1VJL1BhbmVsL0Jhc2VHYW1lUGFuZWwnO1xuaW1wb3J0IHsgRXZlbnRUeXBlIH0gZnJvbSAnLi4vLi4vRGF0YS9FdmVudFR5cGUnO1xuaW1wb3J0IHsgRWRpdG9yTWFuYWdlciB9IGZyb20gJy4uLy4uL01hbmFnZXIvRWRpdG9yTWFuYWdlcic7XG5pbXBvcnQgTGV2ZWxfMSBmcm9tICcuLi9JdGVtL0xldmVsXzEnO1xuaW1wb3J0IExldmVsXzIgZnJvbSAnLi4vSXRlbS9MZXZlbF8yJztcbmltcG9ydCBMZXZlbF8zIGZyb20gJy4uL0l0ZW0vTGV2ZWxfMyc7XG5pbXBvcnQgTGV2ZWxfNCBmcm9tICcuLi9JdGVtL0xldmVsXzQnO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZVBhbmVsIGV4dGVuZHMgQmFzZUdhbWVQYW5lbCB7XG4gICAgcHVibGljIHN0YXRpYyBjbGFzc05hbWUgPSAnR2FtZVBhbmVsJztcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHByaXZhdGUgZ2FtZUxldmVsOiBjYy5Ob2RlW10gPSBbXTtcblxuICAgIHN0YXJ0KCkge1xuICAgICAgICBzdXBlci5zdGFydCgpO1xuICAgICAgICBMaXN0ZW5lck1hbmFnZXIub24oRXZlbnRUeXBlLkdBTUVfT1ZFUiwgdGhpcy5nYW1lT3ZlciwgdGhpcyk7XG4gICAgICAgIExpc3RlbmVyTWFuYWdlci5vbihFdmVudFR5cGUuU1VCTUlULCB0aGlzLnN1Ym1pdCwgdGhpcyk7XG4gICAgfVxuXG4gICAgb25EZXN0cm95KCkge1xuICAgICAgICBzdXBlci5vbkRlc3Ryb3koKTtcbiAgICAgICAgTGlzdGVuZXJNYW5hZ2VyLm9mZihFdmVudFR5cGUuR0FNRV9PVkVSLCB0aGlzLmdhbWVPdmVyLCB0aGlzKTtcbiAgICAgICAgTGlzdGVuZXJNYW5hZ2VyLm9mZihFdmVudFR5cGUuU1VCTUlULCB0aGlzLnN1Ym1pdCwgdGhpcyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdWJtaXQoaXNSaWdodCkge1xuICAgICAgICBpZiAoaXNSaWdodCkge1xuICAgICAgICAgICAgdGhpcy5hbnN3ZXJSaWdodCh0cnVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYW5zd2VyV3JvbmcodHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDmuLjmiI/lhaXlj6NcbiAgICAgKiDov5nph4zlt7Lnu4/mi7/liLDmlbDmja5cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgc2V0UGFuZWwoKSB7XG4gICAgICAgIHN1cGVyLnNldFBhbmVsKCk7XG4gICAgICAgIC8vIFRPRE8g5Lia5Yqh6YC76L6RICAgICAgICBcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmdhbWVMZXZlbC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5nYW1lTGV2ZWxbaV0uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5nYW1lTGV2ZWxbRWRpdG9yTWFuYWdlci5lZGl0b3JEYXRhLmdhbWVJbmRleF0uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgTGlzdGVuZXJNYW5hZ2VyLmRpc3BhdGNoKEV2ZW50VHlwZS5FTlRFUl9HQU1FKTtcbiAgICAgICAgLy8gaWYgKEVkaXRvck1hbmFnZXIuZWRpdG9yRGF0YS5nYW1lSW5kZXggPT0gMCkge1xuICAgICAgICAvLyAgICAgdGhpcy5nYW1lTGV2ZWxbRWRpdG9yTWFuYWdlci5lZGl0b3JEYXRhLmdhbWVJbmRleF0uZ2V0Q29tcG9uZW50KExldmVsXzEpLmluaXQoKTtcbiAgICAgICAgLy8gfSBlbHNlIGlmIChFZGl0b3JNYW5hZ2VyLmVkaXRvckRhdGEuZ2FtZUluZGV4ID09IDEpIHtcbiAgICAgICAgLy8gICAgIHRoaXMuZ2FtZUxldmVsW0VkaXRvck1hbmFnZXIuZWRpdG9yRGF0YS5nYW1lSW5kZXhdLmdldENvbXBvbmVudChMZXZlbF8yKS5pbml0KCk7XG4gICAgICAgIC8vIH0gZWxzZSBpZiAoRWRpdG9yTWFuYWdlci5lZGl0b3JEYXRhLmdhbWVJbmRleCA9PSAyKSB7XG4gICAgICAgIC8vICAgICB0aGlzLmdhbWVMZXZlbFtFZGl0b3JNYW5hZ2VyLmVkaXRvckRhdGEuZ2FtZUluZGV4XS5nZXRDb21wb25lbnQoTGV2ZWxfMykuaW5pdCgpO1xuICAgICAgICAvLyB9IGVsc2UgaWYgKEVkaXRvck1hbmFnZXIuZWRpdG9yRGF0YS5nYW1lSW5kZXggPT0gMykge1xuICAgICAgICAvLyAgICAgdGhpcy5nYW1lTGV2ZWxbRWRpdG9yTWFuYWdlci5lZGl0b3JEYXRhLmdhbWVJbmRleF0uZ2V0Q29tcG9uZW50KExldmVsXzQpLmluaXQoKTtcbiAgICAgICAgLy8gfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOW/g+i3s+Wbnuiwg++8iOW9k2FjdGlvbklk5LiN55u4562J5pe25omN5Lya6Kem5Y+R77yJXG4gICAgICogQHBhcmFtIHJlY292ZXJ5XG4gICAgICovXG4gICAgcHJvdGVjdGVkIG9uUmVjb3ZlcnlEYXRhKHJlY292ZXJ5OiBTeW5jRGF0YSk6IHZvaWQge1xuICAgICAgICBzdXBlci5vblJlY292ZXJ5RGF0YShyZWNvdmVyeSk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5nYW1lTGV2ZWwubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuZ2FtZUxldmVsW2ldLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZ2FtZUxldmVsW0VkaXRvck1hbmFnZXIuZWRpdG9yRGF0YS5nYW1lSW5kZXhdLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIExpc3RlbmVyTWFuYWdlci5kaXNwYXRjaChFdmVudFR5cGUuRU5URVJfR0FNRSk7XG4gICAgICAgIC8vIExpc3RlbmVyTWFuYWdlci5kaXNwYXRjaChFdmVudFR5cGUuR0FNRV9SRUNPTk5FQ1QpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOS9nOetlOato+ehrlxuICAgICAqIOeItuexu+WunueOsOS6huaVsOaNruS4iuaKpVxuICAgICAqIEBwYXJhbSBpc0N1ckxldmVsRmluaXNoIOacrOWFs+aYr+WQpuWujOaIkFxuICAgICAqL1xuICAgIHByb3RlY3RlZCBhbnN3ZXJSaWdodChpc0N1ckxldmVsRmluaXNoOiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyLmFuc3dlclJpZ2h0KGlzQ3VyTGV2ZWxGaW5pc2gpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOS9nOetlOmUmeivr1xuICAgICAqIOeItuexu+WunueOsOS6huaVsOaNruS4iuaKpVxuICAgICAqIEBwYXJhbSBpc0N1ckxldmVsRmluaXNoIOacrOWFs+aYr+WQpuWujOaIkFxuICAgICAqL1xuICAgIHByb3RlY3RlZCBhbnN3ZXJXcm9uZyhpc0N1ckxldmVsRmluaXNoOiBib29sZWFuID0gZmFsc2UpIHtcbiAgICAgICAgc3VwZXIuYW5zd2VyV3JvbmcoaXNDdXJMZXZlbEZpbmlzaCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5ri45oiP57uT5p2fXG4gICAgICog54i257G75a6e546w5LqG57uT566X55WM6Z2i77yI5ri45oiP57uT5p2f5oiW5pif57qn6K+E5Yik77yJ55qE5by55Ye6XG4gICAgICovXG4gICAgcHJvdGVjdGVkIGdhbWVPdmVyKCkge1xuICAgICAgICBzdXBlci5nYW1lT3ZlcigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOmHjeeOqVxuICAgICAqL1xuICAgIHByb3RlY3RlZCBvblJlcGxheSgpIHtcbiAgICAgICAgc3VwZXIub25SZXBsYXkoKTtcbiAgICAgICAgU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEuY3VyTGV2ZWwgPSAwO1xuICAgICAgICBTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YS5pc1Nob3dMaW5lID0gZmFsc2U7XG4gICAgICAgIFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLmlzU2hvd0xpbmUyID0gZmFsc2U7XG4gICAgICAgIFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLnNob3dOdW1Db3VudCA9IDA7XG4gICAgICAgIFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLmlzU2hvd0NpcmNsZSA9IGZhbHNlO1xuICAgICAgICBTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YS5maWxsQXJlYU9wdGlvbnMgPSBbXTtcbiAgICAgICAgU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEuZmlsbEFyZWFPcHRpb25zMiA9IFtdO1xuICAgICAgICBTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YS5pc1Nob3dOdW0gPSBmYWxzZTtcbiAgICAgICAgU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEuaXNTaG93WHV4aWFuID0gW107XG4gICAgICAgIFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLmlzU2hvd1h1eGlhbjIgPSBbXTtcbiAgICAgICAgU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEuc3RlcCA9IDA7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5nYW1lTGV2ZWwubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuZ2FtZUxldmVsW2ldLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZ2FtZUxldmVsW0VkaXRvck1hbmFnZXIuZWRpdG9yRGF0YS5nYW1lSW5kZXhdLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIExpc3RlbmVyTWFuYWdlci5kaXNwYXRjaChFdmVudFR5cGUuRU5URVJfR0FNRSk7XG4gICAgICAgIC8vIExpc3RlbmVyTWFuYWdlci5kaXNwYXRjaChFdmVudFR5cGUuR0FNRV9SRVBMQVkpO1xuICAgIH1cblxuICAgIHVwZGF0ZShkdCkge1xuICAgICAgICBzdXBlci51cGRhdGUoZHQpO1xuICAgIH1cbn1cbiJdfQ==