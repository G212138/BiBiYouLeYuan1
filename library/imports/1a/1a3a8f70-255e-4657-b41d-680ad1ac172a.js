"use strict";
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