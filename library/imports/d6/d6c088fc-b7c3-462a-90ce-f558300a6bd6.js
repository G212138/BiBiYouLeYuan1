"use strict";
cc._RF.push(module, 'd6c08j8t8NGKpDO9VgwCmvW', 'Level_4');
// game/scripts/UI/Item/Level_4.ts

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
var Level_4 = /** @class */ (function (_super) {
    __extends(Level_4, _super);
    function Level_4() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.redLine1 = null;
        _this.redLine2 = null;
        _this.numNode1 = null;
        _this.numNode2 = null;
        _this.optionsNode = null;
        _this.btn_change = null;
        _this.btn_submit = null;
        _this.fangfang = null;
        _this.gulugulu = null;
        _this.jianjian = null;
        _this.highlight_guluguli = null;
        _this.highlight_jianjian = null;
        _this.fillArea1_mask = null;
        _this.fillArea2_mask = null;
        _this.fillArea2_mask2 = null;
        _this.btn_bijiben_1 = null;
        _this.btn_bijiben_2 = null;
        _this.endSpine = null;
        _this.isCheckEnd = false;
        return _this;
    }
    Level_4.prototype.onLoad = function () {
        ListenerManager_1.ListenerManager.on(EventType_1.EventType.ENTER_GAME, this.init, this);
        ListenerManager_1.ListenerManager.on(EventType_1.EventType.DRAG_OPTION_END, this.syncOptions, this);
    };
    Level_4.prototype.onDestroy = function () {
        ListenerManager_1.ListenerManager.off(EventType_1.EventType.ENTER_GAME, this.init, this);
        ListenerManager_1.ListenerManager.off(EventType_1.EventType.DRAG_OPTION_END, this.syncOptions, this);
    };
    Level_4.prototype.init = function () {
        var _this = this;
        this.isCheckEnd = false;
        this.endSpine.node.active = false;
        this.numNode1.active = EditorManager_1.EditorManager.editorData.gameMode == 0; //演示模式
        this.numNode2.active = EditorManager_1.EditorManager.editorData.gameMode == 0; //演示模式
        this.btn_change.active = EditorManager_1.EditorManager.editorData.gameMode == 0; //演示模式
        this.btn_submit.active = false;
        if (EditorManager_1.EditorManager.editorData.gameMode == 0) {
            this.optionsNode.x = -520;
        }
        else {
            this.optionsNode.x = 0;
            this.handleShowNum();
        }
        this.handleShowRedLine_1();
        this.handleShowRedLine_2();
        this.resetOptions();
        this.scheduleOnce(function () {
            _this.handleShowCircle();
        }, 0.1);
        this.fillArea2_mask.active = SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.step == 0;
        this.fillArea1_mask.active = SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.step == 1;
        this.fillArea2_mask2.active = SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.step == 2;
        if (SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.step == 0) {
            cc.Tween.stopAllByTarget(this.btn_bijiben_2);
            this.shakeNode(this.btn_bijiben_1);
            this.btn_bijiben_1.getChildByName("10").active = false;
            this.btn_bijiben_2.getChildByName("10").active = false;
        }
        else if (SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.step == 1) {
            cc.Tween.stopAllByTarget(this.btn_bijiben_1);
            this.shakeNode(this.btn_bijiben_2);
            this.btn_bijiben_1.getChildByName("10").active = true;
            this.btn_bijiben_2.getChildByName("10").active = false;
        }
        else {
            cc.Tween.stopAllByTarget(this.btn_bijiben_1);
            cc.Tween.stopAllByTarget(this.btn_bijiben_2);
            this.btn_bijiben_1.getChildByName("10").active = true;
            this.btn_bijiben_2.getChildByName("10").active = true;
        }
    };
    Level_4.prototype.shakeNode = function (node) {
        cc.tween(node).repeatForever(cc.tween().to(0.5, { scale: 0.95 }).to(0.5, { scale: 1.05 })).start();
    };
    Level_4.prototype.resetOptions = function () {
        var fillAreaOptions = SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.fillAreaOptions;
        for (var i = 0; i < this.gulugulu.childrenCount; i++) {
            var option = this.gulugulu.children[i];
            option.getComponent(OptionItem_1.default).reset();
            i = i - 1;
        }
        for (var j = 0; j < fillAreaOptions.length; j++) {
            var option = this.optionsNode.getChildByName(fillAreaOptions[j]);
            if (option) {
                this.gulugulu.getComponent(FillArea_1.default).fill(option);
            }
        }
        var fillAreaOptions2 = SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.fillAreaOptions2;
        for (var i = 0; i < this.jianjian.childrenCount; i++) {
            var option = this.jianjian.children[i];
            option.getComponent(OptionItem_1.default).reset();
            i = i - 1;
        }
        for (var j = 0; j < fillAreaOptions2.length; j++) {
            var option = this.optionsNode.getChildByName(fillAreaOptions2[j]);
            if (option) {
                this.jianjian.getComponent(FillArea_1.default).fill(option);
            }
        }
    };
    Level_4.prototype.syncOptions = function () {
        SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.fillAreaOptions = [];
        SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.fillAreaOptions2 = [];
        SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.isShowXuxian = [];
        SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.isShowXuxian2 = [];
        for (var i = 0; i < this.gulugulu.childrenCount; i++) {
            SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.fillAreaOptions.push(this.gulugulu.children[i].name);
            var isShowXuxian = this.gulugulu.children[i].getComponent(OptionItem_1.default).isShowXuxian;
            SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.isShowXuxian.push(isShowXuxian);
        }
        for (var i = 0; i < this.jianjian.childrenCount; i++) {
            SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.fillAreaOptions2.push(this.jianjian.children[i].name);
            var isShowXuxian = this.jianjian.children[i].getComponent(OptionItem_1.default).isShowXuxian;
            SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.isShowXuxian2.push(isShowXuxian);
        }
        console.log("SyncDataManager.getSyncData().customSyncData.isShowXuxian", SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.isShowXuxian);
        console.log("SyncDataManager.getSyncData().customSyncData.isShowXuxian2", SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.isShowXuxian2);
        this.handleShowCircle();
    };
    Level_4.prototype.handleShowCircle = function (needAnim) {
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
                _this.optionsNode.children[i].getChildByName("circle_2").active = false;
                _this.optionsNode.children[i].getChildByName("icon_2").active = false;
            }, 0.5 * (needAnim ? 1 : 0));
        };
        var this_1 = this;
        for (var i = 0; i < this.optionsNode.childrenCount; i++) {
            _loop_1(i);
        }
        for (var i = 0; i < this.fangfang.childrenCount; i++) {
            this.fangfang.children[i].getChildByName("circle").active = false;
            this.fangfang.children[i].getChildByName("icon").active = true;
        }
        var _loop_2 = function (i) {
            if (needAnim) {
                this_2.gulugulu.children[i].getChildByName("heibai").active = true;
                this_2.gulugulu.children[i].getChildByName("heibai").getComponent(sp.Skeleton).timeScale = 2;
                Tools_1.Tools.playSpine(this_2.gulugulu.children[i].getChildByName("heibai").getComponent(sp.Skeleton), "eft_smoke", false, function () {
                    _this.gulugulu.children[i].getChildByName("heibai").active = false;
                });
            }
            else {
                this_2.gulugulu.children[i].getChildByName("heibai").active = false;
            }
            this_2.scheduleOnce(function () {
                var isShowXuxian = SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.isShowXuxian[i];
                _this.gulugulu.children[i].getChildByName("circle").active = isShowCircle && !isShowXuxian;
                _this.gulugulu.children[i].getChildByName("icon").active = !isShowCircle && !isShowXuxian;
                _this.gulugulu.children[i].getChildByName("circle_2").active = isShowCircle && isShowXuxian;
                _this.gulugulu.children[i].getChildByName("icon_2").active = !isShowCircle && isShowXuxian;
            }, 0.5 * (needAnim ? 1 : 0));
        };
        var this_2 = this;
        for (var i = 0; i < this.gulugulu.childrenCount; i++) {
            _loop_2(i);
        }
        var _loop_3 = function (i) {
            if (needAnim) {
                this_3.jianjian.children[i].getChildByName("heibai").active = true;
                this_3.jianjian.children[i].getChildByName("heibai").getComponent(sp.Skeleton).timeScale = 2;
                Tools_1.Tools.playSpine(this_3.jianjian.children[i].getChildByName("heibai").getComponent(sp.Skeleton), "eft_smoke", false, function () {
                    _this.jianjian.children[i].getChildByName("heibai").active = false;
                });
            }
            else {
                this_3.jianjian.children[i].getChildByName("heibai").active = false;
            }
            this_3.scheduleOnce(function () {
                var isShowXuxian = SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.isShowXuxian2[i];
                _this.jianjian.children[i].getChildByName("circle").active = isShowCircle && !isShowXuxian;
                _this.jianjian.children[i].getChildByName("icon").active = !isShowCircle && !isShowXuxian;
                _this.jianjian.children[i].getChildByName("circle_2").active = isShowCircle && isShowXuxian;
                _this.jianjian.children[i].getChildByName("icon_2").active = !isShowCircle && isShowXuxian;
            }, 0.5 * (needAnim ? 1 : 0));
        };
        var this_3 = this;
        for (var i = 0; i < this.jianjian.childrenCount; i++) {
            _loop_3(i);
        }
    };
    Level_4.prototype.onClickShowRedLine_1 = function () {
        SoundManager_1.SoundManager.playEffect(SoundConfig_1.SoundConfig.soudlist["点击音效"], false, false, false);
        var isShow = SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.isShowLine;
        SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.isShowLine = true;
        this.handleShowRedLine_1();
    };
    Level_4.prototype.handleShowRedLine_1 = function () {
        this.redLine1.active = SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.isShowLine;
    };
    Level_4.prototype.onClickShowRedLine_2 = function () {
        SoundManager_1.SoundManager.playEffect(SoundConfig_1.SoundConfig.soudlist["点击音效"], false, false, false);
        var isShow = SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.isShowLine2;
        SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.isShowLine2 = true;
        this.handleShowRedLine_2();
    };
    Level_4.prototype.handleShowRedLine_2 = function () {
        this.redLine2.active = SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.isShowLine2;
    };
    Level_4.prototype.onClickNum = function () {
        SoundManager_1.SoundManager.playEffect(SoundConfig_1.SoundConfig.soudlist["点击音效"], false, false, false);
        // let showNumCount = SyncDataManager.getSyncData().customSyncData.showNumCount;
        // showNumCount++;
        // if (showNumCount > 10) {
        //     showNumCount = 0;
        // }
        // SyncDataManager.getSyncData().customSyncData.showNumCount = showNumCount;
        var isShowNum = SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.isShowNum;
        SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.isShowNum = !isShowNum;
        this.handleShowNum();
    };
    Level_4.prototype.handleShowNum = function () {
        // if (EditorManager.editorData.gameMode == 1) return;
        // let showNumCount = SyncDataManager.getSyncData().customSyncData.showNumCount;
        // if (showNumCount <= 5) {
        //     this.numNode1.active = true;
        //     this.numNode2.active = false;
        //     this.numNode1.children.forEach((node, index) => {
        //         node.active = index < showNumCount;
        //     });
        // } else {
        //     this.numNode1.active = false;
        //     this.numNode2.active = true;
        //     this.numNode2.children.forEach((node, index) => {
        //         node.active = index < showNumCount - 5;
        //     });
        // }
        var isShowNum = SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.isShowNum;
        if (SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.step == 0) {
            this.numNode1.active = true && EditorManager_1.EditorManager.editorData.gameMode == 0;
            this.numNode2.active = false && EditorManager_1.EditorManager.editorData.gameMode == 0;
            this.numNode1.children.forEach(function (node, index) {
                node.active = isShowNum;
            });
        }
        else if (SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.step == 1) {
            this.numNode1.active = false && EditorManager_1.EditorManager.editorData.gameMode == 0;
            this.numNode2.active = true && EditorManager_1.EditorManager.editorData.gameMode == 0;
            this.numNode2.children.forEach(function (node, index) {
                node.active = isShowNum;
            });
        }
    };
    Level_4.prototype.onClickChange = function () {
        SoundManager_1.SoundManager.playEffect(SoundConfig_1.SoundConfig.soudlist["点击音效"], false, false, false);
        var isShowCircle = SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.isShowCircle;
        SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.isShowCircle = !isShowCircle;
        this.handleShowCircle(true);
    };
    Level_4.prototype.onClickCheck_step1 = function () {
        if (this.isCheckEnd || SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.step != 0)
            return;
        SoundManager_1.SoundManager.playEffect(SoundConfig_1.SoundConfig.soudlist["点击音效"], false, false, false);
        var answer = [false, false, false, false, false, false, true, true, true, true];
        var isShowXuxian = SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.isShowXuxian;
        var isTrue = true;
        for (var i = 0; i < isShowXuxian.length; i++) {
            if (isShowXuxian[i] != answer[i]) {
                isTrue = false;
                break;
            }
            isTrue = true;
        }
        if (isShowXuxian.length != answer.length) {
            isTrue = false;
        }
        if (isTrue) {
            this.handleTrue();
        }
        else {
            this.handleWrong();
        }
    };
    Level_4.prototype.onClickCheck_step2 = function () {
        if (this.isCheckEnd || SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.step != 1)
            return;
        SoundManager_1.SoundManager.playEffect(SoundConfig_1.SoundConfig.soudlist["点击音效"], false, false, false);
        var answer = [false, false, false, false, false, false, false, false, false];
        var isShowXuxian = SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.isShowXuxian2;
        var isTrue = true;
        for (var i = 0; i < isShowXuxian.length; i++) {
            if (isShowXuxian[i] != answer[i]) {
                isTrue = false;
                break;
            }
            isTrue = true;
        }
        if (isShowXuxian.length != answer.length) {
            isTrue = false;
        }
        if (isTrue) {
            this.handleTrue();
        }
        else {
            this.handleWrong();
        }
    };
    Level_4.prototype.onClickCheck = function () {
        SoundManager_1.SoundManager.playEffect(SoundConfig_1.SoundConfig.soudlist["点击音效"], false, false, false);
        if (this.isCheckEnd)
            return;
        if (this.gulugulu.childrenCount == 6 && this.jianjian.childrenCount == 9) {
            this.handleTrue();
        }
        else {
            this.handleWrong();
        }
    };
    Level_4.prototype.handleTrue = function () {
        var _this = this;
        this.isCheckEnd = true;
        SoundManager_1.SoundManager.playEffect(SoundConfig_1.SoundConfig.soudlist["正确音效"], false, false, false);
        ListenerManager_1.ListenerManager.dispatch(EventType_1.EventType.SUBMIT, true);
        if (SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.step == 0) {
            cc.Tween.stopAllByTarget(this.btn_bijiben_1);
            this.btn_bijiben_1.getChildByName("10").active = true;
            SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.step = 1;
            this.fillArea1_mask.active = true;
            this.highlight_guluguli.active = true;
            this.highlight_guluguli.color = cc.Color.GREEN;
            cc.tween(this.highlight_guluguli).to(0.1, { opacity: 255 }).delay(0.3).to(0.1, { opacity: 0 })
                .to(0.1, { opacity: 255 }).delay(0.3).to(0.1, { opacity: 0 })
                .to(0.1, { opacity: 255 }).delay(0.3).to(0.1, { opacity: 0 })
                .call(function () {
                _this.highlight_guluguli.active = false;
                SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.step = 1;
                _this.fillArea2_mask.active = false;
                _this.fillArea1_mask.active = true;
                cc.Tween.stopAllByTarget(_this.btn_bijiben_1);
                _this.shakeNode(_this.btn_bijiben_2);
                _this.btn_bijiben_1.getChildByName("10").active = true;
                _this.btn_bijiben_2.getChildByName("10").active = false;
                _this.isCheckEnd = false;
            })
                .start();
        }
        else if (SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.step == 1) {
            SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.step = 2;
            cc.Tween.stopAllByTarget(this.btn_bijiben_2);
            this.btn_bijiben_2.getChildByName("10").active = true;
            this.fillArea2_mask.active = false;
            this.fillArea2_mask2.active = true;
            this.fillArea1_mask.active = true;
            this.highlight_jianjian.active = true;
            this.highlight_jianjian.color = cc.Color.GREEN;
            cc.tween(this.highlight_jianjian).to(0.1, { opacity: 255 }).delay(0.3).to(0.1, { opacity: 0 })
                .to(0.1, { opacity: 255 }).delay(0.3).to(0.1, { opacity: 0 })
                .to(0.1, { opacity: 255 }).delay(0.3).to(0.1, { opacity: 0 })
                .call(function () {
                _this.highlight_jianjian.active = false;
                cc.Tween.stopAllByTarget(_this.btn_bijiben_1);
                cc.Tween.stopAllByTarget(_this.btn_bijiben_2);
                _this.btn_bijiben_1.getChildByName("10").active = true;
                _this.btn_bijiben_2.getChildByName("10").active = true;
                // if (EditorManager.editorData.gameMode == 1) {
                //     ListenerManager.dispatch(EventType.GAME_OVER);
                // }
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
        }
    };
    Level_4.prototype.handleWrong = function () {
        var _this = this;
        SoundManager_1.SoundManager.playEffect(SoundConfig_1.SoundConfig.soudlist["错误音效"], false, false, false);
        ListenerManager_1.ListenerManager.dispatch(EventType_1.EventType.SUBMIT, false);
        if (SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.step == 0) {
            // if (this.gulugulu.childrenCount != 6) {
            this.highlight_guluguli.active = true;
            this.highlight_guluguli.color = cc.Color.RED;
            cc.tween(this.highlight_guluguli).to(0.1, { opacity: 255 }).delay(0.3).to(0.1, { opacity: 0 })
                .to(0.1, { opacity: 255 }).delay(0.3).to(0.1, { opacity: 0 })
                .to(0.1, { opacity: 255 }).delay(0.3).to(0.1, { opacity: 0 })
                .call(function () {
                _this.highlight_guluguli.active = false;
            })
                .start();
            // }
        }
        if (SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.step == 1) {
            // if (this.jianjian.childrenCount != 9) {
            this.highlight_jianjian.active = true;
            this.highlight_jianjian.color = cc.Color.RED;
            cc.tween(this.highlight_jianjian).to(0.1, { opacity: 255 }).delay(0.3).to(0.1, { opacity: 0 })
                .to(0.1, { opacity: 255 }).delay(0.3).to(0.1, { opacity: 0 })
                .to(0.1, { opacity: 255 }).delay(0.3).to(0.1, { opacity: 0 })
                .call(function () {
                _this.highlight_jianjian.active = false;
            })
                .start();
            // }
        }
    };
    __decorate([
        property(cc.Node)
    ], Level_4.prototype, "redLine1", void 0);
    __decorate([
        property(cc.Node)
    ], Level_4.prototype, "redLine2", void 0);
    __decorate([
        property(cc.Node)
    ], Level_4.prototype, "numNode1", void 0);
    __decorate([
        property(cc.Node)
    ], Level_4.prototype, "numNode2", void 0);
    __decorate([
        property(cc.Node)
    ], Level_4.prototype, "optionsNode", void 0);
    __decorate([
        property(cc.Node)
    ], Level_4.prototype, "btn_change", void 0);
    __decorate([
        property(cc.Node)
    ], Level_4.prototype, "btn_submit", void 0);
    __decorate([
        property(cc.Node)
    ], Level_4.prototype, "fangfang", void 0);
    __decorate([
        property(cc.Node)
    ], Level_4.prototype, "gulugulu", void 0);
    __decorate([
        property(cc.Node)
    ], Level_4.prototype, "jianjian", void 0);
    __decorate([
        property(cc.Node)
    ], Level_4.prototype, "highlight_guluguli", void 0);
    __decorate([
        property(cc.Node)
    ], Level_4.prototype, "highlight_jianjian", void 0);
    __decorate([
        property(cc.Node)
    ], Level_4.prototype, "fillArea1_mask", void 0);
    __decorate([
        property(cc.Node)
    ], Level_4.prototype, "fillArea2_mask", void 0);
    __decorate([
        property(cc.Node)
    ], Level_4.prototype, "fillArea2_mask2", void 0);
    __decorate([
        property(cc.Node)
    ], Level_4.prototype, "btn_bijiben_1", void 0);
    __decorate([
        property(cc.Node)
    ], Level_4.prototype, "btn_bijiben_2", void 0);
    __decorate([
        property(sp.Skeleton)
    ], Level_4.prototype, "endSpine", void 0);
    Level_4 = __decorate([
        ccclass
    ], Level_4);
    return Level_4;
}(cc.Component));
exports.default = Level_4;

cc._RF.pop();