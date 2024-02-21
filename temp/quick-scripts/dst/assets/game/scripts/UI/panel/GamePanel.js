
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZVxcc2NyaXB0c1xcVUlcXHBhbmVsXFxHYW1lUGFuZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscUZBQW9GO0FBQ3BGLHFGQUE4RjtBQUM5RixrRkFBNkU7QUFDN0Usa0RBQWlEO0FBQ2pELDZEQUE0RDtBQU10RCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF1Qyw2QkFBYTtJQUFwRDtRQUFBLHFFQWdIQztRQTVHVyxlQUFTLEdBQWMsRUFBRSxDQUFDOztJQTRHdEMsQ0FBQztJQTFHRyx5QkFBSyxHQUFMO1FBQ0ksaUJBQU0sS0FBSyxXQUFFLENBQUM7UUFDZCxpQ0FBZSxDQUFDLEVBQUUsQ0FBQyxxQkFBUyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzdELGlDQUFlLENBQUMsRUFBRSxDQUFDLHFCQUFTLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUVELDZCQUFTLEdBQVQ7UUFDSSxpQkFBTSxTQUFTLFdBQUUsQ0FBQztRQUNsQixpQ0FBZSxDQUFDLEdBQUcsQ0FBQyxxQkFBUyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzlELGlDQUFlLENBQUMsR0FBRyxDQUFDLHFCQUFTLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUVPLDBCQUFNLEdBQWQsVUFBZSxPQUFPO1FBQ2xCLElBQUksT0FBTyxFQUFFO1lBQ1QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUMxQjthQUFNO1lBQ0gsSUFBSSxDQUFDLFdBQVcsQ0FB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Q0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7U0FDcEM7UUFDRCxJQUFJLENBQUMsU0FBUyxDQUFDLDZCQUFhLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDakUsaUNBQWUsQ0FBQyxRQUFRLENBQUMscUJBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUMvQyxtREFBbUQ7SUFDdkQsQ0FBQztJQUVELDBCQUFNLEdBQU4sVUFBTyxFQUFFO1FBQ0wsaUJBQU0sTUFBTSxZQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3JCLENBQUM7SUE5R2EsbUJBQVMsR0FBRyxXQUFXLENBQUM7SUFHdEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztnREFDZ0I7SUFKakIsU0FBUztRQUQ3QixPQUFPO09BQ2EsU0FBUyxDQWdIN0I7SUFBRCxnQkFBQztDQWhIRCxBQWdIQyxDQWhIc0MsdUJBQWEsR0FnSG5EO2tCQWhIb0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExpc3RlbmVyTWFuYWdlciB9IGZyb20gJy4uLy4uLy4uLy4uL2ZyYW1lL3NjcmlwdHMvTWFuYWdlci9MaXN0ZW5lck1hbmFnZXInO1xuaW1wb3J0IHsgU3luY0RhdGEsIFN5bmNEYXRhTWFuYWdlciB9IGZyb20gJy4uLy4uLy4uLy4uL2ZyYW1lL3NjcmlwdHMvTWFuYWdlci9TeW5jRGF0YU1hbmFnZXInO1xuaW1wb3J0IEJhc2VHYW1lUGFuZWwgZnJvbSAnLi4vLi4vLi4vLi4vZnJhbWUvc2NyaXB0cy9VSS9QYW5lbC9CYXNlR2FtZVBhbmVsJztcbmltcG9ydCB7IEV2ZW50VHlwZSB9IGZyb20gJy4uLy4uL0RhdGEvRXZlbnRUeXBlJztcbmltcG9ydCB7IEVkaXRvck1hbmFnZXIgfSBmcm9tICcuLi8uLi9NYW5hZ2VyL0VkaXRvck1hbmFnZXInO1xuaW1wb3J0IExldmVsXzEgZnJvbSAnLi4vSXRlbS9MZXZlbF8xJztcbmltcG9ydCBMZXZlbF8yIGZyb20gJy4uL0l0ZW0vTGV2ZWxfMic7XG5pbXBvcnQgTGV2ZWxfMyBmcm9tICcuLi9JdGVtL0xldmVsXzMnO1xuaW1wb3J0IExldmVsXzQgZnJvbSAnLi4vSXRlbS9MZXZlbF80JztcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVQYW5lbCBleHRlbmRzIEJhc2VHYW1lUGFuZWwge1xuICAgIHB1YmxpYyBzdGF0aWMgY2xhc3NOYW1lID0gJ0dhbWVQYW5lbCc7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBwcml2YXRlIGdhbWVMZXZlbDogY2MuTm9kZVtdID0gW107XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgc3VwZXIuc3RhcnQoKTtcbiAgICAgICAgTGlzdGVuZXJNYW5hZ2VyLm9uKEV2ZW50VHlwZS5HQU1FX09WRVIsIHRoaXMuZ2FtZU92ZXIsIHRoaXMpO1xuICAgICAgICBMaXN0ZW5lck1hbmFnZXIub24oRXZlbnRUeXBlLlNVQk1JVCwgdGhpcy5zdWJtaXQsIHRoaXMpO1xuICAgIH1cblxuICAgIG9uRGVzdHJveSgpIHtcbiAgICAgICAgc3VwZXIub25EZXN0cm95KCk7XG4gICAgICAgIExpc3RlbmVyTWFuYWdlci5vZmYoRXZlbnRUeXBlLkdBTUVfT1ZFUiwgdGhpcy5nYW1lT3ZlciwgdGhpcyk7XG4gICAgICAgIExpc3RlbmVyTWFuYWdlci5vZmYoRXZlbnRUeXBlLlNVQk1JVCwgdGhpcy5zdWJtaXQsIHRoaXMpO1xuICAgIH1cblxuICAgIHByaXZhdGUgc3VibWl0KGlzUmlnaHQpIHtcbiAgICAgICAgaWYgKGlzUmlnaHQpIHtcbiAgICAgICAgICAgIHRoaXMuYW5zd2VyUmlnaHQodHJ1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmFuc3dlcldyb25nKHRydWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5ri45oiP5YWl5Y+jXG4gICAgICog6L+Z6YeM5bey57uP5ou/5Yiw5pWw5o2uXG4gICAgICovXG4gICAgcHJvdGVjdGVkIHNldFBhbmVsKCkge1xuICAgICAgICBzdXBlci5zZXRQYW5lbCgpO1xuICAgICAgICAvLyBUT0RPIOS4muWKoemAu+i+kSAgICAgICAgXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5nYW1lTGV2ZWwubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuZ2FtZUxldmVsW2ldLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZ2FtZUxldmVsW0VkaXRvck1hbmFnZXIuZWRpdG9yRGF0YS5nYW1lSW5kZXhdLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIExpc3RlbmVyTWFuYWdlci5kaXNwYXRjaChFdmVudFR5cGUuRU5URVJfR0FNRSk7XG4gICAgICAgIC8vIGlmIChFZGl0b3JNYW5hZ2VyLmVkaXRvckRhdGEuZ2FtZUluZGV4ID09IDApIHtcbiAgICAgICAgLy8gICAgIHRoaXMuZ2FtZUxldmVsW0VkaXRvck1hbmFnZXIuZWRpdG9yRGF0YS5nYW1lSW5kZXhdLmdldENvbXBvbmVudChMZXZlbF8xKS5pbml0KCk7XG4gICAgICAgIC8vIH0gZWxzZSBpZiAoRWRpdG9yTWFuYWdlci5lZGl0b3JEYXRhLmdhbWVJbmRleCA9PSAxKSB7XG4gICAgICAgIC8vICAgICB0aGlzLmdhbWVMZXZlbFtFZGl0b3JNYW5hZ2VyLmVkaXRvckRhdGEuZ2FtZUluZGV4XS5nZXRDb21wb25lbnQoTGV2ZWxfMikuaW5pdCgpO1xuICAgICAgICAvLyB9IGVsc2UgaWYgKEVkaXRvck1hbmFnZXIuZWRpdG9yRGF0YS5nYW1lSW5kZXggPT0gMikge1xuICAgICAgICAvLyAgICAgdGhpcy5nYW1lTGV2ZWxbRWRpdG9yTWFuYWdlci5lZGl0b3JEYXRhLmdhbWVJbmRleF0uZ2V0Q29tcG9uZW50KExldmVsXzMpLmluaXQoKTtcbiAgICAgICAgLy8gfSBlbHNlIGlmIChFZGl0b3JNYW5hZ2VyLmVkaXRvckRhdGEuZ2FtZUluZGV4ID09IDMpIHtcbiAgICAgICAgLy8gICAgIHRoaXMuZ2FtZUxldmVsW0VkaXRvck1hbmFnZXIuZWRpdG9yRGF0YS5nYW1lSW5kZXhdLmdldENvbXBvbmVudChMZXZlbF80KS5pbml0KCk7XG4gICAgICAgIC8vIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDlv4Pot7Plm57osIPvvIjlvZNhY3Rpb25JZOS4jeebuOetieaXtuaJjeS8muinpuWPke+8iVxuICAgICAqIEBwYXJhbSByZWNvdmVyeVxuICAgICAqL1xuICAgIHByb3RlY3RlZCBvblJlY292ZXJ5RGF0YShyZWNvdmVyeTogU3luY0RhdGEpOiB2b2lkIHtcbiAgICAgICAgc3VwZXIub25SZWNvdmVyeURhdGEocmVjb3ZlcnkpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZ2FtZUxldmVsLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmdhbWVMZXZlbFtpXS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmdhbWVMZXZlbFtFZGl0b3JNYW5hZ2VyLmVkaXRvckRhdGEuZ2FtZUluZGV4XS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICBMaXN0ZW5lck1hbmFnZXIuZGlzcGF0Y2goRXZlbnRUeXBlLkVOVEVSX0dBTUUpO1xuICAgICAgICAvLyBMaXN0ZW5lck1hbmFnZXIuZGlzcGF0Y2goRXZlbnRUeXBlLkdBTUVfUkVDT05ORUNUKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDkvZznrZTmraPnoa5cbiAgICAgKiDniLbnsbvlrp7njrDkuobmlbDmja7kuIrmiqVcbiAgICAgKiBAcGFyYW0gaXNDdXJMZXZlbEZpbmlzaCDmnKzlhbPmmK/lkKblrozmiJBcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgYW5zd2VyUmlnaHQoaXNDdXJMZXZlbEZpbmlzaDogYm9vbGVhbikge1xuICAgICAgICBzdXBlci5hbnN3ZXJSaWdodChpc0N1ckxldmVsRmluaXNoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDkvZznrZTplJnor69cbiAgICAgKiDniLbnsbvlrp7njrDkuobmlbDmja7kuIrmiqVcbiAgICAgKiBAcGFyYW0gaXNDdXJMZXZlbEZpbmlzaCDmnKzlhbPmmK/lkKblrozmiJBcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgYW5zd2VyV3JvbmcoaXNDdXJMZXZlbEZpbmlzaDogYm9vbGVhbiA9IGZhbHNlKSB7XG4gICAgICAgIHN1cGVyLmFuc3dlcldyb25nKGlzQ3VyTGV2ZWxGaW5pc2gpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOa4uOaIj+e7k+adn1xuICAgICAqIOeItuexu+WunueOsOS6hue7k+eul+eVjOmdou+8iOa4uOaIj+e7k+adn+aIluaYn+e6p+ivhOWIpO+8ieeahOW8ueWHulxuICAgICAqL1xuICAgIHByb3RlY3RlZCBnYW1lT3ZlcigpIHtcbiAgICAgICAgc3VwZXIuZ2FtZU92ZXIoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDph43njqlcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgb25SZXBsYXkoKSB7XG4gICAgICAgIHN1cGVyLm9uUmVwbGF5KCk7XG4gICAgICAgIFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLmN1ckxldmVsID0gMDtcbiAgICAgICAgU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEuaXNTaG93TGluZSA9IGZhbHNlO1xuICAgICAgICBTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YS5pc1Nob3dMaW5lMiA9IGZhbHNlO1xuICAgICAgICBTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YS5zaG93TnVtQ291bnQgPSAwO1xuICAgICAgICBTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YS5pc1Nob3dDaXJjbGUgPSBmYWxzZTtcbiAgICAgICAgU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEuZmlsbEFyZWFPcHRpb25zID0gW107XG4gICAgICAgIFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLmZpbGxBcmVhT3B0aW9uczIgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmdhbWVMZXZlbC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5nYW1lTGV2ZWxbaV0uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5nYW1lTGV2ZWxbRWRpdG9yTWFuYWdlci5lZGl0b3JEYXRhLmdhbWVJbmRleF0uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgTGlzdGVuZXJNYW5hZ2VyLmRpc3BhdGNoKEV2ZW50VHlwZS5FTlRFUl9HQU1FKTtcbiAgICAgICAgLy8gTGlzdGVuZXJNYW5hZ2VyLmRpc3BhdGNoKEV2ZW50VHlwZS5HQU1FX1JFUExBWSk7XG4gICAgfVxuXG4gICAgdXBkYXRlKGR0KSB7XG4gICAgICAgIHN1cGVyLnVwZGF0ZShkdCk7XG4gICAgfVxufVxuIl19