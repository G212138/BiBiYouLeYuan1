
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game/scripts/UI/panel/TeacherPanel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '70c27EBmWdPJYtgMQ9dyPZS', 'TeacherPanel');
// game/scripts/UI/panel/TeacherPanel.ts

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
var FrameMsgType_1 = require("../../../../frame/scripts/Data/FrameMsgType");
var ListenerManager_1 = require("../../../../frame/scripts/Manager/ListenerManager");
var UIManager_1 = require("../../../../frame/scripts/Manager/UIManager");
var BaseTeacherPanel_1 = require("../../../../frame/scripts/UI/Panel/BaseTeacherPanel");
var UIHelp_1 = require("../../../../frame/scripts/Utils/UIHelp");
var EditorManager_1 = require("../../Manager/EditorManager");
var GamePanel_1 = require("./GamePanel");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TeacherPanel = /** @class */ (function (_super) {
    __extends(TeacherPanel, _super);
    function TeacherPanel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.toggle_stars = null;
        _this.toggle_replay = null;
        _this.toggle_titleAudio = null;
        _this.toggle_gameMode = null;
        _this.toggle_gameIndex = null;
        _this._btn_save = null;
        _this._btn_view = null;
        return _this;
    }
    TeacherPanel.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    TeacherPanel.prototype.start = function () {
        _super.prototype.start.call(this);
        // 可编辑的游戏，不展示保存按钮
        var isEdit = EditorManager_1.EditorManager.isSupportEdit();
        if (this._btn_save) {
            this._btn_save.active = !isEdit;
        }
        this._btn_save.active = true;
    };
    /**
     * 设置界面（这里已经拿到了网络请求数据）
     */
    TeacherPanel.prototype.setPanel = function () {
        _super.prototype.setPanel.call(this);
        this.toggle_stars.toggleItems[EditorManager_1.EditorManager.editorData.isStarCount ? 0 : 1].isChecked = true;
        this.toggle_replay.toggleItems[EditorManager_1.EditorManager.editorData.isReplay ? 0 : 1].isChecked = true;
        this.toggle_titleAudio.toggleItems[EditorManager_1.EditorManager.editorData.isPlayTitle ? 0 : 1].isChecked = true;
        this.toggle_gameMode.toggleItems[EditorManager_1.EditorManager.editorData.gameMode].isChecked = true;
        this.toggle_gameIndex.toggleItems[EditorManager_1.EditorManager.editorData.gameIndex].isChecked = true;
    };
    // 星级评判开关
    TeacherPanel.prototype.onToggleStar = function (toggle) {
        var index = this.toggle_stars.toggleItems.indexOf(toggle);
        EditorManager_1.EditorManager.editorData.isStarCount = 0 === index;
    };
    // 重玩开关
    TeacherPanel.prototype.onToggleReplay = function (toggle) {
        var index = this.toggle_replay.toggleItems.indexOf(toggle);
        EditorManager_1.EditorManager.editorData.isReplay = 0 === index;
    };
    // 自动播放题干语音开关
    TeacherPanel.prototype.onToggleTitleAudio = function (toggle) {
        var index = this.toggle_titleAudio.toggleItems.indexOf(toggle);
        EditorManager_1.EditorManager.editorData.isPlayTitle = 0 === index;
    };
    TeacherPanel.prototype.onToggleGameMode = function (toggle) {
        var index = this.toggle_gameMode.toggleItems.indexOf(toggle);
        EditorManager_1.EditorManager.editorData.gameMode = index;
    };
    TeacherPanel.prototype.onToggleGameIndex = function (toggle) {
        var index = this.toggle_gameIndex.toggleItems.indexOf(toggle);
        EditorManager_1.EditorManager.editorData.gameIndex = index;
    };
    // 保存课件按钮
    TeacherPanel.prototype.onBtnSaveClicked = function () {
        // const isEdit = EditorManager.isSupportEdit();
        // if (!isEdit || ReportManager.isAllOver) {
        UIHelp_1.UIHelp.showSubmissionPanel();
        // } else {
        //     UIHelp.showTip('请先完成一遍题目');
        // }
    };
    // 预览课件按钮
    TeacherPanel.prototype.onBtnViewClicked = function () {
        if (-1 === EditorManager_1.EditorManager.getCoursewareLevel() ||
            null === EditorManager_1.EditorManager.getCoursewareLevel() ||
            void 0 === EditorManager_1.EditorManager.getCoursewareLevel()) {
            UIHelp_1.UIHelp.showTip('请先设置coursewareLevel');
        }
        else {
            ListenerManager_1.ListenerManager.dispatch(FrameMsgType_1.FrameMsgType.TEACHER_PANEL_LOADING, true);
            UIManager_1.UIManager.showUI(GamePanel_1.default);
        }
    };
    TeacherPanel.className = 'TeacherPanel';
    __decorate([
        property(cc.ToggleContainer)
    ], TeacherPanel.prototype, "toggle_stars", void 0);
    __decorate([
        property(cc.ToggleContainer)
    ], TeacherPanel.prototype, "toggle_replay", void 0);
    __decorate([
        property(cc.ToggleContainer)
    ], TeacherPanel.prototype, "toggle_titleAudio", void 0);
    __decorate([
        property(cc.ToggleContainer)
    ], TeacherPanel.prototype, "toggle_gameMode", void 0);
    __decorate([
        property(cc.ToggleContainer)
    ], TeacherPanel.prototype, "toggle_gameIndex", void 0);
    TeacherPanel = __decorate([
        ccclass
    ], TeacherPanel);
    return TeacherPanel;
}(BaseTeacherPanel_1.default));
exports.default = TeacherPanel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZVxcc2NyaXB0c1xcVUlcXHBhbmVsXFxUZWFjaGVyUGFuZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNEVBQTJFO0FBQzNFLHFGQUFvRjtBQUVwRix5RUFBd0U7QUFDeEUsd0ZBQW1GO0FBQ25GLGlFQUFnRTtBQUNoRSw2REFBNEQ7QUFDNUQseUNBQW9DO0FBRTlCLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTBDLGdDQUFnQjtJQUExRDtRQUFBLHFFQWdHQztRQTVGVyxrQkFBWSxHQUF1QixJQUFJLENBQUM7UUFFeEMsbUJBQWEsR0FBdUIsSUFBSSxDQUFDO1FBRXpDLHVCQUFpQixHQUF1QixJQUFJLENBQUM7UUFFN0MscUJBQWUsR0FBdUIsSUFBSSxDQUFDO1FBRTNDLHNCQUFnQixHQUF1QixJQUFJLENBQUM7UUFFNUMsZUFBUyxHQUFZLElBQUksQ0FBQztRQUMxQixlQUFTLEdBQVksSUFBSSxDQUFDOztJQWlGdEMsQ0FBQztJQS9FRyw2QkFBTSxHQUFOO1FBQ0ksaUJBQU0sTUFBTSxXQUFFLENBQUM7SUFDbkIsQ0FBQztJQUVELDRCQUFLLEdBQUw7UUFDSSxpQkFBTSxLQUFLLFdBQUUsQ0FBQztRQUVkLGlCQUFpQjtRQUNqQixJQUFNLE1BQU0sR0FBRyw2QkFBYSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQzdDLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNoQixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLE1BQU0sQ0FBQztTQUNuQztRQUNELElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztJQUNqQyxDQUFDO0lBRUQ7O09BRUc7SUFDSCwrQkFBUSxHQUFSO1FBQ0ksaUJBQU0sUUFBUSxXQUFFLENBQUM7UUFDakIsSUFB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Q0FBQztTQUN6QzthQUFNO1lBQ0gsaUNBQWUsQ0FBQyxRQUFRLENBQUMsMkJBQVksQ0FBQyxxQkFBcUIsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUNuRSxxQkFBUyxDQUFDLE1BQU0sQ0FBQyxtQkFBUyxDQUFDLENBQUM7U0FDL0I7SUFDTCxDQUFDO0lBN0ZhLHNCQUFTLEdBQUcsY0FBYyxDQUFDO0lBR3pDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxlQUFlLENBQUM7c0RBQ21CO0lBRWhEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxlQUFlLENBQUM7dURBQ29CO0lBRWpEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxlQUFlLENBQUM7MkRBQ3dCO0lBRXJEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxlQUFlLENBQUM7eURBQ3NCO0lBRW5EO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxlQUFlLENBQUM7MERBQ3VCO0lBWm5DLFlBQVk7UUFEaEMsT0FBTztPQUNhLFlBQVksQ0FnR2hDO0lBQUQsbUJBQUM7Q0FoR0QsQUFnR0MsQ0FoR3lDLDBCQUFnQixHQWdHekQ7a0JBaEdvQixZQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRnJhbWVNc2dUeXBlIH0gZnJvbSAnLi4vLi4vLi4vLi4vZnJhbWUvc2NyaXB0cy9EYXRhL0ZyYW1lTXNnVHlwZSc7XG5pbXBvcnQgeyBMaXN0ZW5lck1hbmFnZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9mcmFtZS9zY3JpcHRzL01hbmFnZXIvTGlzdGVuZXJNYW5hZ2VyJztcbmltcG9ydCB7IFJlcG9ydE1hbmFnZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9mcmFtZS9zY3JpcHRzL01hbmFnZXIvUmVwb3J0TWFuYWdlcic7XG5pbXBvcnQgeyBVSU1hbmFnZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9mcmFtZS9zY3JpcHRzL01hbmFnZXIvVUlNYW5hZ2VyJztcbmltcG9ydCBCYXNlVGVhY2hlclBhbmVsIGZyb20gJy4uLy4uLy4uLy4uL2ZyYW1lL3NjcmlwdHMvVUkvUGFuZWwvQmFzZVRlYWNoZXJQYW5lbCc7XG5pbXBvcnQgeyBVSUhlbHAgfSBmcm9tICcuLi8uLi8uLi8uLi9mcmFtZS9zY3JpcHRzL1V0aWxzL1VJSGVscCc7XG5pbXBvcnQgeyBFZGl0b3JNYW5hZ2VyIH0gZnJvbSAnLi4vLi4vTWFuYWdlci9FZGl0b3JNYW5hZ2VyJztcbmltcG9ydCBHYW1lUGFuZWwgZnJvbSAnLi9HYW1lUGFuZWwnO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVhY2hlclBhbmVsIGV4dGVuZHMgQmFzZVRlYWNoZXJQYW5lbCB7XG4gICAgcHVibGljIHN0YXRpYyBjbGFzc05hbWUgPSAnVGVhY2hlclBhbmVsJztcblxuICAgIEBwcm9wZXJ0eShjYy5Ub2dnbGVDb250YWluZXIpXG4gICAgcHJpdmF0ZSB0b2dnbGVfc3RhcnM6IGNjLlRvZ2dsZUNvbnRhaW5lciA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlRvZ2dsZUNvbnRhaW5lcilcbiAgICBwcml2YXRlIHRvZ2dsZV9yZXBsYXk6IGNjLlRvZ2dsZUNvbnRhaW5lciA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlRvZ2dsZUNvbnRhaW5lcilcbiAgICBwcml2YXRlIHRvZ2dsZV90aXRsZUF1ZGlvOiBjYy5Ub2dnbGVDb250YWluZXIgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ub2dnbGVDb250YWluZXIpXG4gICAgcHJpdmF0ZSB0b2dnbGVfZ2FtZU1vZGU6IGNjLlRvZ2dsZUNvbnRhaW5lciA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlRvZ2dsZUNvbnRhaW5lcilcbiAgICBwcml2YXRlIHRvZ2dsZV9nYW1lSW5kZXg6IGNjLlRvZ2dsZUNvbnRhaW5lciA9IG51bGw7XG5cbiAgICBwcml2YXRlIF9idG5fc2F2ZTogY2MuTm9kZSA9IG51bGw7XG4gICAgcHJpdmF0ZSBfYnRuX3ZpZXc6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICBzdXBlci5vbkxvYWQoKTtcbiAgICB9XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgc3VwZXIuc3RhcnQoKTtcblxuICAgICAgICAvLyDlj6/nvJbovpHnmoTmuLjmiI/vvIzkuI3lsZXnpLrkv53lrZjmjInpkq5cbiAgICAgICAgY29uc3QgaXNFZGl0ID0gRWRpdG9yTWFuYWdlci5pc1N1cHBvcnRFZGl0KCk7XG4gICAgICAgIGlmICh0aGlzLl9idG5fc2F2ZSkge1xuICAgICAgICAgICAgdGhpcy5fYnRuX3NhdmUuYWN0aXZlID0gIWlzRWRpdDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9idG5fc2F2ZS5hY3RpdmUgPSB0cnVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOiuvue9rueVjOmdou+8iOi/memHjOW3sue7j+aLv+WIsOS6hue9kee7nOivt+axguaVsOaNru+8iVxuICAgICAqL1xuICAgIHNldFBhbmVsKCkge1xuICAgICAgICBzdXBlci5zZXRQYW5lbCgpO1xuICAgICAgICB0aGlzLnRvZ2dsZV9zdGFycy50b2dnbGVJdGVtc1tFZGl0b3JNYW5hZ2VyLmVkaXRvckRhdGEuaXNTdGFyQ291bnQgPyAwIDogMV0uaXNDaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy50b2dnbGVfcmVwbGF5LnRvZ2dsZUl0ZW1zW0VkaXRvck1hbmFnZXIuZWRpdG9yRGF0YS5pc1JlcGxheSA/IDAgOiAxXS5pc0NoZWNrZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLnRvZ2dsZV90aXRsZUF1ZGlvLnRvZ2dsZUl0ZW1zW0VkaXRvck1hbmFnZXIuZWRpdG9yRGF0YS5pc1BsYXlUaXRsZSA/IDAgOiAxXS5pc0NoZWNrZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLnRvZ2dsZV9nYW1lTW9kZS50b2dnbGVJdGVtc1tFZGl0b3JNYW5hZ2VyLmVkaXRvckRhdGEuZ2FtZU1vZGVdLmlzQ2hlY2tlZCA9IHRydWU7XG4gICAgICAgIHRoaXMudG9nZ2xlX2dhbWVJbmRleC50b2dnbGVJdGVtc1tFZGl0b3JNYW5hZ2VyLmVkaXRvckRhdGEuZ2FtZUluZGV4XS5pc0NoZWNrZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIC8vIOaYn+e6p+ivhOWIpOW8gOWFs1xuICAgIHB1YmxpYyBvblRvZ2dsZVN0YXIodG9nZ2xlOiBjYy5Ub2dnbGUpOiB2b2lkIHtcbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy50b2dnbGVfc3RhcnMudG9nZ2xlSXRlbXMuaW5kZXhPZih0b2dnbGUpO1xuICAgICAgICBFZGl0b3JNYW5hZ2VyLmVkaXRvckRhdGEuaXNTdGFyQ291bnQgPSAwID09PSBpbmRleDtcbiAgICB9XG5cbiAgICAvLyDph43njqnlvIDlhbNcbiAgICBwdWJsaWMgb25Ub2dnbGVSZXBsYXkodG9nZ2xlOiBjYy5Ub2dnbGUpOiB2b2lkIHtcbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy50b2dnbGVfcmVwbGF5LnRvZ2dsZUl0ZW1zLmluZGV4T2YodG9nZ2xlKTtcbiAgICAgICAgRWRpdG9yTWFuYWdlci5lZGl0b3JEYXRhLmlzUmVwbGF5ID0gMCA9PT0gaW5kZXg7XG4gICAgfVxuXG4gICAgLy8g6Ieq5Yqo5pKt5pS+6aKY5bmy6K+t6Z+z5byA5YWzXG4gICAgcHVibGljIG9uVG9nZ2xlVGl0bGVBdWRpbyh0b2dnbGU6IGNjLlRvZ2dsZSk6IHZvaWQge1xuICAgICAgICBsZXQgaW5kZXggPSB0aGlzLnRvZ2dsZV90aXRsZUF1ZGlvLnRvZ2dsZUl0ZW1zLmluZGV4T2YodG9nZ2xlKTtcbiAgICAgICAgRWRpdG9yTWFuYWdlci5lZGl0b3JEYXRhLmlzUGxheVRpdGxlID0gMCA9PT0gaW5kZXg7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvblRvZ2dsZUdhbWVNb2RlKHRvZ2dsZTogY2MuVG9nZ2xlKTogdm9pZCB7XG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMudG9nZ2xlX2dhbWVNb2RlLnRvZ2dsZUl0ZW1zLmluZGV4T2YodG9nZ2xlKTtcbiAgICAgICAgRWRpdG9yTWFuYWdlci5lZGl0b3JEYXRhLmdhbWVNb2RlID0gaW5kZXg7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvblRvZ2dsZUdhbWVJbmRleCh0b2dnbGU6IGNjLlRvZ2dsZSk6IHZvaWQge1xuICAgICAgICBsZXQgaW5kZXggPSB0aGlzLnRvZ2dsZV9nYW1lSW5kZXgudG9nZ2xlSXRlbXMuaW5kZXhPZih0b2dnbGUpO1xuICAgICAgICBFZGl0b3JNYW5hZ2VyLmVkaXRvckRhdGEuZ2FtZUluZGV4ID0gaW5kZXg7XG4gICAgfVxuXG4gICAgLy8g5L+d5a2Y6K++5Lu25oyJ6ZKuXG4gICAgcHVibGljIG9uQnRuU2F2ZUNsaWNrZWQoKSB7XG4gICAgICAgIC8vIGNvbnN0IGlzRWRpdCA9IEVkaXRvck1hbmFnZXIuaXNTdXBwb3J0RWRpdCgpO1xuICAgICAgICAvLyBpZiAoIWlzRWRpdCB8fCBSZXBvcnRNYW5hZ2VyLmlzQWxsT3Zlcikge1xuICAgICAgICAgICAgVUlIZWxwLnNob3dTdWJtaXNzaW9uUGFuZWwoKTtcbiAgICAgICAgLy8gfSBlbHNlIHtcbiAgICAgICAgLy8gICAgIFVJSGVscC5zaG93VGlwKCfor7flhYjlrozmiJDkuIDpgY3popjnm64nKTtcbiAgICAgICAgLy8gfVxuICAgIH1cbiAgICAvLyDpooTop4jor77ku7bmjInpkq5cbiAgICBwdWJsaWMgb25CdG5WaWV3Q2xpY2tlZCgpIHtcbiAgICAgICAgXG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIC0xID09PSBFZGl0b3JNYW5hZ2VyLmdldENvdXJzZXdhcmVMZXZlbCgpIHx8XG4gICAgICAgICAgICBudWxsID09PSBFZGl0b3JNYW5hZ2VyLmdldENvdXJzZXdhcmVMZXZlbCgpIHx8XG4gICAgICAgICAgICB2b2lkIDAgPT09IEVkaXRvck1hbmFnZXIuZ2V0Q291cnNld2FyZUxldmVsKClcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBVSUhlbHAuc2hvd1RpcCgn6K+35YWI6K6+572uY291cnNld2FyZUxldmVsJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBMaXN0ZW5lck1hbmFnZXIuZGlzcGF0Y2goRnJhbWVNc2dUeXBlLlRFQUNIRVJfUEFORUxfTE9BRElORywgdHJ1ZSk7XG4gICAgICAgICAgICBVSU1hbmFnZXIuc2hvd1VJKEdhbWVQYW5lbCk7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cbiJdfQ==