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
    private btn_submit: cc.Node = null;
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
    @property(cc.Node)
    private fillArea1_mask: cc.Node = null;
    @property(cc.Node)
    private fillArea2_mask: cc.Node = null;
    @property(cc.Node)
    private fillArea2_mask2: cc.Node = null;
    @property(cc.Node)
    private btn_bijiben_1: cc.Node = null;
    @property(cc.Node)
    private btn_bijiben_2: cc.Node = null;
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
        this.numNode1.active = EditorManager.editorData.gameMode == 0; //演示模式
        this.numNode2.active = EditorManager.editorData.gameMode == 0; //演示模式
        this.btn_change.active = EditorManager.editorData.gameMode == 0; //演示模式
        this.btn_submit.active = false;
        if (EditorManager.editorData.gameMode == 0) {
            this.optionsNode.x = -520;
        } else {
            this.optionsNode.x = 0;
            this.handleShowNum();
        }
        this.handleShowRedLine_1();
        this.handleShowRedLine_2();

        this.resetOptions();
        this.scheduleOnce(() => {
            this.handleShowCircle();
        }, 0.1);
        this.fillArea2_mask.active = SyncDataManager.getSyncData().customSyncData.step == 0;
        this.fillArea1_mask.active = SyncDataManager.getSyncData().customSyncData.step == 1;
        this.fillArea2_mask2.active = SyncDataManager.getSyncData().customSyncData.step == 2;
        if (SyncDataManager.getSyncData().customSyncData.step == 0) {
            cc.Tween.stopAllByTarget(this.btn_bijiben_2);
            this.shakeNode(this.btn_bijiben_1);
            this.btn_bijiben_1.getChildByName("10").active = false;
            this.btn_bijiben_2.getChildByName("10").active = false;
        } else if (SyncDataManager.getSyncData().customSyncData.step == 1) {
            cc.Tween.stopAllByTarget(this.btn_bijiben_1);
            this.shakeNode(this.btn_bijiben_2);
            this.btn_bijiben_1.getChildByName("10").active = true;
            this.btn_bijiben_2.getChildByName("10").active = false;
        } else {
            cc.Tween.stopAllByTarget(this.btn_bijiben_1);
            cc.Tween.stopAllByTarget(this.btn_bijiben_2);
            this.btn_bijiben_1.getChildByName("10").active = true;
            this.btn_bijiben_2.getChildByName("10").active = true;
        }
    }

    private shakeNode(node: cc.Node) {
        cc.tween(node).repeatForever(
            cc.tween().to(0.5, { scale: 0.95 }).to(0.5, { scale: 1.05 })
        ).start();
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
        SyncDataManager.getSyncData().customSyncData.isShowXuxian = [];
        SyncDataManager.getSyncData().customSyncData.isShowXuxian2 = [];
        for (let i = 0; i < this.gulugulu.childrenCount; i++) {
            SyncDataManager.getSyncData().customSyncData.fillAreaOptions.push(this.gulugulu.children[i].name);

            let isShowXuxian = this.gulugulu.children[i].getComponent(OptionItem).isShowXuxian;
            SyncDataManager.getSyncData().customSyncData.isShowXuxian.push(isShowXuxian);
        }
        for (let i = 0; i < this.jianjian.childrenCount; i++) {
            SyncDataManager.getSyncData().customSyncData.fillAreaOptions2.push(this.jianjian.children[i].name);

            let isShowXuxian = this.jianjian.children[i].getComponent(OptionItem).isShowXuxian;
            SyncDataManager.getSyncData().customSyncData.isShowXuxian2.push(isShowXuxian);
        }

        console.log("SyncDataManager.getSyncData().customSyncData.isShowXuxian", SyncDataManager.getSyncData().customSyncData.isShowXuxian);
        console.log("SyncDataManager.getSyncData().customSyncData.isShowXuxian2", SyncDataManager.getSyncData().customSyncData.isShowXuxian2);

        this.handleShowCircle();
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
        for (let i = 0; i < this.fangfang.childrenCount; i++) {
            this.fangfang.children[i].getChildByName("circle").active = false;
            this.fangfang.children[i].getChildByName("icon").active = true;
        }
        for (let i = 0; i < this.gulugulu.childrenCount; i++) {
            if (needAnim) {
                this.gulugulu.children[i].getChildByName("heibai").active = true;
                this.gulugulu.children[i].getChildByName("heibai").getComponent(sp.Skeleton).timeScale = 2;
                Tools.playSpine(this.gulugulu.children[i].getChildByName("heibai").getComponent(sp.Skeleton), "eft_smoke", false, () => {
                    this.gulugulu.children[i].getChildByName("heibai").active = false;
                });
            } else {
                this.gulugulu.children[i].getChildByName("heibai").active = false;
            }
            this.scheduleOnce(() => {
                let isShowXuxian = SyncDataManager.getSyncData().customSyncData.isShowXuxian[i];
                this.gulugulu.children[i].getChildByName("circle").active = isShowCircle && !isShowXuxian;
                this.gulugulu.children[i].getChildByName("icon").active = !isShowCircle && !isShowXuxian;

                this.gulugulu.children[i].getChildByName("circle_2").active = isShowCircle && isShowXuxian;
                this.gulugulu.children[i].getChildByName("icon_2").active = !isShowCircle && isShowXuxian;
            }, 0.5 * (needAnim ? 1 : 0));
        }
        for (let i = 0; i < this.jianjian.childrenCount; i++) {
            if (needAnim) {
                this.jianjian.children[i].getChildByName("heibai").active = true;
                this.jianjian.children[i].getChildByName("heibai").getComponent(sp.Skeleton).timeScale = 2;
                Tools.playSpine(this.jianjian.children[i].getChildByName("heibai").getComponent(sp.Skeleton), "eft_smoke", false, () => {
                    this.jianjian.children[i].getChildByName("heibai").active = false;
                });
            } else {
                this.jianjian.children[i].getChildByName("heibai").active = false;
            }
            this.scheduleOnce(() => {
                let isShowXuxian = SyncDataManager.getSyncData().customSyncData.isShowXuxian2[i];
                this.jianjian.children[i].getChildByName("circle").active = isShowCircle && !isShowXuxian;
                this.jianjian.children[i].getChildByName("icon").active = !isShowCircle && !isShowXuxian;

                this.jianjian.children[i].getChildByName("circle_2").active = isShowCircle && isShowXuxian;
                this.jianjian.children[i].getChildByName("icon_2").active = !isShowCircle && isShowXuxian;
            }, 0.5 * (needAnim ? 1 : 0));
        }
    }

    private onClickShowRedLine_1() {
        SoundManager.playEffect(SoundConfig.soudlist["点击音效"], false, false, false);
        let isShow = SyncDataManager.getSyncData().customSyncData.isShowLine;
        SyncDataManager.getSyncData().customSyncData.isShowLine = true;
        this.handleShowRedLine_1();
    }

    private handleShowRedLine_1() {
        this.redLine1.active = SyncDataManager.getSyncData().customSyncData.isShowLine;
    }

    private onClickShowRedLine_2() {
        SoundManager.playEffect(SoundConfig.soudlist["点击音效"], false, false, false);
        let isShow = SyncDataManager.getSyncData().customSyncData.isShowLine2;
        SyncDataManager.getSyncData().customSyncData.isShowLine2 = true;
        this.handleShowRedLine_2();
    }

    private handleShowRedLine_2() {
        this.redLine2.active = SyncDataManager.getSyncData().customSyncData.isShowLine2;
    }

    private onClickNum() {
        SoundManager.playEffect(SoundConfig.soudlist["点击音效"], false, false, false);
        // let showNumCount = SyncDataManager.getSyncData().customSyncData.showNumCount;
        // showNumCount++;
        // if (showNumCount > 10) {
        //     showNumCount = 0;
        // }
        // SyncDataManager.getSyncData().customSyncData.showNumCount = showNumCount;
        let isShowNum = SyncDataManager.getSyncData().customSyncData.isShowNum;
        SyncDataManager.getSyncData().customSyncData.isShowNum = !isShowNum;
        this.handleShowNum();
    }

    private handleShowNum() {
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

        let isShowNum = SyncDataManager.getSyncData().customSyncData.isShowNum;
        if (SyncDataManager.getSyncData().customSyncData.step == 0) {
            this.numNode1.active = true && EditorManager.editorData.gameMode == 0;
            this.numNode2.active = false && EditorManager.editorData.gameMode == 0;
            this.numNode1.children.forEach((node, index) => {
                node.active = isShowNum;
            });
        } else if (SyncDataManager.getSyncData().customSyncData.step == 1) {
            this.numNode1.active = false && EditorManager.editorData.gameMode == 0;
            this.numNode2.active = true && EditorManager.editorData.gameMode == 0;
            this.numNode2.children.forEach((node, index) => {
                node.active = isShowNum;
            });
        }

    }

    private onClickChange() {
        SoundManager.playEffect(SoundConfig.soudlist["点击音效"], false, false, false);
        let isShowCircle = SyncDataManager.getSyncData().customSyncData.isShowCircle;
        SyncDataManager.getSyncData().customSyncData.isShowCircle = !isShowCircle;
        this.handleShowCircle(true);
    }


    private onClickCheck_step1() {
        if (this.isCheckEnd || SyncDataManager.getSyncData().customSyncData.step != 0) return;
        SoundManager.playEffect(SoundConfig.soudlist["点击音效"], false, false, false);

        let answer = [false, false, false, false, false, false, true, true, true, true];
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

    private onClickCheck_step2() {
        if (this.isCheckEnd || SyncDataManager.getSyncData().customSyncData.step != 1) return;
        SoundManager.playEffect(SoundConfig.soudlist["点击音效"], false, false, false);

        let answer = [false, false, false, false, false, false, false, false, false];
        let isShowXuxian = SyncDataManager.getSyncData().customSyncData.isShowXuxian2;
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
        if (SyncDataManager.getSyncData().customSyncData.step == 0) {
            cc.Tween.stopAllByTarget(this.btn_bijiben_1);
            this.btn_bijiben_1.getChildByName("10").active = true;
            SyncDataManager.getSyncData().customSyncData.step = 1;
            this.fillArea1_mask.active = true;
            this.highlight_guluguli.active = true;
            this.highlight_guluguli.color = cc.Color.GREEN;
            cc.tween(this.highlight_guluguli).to(0.1, { opacity: 255 }).delay(0.3).to(0.1, { opacity: 0 })
                .to(0.1, { opacity: 255 }).delay(0.3).to(0.1, { opacity: 0 })
                .to(0.1, { opacity: 255 }).delay(0.3).to(0.1, { opacity: 0 })
                .call(() => {
                    this.highlight_guluguli.active = false;
                    SyncDataManager.getSyncData().customSyncData.step = 1;
                    this.fillArea2_mask.active = false;
                    this.fillArea1_mask.active = true;
                    cc.Tween.stopAllByTarget(this.btn_bijiben_1);
                    this.shakeNode(this.btn_bijiben_2);
                    this.btn_bijiben_1.getChildByName("10").active = true;
                    this.btn_bijiben_2.getChildByName("10").active = false;
                    this.isCheckEnd = false;
                })
                .start();
        } else if (SyncDataManager.getSyncData().customSyncData.step == 1) {
            SyncDataManager.getSyncData().customSyncData.step = 2;
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
                .call(() => {
                    this.highlight_jianjian.active = false;

                    cc.Tween.stopAllByTarget(this.btn_bijiben_1);
                    cc.Tween.stopAllByTarget(this.btn_bijiben_2);
                    this.btn_bijiben_1.getChildByName("10").active = true;
                    this.btn_bijiben_2.getChildByName("10").active = true;

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
        }
    }

    private handleWrong() {
        SoundManager.playEffect(SoundConfig.soudlist["错误音效"], false, false, false);
        ListenerManager.dispatch(EventType.SUBMIT, false);
        if (SyncDataManager.getSyncData().customSyncData.step == 0) {
            // if (this.gulugulu.childrenCount != 6) {
            this.highlight_guluguli.active = true;
            this.highlight_guluguli.color = cc.Color.RED;
            cc.tween(this.highlight_guluguli).to(0.1, { opacity: 255 }).delay(0.3).to(0.1, { opacity: 0 })
                .to(0.1, { opacity: 255 }).delay(0.3).to(0.1, { opacity: 0 })
                .to(0.1, { opacity: 255 }).delay(0.3).to(0.1, { opacity: 0 })
                .call(() => {
                    this.highlight_guluguli.active = false;
                })
                .start();
            // }
        }
        if (SyncDataManager.getSyncData().customSyncData.step == 1) {
            // if (this.jianjian.childrenCount != 9) {
            this.highlight_jianjian.active = true;
            this.highlight_jianjian.color = cc.Color.RED;
            cc.tween(this.highlight_jianjian).to(0.1, { opacity: 255 }).delay(0.3).to(0.1, { opacity: 0 })
                .to(0.1, { opacity: 255 }).delay(0.3).to(0.1, { opacity: 0 })
                .to(0.1, { opacity: 255 }).delay(0.3).to(0.1, { opacity: 0 })
                .call(() => {
                    this.highlight_jianjian.active = false;
                })
                .start();
            // }
        }

    }

}
