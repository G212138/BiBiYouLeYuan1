
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game/scripts/UI/Item/Level_3.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a097ak57U5OCoQbwuW0scJG', 'Level_3');
// game/scripts/UI/Item/Level_3.ts

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
var SoundManager_1 = require("../../../../frame/scripts/Manager/SoundManager");
var SyncDataManager_1 = require("../../../../frame/scripts/Manager/SyncDataManager");
var EventType_1 = require("../../Data/EventType");
var EditorManager_1 = require("../../Manager/EditorManager");
var FillArea_1 = require("./FillArea");
var OptionItem_1 = require("./OptionItem");
var SoundConfig_1 = require("./SoundConfig");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Level_3 = /** @class */ (function (_super) {
    __extends(Level_3, _super);
    function Level_3() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.redLine = null;
        _this.numNode = null;
        _this.optionsNode = null;
        _this.btn_change = null;
        _this.top_node = null;
        _this.bottom_node = null;
        _this.highlight = null;
        _this.isCheckEnd = false;
        return _this;
    }
    Level_3.prototype.onLoad = function () {
        ListenerManager_1.ListenerManager.on(EventType_1.EventType.ENTER_GAME, this.init, this);
        ListenerManager_1.ListenerManager.on(EventType_1.EventType.DRAG_OPTION_END, this.syncOptions, this);
    };
    Level_3.prototype.onDestroy = function () {
        ListenerManager_1.ListenerManager.off(EventType_1.EventType.ENTER_GAME, this.init, this);
        ListenerManager_1.ListenerManager.off(EventType_1.EventType.DRAG_OPTION_END, this.syncOptions, this);
    };
    Level_3.prototype.init = function () {
        this.numNode.active = EditorManager_1.EditorManager.editorData.gameMode == 0; //演示模式
        this.btn_change.active = EditorManager_1.EditorManager.editorData.gameMode == 0; //演示模式
        if (EditorManager_1.EditorManager.editorData.gameMode == 0) {
            this.optionsNode.x = -520;
        }
        else {
            this.optionsNode.x = 0;
        }
        this.handleShowCircle();
        this.handleShowRedLine();
        this.handleShowNum();
        this.resetOptions();
    };
    Level_3.prototype.handleShowCircle = function () {
        var isShowCircle = SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.isShowCircle;
        for (var i = 0; i < this.optionsNode.childrenCount; i++) {
            this.optionsNode.children[i].getChildByName("circle").active = isShowCircle;
            this.optionsNode.children[i].getChildByName("icon").active = !isShowCircle;
        }
        for (var i = 0; i < this.top_node.childrenCount; i++) {
            this.top_node.children[i].getChildByName("circle").active = isShowCircle;
            this.top_node.children[i].getChildByName("icon").active = !isShowCircle;
        }
        for (var i = 0; i < this.bottom_node.childrenCount; i++) {
            this.bottom_node.children[i].getChildByName("circle").active = isShowCircle;
            this.bottom_node.children[i].getChildByName("icon").active = !isShowCircle;
        }
    };
    Level_3.prototype.resetOptions = function () {
        var fillAreaOptions = SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.fillAreaOptions;
        for (var i = 0; i < this.bottom_node.childrenCount; i++) {
            var option = this.bottom_node.children[i];
            option.getComponent(OptionItem_1.default).reset();
            i = i - 1;
        }
        for (var j = 0; j < fillAreaOptions.length; j++) {
            var option = this.optionsNode.getChildByName(fillAreaOptions[j]);
            if (option) {
                this.bottom_node.getComponent(FillArea_1.default).fill(option);
            }
        }
    };
    Level_3.prototype.syncOptions = function () {
        SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.fillAreaOptions = [];
        for (var i = 0; i < this.bottom_node.childrenCount; i++) {
            SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.fillAreaOptions.push(this.bottom_node.children[i].name);
        }
    };
    Level_3.prototype.onClickShowRedLine = function () {
        SoundManager_1.SoundManager.playEffect(SoundConfig_1.SoundConfig.soudlist["点击音效"], false, false, false);
        var isShow = SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.isShowLine;
        SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.isShowLine = !isShow;
        this.handleShowRedLine();
    };
    Level_3.prototype.handleShowRedLine = function () {
        this.redLine.active = SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.isShowLine;
    };
    Level_3.prototype.onClickNum = function () {
        SoundManager_1.SoundManager.playEffect(SoundConfig_1.SoundConfig.soudlist["点击音效"], false, false, false);
        var showNumCount = SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.showNumCount;
        showNumCount++;
        if (showNumCount > 5) {
            showNumCount = 0;
        }
        SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.showNumCount = showNumCount;
        this.handleShowNum();
    };
    Level_3.prototype.handleShowNum = function () {
        var showNumCount = SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.showNumCount;
        this.numNode.children.forEach(function (node, index) {
            node.active = index < showNumCount;
        });
    };
    Level_3.prototype.onClickChange = function () {
        SoundManager_1.SoundManager.playEffect(SoundConfig_1.SoundConfig.soudlist["点击音效"], false, false, false);
        var isShowCircle = SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.isShowCircle;
        SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.isShowCircle = !isShowCircle;
        this.handleShowCircle();
    };
    Level_3.prototype.onClickCheck = function () {
        SoundManager_1.SoundManager.playEffect(SoundConfig_1.SoundConfig.soudlist["点击音效"], false, false, false);
        if (this.isCheckEnd)
            return;
        if (this.bottom_node.childrenCount == 6) {
            this.handleTrue();
        }
        else {
            this.handleWrong();
        }
    };
    Level_3.prototype.handleTrue = function () {
        var _this = this;
        this.isCheckEnd = true;
        SoundManager_1.SoundManager.playEffect(SoundConfig_1.SoundConfig.soudlist["正确音效"], false, false, false);
        this.highlight.active = true;
        this.highlight.color = cc.Color.GREEN;
        cc.tween(this.highlight).to(0.1, { opacity: 255 }).delay(0.3).to(0.1, { opacity: 0 })
            .to(0.1, { opacity: 255 }).delay(0.3).to(0.1, { opacity: 0 })
            .to(0.1, { opacity: 255 }).delay(0.3).to(0.1, { opacity: 0 })
            .call(function () {
            _this.highlight.active = false;
            if (EditorManager_1.EditorManager.editorData.gameMode == 1) {
                ListenerManager_1.ListenerManager.dispatch(EventType_1.EventType.GAME_OVER);
            }
        })
            .start();
        ListenerManager_1.ListenerManager.dispatch(EventType_1.EventType.SUBMIT, true);
    };
    Level_3.prototype.handleWrong = function () {
        var _this = this;
        SoundManager_1.SoundManager.playEffect(SoundConfig_1.SoundConfig.soudlist["错误音效"], false, false, false);
        ListenerManager_1.ListenerManager.dispatch(EventType_1.EventType.SUBMIT, false);
        this.highlight.active = true;
        this.highlight.color = cc.Color.RED;
        cc.tween(this.highlight).to(0.1, { opacity: 255 }).delay(0.3).to(0.1, { opacity: 0 })
            .to(0.1, { opacity: 255 }).delay(0.3).to(0.1, { opacity: 0 })
            .to(0.1, { opacity: 255 }).delay(0.3).to(0.1, { opacity: 0 })
            .call(function () {
            _this.highlight.active = false;
        })
            .start();
    };
    __decorate([
        property(cc.Node)
    ], Level_3.prototype, "redLine", void 0);
    __decorate([
        property(cc.Node)
    ], Level_3.prototype, "numNode", void 0);
    __decorate([
        property(cc.Node)
    ], Level_3.prototype, "optionsNode", void 0);
    __decorate([
        property(cc.Node)
    ], Level_3.prototype, "btn_change", void 0);
    __decorate([
        property(cc.Node)
    ], Level_3.prototype, "top_node", void 0);
    __decorate([
        property(cc.Node)
    ], Level_3.prototype, "bottom_node", void 0);
    __decorate([
        property(cc.Node)
    ], Level_3.prototype, "highlight", void 0);
    Level_3 = __decorate([
        ccclass
    ], Level_3);
    return Level_3;
}(cc.Component));
exports.default = Level_3;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZVxcc2NyaXB0c1xcVUlcXEl0ZW1cXExldmVsXzMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscUZBQW9GO0FBQ3BGLCtFQUE4RTtBQUM5RSxxRkFBb0Y7QUFDcEYsa0RBQWlEO0FBQ2pELDZEQUE0RDtBQUM1RCx1Q0FBa0M7QUFDbEMsMkNBQXNDO0FBQ3RDLDZDQUE0QztBQUd0QyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFxQywyQkFBWTtJQUFqRDtRQUFBLHFFQThKQztRQTNKVyxhQUFPLEdBQVksSUFBSSxDQUFDO1FBRXhCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFFeEIsaUJBQVcsR0FBWSxJQUFJLENBQUM7UUFFNUIsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFFM0IsY0FBUSxHQUFZLElBQUksQ0FBQztRQUV6QixpQkFBVyxHQUFZLElBQUksQ0FBQztRQUU1QixlQUFTLEdBQVksSUFBSSxDQUFDO1FBOEcxQixnQkFBVSxHQUFHLEtBQUssQ0FBQzs7SUFpQy9CLENBQUM7SUE3SUcsd0JBQU0sR0FBTjtRQUNJLGlDQUFlLENBQUMsRUFBRSxDQUFDLHFCQUFTLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDMUQsaUNBQWUsQ0FBQyxFQUFFLENBQUMscUJBQVMsQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMxRSxDQUFDO0lBQ0QsMkJBQVMsR0FBVDtRQUNJLGlDQUFlLENBQUMsR0FBRyxDQUFDLHFCQUFTLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDM0QsaUNBQWUsQ0FBQyxHQUFHLENBQUMscUJBQVMsQ0FBQyxlQUFlLEVB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LEdBOEpoRDtrQkE5Sm9CLE9BQU8iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMaXN0ZW5lck1hbmFnZXIgfSBmcm9tIFwiLi4vLi4vLi4vLi4vZnJhbWUvc2NyaXB0cy9NYW5hZ2VyL0xpc3RlbmVyTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBTb3VuZE1hbmFnZXIgfSBmcm9tIFwiLi4vLi4vLi4vLi4vZnJhbWUvc2NyaXB0cy9NYW5hZ2VyL1NvdW5kTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBTeW5jRGF0YU1hbmFnZXIgfSBmcm9tIFwiLi4vLi4vLi4vLi4vZnJhbWUvc2NyaXB0cy9NYW5hZ2VyL1N5bmNEYXRhTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBFdmVudFR5cGUgfSBmcm9tIFwiLi4vLi4vRGF0YS9FdmVudFR5cGVcIjtcclxuaW1wb3J0IHsgRWRpdG9yTWFuYWdlciB9IGZyb20gXCIuLi8uLi9NYW5hZ2VyL0VkaXRvck1hbmFnZXJcIjtcclxuaW1wb3J0IEZpbGxBcmVhIGZyb20gXCIuL0ZpbGxBcmVhXCI7XHJcbmltcG9ydCBPcHRpb25JdGVtIGZyb20gXCIuL09wdGlvbkl0ZW1cIjtcclxuaW1wb3J0IHsgU291bmRDb25maWcgfSBmcm9tIFwiLi9Tb3VuZENvbmZpZ1wiO1xyXG5cclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMZXZlbF8zIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHByaXZhdGUgcmVkTGluZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHByaXZhdGUgbnVtTm9kZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHByaXZhdGUgb3B0aW9uc05vZGU6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwcml2YXRlIGJ0bl9jaGFuZ2U6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwcml2YXRlIHRvcF9ub2RlOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcHJpdmF0ZSBib3R0b21fbm9kZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHByaXZhdGUgaGlnaGxpZ2h0OiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgTGlzdGVuZXJNYW5hZ2VyLm9uKEV2ZW50VHlwZS5FTlRFUl9HQU1FLCB0aGlzLmluaXQsIHRoaXMpO1xyXG4gICAgICAgIExpc3RlbmVyTWFuYWdlci5vbihFdmVudFR5cGUuRFJBR19PUFRJT05fRU5ELCB0aGlzLnN5bmNPcHRpb25zLCB0aGlzKTtcclxuICAgIH1cclxuICAgIG9uRGVzdHJveSgpIHtcclxuICAgICAgICBMaXN0ZW5lck1hbmFnZXIub2ZmKEV2ZW50VHlwZS5FTlRFUl9HQU1FLCB0aGlzLmluaXQsIHRoaXMpO1xyXG4gICAgICAgIExpc3RlbmVyTWFuYWdlci5vZmYoRXZlbnRUeXBlLkRSQUdfT1BUSU9OX0VORCwgdGhpcy5zeW5jT3B0aW9ucywgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5udW1Ob2RlLmFjdGl2ZSA9IEVkaXRvck1hbmFnZXIuZWRpdG9yRGF0YS5nYW1lTW9kZSA9PSAwOyAvL+a8lOekuuaooeW8j1xyXG4gICAgICAgIHRoaXMuYnRuX2NoYW5nZS5hY3RpdmUgPSBFZGl0b3JNYW5hZ2VyLmVkaXRvckRhdGEuZ2FtZU1vZGUgPT0gMDsgLy/mvJTnpLrmqKHlvI9cclxuICAgICAgICBpZiAoRWRpdG9yTWFuYWdlci5lZGl0b3JEYXRhLmdhbWVNb2RlID09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5vcHRpb25zTm9kZS54ID0gLTUyMDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnNOb2RlLnggPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmhhbmRsZVNob3dDaXJjbGUoKTtcclxuICAgICAgICB0aGlzLmhhbmRsZVNob3dSZWRMaW5lKCk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVTaG93TnVtKCk7XHJcbiAgICAgICAgdGhpcy5yZXNldE9wdGlvbnMoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGhhbmRsZVNob3dDaXJjbGUoKSB7XHJcbiAgICAgICAgbGV0IGlzU2hvd0NpcmNsZSA9IFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLmlzU2hvd0NpcmNsZTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMub3B0aW9uc05vZGUuY2hpbGRyZW5Db3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMub3B0aW9uc05vZGUuY2hpbGRyZW5baV0uZ2V0Q2hpbGRCeU5hbWUoXCJjaXJjbGVcIikuYWN0aXZlID0gaXNTaG93Q2lyY2xlO1xyXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnNOb2RlLmNoaWxkcmVuW2ldLmdldENoaWxkQnlOYW1lKFwiaWNvblwiKS5hY3RpdmUgPSAhaXNTaG93Q2lyY2xlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudG9wX25vZGUuY2hpbGRyZW5Db3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMudG9wX25vZGUuY2hpbGRyZW5baV0uZ2V0Q2hpbGRCeU5hbWUoXCJjaXJjbGVcIikuYWN0aXZlID0gaXNTaG93Q2lyY2xlO1xyXG4gICAgICAgICAgICB0aGlzLnRvcF9ub2RlLmNoaWxkcmVuW2ldLmdldENoaWxkQnlOYW1lKFwiaWNvblwiKS5hY3RpdmUgPSAhaXNTaG93Q2lyY2xlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYm90dG9tX25vZGUuY2hpbGRyZW5Db3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYm90dG9tX25vZGUuY2hpbGRyZW5baV0uZ2V0Q2hpbGRCeU5hbWUoXCJjaXJjbGVcIikuYWN0aXZlID0gaXNTaG93Q2lyY2xlO1xyXG4gICAgICAgICAgICB0aGlzLmJvdHRvbV9ub2RlLmNoaWxkcmVuW2ldLmdldENoaWxkQnlOYW1lKFwiaWNvblwiKS5hY3RpdmUgPSAhaXNTaG93Q2lyY2xlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlc2V0T3B0aW9ucygpIHtcclxuICAgICAgICBsZXQgZmlsbEFyZWFPcHRpb25zID0gU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEuZmlsbEFyZWFPcHRpb25zO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5ib3R0b21fbm9kZS5jaGlsZHJlbkNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IG9wdGlvbiA9IHRoaXMuYm90dG9tX25vZGUuY2hpbGRyZW5baV07ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIG9wdGlvbi5nZXRDb21wb25lbnQoT3B0aW9uSXRlbSkucmVzZXQoKTtcclxuICAgICAgICAgICAgaSA9IGkgLSAxOyAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgZmlsbEFyZWFPcHRpb25zLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgIGxldCBvcHRpb24gPSB0aGlzLm9wdGlvbnNOb2RlLmdldENoaWxkQnlOYW1lKGZpbGxBcmVhT3B0aW9uc1tqXSk7XHJcbiAgICAgICAgICAgIGlmIChvcHRpb24pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYm90dG9tX25vZGUuZ2V0Q29tcG9uZW50KEZpbGxBcmVhKS5maWxsKG9wdGlvbik7XHJcbiAgICAgICAgICAgIH0gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzeW5jT3B0aW9ucygpIHtcclxuICAgICAgICBTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YS5maWxsQXJlYU9wdGlvbnMgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYm90dG9tX25vZGUuY2hpbGRyZW5Db3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLmZpbGxBcmVhT3B0aW9ucy5wdXNoKHRoaXMuYm90dG9tX25vZGUuY2hpbGRyZW5baV0ubmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25DbGlja1Nob3dSZWRMaW5lKCkge1xyXG4gICAgICAgIFNvdW5kTWFuYWdlci5wbGF5RWZmZWN0KFNvdW5kQ29uZmlnLnNvdWRsaXN0W1wi54K55Ye76Z+z5pWIXCJdLCBmYWxzZSwgZmFsc2UsIGZhbHNlKTtcclxuICAgICAgICBsZXQgaXNTaG93ID0gU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEuaXNTaG93TGluZTtcclxuICAgICAgICBTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YS5pc1Nob3dMaW5lID0gIWlzU2hvdztcclxuICAgICAgICB0aGlzLmhhbmRsZVNob3dSZWRMaW5lKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBoYW5kbGVTaG93UmVkTGluZSgpIHtcclxuICAgICAgICB0aGlzLnJlZExpbmUuYWN0aXZlID0gU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEuaXNTaG93TGluZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uQ2xpY2tOdW0oKSB7XHJcbiAgICAgICAgU291bmRNYW5hZ2VyLnBsYXlFZmZlY3QoU291bmRDb25maWcuc291ZGxpc3RbXCLngrnlh7vpn7PmlYhcIl0sIGZhbHNlLCBmYWxzZSwgZmFsc2UpO1xyXG4gICAgICAgIGxldCBzaG93TnVtQ291bnQgPSBTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YS5zaG93TnVtQ291bnQ7XHJcbiAgICAgICAgc2hvd051bUNvdW50Kys7XHJcbiAgICAgICAgaWYgKHNob3dOdW1Db3VudCA+IDUpIHtcclxuICAgICAgICAgICAgc2hvd051bUNvdW50ID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEuc2hvd051bUNvdW50ID0gc2hvd051bUNvdW50O1xyXG4gICAgICAgIHRoaXMuaGFuZGxlU2hvd051bSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaGFuZGxlU2hvd051bSgpIHtcclxuICAgICAgICBsZXQgc2hvd051bUNvdW50ID0gU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEuc2hvd051bUNvdW50O1xyXG4gICAgICAgIHRoaXMubnVtTm9kZS5jaGlsZHJlbi5mb3JFYWNoKChub2RlLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBub2RlLmFjdGl2ZSA9IGluZGV4IDwgc2hvd051bUNvdW50O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25DbGlja0NoYW5nZSgpIHtcclxuICAgICAgICBTb3VuZE1hbmFnZXIucGxheUVmZmVjdChTb3VuZENvbmZpZy5zb3VkbGlzdFtcIueCueWHu+mfs+aViFwiXSwgZmFsc2UsIGZhbHNlLCBmYWxzZSk7XHJcbiAgICAgICAgbGV0IGlzU2hvd0NpcmNsZSA9IFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLmlzU2hvd0NpcmNsZTtcclxuICAgICAgICBTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YS5pc1Nob3dDaXJjbGUgPSAhaXNTaG93Q2lyY2xlO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlU2hvd0NpcmNsZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25DbGlja0NoZWNrKCkge1xyXG4gICAgICAgIFNvdW5kTWFuYWdlci5wbGF5RWZmZWN0KFNvdW5kQ29uZmlnLnNvdWRsaXN0W1wi54K55Ye76Z+z5pWIXCJdLCBmYWxzZSwgZmFsc2UsIGZhbHNlKTtcclxuICAgICAgICBpZiAodGhpcy5pc0NoZWNrRW5kKSByZXR1cm47XHJcbiAgICAgICAgaWYgKHRoaXMuYm90dG9tX25vZGUuY2hpbGRyZW5Db3VudCA9PSA2KSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlVHJ1ZSgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlV3JvbmcoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpc0NoZWNrRW5kID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIGhhbmRsZVRydWUoKSB7XHJcbiAgICAgICAgdGhpcy5pc0NoZWNrRW5kID0gdHJ1ZTtcclxuICAgICAgICBTb3VuZE1hbmFnZXIucGxheUVmZmVjdChTb3VuZENvbmZpZy5zb3VkbGlzdFtcIuato+ehrumfs+aViFwiXSwgZmFsc2UsIGZhbHNlLCBmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5oaWdobGlnaHQuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmhpZ2hsaWdodC5jb2xvciA9IGNjLkNvbG9yLkdSRUVOO1xyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuaGlnaGxpZ2h0KS50bygwLjEsIHsgb3BhY2l0eTogMjU1IH0pLmRlbGF5KDAuMykudG8oMC4xLCB7b3BhY2l0eTogMCB9KVxyXG4gICAgICAgIC50bygwLjEsIHsgb3BhY2l0eTogMjU1IH0pLmRlbGF5KDAuMykudG8oMC4xLCB7b3BhY2l0eTogMCB9KVxyXG4gICAgICAgIC50bygwLjEsIHsgb3BhY2l0eTogMjU1IH0pLmRlbGF5KDAuMykudG8oMC4xLCB7b3BhY2l0eTogMCB9KVxyXG4gICAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5oaWdobGlnaHQuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGlmIChFZGl0b3JNYW5hZ2VyLmVkaXRvckRhdGEuZ2FtZU1vZGUgPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgTGlzdGVuZXJNYW5hZ2VyLmRpc3BhdGNoKEV2ZW50VHlwZS5HQU1FX09WRVIpO1xyXG4gICAgICAgICAgICB9IFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICAgICAgTGlzdGVuZXJNYW5hZ2VyLmRpc3BhdGNoKEV2ZW50VHlwZS5TVUJNSVQsIHRydWUpOyAgICAgICAgICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaGFuZGxlV3JvbmcoKSB7XHJcbiAgICAgICAgU291bmRNYW5hZ2VyLnBsYXlFZmZlY3QoU291bmRDb25maWcuc291ZGxpc3RbXCLplJnor6/pn7PmlYhcIl0sIGZhbHNlLCBmYWxzZSwgZmFsc2UpO1xyXG4gICAgICAgIExpc3RlbmVyTWFuYWdlci5kaXNwYXRjaChFdmVudFR5cGUuU1VCTUlULCBmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5oaWdobGlnaHQuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmhpZ2hsaWdodC5jb2xvciA9IGNjLkNvbG9yLlJFRDtcclxuICAgICAgICBjYy50d2Vlbih0aGlzLmhpZ2hsaWdodCkudG8oMC4xLCB7IG9wYWNpdHk6IDI1NSB9KS5kZWxheSgwLjMpLnRvKDAuMSwge29wYWNpdHk6IDAgfSlcclxuICAgICAgICAudG8oMC4xLCB7IG9wYWNpdHk6IDI1NSB9KS5kZWxheSgwLjMpLnRvKDAuMSwge29wYWNpdHk6IDAgfSlcclxuICAgICAgICAudG8oMC4xLCB7IG9wYWNpdHk6IDI1NSB9KS5kZWxheSgwLjMpLnRvKDAuMSwge29wYWNpdHk6IDAgfSlcclxuICAgICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuaGlnaGxpZ2h0LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICB9XHJcbiAgICBcclxufVxyXG4iXX0=