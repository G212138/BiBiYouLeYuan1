"use strict";
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
var Tools_1 = require("../../../../frame/scripts/Utils/Tools");
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
        _this.btn_submit = null;
        _this.yutang_shang = null;
        _this.yutang_xia = null;
        _this.highlight = null;
        _this.endSpine = null;
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
        var _this = this;
        this.isCheckEnd = false;
        this.endSpine.node.active = false;
        this.numNode.active = EditorManager_1.EditorManager.editorData.gameMode == 0; //演示模式
        this.btn_change.active = EditorManager_1.EditorManager.editorData.gameMode == 0; //演示模式
        this.btn_submit.active = EditorManager_1.EditorManager.editorData.gameMode == 1; //演示模式不要提交按钮
        if (EditorManager_1.EditorManager.editorData.gameMode == 0) {
            this.optionsNode.x = -520;
        }
        else {
            this.optionsNode.x = 0;
        }
        this.handleShowRedLine();
        this.handleShowNum();
        this.resetOptions();
        this.scheduleOnce(function () {
            _this.handleShowCircle();
        }, 0.1);
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
    Level_1.prototype.handleShowCircle = function (needAnim) {
        var _this = this;
        if (needAnim === void 0) { needAnim = false; }
        var isShowCircle = SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.isShowCircle;
        var _loop_1 = function (i) {
            if (needAnim) {
                this_1.optionsNode.children[i].getChildByName("heibai").active = true;
                this_1.optionsNode.children[i].getChildByName("heibai").getComponent(sp.Skeleton).timeScale = 2;
                Tools_1.Tools.playSpine(this_1.optionsNode.children[i].getChildByName("heibai").getComponent(sp.Skeleton), "eft_smoke", false, function () {
                    _this.optionsNode.children[i].getChildByName("heibai").active = false;
                });
            }
            else {
                this_1.optionsNode.children[i].getChildByName("heibai").active = false;
            }
            this_1.scheduleOnce(function () {
                _this.optionsNode.children[i].getChildByName("circle").active = isShowCircle;
                _this.optionsNode.children[i].getChildByName("icon").active = !isShowCircle;
            }, 0.5 * (needAnim ? 1 : 0));
        };
        var this_1 = this;
        for (var i = 0; i < this.optionsNode.childrenCount; i++) {
            _loop_1(i);
        }
        for (var i = 0; i < this.yutang_shang.childrenCount; i++) {
            this.yutang_shang.children[i].getChildByName("circle").active = false;
            this.yutang_shang.children[i].getChildByName("icon").active = true;
        }
        var _loop_2 = function (i) {
            if (needAnim) {
                this_2.yutang_xia.children[i].getChildByName("heibai").active = true;
                this_2.yutang_xia.children[i].getChildByName("heibai").getComponent(sp.Skeleton).timeScale = 2;
                Tools_1.Tools.playSpine(this_2.yutang_xia.children[i].getChildByName("heibai").getComponent(sp.Skeleton), "eft_smoke", false, function () {
                    _this.yutang_xia.children[i].getChildByName("heibai").active = false;
                });
            }
            else {
                this_2.yutang_xia.children[i].getChildByName("heibai").active = false;
            }
            this_2.scheduleOnce(function () {
                _this.yutang_xia.children[i].getChildByName("circle").active = isShowCircle;
                _this.yutang_xia.children[i].getChildByName("icon").active = !isShowCircle;
            }, 0.5 * (needAnim ? 1 : 0));
        };
        var this_2 = this;
        for (var i = 0; i < this.yutang_xia.childrenCount; i++) {
            _loop_2(i);
        }
    };
    Level_1.prototype.onClickShowRedLine = function () {
        SoundManager_1.SoundManager.playEffect(SoundConfig_1.SoundConfig.soudlist["点击音效"], false, false, false);
        var isShow = SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.isShowLine;
        SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.isShowLine = true;
        this.handleShowRedLine();
    };
    Level_1.prototype.handleShowRedLine = function () {
        this.redLine.active = SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.isShowLine;
    };
    Level_1.prototype.onClickNum = function () {
        SoundManager_1.SoundManager.playEffect(SoundConfig_1.SoundConfig.soudlist["点击音效"], false, false, false);
        // let showNumCount = SyncDataManager.getSyncData().customSyncData.showNumCount;
        // showNumCount++;
        // if (showNumCount > 5) {
        //     showNumCount = 0;
        // }
        // SyncDataManager.getSyncData().customSyncData.showNumCount = showNumCount;
        var isShowNum = SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.isShowNum;
        SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.isShowNum = !isShowNum;
        this.handleShowNum();
    };
    Level_1.prototype.handleShowNum = function () {
        var showNumCount = SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.showNumCount;
        var isShowNum = SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.isShowNum;
        this.numNode.children.forEach(function (node, index) {
            // node.active = index < showNumCount;
            node.active = isShowNum;
        });
    };
    Level_1.prototype.onClickChange = function () {
        SoundManager_1.SoundManager.playEffect(SoundConfig_1.SoundConfig.soudlist["点击音效"], false, false, false);
        var isShowCircle = SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.isShowCircle;
        SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.isShowCircle = !isShowCircle;
        this.handleShowCircle(true);
    };
    Level_1.prototype.onClickCheck = function () {
        if (this.isCheckEnd)
            return;
        SoundManager_1.SoundManager.playEffect(SoundConfig_1.SoundConfig.soudlist["点击音效"], false, false, false);
        cc.tween(this.btn_submit).to(0.1, { scale: 1.1 }).to(0.1, { scale: 1 }).start();
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
        })
            .start();
        this.endSpine.node.active = true;
        SoundManager_1.SoundManager.playEffect(SoundConfig_1.SoundConfig.soudlist["比比侦探你最棒。"], false, false, false, function () {
            if (EditorManager_1.EditorManager.editorData.gameMode == 1) {
                ListenerManager_1.ListenerManager.dispatch(EventType_1.EventType.GAME_OVER);
            }
        });
        Tools_1.Tools.playSpine(this.endSpine, "1", false, function () {
        });
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
    ], Level_1.prototype, "btn_submit", void 0);
    __decorate([
        property(cc.Node)
    ], Level_1.prototype, "yutang_shang", void 0);
    __decorate([
        property(cc.Node)
    ], Level_1.prototype, "yutang_xia", void 0);
    __decorate([
        property(cc.Node)
    ], Level_1.prototype, "highlight", void 0);
    __decorate([
        property(sp.Skeleton)
    ], Level_1.prototype, "endSpine", void 0);
    Level_1 = __decorate([
        ccclass
    ], Level_1);
    return Level_1;
}(cc.Component));
exports.default = Level_1;

cc._RF.pop();