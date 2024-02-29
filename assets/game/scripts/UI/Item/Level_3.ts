import { ListenerManager } from "../../../../frame/scripts/Manager/ListenerManager";
import { SoundManager } from "../../../../frame/scripts/Manager/SoundManager";
import { SyncDataManager } from "../../../../frame/scripts/Manager/SyncDataManager";
import { Tools } from "../../../../frame/scripts/Utils/Tools";
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
    private btn_submit: cc.Node = null;
    @property(cc.Node)
    private top_node: cc.Node = null;
    @property(cc.Node)
    private bottom_node: cc.Node = null;
    @property(cc.Node)
    private highlight: cc.Node = null;
    @property(sp.Skeleton)
    private endSpine: sp.Skeleton = null;

    onLoad() {
        ListenerManager.on(EventType.ENTER_GAME, this.init, this);
        ListenerManager.on(EventType.DRAG_OPTION_END, this.syncOptions, this);
    }
    onDestroy() {
        ListenerManager.off(EventType.ENTER_GAME, this.init, this);
        ListenerManager.off(EventType.DRAG_OPTION_END, this.syncOptions, this);
    }

    public init() {
        this.isCheckEnd = false;
        this.endSpine.node.active = false;
        this.numNode.active = EditorManager.editorData.gameMode == 0; //演示模式
        this.btn_change.active = EditorManager.editorData.gameMode == 0; //演示模式
        this.btn_submit.active = EditorManager.editorData.gameMode == 1; //演示模式不要提交按钮
        if (EditorManager.editorData.gameMode == 0) {
            this.optionsNode.x = -520;
        } else {
            this.optionsNode.x = 0;
        }
        this.handleShowRedLine();
        this.handleShowNum();
        this.resetOptions();
        this.scheduleOnce(() => {
            this.handleShowCircle();
        }, 0.1);
    }

    private handleShowCircle(needAnim: boolean = false) {
        let isShowCircle = SyncDataManager.getSyncData().customSyncData.isShowCircle;
        for (let i = 0; i < this.optionsNode.childrenCount; i++) {
            if (needAnim) {
                this.optionsNode.children[i].getChildByName("heibai").active = true;
                this.optionsNode.children[i].getChildByName("heibai").getComponent(sp.Skeleton).timeScale = 2;
                Tools.playSpine(this.optionsNode.children[i].getChildByName("heibai").getComponent(sp.Skeleton), "eft_smoke", false, () => {
                    this.optionsNode.children[i].getChildByName("heibai").active = false;
                });
            } else {
                this.optionsNode.children[i].getChildByName("heibai").active = false;
            }
            this.scheduleOnce(() => {
                this.optionsNode.children[i].getChildByName("circle").active = isShowCircle;
                this.optionsNode.children[i].getChildByName("icon").active = !isShowCircle;
                this.optionsNode.children[i].getChildByName("circle_2").active = false;
                this.optionsNode.children[i].getChildByName("icon_2").active = false;
            }, 0.5 * (needAnim ? 1 : 0));
        }
        for (let i = 0; i < this.top_node.childrenCount; i++) {
            this.top_node.children[i].getChildByName("circle").active = false;
            this.top_node.children[i].getChildByName("icon").active = true;
        }
        for (let i = 0; i < this.bottom_node.childrenCount; i++) {
            if (needAnim) {
                this.bottom_node.children[i].getChildByName("heibai").active = true;
                this.bottom_node.children[i].getChildByName("heibai").getComponent(sp.Skeleton).timeScale = 2;
                Tools.playSpine(this.bottom_node.children[i].getChildByName("heibai").getComponent(sp.Skeleton), "eft_smoke", false, () => {
                    this.bottom_node.children[i].getChildByName("heibai").active = false;
                });
            } else {
                this.bottom_node.children[i].getChildByName("heibai").active = false;
            }
            this.scheduleOnce(() => {
                let isShowXuxian = SyncDataManager.getSyncData().customSyncData.isShowXuxian[i];
                this.bottom_node.children[i].getChildByName("circle").active = isShowCircle && !isShowXuxian;
                this.bottom_node.children[i].getChildByName("icon").active = !isShowCircle && !isShowXuxian;

                this.bottom_node.children[i].getChildByName("circle_2").active = isShowCircle && isShowXuxian;
                this.bottom_node.children[i].getChildByName("icon_2").active = !isShowCircle && isShowXuxian;
            }, 0.5 * (needAnim ? 1 : 0));
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
        SyncDataManager.getSyncData().customSyncData.isShowXuxian = [];
        for (let i = 0; i < this.bottom_node.childrenCount; i++) {
            SyncDataManager.getSyncData().customSyncData.fillAreaOptions.push(this.bottom_node.children[i].name);

            let isShowXuxian = this.bottom_node.children[i].getComponent(OptionItem).isShowXuxian;
            SyncDataManager.getSyncData().customSyncData.isShowXuxian.push(isShowXuxian);
        }

        this.handleShowCircle();
    }

    private onClickShowRedLine() {
        SoundManager.playEffect(SoundConfig.soudlist["点击音效"], false, false, false);
        let isShow = SyncDataManager.getSyncData().customSyncData.isShowLine;
        SyncDataManager.getSyncData().customSyncData.isShowLine = true;
        this.handleShowRedLine();
    }

    private handleShowRedLine() {
        this.redLine.active = SyncDataManager.getSyncData().customSyncData.isShowLine;
    }

    private onClickNum() {
        SoundManager.playEffect(SoundConfig.soudlist["点击音效"], false, false, false);
        // let showNumCount = SyncDataManager.getSyncData().customSyncData.showNumCount;
        // showNumCount++;
        // if (showNumCount > 5) {
        //     showNumCount = 0;
        // }
        // SyncDataManager.getSyncData().customSyncData.showNumCount = showNumCount;

        let isShowNum = SyncDataManager.getSyncData().customSyncData.isShowNum;
        SyncDataManager.getSyncData().customSyncData.isShowNum = !isShowNum
        this.handleShowNum();
    }

    private handleShowNum() {
        let showNumCount = SyncDataManager.getSyncData().customSyncData.showNumCount;
        let isShowNum = SyncDataManager.getSyncData().customSyncData.isShowNum;
        this.numNode.children.forEach((node, index) => {
            // node.active = index < showNumCount;
            node.active = isShowNum;
        });
    }

    private onClickChange() {
        SoundManager.playEffect(SoundConfig.soudlist["点击音效"], false, false, false);
        let isShowCircle = SyncDataManager.getSyncData().customSyncData.isShowCircle;
        SyncDataManager.getSyncData().customSyncData.isShowCircle = !isShowCircle;
        this.handleShowCircle(true);
    }

    private onClickCheck() {
        if (this.isCheckEnd) return;
        SoundManager.playEffect(SoundConfig.soudlist["点击音效"], false, false, false);
        cc.tween(this.btn_submit).to(0.1, { scale: 1.1 }).to(0.1, { scale: 1 }).start();
        let answer = [false, false, false, false, false, false, true, true, true];
        let isShowXuxian = SyncDataManager.getSyncData().customSyncData.isShowXuxian;
        let isTrue = true;
        for (let i = 0; i < isShowXuxian.length; i++) {
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
        cc.tween(this.highlight).to(0.1, { opacity: 255 }).delay(0.3).to(0.1, { opacity: 0 })
            .to(0.1, { opacity: 255 }).delay(0.3).to(0.1, { opacity: 0 })
            .to(0.1, { opacity: 255 }).delay(0.3).to(0.1, { opacity: 0 })
            .call(() => {
                this.highlight.active = false;
                // if (EditorManager.editorData.gameMode == 1) {
                //     ListenerManager.dispatch(EventType.GAME_OVER);
                // }
            })
            .start();
        this.endSpine.node.active = true;
        SoundManager.playEffect(SoundConfig.soudlist["比比侦探你最棒。"], false, false, false, () => {
            if (EditorManager.editorData.gameMode == 1) {
                ListenerManager.dispatch(EventType.GAME_OVER);
            }
        });
        Tools.playSpine(this.endSpine, "1", false, () => {

        });
        ListenerManager.dispatch(EventType.SUBMIT, true);
    }

    private handleWrong() {
        SoundManager.playEffect(SoundConfig.soudlist["错误音效"], false, false, false);
        ListenerManager.dispatch(EventType.SUBMIT, false);
        this.highlight.active = true;
        this.highlight.color = cc.Color.RED;
        cc.tween(this.highlight).to(0.1, { opacity: 255 }).delay(0.3).to(0.1, { opacity: 0 })
            .to(0.1, { opacity: 255 }).delay(0.3).to(0.1, { opacity: 0 })
            .to(0.1, { opacity: 255 }).delay(0.3).to(0.1, { opacity: 0 })
            .call(() => {
                this.highlight.active = false;
            })
            .start();
    }

}
