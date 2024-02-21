
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game/scripts/UI/Item/Level_2.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1a3a89wJV5GV7QdaArRrBcq', 'Level_2');
// game/scripts/UI/Item/Level_2.ts

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
var Level_2 = /** @class */ (function (_super) {
    __extends(Level_2, _super);
    function Level_2() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.redLine = null;
        _this.numNode = null;
        _this.optionsNode = null;
        _this.btn_change = null;
        _this.diyidui = null;
        _this.dierdui = null;
        _this.highlight = null;
        _this.isCheckEnd = false;
        return _this;
    }
    Level_2.prototype.onLoad = function () {
        ListenerManager_1.ListenerManager.on(EventType_1.EventType.ENTER_GAME, this.init, this);
        ListenerManager_1.ListenerManager.on(EventType_1.EventType.DRAG_OPTION_END, this.syncOptions, this);
    };
    Level_2.prototype.onDestroy = function () {
        ListenerManager_1.ListenerManager.off(EventType_1.EventType.ENTER_GAME, this.init, this);
        ListenerManager_1.ListenerManager.off(EventType_1.EventType.DRAG_OPTION_END, this.syncOptions, this);
    };
    Level_2.prototype.init = function () {
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
    Level_2.prototype.resetOptions = function () {
        var fillAreaOptions = SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.fillAreaOptions;
        for (var i = 0; i < this.diyidui.childrenCount; i++) {
            var option = this.diyidui.children[i];
            option.getComponent(OptionItem_1.default).reset();
            i = i - 1;
        }
        for (var j = 0; j < fillAreaOptions.length; j++) {
            var option = this.optionsNode.getChildByName(fillAreaOptions[j]);
            if (option) {
                this.diyidui.getComponent(FillArea_1.default).fill(option);
            }
        }
    };
    Level_2.prototype.syncOptions = function () {
        SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.fillAreaOptions = [];
        for (var i = 0; i < this.diyidui.childrenCount; i++) {
            SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.fillAreaOptions.push(this.diyidui.children[i].name);
        }
    };
    Level_2.prototype.handleShowCircle = function () {
        var isShowCircle = SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.isShowCircle;
        for (var i = 0; i < this.optionsNode.childrenCount; i++) {
            this.optionsNode.children[i].getChildByName("circle").active = isShowCircle;
            this.optionsNode.children[i].getChildByName("icon").active = !isShowCircle;
        }
        for (var i = 0; i < this.diyidui.childrenCount; i++) {
            this.diyidui.children[i].getChildByName("circle").active = isShowCircle;
            this.diyidui.children[i].getChildByName("icon").active = !isShowCircle;
        }
        for (var i = 0; i < this.dierdui.childrenCount; i++) {
            this.dierdui.children[i].getChildByName("circle").active = isShowCircle;
            this.dierdui.children[i].getChildByName("icon").active = !isShowCircle;
        }
    };
    Level_2.prototype.onClickShowRedLine = function () {
        SoundManager_1.SoundManager.playEffect(SoundConfig_1.SoundConfig.soudlist["点击音效"], false, false, false);
        var isShow = SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.isShowLine;
        SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.isShowLine = !isShow;
        this.handleShowRedLine();
    };
    Level_2.prototype.handleShowRedLine = function () {
        this.redLine.active = SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.isShowLine;
    };
    Level_2.prototype.onClickNum = function () {
        SoundManager_1.SoundManager.playEffect(SoundConfig_1.SoundConfig.soudlist["点击音效"], false, false, false);
        var showNumCount = SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.showNumCount;
        showNumCount++;
        if (showNumCount > 5) {
            showNumCount = 0;
        }
        SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.showNumCount = showNumCount;
        this.handleShowNum();
    };
    Level_2.prototype.handleShowNum = function () {
        var showNumCount = SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.showNumCount;
        this.numNode.children.forEach(function (node, index) {
            node.active = index < showNumCount;
        });
    };
    Level_2.prototype.onClickChange = function () {
        SoundManager_1.SoundManager.playEffect(SoundConfig_1.SoundConfig.soudlist["点击音效"], false, false, false);
        var isShowCircle = SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.isShowCircle;
        SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.isShowCircle = !isShowCircle;
        this.handleShowCircle();
    };
    Level_2.prototype.onClickCheck = function () {
        SoundManager_1.SoundManager.playEffect(SoundConfig_1.SoundConfig.soudlist["点击音效"], false, false, false);
        if (this.isCheckEnd)
            return;
        if (this.diyidui.childrenCount == 10) {
            this.handleTrue();
        }
        else {
            this.handleWrong();
        }
    };
    Level_2.prototype.handleTrue = function () {
        this.isCheckEnd = true;
        SoundManager_1.SoundManager.playEffect(SoundConfig_1.SoundConfig.soudlist["正确音效"], false, false, false);
        ListenerManager_1.ListenerManager.dispatch(EventType_1.EventType.SUBMIT, true);
        // this.highlight.active = true;
        // this.highlight.color = cc.Color.GREEN;
        // cc.tween(this.highlight).to(0.1, { opacity: 255 }).delay(0.3).to(0.1, {opacity: 0 })
        // .to(0.1, { opacity: 255 }).delay(0.3).to(0.1, {opacity: 0 })
        // .to(0.1, { opacity: 255 }).delay(0.3).to(0.1, {opacity: 0 })
        // .call(() => {
        //     this.highlight.active = false;
        if (EditorManager_1.EditorManager.editorData.gameMode == 1) {
            ListenerManager_1.ListenerManager.dispatch(EventType_1.EventType.GAME_OVER);
        }
        // })
        // .start();                      
    };
    Level_2.prototype.handleWrong = function () {
        SoundManager_1.SoundManager.playEffect(SoundConfig_1.SoundConfig.soudlist["错误音效"], false, false, false);
        ListenerManager_1.ListenerManager.dispatch(EventType_1.EventType.SUBMIT, false);
        // this.highlight.active = true;
        // this.highlight.color = cc.Color.RED;
        // cc.tween(this.highlight).to(0.1, { opacity: 255 }).delay(0.3).to(0.1, {opacity: 0 })
        // .to(0.1, { opacity: 255 }).delay(0.3).to(0.1, {opacity: 0 })
        // .to(0.1, { opacity: 255 }).delay(0.3).to(0.1, {opacity: 0 })
        // .call(() => {
        //     this.highlight.active = false;
        // })
        // .start();
    };
    __decorate([
        property(cc.Node)
    ], Level_2.prototype, "redLine", void 0);
    __decorate([
        property(cc.Node)
    ], Level_2.prototype, "numNode", void 0);
    __decorate([
        property(cc.Node)
    ], Level_2.prototype, "optionsNode", void 0);
    __decorate([
        property(cc.Node)
    ], Level_2.prototype, "btn_change", void 0);
    __decorate([
        property(cc.Node)
    ], Level_2.prototype, "diyidui", void 0);
    __decorate([
        property(cc.Node)
    ], Level_2.prototype, "dierdui", void 0);
    __decorate([
        property(cc.Node)
    ], Level_2.prototype, "highlight", void 0);
    Level_2 = __decorate([
        ccclass
    ], Level_2);
    return Level_2;
}(cc.Component));
exports.default = Level_2;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZVxcc2NyaXB0c1xcVUlcXEl0ZW1cXExldmVsXzIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscUZBQW9GO0FBQ3BGLCtFQUE4RTtBQUM5RSxxRkFBb0Y7QUFDcEYsa0RBQWlEO0FBQ2pELDZEQUE0RDtBQUM1RCx1Q0FBa0M7QUFDbEMsMkNBQXNDO0FBQ3RDLDZDQUE0QztBQUd0QyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFxQywyQkFBWTtJQUFqRDtRQUFBLHFFQThKQztRQTNKVyxhQUFPLEdBQVksSUFBSSxDQUFDO1FBRXhCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFFeEIsaUJBQVcsR0FBWSxJQUFJLENBQUM7UUFFNUIsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFFM0IsYUFBTyxHQUFZLElBQUksQ0FBQztRQUV4QixhQUFPLEdBQVksSUFBSSxDQUFDO1FBRXhCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUE4RzFCLGdCQUFVLEdBQUcsS0FBSyxDQUFDOztJQWlDL0IsQ0FBQztJQTdJRyx3QkFBTSxHQUFOO1FBQ0ksaUNBQWUsQ0FBQyxFQUFFLENBQUMscUJBQVMsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMxRCxpQ0FBZSxDQUFDLEVBQUUsQ0FBQyxxQkFBUyxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzFFLENBQUM7SUFDRCwyQkFBUyxHQUFUO1FBQ0ksaUNBQWUsQ0FBQyxHQUFHLENBQUMscUJBQVMsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMzRCxpQ0FBZSxDQUFDLEdBQUcsQ0FBQyxxQkFBUyxDQUFDLGVBQWUsRUFB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VSxDQUFDLHlCQUFXLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDM0UsaUNBQWUsQ0FBQyxRQUFRLENBQUMscUJBQVMsQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDbEQsZ0NBQWdDO1FBQ2hDLHVDQUF1QztRQUN2Qyx1RkFBdUY7UUFDdkYsK0RBQStEO1FBQy9ELCtEQUErRDtRQUMvRCxnQkFBZ0I7UUFDaEIscUNBQXFDO1FBQ3JDLEtBQUs7UUFDTCxZQUFZO0lBQ2hCLENBQUM7SUF6SkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs0Q0FDYztJQUVoQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzRDQUNjO0lBRWhDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0RBQ2tCO0lBRXBDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7K0NBQ2lCO0lBRW5DO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NENBQ2M7SUFFaEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs0Q0FDYztJQUVoQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzhDQUNnQjtJQWZqQixPQUFPO1FBRDNCLE9BQU87T0FDYSxPQUFPLENBOEozQjtJQUFELGNBQUM7Q0E5SkQsQUE4SkMsQ0E5Sm9DLEVBQUUsQ0FBQyxTQUFTLEdBOEpoRDtrQkE5Sm9CLE9BQU8iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMaXN0ZW5lck1hbmFnZXIgfSBmcm9tIFwiLi4vLi4vLi4vLi4vZnJhbWUvc2NyaXB0cy9NYW5hZ2VyL0xpc3RlbmVyTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBTb3VuZE1hbmFnZXIgfSBmcm9tIFwiLi4vLi4vLi4vLi4vZnJhbWUvc2NyaXB0cy9NYW5hZ2VyL1NvdW5kTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBTeW5jRGF0YU1hbmFnZXIgfSBmcm9tIFwiLi4vLi4vLi4vLi4vZnJhbWUvc2NyaXB0cy9NYW5hZ2VyL1N5bmNEYXRhTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBFdmVudFR5cGUgfSBmcm9tIFwiLi4vLi4vRGF0YS9FdmVudFR5cGVcIjtcclxuaW1wb3J0IHsgRWRpdG9yTWFuYWdlciB9IGZyb20gXCIuLi8uLi9NYW5hZ2VyL0VkaXRvck1hbmFnZXJcIjtcclxuaW1wb3J0IEZpbGxBcmVhIGZyb20gXCIuL0ZpbGxBcmVhXCI7XHJcbmltcG9ydCBPcHRpb25JdGVtIGZyb20gXCIuL09wdGlvbkl0ZW1cIjtcclxuaW1wb3J0IHsgU291bmRDb25maWcgfSBmcm9tIFwiLi9Tb3VuZENvbmZpZ1wiO1xyXG5cclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMZXZlbF8yIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHByaXZhdGUgcmVkTGluZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHByaXZhdGUgbnVtTm9kZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHByaXZhdGUgb3B0aW9uc05vZGU6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwcml2YXRlIGJ0bl9jaGFuZ2U6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwcml2YXRlIGRpeWlkdWk6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwcml2YXRlIGRpZXJkdWk6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwcml2YXRlIGhpZ2hsaWdodDogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIExpc3RlbmVyTWFuYWdlci5vbihFdmVudFR5cGUuRU5URVJfR0FNRSwgdGhpcy5pbml0LCB0aGlzKTtcclxuICAgICAgICBMaXN0ZW5lck1hbmFnZXIub24oRXZlbnRUeXBlLkRSQUdfT1BUSU9OX0VORCwgdGhpcy5zeW5jT3B0aW9ucywgdGhpcyk7XHJcbiAgICB9XHJcbiAgICBvbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgTGlzdGVuZXJNYW5hZ2VyLm9mZihFdmVudFR5cGUuRU5URVJfR0FNRSwgdGhpcy5pbml0LCB0aGlzKTtcclxuICAgICAgICBMaXN0ZW5lck1hbmFnZXIub2ZmKEV2ZW50VHlwZS5EUkFHX09QVElPTl9FTkQsIHRoaXMuc3luY09wdGlvbnMsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpbml0KCkge1xyXG4gICAgICAgIHRoaXMubnVtTm9kZS5hY3RpdmUgPSBFZGl0b3JNYW5hZ2VyLmVkaXRvckRhdGEuZ2FtZU1vZGUgPT0gMDsgLy/mvJTnpLrmqKHlvI9cclxuICAgICAgICB0aGlzLmJ0bl9jaGFuZ2UuYWN0aXZlID0gRWRpdG9yTWFuYWdlci5lZGl0b3JEYXRhLmdhbWVNb2RlID09IDA7IC8v5ryU56S65qih5byPXHJcbiAgICAgICAgaWYgKEVkaXRvck1hbmFnZXIuZWRpdG9yRGF0YS5nYW1lTW9kZSA9PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMub3B0aW9uc05vZGUueCA9IC01MjA7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5vcHRpb25zTm9kZS54ID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5oYW5kbGVTaG93Q2lyY2xlKCk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVTaG93UmVkTGluZSgpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlU2hvd051bSgpO1xyXG4gICAgICAgIHRoaXMucmVzZXRPcHRpb25zKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZXNldE9wdGlvbnMoKSB7XHJcbiAgICAgICAgbGV0IGZpbGxBcmVhT3B0aW9ucyA9IFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLmZpbGxBcmVhT3B0aW9ucztcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZGl5aWR1aS5jaGlsZHJlbkNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IG9wdGlvbiA9IHRoaXMuZGl5aWR1aS5jaGlsZHJlbltpXTsgICAgICAgICAgICBcclxuICAgICAgICAgICAgb3B0aW9uLmdldENvbXBvbmVudChPcHRpb25JdGVtKS5yZXNldCgpO1xyXG4gICAgICAgICAgICBpID0gaSAtIDE7ICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBmaWxsQXJlYU9wdGlvbnMubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgbGV0IG9wdGlvbiA9IHRoaXMub3B0aW9uc05vZGUuZ2V0Q2hpbGRCeU5hbWUoZmlsbEFyZWFPcHRpb25zW2pdKTtcclxuICAgICAgICAgICAgaWYgKG9wdGlvbikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXlpZHVpLmdldENvbXBvbmVudChGaWxsQXJlYSkuZmlsbChvcHRpb24pO1xyXG4gICAgICAgICAgICB9ICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3luY09wdGlvbnMoKSB7XHJcbiAgICAgICAgU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEuZmlsbEFyZWFPcHRpb25zID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmRpeWlkdWkuY2hpbGRyZW5Db3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLmZpbGxBcmVhT3B0aW9ucy5wdXNoKHRoaXMuZGl5aWR1aS5jaGlsZHJlbltpXS5uYW1lKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBoYW5kbGVTaG93Q2lyY2xlKCkge1xyXG4gICAgICAgIGxldCBpc1Nob3dDaXJjbGUgPSBTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YS5pc1Nob3dDaXJjbGU7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm9wdGlvbnNOb2RlLmNoaWxkcmVuQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnNOb2RlLmNoaWxkcmVuW2ldLmdldENoaWxkQnlOYW1lKFwiY2lyY2xlXCIpLmFjdGl2ZSA9IGlzU2hvd0NpcmNsZTtcclxuICAgICAgICAgICAgdGhpcy5vcHRpb25zTm9kZS5jaGlsZHJlbltpXS5nZXRDaGlsZEJ5TmFtZShcImljb25cIikuYWN0aXZlID0gIWlzU2hvd0NpcmNsZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmRpeWlkdWkuY2hpbGRyZW5Db3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGl5aWR1aS5jaGlsZHJlbltpXS5nZXRDaGlsZEJ5TmFtZShcImNpcmNsZVwiKS5hY3RpdmUgPSBpc1Nob3dDaXJjbGU7XHJcbiAgICAgICAgICAgIHRoaXMuZGl5aWR1aS5jaGlsZHJlbltpXS5nZXRDaGlsZEJ5TmFtZShcImljb25cIikuYWN0aXZlID0gIWlzU2hvd0NpcmNsZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmRpZXJkdWkuY2hpbGRyZW5Db3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGllcmR1aS5jaGlsZHJlbltpXS5nZXRDaGlsZEJ5TmFtZShcImNpcmNsZVwiKS5hY3RpdmUgPSBpc1Nob3dDaXJjbGU7XHJcbiAgICAgICAgICAgIHRoaXMuZGllcmR1aS5jaGlsZHJlbltpXS5nZXRDaGlsZEJ5TmFtZShcImljb25cIikuYWN0aXZlID0gIWlzU2hvd0NpcmNsZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvbkNsaWNrU2hvd1JlZExpbmUoKSB7XHJcbiAgICAgICAgU291bmRNYW5hZ2VyLnBsYXlFZmZlY3QoU291bmRDb25maWcuc291ZGxpc3RbXCLngrnlh7vpn7PmlYhcIl0sIGZhbHNlLCBmYWxzZSwgZmFsc2UpO1xyXG4gICAgICAgIGxldCBpc1Nob3cgPSBTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YS5pc1Nob3dMaW5lO1xyXG4gICAgICAgIFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLmlzU2hvd0xpbmUgPSAhaXNTaG93O1xyXG4gICAgICAgIHRoaXMuaGFuZGxlU2hvd1JlZExpbmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGhhbmRsZVNob3dSZWRMaW5lKCkge1xyXG4gICAgICAgIHRoaXMucmVkTGluZS5hY3RpdmUgPSBTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YS5pc1Nob3dMaW5lO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25DbGlja051bSgpIHtcclxuICAgICAgICBTb3VuZE1hbmFnZXIucGxheUVmZmVjdChTb3VuZENvbmZpZy5zb3VkbGlzdFtcIueCueWHu+mfs+aViFwiXSwgZmFsc2UsIGZhbHNlLCBmYWxzZSk7XHJcbiAgICAgICAgbGV0IHNob3dOdW1Db3VudCA9IFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLnNob3dOdW1Db3VudDtcclxuICAgICAgICBzaG93TnVtQ291bnQrKztcclxuICAgICAgICBpZiAoc2hvd051bUNvdW50ID4gNSkge1xyXG4gICAgICAgICAgICBzaG93TnVtQ291bnQgPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YS5zaG93TnVtQ291bnQgPSBzaG93TnVtQ291bnQ7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVTaG93TnVtKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBoYW5kbGVTaG93TnVtKCkge1xyXG4gICAgICAgIGxldCBzaG93TnVtQ291bnQgPSBTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YS5zaG93TnVtQ291bnQ7XHJcbiAgICAgICAgdGhpcy5udW1Ob2RlLmNoaWxkcmVuLmZvckVhY2goKG5vZGUsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIG5vZGUuYWN0aXZlID0gaW5kZXggPCBzaG93TnVtQ291bnQ7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvbkNsaWNrQ2hhbmdlKCkge1xyXG4gICAgICAgIFNvdW5kTWFuYWdlci5wbGF5RWZmZWN0KFNvdW5kQ29uZmlnLnNvdWRsaXN0W1wi54K55Ye76Z+z5pWIXCJdLCBmYWxzZSwgZmFsc2UsIGZhbHNlKTtcclxuICAgICAgICBsZXQgaXNTaG93Q2lyY2xlID0gU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEuaXNTaG93Q2lyY2xlO1xyXG4gICAgICAgIFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLmlzU2hvd0NpcmNsZSA9ICFpc1Nob3dDaXJjbGU7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVTaG93Q2lyY2xlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvbkNsaWNrQ2hlY2soKSB7XHJcbiAgICAgICAgU291bmRNYW5hZ2VyLnBsYXlFZmZlY3QoU291bmRDb25maWcuc291ZGxpc3RbXCLngrnlh7vpn7PmlYhcIl0sIGZhbHNlLCBmYWxzZSwgZmFsc2UpO1xyXG4gICAgICAgIGlmICh0aGlzLmlzQ2hlY2tFbmQpIHJldHVybjtcclxuICAgICAgICBpZiAodGhpcy5kaXlpZHVpLmNoaWxkcmVuQ291bnQgPT0gMTApIHtcclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVUcnVlKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVXcm9uZygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGlzQ2hlY2tFbmQgPSBmYWxzZTtcclxuICAgIHByaXZhdGUgaGFuZGxlVHJ1ZSgpIHtcclxuICAgICAgICB0aGlzLmlzQ2hlY2tFbmQgPSB0cnVlO1xyXG4gICAgICAgIFNvdW5kTWFuYWdlci5wbGF5RWZmZWN0KFNvdW5kQ29uZmlnLnNvdWRsaXN0W1wi5q2j56Gu6Z+z5pWIXCJdLCBmYWxzZSwgZmFsc2UsIGZhbHNlKTtcclxuICAgICAgICBMaXN0ZW5lck1hbmFnZXIuZGlzcGF0Y2goRXZlbnRUeXBlLlNVQk1JVCwgdHJ1ZSk7IFxyXG4gICAgICAgIC8vIHRoaXMuaGlnaGxpZ2h0LmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgLy8gdGhpcy5oaWdobGlnaHQuY29sb3IgPSBjYy5Db2xvci5HUkVFTjtcclxuICAgICAgICAvLyBjYy50d2Vlbih0aGlzLmhpZ2hsaWdodCkudG8oMC4xLCB7IG9wYWNpdHk6IDI1NSB9KS5kZWxheSgwLjMpLnRvKDAuMSwge29wYWNpdHk6IDAgfSlcclxuICAgICAgICAvLyAudG8oMC4xLCB7IG9wYWNpdHk6IDI1NSB9KS5kZWxheSgwLjMpLnRvKDAuMSwge29wYWNpdHk6IDAgfSlcclxuICAgICAgICAvLyAudG8oMC4xLCB7IG9wYWNpdHk6IDI1NSB9KS5kZWxheSgwLjMpLnRvKDAuMSwge29wYWNpdHk6IDAgfSlcclxuICAgICAgICAvLyAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuaGlnaGxpZ2h0LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBpZiAoRWRpdG9yTWFuYWdlci5lZGl0b3JEYXRhLmdhbWVNb2RlID09IDEpIHtcclxuICAgICAgICAgICAgICAgIExpc3RlbmVyTWFuYWdlci5kaXNwYXRjaChFdmVudFR5cGUuR0FNRV9PVkVSKTtcclxuICAgICAgICAgICAgfSBcclxuICAgICAgICAvLyB9KVxyXG4gICAgICAgIC8vIC5zdGFydCgpOyAgICAgICAgICAgICAgICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGhhbmRsZVdyb25nKCkge1xyXG4gICAgICAgIFNvdW5kTWFuYWdlci5wbGF5RWZmZWN0KFNvdW5kQ29uZmlnLnNvdWRsaXN0W1wi6ZSZ6K+v6Z+z5pWIXCJdLCBmYWxzZSwgZmFsc2UsIGZhbHNlKTtcclxuICAgICAgICBMaXN0ZW5lck1hbmFnZXIuZGlzcGF0Y2goRXZlbnRUeXBlLlNVQk1JVCwgZmFsc2UpO1xyXG4gICAgICAgIC8vIHRoaXMuaGlnaGxpZ2h0LmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgLy8gdGhpcy5oaWdobGlnaHQuY29sb3IgPSBjYy5Db2xvci5SRUQ7XHJcbiAgICAgICAgLy8gY2MudHdlZW4odGhpcy5oaWdobGlnaHQpLnRvKDAuMSwgeyBvcGFjaXR5OiAyNTUgfSkuZGVsYXkoMC4zKS50bygwLjEsIHtvcGFjaXR5OiAwIH0pXHJcbiAgICAgICAgLy8gLnRvKDAuMSwgeyBvcGFjaXR5OiAyNTUgfSkuZGVsYXkoMC4zKS50bygwLjEsIHtvcGFjaXR5OiAwIH0pXHJcbiAgICAgICAgLy8gLnRvKDAuMSwgeyBvcGFjaXR5OiAyNTUgfSkuZGVsYXkoMC4zKS50bygwLjEsIHtvcGFjaXR5OiAwIH0pXHJcbiAgICAgICAgLy8gLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICB0aGlzLmhpZ2hsaWdodC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAvLyB9KVxyXG4gICAgICAgIC8vIC5zdGFydCgpO1xyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuIl19