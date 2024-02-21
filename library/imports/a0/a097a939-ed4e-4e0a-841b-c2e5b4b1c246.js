"use strict";
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