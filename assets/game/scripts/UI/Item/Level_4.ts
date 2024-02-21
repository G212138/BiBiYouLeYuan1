import { ListenerManager } from "../../../../frame/scripts/Manager/ListenerManager";
import { SoundManager } from "../../../../frame/scripts/Manager/SoundManager";
import { SyncDataManager } from "../../../../frame/scripts/Manager/SyncDataManager";
import { EventType } from "../../Data/EventType";
import { EditorManager } from "../../Manager/EditorManager";
import FillArea from "./FillArea";
import OptionItem from "./OptionItem";
import { SoundConfig } from "./SoundConfig";


const { ccclass, property } = cc._decorator;

@ccclass
export default class Level_4 extends cc.Component {

    @property(cc.Node)
    private redLine1: cc.Node = null;
    @property(cc.Node)
    private redLine2: cc.Node = null;
    @property(cc.Node)
    private numNode1: cc.Node = null;
    @property(cc.Node)
    private numNode2: cc.Node = null;
    @property(cc.Node)
    private optionsNode: cc.Node = null;
    @property(cc.Node)
    private btn_change: cc.Node = null;
    @property(cc.Node)
    private fangfang: cc.Node = null;
    @property(cc.Node)
    private gulugulu: cc.Node = null;
    @property(cc.Node)
    private jianjian: cc.Node = null;
    @property(cc.Node)
    private highlight_guluguli: cc.Node = null;
    @property(cc.Node)
    private highlight_jianjian: cc.Node = null;

    onLoad() {
        ListenerManager.on(EventType.ENTER_GAME, this.init, this);
        ListenerManager.on(EventType.DRAG_OPTION_END, this.syncOptions, this);
    }
    onDestroy() {
        ListenerManager.off(EventType.ENTER_GAME, this.init, this);
        ListenerManager.off(EventType.DRAG_OPTION_END, this.syncOptions, this);
    }

    public init() {
        this.numNode1.active = EditorManager.editorData.gameMode == 0; //演示模式
        this.numNode2.active = EditorManager.editorData.gameMode == 0; //演示模式
        this.btn_change.active = EditorManager.editorData.gameMode == 0; //演示模式
        console.log("EditorManager.editorData.gameMode", EditorManager.editorData.gameMode);
        if (EditorManager.editorData.gameMode == 0) {
            this.optionsNode.x = -520;
        } else {
            this.optionsNode.x = 0;
            this.handleShowNum();
        }
        this.handleShowCircle();
        this.handleShowRedLine_1();
        this.handleShowRedLine_2();
        
        this.resetOptions();
    }

    private resetOptions() {
        let fillAreaOptions = SyncDataManager.getSyncData().customSyncData.fillAreaOptions;
        for (let i = 0; i < this.gulugulu.childrenCount; i++) {
            let option = this.gulugulu.children[i];
            option.getComponent(OptionItem).reset();
            i = i - 1;
        }

        for (let j = 0; j < fillAreaOptions.length; j++) {
            let option = this.optionsNode.getChildByName(fillAreaOptions[j]);
            if (option) {
                this.gulugulu.getComponent(FillArea).fill(option);
            }
        }

        let fillAreaOptions2 = SyncDataManager.getSyncData().customSyncData.fillAreaOptions2;
        for (let i = 0; i < this.jianjian.childrenCount; i++) {
            let option = this.jianjian.children[i];
            option.getComponent(OptionItem).reset();
            i = i - 1;
        }

        for (let j = 0; j < fillAreaOptions2.length; j++) {
            let option = this.optionsNode.getChildByName(fillAreaOptions2[j]);
            if (option) {
                this.jianjian.getComponent(FillArea).fill(option);
            }
        }
    }

    private syncOptions() {
        SyncDataManager.getSyncData().customSyncData.fillAreaOptions = [];
        SyncDataManager.getSyncData().customSyncData.fillAreaOptions2 = [];
        for (let i = 0; i < this.gulugulu.childrenCount; i++) {
            SyncDataManager.getSyncData().customSyncData.fillAreaOptions.push(this.gulugulu.children[i].name);
        }
        for (let i = 0; i < this.jianjian.childrenCount; i++) {
            SyncDataManager.getSyncData().customSyncData.fillAreaOptions2.push(this.jianjian.children[i].name);
        }
    }

    private handleShowCircle() {
        let isShowCircle = SyncDataManager.getSyncData().customSyncData.isShowCircle;
        for (let i = 0; i < this.optionsNode.childrenCount; i++) {
            this.optionsNode.children[i].getChildByName("circle").active = isShowCircle;
            this.optionsNode.children[i].getChildByName("icon").active = !isShowCircle;
        }
        for (let i = 0; i < this.fangfang.childrenCount; i++) {
            this.fangfang.children[i].getChildByName("circle").active = isShowCircle;
            this.fangfang.children[i].getChildByName("icon").active = !isShowCircle;
        }
        for (let i = 0; i < this.gulugulu.childrenCount; i++) {
            this.gulugulu.children[i].getChildByName("circle").active = isShowCircle;
            this.gulugulu.children[i].getChildByName("icon").active = !isShowCircle;
        }
        for (let i = 0; i < this.jianjian.childrenCount; i++) {
            this.jianjian.children[i].getChildByName("circle").active = isShowCircle;
            this.jianjian.children[i].getChildByName("icon").active = !isShowCircle;
        }
    }

    private onClickShowRedLine_1() {
        SoundManager.playEffect(SoundConfig.soudlist["点击音效"], false, false, false);
        let isShow = SyncDataManager.getSyncData().customSyncData.isShowLine;
        SyncDataManager.getSyncData().customSyncData.isShowLine = !isShow;
        this.handleShowRedLine_1();
    }

    private handleShowRedLine_1() {
        this.redLine1.active = SyncDataManager.getSyncData().customSyncData.isShowLine;
    }

    private onClickShowRedLine_2() {
        SoundManager.playEffect(SoundConfig.soudlist["点击音效"], false, false, false);
        let isShow = SyncDataManager.getSyncData().customSyncData.isShowLine2;
        SyncDataManager.getSyncData().customSyncData.isShowLine2 = !isShow;
        this.handleShowRedLine_2();
    }

    private handleShowRedLine_2() {
        this.redLine2.active = SyncDataManager.getSyncData().customSyncData.isShowLine2;
    }

    private onClickNum() {
        SoundManager.playEffect(SoundConfig.soudlist["点击音效"], false, false, false);
        let showNumCount = SyncDataManager.getSyncData().customSyncData.showNumCount;
        showNumCount++;
        if (showNumCount > 10) {
            showNumCount = 0;
        }
        SyncDataManager.getSyncData().customSyncData.showNumCount = showNumCount;
        this.handleShowNum();
    }

    private handleShowNum() {
        if (EditorManager.editorData.gameMode == 1) return;
        let showNumCount = SyncDataManager.getSyncData().customSyncData.showNumCount;
        if (showNumCount <= 5) {
            this.numNode1.active = true;
            this.numNode2.active = false;
            this.numNode1.children.forEach((node, index) => {
                node.active = index < showNumCount;
            });
        } else {
            this.numNode1.active = false;
            this.numNode2.active = true;
            this.numNode2.children.forEach((node, index) => {
                node.active = index < showNumCount - 5;
            });
        }
    }

    private onClickChange() {
        SoundManager.playEffect(SoundConfig.soudlist["点击音效"], false, false, false);
        let isShowCircle = SyncDataManager.getSyncData().customSyncData.isShowCircle;
        SyncDataManager.getSyncData().customSyncData.isShowCircle = !isShowCircle;
        this.handleShowCircle();
    }

    private onClickCheck() {
        SoundManager.playEffect(SoundConfig.soudlist["点击音效"], false, false, false);
        if (this.isCheckEnd) return;
        if (this.gulugulu.childrenCount == 6 && this.jianjian.childrenCount == 9) {
            this.handleTrue();
        } else {
            this.handleWrong();
        }
    }

    private isCheckEnd = false;
    private handleTrue() {
        this.isCheckEnd = true;
        SoundManager.playEffect(SoundConfig.soudlist["正确音效"], false, false, false);
        ListenerManager.dispatch(EventType.SUBMIT, true);
        this.highlight_guluguli.active = true;
        this.highlight_guluguli.color = cc.Color.GREEN;
        cc.tween(this.highlight_guluguli).to(0.1, { opacity: 255 }).delay(0.3).to(0.1, { opacity: 0 })
            .to(0.1, { opacity: 255 }).delay(0.3).to(0.1, { opacity: 0 })
            .to(0.1, { opacity: 255 }).delay(0.3).to(0.1, { opacity: 0 })
            .call(() => {
                this.highlight_guluguli.active = false;
                if (EditorManager.editorData.gameMode == 1) {
                    ListenerManager.dispatch(EventType.GAME_OVER);
                }
            })
            .start();
        this.highlight_jianjian.active = true;
        this.highlight_jianjian.color = cc.Color.GREEN;
        cc.tween(this.highlight_jianjian).to(0.1, { opacity: 255 }).delay(0.3).to(0.1, { opacity: 0 })
            .to(0.1, { opacity: 255 }).delay(0.3).to(0.1, { opacity: 0 })
            .to(0.1, { opacity: 255 }).delay(0.3).to(0.1, { opacity: 0 })
            .call(() => {
                this.highlight_jianjian.active = false;
            })
            .start();
    }

    private handleWrong() {
        SoundManager.playEffect(SoundConfig.soudlist["错误音效"], false, false, false);
        ListenerManager.dispatch(EventType.SUBMIT, false);
        if (this.gulugulu.childrenCount != 6) {
            this.highlight_guluguli.active = true;
            this.highlight_guluguli.color = cc.Color.RED;
            cc.tween(this.highlight_guluguli).to(0.1, { opacity: 255 }).delay(0.3).to(0.1, { opacity: 0 })
                .to(0.1, { opacity: 255 }).delay(0.3).to(0.1, { opacity: 0 })
                .to(0.1, { opacity: 255 }).delay(0.3).to(0.1, { opacity: 0 })
                .call(() => {
                    this.highlight_guluguli.active = false;
                })
                .start();
        }
        if (this.jianjian.childrenCount != 9) {
            this.highlight_jianjian.active = true;
            this.highlight_jianjian.color = cc.Color.RED;
            cc.tween(this.highlight_jianjian).to(0.1, { opacity: 255 }).delay(0.3).to(0.1, { opacity: 0 })
                .to(0.1, { opacity: 255 }).delay(0.3).to(0.1, { opacity: 0 })
                .to(0.1, { opacity: 255 }).delay(0.3).to(0.1, { opacity: 0 })
                .call(() => {
                    this.highlight_jianjian.active = false;
                })
                .start();
        }

    }

}
