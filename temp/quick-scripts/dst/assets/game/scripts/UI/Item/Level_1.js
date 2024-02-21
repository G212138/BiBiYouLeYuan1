
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game/scripts/UI/Item/Level_1.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'aeaa8xEgClClburPcZ3ON9w', 'Level_1');
// game/scripts/UI/Item/Level_1.ts

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
var Level_1 = /** @class */ (function (_super) {
    __extends(Level_1, _super);
    function Level_1() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.redLine = null;
        _this.numNode = null;
        _this.optionsNode = null;
        _this.btn_change = null;
        _this.yutang_shang = null;
        _this.yutang_xia = null;
        _this.highlight = null;
        _this.isCheckEnd = false;
        return _this;
    }
    Level_1.prototype.onLoad = function () {
        ListenerManager_1.ListenerManager.on(EventType_1.EventType.ENTER_GAME, this.init, this);
        ListenerManager_1.ListenerManager.on(EventType_1.EventType.DRAG_OPTION_END, this.syncOptions, this);
    };
    Level_1.prototype.onDestroy = function () {
        ListenerManager_1.ListenerManager.off(EventType_1.EventType.ENTER_GAME, this.init, this);
        ListenerManager_1.ListenerManager.off(EventType_1.EventType.DRAG_OPTION_END, this.syncOptions, this);
    };
    Level_1.prototype.init = function () {
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
    Level_1.prototype.resetOptions = function () {
        var fillAreaOptions = SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.fillAreaOptions;
        for (var i = 0; i < this.yutang_xia.childrenCount; i++) {
            var option = this.yutang_xia.children[i];
            option.getComponent(OptionItem_1.default).reset();
            i = i - 1;
        }
        for (var j = 0; j < fillAreaOptions.length; j++) {
            var option = this.optionsNode.getChildByName(fillAreaOptions[j]);
            if (option) {
                this.yutang_xia.getComponent(FillArea_1.default).fill(option);
            }
        }
    };
    Level_1.prototype.syncOptions = function () {
        SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.fillAreaOptions = [];
        for (var i = 0; i < this.yutang_xia.childrenCount; i++) {
            SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.fillAreaOptions.push(this.yutang_xia.children[i].name);
        }
    };
    Level_1.prototype.handleShowCircle = function () {
        var isShowCircle = SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.isShowCircle;
        for (var i = 0; i < this.optionsNode.childrenCount; i++) {
            this.optionsNode.children[i].getChildByName("circle").active = isShowCircle;
            this.optionsNode.children[i].getChildByName("icon").active = !isShowCircle;
        }
        for (var i = 0; i < this.yutang_shang.childrenCount; i++) {
            this.yutang_shang.children[i].getChildByName("circle").active = isShowCircle;
            this.yutang_shang.children[i].getChildByName("icon").active = !isShowCircle;
        }
        for (var i = 0; i < this.yutang_xia.childrenCount; i++) {
            this.yutang_xia.children[i].getChildByName("circle").active = isShowCircle;
            this.yutang_xia.children[i].getChildByName("icon").active = !isShowCircle;
        }
    };
    Level_1.prototype.onClickShowRedLine = function () {
        SoundManager_1.SoundManager.playEffect(SoundConfig_1.SoundConfig.soudlist["点击音效"], false, false, false);
        var isShow = SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.isShowLine;
        SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.isShowLine = !isShow;
        this.handleShowRedLine();
    };
    Level_1.prototype.handleShowRedLine = function () {
        this.redLine.active = SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.isShowLine;
    };
    Level_1.prototype.onClickNum = function () {
        SoundManager_1.SoundManager.playEffect(SoundConfig_1.SoundConfig.soudlist["点击音效"], false, false, false);
        var showNumCount = SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.showNumCount;
        showNumCount++;
        if (showNumCount > 5) {
            showNumCount = 0;
        }
        SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.showNumCount = showNumCount;
        this.handleShowNum();
    };
    Level_1.prototype.handleShowNum = function () {
        var showNumCount = SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.showNumCount;
        this.numNode.children.forEach(function (node, index) {
            node.active = index < showNumCount;
        });
    };
    Level_1.prototype.onClickChange = function () {
        SoundManager_1.SoundManager.playEffect(SoundConfig_1.SoundConfig.soudlist["点击音效"], false, false, false);
        var isShowCircle = SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.isShowCircle;
        SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.isShowCircle = !isShowCircle;
        this.handleShowCircle();
    };
    Level_1.prototype.onClickCheck = function () {
        SoundManager_1.SoundManager.playEffect(SoundConfig_1.SoundConfig.soudlist["点击音效"], false, false, false);
        if (this.isCheckEnd)
            return;
        if (this.yutang_xia.childrenCount == 13) {
            this.handleTrue();
        }
        else {
            this.handleWrong();
        }
    };
    Level_1.prototype.handleTrue = function () {
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
    Level_1.prototype.handleWrong = function () {
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
    ], Level_1.prototype, "redLine", void 0);
    __decorate([
        property(cc.Node)
    ], Level_1.prototype, "numNode", void 0);
    __decorate([
        property(cc.Node)
    ], Level_1.prototype, "optionsNode", void 0);
    __decorate([
        property(cc.Node)
    ], Level_1.prototype, "btn_change", void 0);
    __decorate([
        property(cc.Node)
    ], Level_1.prototype, "yutang_shang", void 0);
    __decorate([
        property(cc.Node)
    ], Level_1.prototype, "yutang_xia", void 0);
    __decorate([
        property(cc.Node)
    ], Level_1.prototype, "highlight", void 0);
    Level_1 = __decorate([
        ccclass
    ], Level_1);
    return Level_1;
}(cc.Component));
exports.default = Level_1;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZVxcc2NyaXB0c1xcVUlcXEl0ZW1cXExldmVsXzEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscUZBQW9GO0FBQ3BGLCtFQUE4RTtBQUM5RSxxRkFBb0Y7QUFDcEYsa0RBQWlEO0FBQ2pELDZEQUE0RDtBQUM1RCx1Q0FBa0M7QUFDbEMsMkNBQXNDO0FBQ3RDLDZDQUE0QztBQUd0QyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFxQywyQkFBWTtJQUFqRDtRQUFBLHFFQThKQztRQTNKVyxhQUFPLEdBQVksSUFBSSxDQUFDO1FBRXhCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFFeEIsaUJBQVcsR0FBWSxJQUFJLENBQUM7UUFFNUIsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFFM0Isa0JBQVksR0FBWSxJQUFJLENBQUM7UUFFN0IsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFFM0IsZUFBUyxHQUFZLElBQUksQ0FBQztRQThHMUIsZ0JBQVUsR0FBRyxLQUFLLENBQUM7O0lBaUMvQixDQUFDO0lBN0lHLHdCQUFNLEdBQU47UUFDSSxpQ0FBZSxDQUFDLEVBQUUsQ0FBQyxxQkFBUyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzFELGlDQUFlLENBQUMsRUFBRSxDQUFDLHFCQUFTLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDMUUsQ0FBQztJQUNELDJCQUFTLEdBQVQ7UUFDSSxpQ0FBZSxDQUFDLEdBQUcsQ0FBQyxxQkFBUyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzNELGlDQUFlLENBQUMsR0FBRyxDQUFDLHFCQUFTLENBQUMsZUFBZSxF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QUFTLEdBOEpoRDtrQkE5Sm9CLE9BQU8iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMaXN0ZW5lck1hbmFnZXIgfSBmcm9tIFwiLi4vLi4vLi4vLi4vZnJhbWUvc2NyaXB0cy9NYW5hZ2VyL0xpc3RlbmVyTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBTb3VuZE1hbmFnZXIgfSBmcm9tIFwiLi4vLi4vLi4vLi4vZnJhbWUvc2NyaXB0cy9NYW5hZ2VyL1NvdW5kTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBTeW5jRGF0YU1hbmFnZXIgfSBmcm9tIFwiLi4vLi4vLi4vLi4vZnJhbWUvc2NyaXB0cy9NYW5hZ2VyL1N5bmNEYXRhTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBFdmVudFR5cGUgfSBmcm9tIFwiLi4vLi4vRGF0YS9FdmVudFR5cGVcIjtcclxuaW1wb3J0IHsgRWRpdG9yTWFuYWdlciB9IGZyb20gXCIuLi8uLi9NYW5hZ2VyL0VkaXRvck1hbmFnZXJcIjtcclxuaW1wb3J0IEZpbGxBcmVhIGZyb20gXCIuL0ZpbGxBcmVhXCI7XHJcbmltcG9ydCBPcHRpb25JdGVtIGZyb20gXCIuL09wdGlvbkl0ZW1cIjtcclxuaW1wb3J0IHsgU291bmRDb25maWcgfSBmcm9tIFwiLi9Tb3VuZENvbmZpZ1wiO1xyXG5cclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMZXZlbF8xIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHByaXZhdGUgcmVkTGluZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHByaXZhdGUgbnVtTm9kZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHByaXZhdGUgb3B0aW9uc05vZGU6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwcml2YXRlIGJ0bl9jaGFuZ2U6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwcml2YXRlIHl1dGFuZ19zaGFuZzogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHByaXZhdGUgeXV0YW5nX3hpYTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHByaXZhdGUgaGlnaGxpZ2h0OiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgTGlzdGVuZXJNYW5hZ2VyLm9uKEV2ZW50VHlwZS5FTlRFUl9HQU1FLCB0aGlzLmluaXQsIHRoaXMpO1xyXG4gICAgICAgIExpc3RlbmVyTWFuYWdlci5vbihFdmVudFR5cGUuRFJBR19PUFRJT05fRU5ELCB0aGlzLnN5bmNPcHRpb25zLCB0aGlzKTtcclxuICAgIH1cclxuICAgIG9uRGVzdHJveSgpIHtcclxuICAgICAgICBMaXN0ZW5lck1hbmFnZXIub2ZmKEV2ZW50VHlwZS5FTlRFUl9HQU1FLCB0aGlzLmluaXQsIHRoaXMpO1xyXG4gICAgICAgIExpc3RlbmVyTWFuYWdlci5vZmYoRXZlbnRUeXBlLkRSQUdfT1BUSU9OX0VORCwgdGhpcy5zeW5jT3B0aW9ucywgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5udW1Ob2RlLmFjdGl2ZSA9IEVkaXRvck1hbmFnZXIuZWRpdG9yRGF0YS5nYW1lTW9kZSA9PSAwOyAvL+a8lOekuuaooeW8j1xyXG4gICAgICAgIHRoaXMuYnRuX2NoYW5nZS5hY3RpdmUgPSBFZGl0b3JNYW5hZ2VyLmVkaXRvckRhdGEuZ2FtZU1vZGUgPT0gMDsgLy/mvJTnpLrmqKHlvI9cclxuICAgICAgICBpZiAoRWRpdG9yTWFuYWdlci5lZGl0b3JEYXRhLmdhbWVNb2RlID09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5vcHRpb25zTm9kZS54ID0gLTUyMDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnNOb2RlLnggPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmhhbmRsZVNob3dDaXJjbGUoKTtcclxuICAgICAgICB0aGlzLmhhbmRsZVNob3dSZWRMaW5lKCk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVTaG93TnVtKCk7XHJcbiAgICAgICAgdGhpcy5yZXNldE9wdGlvbnMoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlc2V0T3B0aW9ucygpIHtcclxuICAgICAgICBsZXQgZmlsbEFyZWFPcHRpb25zID0gU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEuZmlsbEFyZWFPcHRpb25zO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy55dXRhbmdfeGlhLmNoaWxkcmVuQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgb3B0aW9uID0gdGhpcy55dXRhbmdfeGlhLmNoaWxkcmVuW2ldOyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBvcHRpb24uZ2V0Q29tcG9uZW50KE9wdGlvbkl0ZW0pLnJlc2V0KCk7XHJcbiAgICAgICAgICAgIGkgPSBpIC0gMTsgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGZpbGxBcmVhT3B0aW9ucy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICBsZXQgb3B0aW9uID0gdGhpcy5vcHRpb25zTm9kZS5nZXRDaGlsZEJ5TmFtZShmaWxsQXJlYU9wdGlvbnNbal0pO1xyXG4gICAgICAgICAgICBpZiAob3B0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnl1dGFuZ194aWEuZ2V0Q29tcG9uZW50KEZpbGxBcmVhKS5maWxsKG9wdGlvbik7XHJcbiAgICAgICAgICAgIH0gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzeW5jT3B0aW9ucygpIHtcclxuICAgICAgICBTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YS5maWxsQXJlYU9wdGlvbnMgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMueXV0YW5nX3hpYS5jaGlsZHJlbkNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEuZmlsbEFyZWFPcHRpb25zLnB1c2godGhpcy55dXRhbmdfeGlhLmNoaWxkcmVuW2ldLm5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGhhbmRsZVNob3dDaXJjbGUoKSB7XHJcbiAgICAgICAgbGV0IGlzU2hvd0NpcmNsZSA9IFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLmlzU2hvd0NpcmNsZTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMub3B0aW9uc05vZGUuY2hpbGRyZW5Db3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMub3B0aW9uc05vZGUuY2hpbGRyZW5baV0uZ2V0Q2hpbGRCeU5hbWUoXCJjaXJjbGVcIikuYWN0aXZlID0gaXNTaG93Q2lyY2xlO1xyXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnNOb2RlLmNoaWxkcmVuW2ldLmdldENoaWxkQnlOYW1lKFwiaWNvblwiKS5hY3RpdmUgPSAhaXNTaG93Q2lyY2xlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMueXV0YW5nX3NoYW5nLmNoaWxkcmVuQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLnl1dGFuZ19zaGFuZy5jaGlsZHJlbltpXS5nZXRDaGlsZEJ5TmFtZShcImNpcmNsZVwiKS5hY3RpdmUgPSBpc1Nob3dDaXJjbGU7XHJcbiAgICAgICAgICAgIHRoaXMueXV0YW5nX3NoYW5nLmNoaWxkcmVuW2ldLmdldENoaWxkQnlOYW1lKFwiaWNvblwiKS5hY3RpdmUgPSAhaXNTaG93Q2lyY2xlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMueXV0YW5nX3hpYS5jaGlsZHJlbkNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy55dXRhbmdfeGlhLmNoaWxkcmVuW2ldLmdldENoaWxkQnlOYW1lKFwiY2lyY2xlXCIpLmFjdGl2ZSA9IGlzU2hvd0NpcmNsZTtcclxuICAgICAgICAgICAgdGhpcy55dXRhbmdfeGlhLmNoaWxkcmVuW2ldLmdldENoaWxkQnlOYW1lKFwiaWNvblwiKS5hY3RpdmUgPSAhaXNTaG93Q2lyY2xlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uQ2xpY2tTaG93UmVkTGluZSgpIHtcclxuICAgICAgICBTb3VuZE1hbmFnZXIucGxheUVmZmVjdChTb3VuZENvbmZpZy5zb3VkbGlzdFtcIueCueWHu+mfs+aViFwiXSwgZmFsc2UsIGZhbHNlLCBmYWxzZSk7XHJcbiAgICAgICAgbGV0IGlzU2hvdyA9IFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLmlzU2hvd0xpbmU7XHJcbiAgICAgICAgU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEuaXNTaG93TGluZSA9ICFpc1Nob3c7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVTaG93UmVkTGluZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaGFuZGxlU2hvd1JlZExpbmUoKSB7XHJcbiAgICAgICAgdGhpcy5yZWRMaW5lLmFjdGl2ZSA9IFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLmlzU2hvd0xpbmU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvbkNsaWNrTnVtKCkge1xyXG4gICAgICAgIFNvdW5kTWFuYWdlci5wbGF5RWZmZWN0KFNvdW5kQ29uZmlnLnNvdWRsaXN0W1wi54K55Ye76Z+z5pWIXCJdLCBmYWxzZSwgZmFsc2UsIGZhbHNlKTtcclxuICAgICAgICBsZXQgc2hvd051bUNvdW50ID0gU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEuc2hvd051bUNvdW50O1xyXG4gICAgICAgIHNob3dOdW1Db3VudCsrO1xyXG4gICAgICAgIGlmIChzaG93TnVtQ291bnQgPiA1KSB7XHJcbiAgICAgICAgICAgIHNob3dOdW1Db3VudCA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLnNob3dOdW1Db3VudCA9IHNob3dOdW1Db3VudDtcclxuICAgICAgICB0aGlzLmhhbmRsZVNob3dOdW0oKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGhhbmRsZVNob3dOdW0oKSB7XHJcbiAgICAgICAgbGV0IHNob3dOdW1Db3VudCA9IFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLnNob3dOdW1Db3VudDtcclxuICAgICAgICB0aGlzLm51bU5vZGUuY2hpbGRyZW4uZm9yRWFjaCgobm9kZSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgbm9kZS5hY3RpdmUgPSBpbmRleCA8IHNob3dOdW1Db3VudDtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uQ2xpY2tDaGFuZ2UoKSB7XHJcbiAgICAgICAgU291bmRNYW5hZ2VyLnBsYXlFZmZlY3QoU291bmRDb25maWcuc291ZGxpc3RbXCLngrnlh7vpn7PmlYhcIl0sIGZhbHNlLCBmYWxzZSwgZmFsc2UpO1xyXG4gICAgICAgIGxldCBpc1Nob3dDaXJjbGUgPSBTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YS5pc1Nob3dDaXJjbGU7XHJcbiAgICAgICAgU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEuaXNTaG93Q2lyY2xlID0gIWlzU2hvd0NpcmNsZTtcclxuICAgICAgICB0aGlzLmhhbmRsZVNob3dDaXJjbGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uQ2xpY2tDaGVjaygpIHtcclxuICAgICAgICBTb3VuZE1hbmFnZXIucGxheUVmZmVjdChTb3VuZENvbmZpZy5zb3VkbGlzdFtcIueCueWHu+mfs+aViFwiXSwgZmFsc2UsIGZhbHNlLCBmYWxzZSk7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNDaGVja0VuZCkgcmV0dXJuO1xyXG4gICAgICAgIGlmICh0aGlzLnl1dGFuZ194aWEuY2hpbGRyZW5Db3VudCA9PSAxMykge1xyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZVRydWUoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZVdyb25nKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaXNDaGVja0VuZCA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBoYW5kbGVUcnVlKCkge1xyXG4gICAgICAgIHRoaXMuaXNDaGVja0VuZCA9IHRydWU7XHJcbiAgICAgICAgU291bmRNYW5hZ2VyLnBsYXlFZmZlY3QoU291bmRDb25maWcuc291ZGxpc3RbXCLmraPnoa7pn7PmlYhcIl0sIGZhbHNlLCBmYWxzZSwgZmFsc2UpO1xyXG4gICAgICAgIHRoaXMuaGlnaGxpZ2h0LmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5oaWdobGlnaHQuY29sb3IgPSBjYy5Db2xvci5HUkVFTjtcclxuICAgICAgICBjYy50d2Vlbih0aGlzLmhpZ2hsaWdodCkudG8oMC4xLCB7IG9wYWNpdHk6IDI1NSB9KS5kZWxheSgwLjMpLnRvKDAuMSwgeyBvcGFjaXR5OiAwIH0pXHJcbiAgICAgICAgICAgIC50bygwLjEsIHsgb3BhY2l0eTogMjU1IH0pLmRlbGF5KDAuMykudG8oMC4xLCB7IG9wYWNpdHk6IDAgfSlcclxuICAgICAgICAgICAgLnRvKDAuMSwgeyBvcGFjaXR5OiAyNTUgfSkuZGVsYXkoMC4zKS50bygwLjEsIHsgb3BhY2l0eTogMCB9KVxyXG4gICAgICAgICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhpZ2hsaWdodC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGlmIChFZGl0b3JNYW5hZ2VyLmVkaXRvckRhdGEuZ2FtZU1vZGUgPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIExpc3RlbmVyTWFuYWdlci5kaXNwYXRjaChFdmVudFR5cGUuR0FNRV9PVkVSKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICAgICAgTGlzdGVuZXJNYW5hZ2VyLmRpc3BhdGNoKEV2ZW50VHlwZS5TVUJNSVQsIHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaGFuZGxlV3JvbmcoKSB7XHJcbiAgICAgICAgU291bmRNYW5hZ2VyLnBsYXlFZmZlY3QoU291bmRDb25maWcuc291ZGxpc3RbXCLplJnor6/pn7PmlYhcIl0sIGZhbHNlLCBmYWxzZSwgZmFsc2UpO1xyXG4gICAgICAgIExpc3RlbmVyTWFuYWdlci5kaXNwYXRjaChFdmVudFR5cGUuU1VCTUlULCBmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5oaWdobGlnaHQuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmhpZ2hsaWdodC5jb2xvciA9IGNjLkNvbG9yLlJFRDtcclxuICAgICAgICBjYy50d2Vlbih0aGlzLmhpZ2hsaWdodCkudG8oMC4xLCB7IG9wYWNpdHk6IDI1NSB9KS5kZWxheSgwLjMpLnRvKDAuMSwgeyBvcGFjaXR5OiAwIH0pXHJcbiAgICAgICAgICAgIC50bygwLjEsIHsgb3BhY2l0eTogMjU1IH0pLmRlbGF5KDAuMykudG8oMC4xLCB7IG9wYWNpdHk6IDAgfSlcclxuICAgICAgICAgICAgLnRvKDAuMSwgeyBvcGFjaXR5OiAyNTUgfSkuZGVsYXkoMC4zKS50bygwLjEsIHsgb3BhY2l0eTogMCB9KVxyXG4gICAgICAgICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhpZ2hsaWdodC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==