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
export default class Level_3 extends cc.Component {

    @property(cc.Node)
    private redLine: cc.Node = null;
    @property(cc.Node)
    private numNode: cc.Node = null;
    @property(cc.Node)
    private optionsNode: cc.Node = null;
    @property(cc.Node)
    private btn_change: cc.Node = null;
    @property(cc.Node)
    private top_node: cc.Node = null;
    @property(cc.Node)
    private bottom_node: cc.Node = null;
    @property(cc.Node)
    private highlight: cc.Node = null;

    onLoad() {
        ListenerManager.on(EventType.ENTER_GAME, this.init, this);
        ListenerManager.on(EventType.DRAG_OPTION_END, this.syncOptions, this);
    }
    onDestroy() {
        ListenerManager.off(EventType.ENTER_GAME, this.init, this);
        ListenerManager.off(EventType.DRAG_OPTION_END, this.syncOptions, this);
    }

    public init() {
        this.numNode.active = EditorManager.editorData.gameMode == 0; //演示模式
        this.btn_change.active = EditorManager.editorData.gameMode == 0; //演示模式
        if (EditorManager.editorData.gameMode == 0) {
            this.optionsNode.x = -520;
        } else {
            this.optionsNode.x = 0;
        }
        this.handleShowCircle();
        this.handleShowRedLine();
        this.handleShowNum();
        this.resetOptions();
    }

    private handleShowCircle() {
        let isShowCircle = SyncDataManager.getSyncData().customSyncData.isShowCircle;
        for (let i = 0; i < this.optionsNode.childrenCount; i++) {
            this.optionsNode.children[i].getChildByName("circle").active = isShowCircle;
            this.optionsNode.children[i].getChildByName("icon").active = !isShowCircle;
        }
        for (let i = 0; i < this.top_node.childrenCount; i++) {
            this.top_node.children[i].getChildByName("circle").active = isShowCircle;
            this.top_node.children[i].getChildByName("icon").active = !isShowCircle;
        }
        for (let i = 0; i < this.bottom_node.childrenCount; i++) {
            this.bottom_node.children[i].getChildByName("circle").active = isShowCircle;
            this.bottom_node.children[i].getChildByName("icon").active = !isShowCircle;
        }
    }

    private resetOptions() {
        let fillAreaOptions = SyncDataManager.getSyncData().customSyncData.fillAreaOptions;
        for (let i = 0; i < this.bottom_node.childrenCount; i++) {
            let option = this.bottom_node.children[i];            
            option.getComponent(OptionItem).reset();
            i = i - 1;           
        }
        
        for (let j = 0; j < fillAreaOptions.length; j++) {
            let option = this.optionsNode.getChildByName(fillAreaOptions[j]);
            if (option) {
                this.bottom_node.getComponent(FillArea).fill(option);
            }            
        }
    }

    private syncOptions() {
        SyncDataManager.getSyncData().customSyncData.fillAreaOptions = [];
        for (let i = 0; i < this.bottom_node.childrenCount; i++) {
            SyncDataManager.getSyncData().customSyncData.fillAreaOptions.push(this.bottom_node.children[i].name);
        }
    }

    private onClickShowRedLine() {
        SoundManager.playEffect(SoundConfig.soudlist["点击音效"], false, false, false);
        let isShow = SyncDataManager.getSyncData().customSyncData.isShowLine;
        SyncDataManager.getSyncData().customSyncData.isShowLine = !isShow;
        this.handleShowRedLine();
    }

    private handleShowRedLine() {
        this.redLine.active = SyncDataManager.getSyncData().customSyncData.isShowLine;
    }

    private onClickNum() {
        SoundManager.playEffect(SoundConfig.soudlist["点击音效"], false, false, false);
        let showNumCount = SyncDataManager.getSyncData().customSyncData.showNumCount;
        showNumCount++;
        if (showNumCount > 5) {
            showNumCount = 0;
        }
        SyncDataManager.getSyncData().customSyncData.showNumCount = showNumCount;
        this.handleShowNum();
    }

    private handleShowNum() {
        let showNumCount = SyncDataManager.getSyncData().customSyncData.showNumCount;
        this.numNode.children.forEach((node, index) => {
            node.active = index < showNumCount;
        });
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
        if (this.bottom_node.childrenCount == 6) {
            this.handleTrue();
        } else {
            this.handleWrong();
        }
    }

    private isCheckEnd = false;
    private handleTrue() {
        this.isCheckEnd = true;
        SoundManager.playEffect(SoundConfig.soudlist["正确音效"], false, false, false);
        this.highlight.active = true;
        this.highlight.color = cc.Color.GREEN;
        cc.tween(this.highlight).to(0.1, { opacity: 255 }).delay(0.3).to(0.1, {opacity: 0 })
        .to(0.1, { opacity: 255 }).delay(0.3).to(0.1, {opacity: 0 })
        .to(0.1, { opacity: 255 }).delay(0.3).to(0.1, {opacity: 0 })
        .call(() => {
            this.highlight.active = false;
            if (EditorManager.editorData.gameMode == 1) {
                ListenerManager.dispatch(EventType.GAME_OVER);
            } 
        })
        .start();
        ListenerManager.dispatch(EventType.SUBMIT, true);               
    }

    private handleWrong() {
        SoundManager.playEffect(SoundConfig.soudlist["错误音效"], false, false, false);
        ListenerManager.dispatch(EventType.SUBMIT, false);
        this.highlight.active = true;
        this.highlight.color = cc.Color.RED;
        cc.tween(this.highlight).to(0.1, { opacity: 255 }).delay(0.3).to(0.1, {opacity: 0 })
        .to(0.1, { opacity: 255 }).delay(0.3).to(0.1, {opacity: 0 })
        .to(0.1, { opacity: 255 }).delay(0.3).to(0.1, {opacity: 0 })
        .call(() => {
            this.highlight.active = false;
        })
        .start();
    }
    
}
