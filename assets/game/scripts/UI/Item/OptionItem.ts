import { ListenerManager } from "../../../../frame/scripts/Manager/ListenerManager";
import { SyncDataManager } from "../../../../frame/scripts/Manager/SyncDataManager";
import { HitTest } from "../../../../frame/scripts/Utils/HitTest";
import { EventType } from "../../Data/EventType";
import { EditorManager } from "../../Manager/EditorManager";
import FillArea from "./FillArea";


const { ccclass, property } = cc._decorator;

@ccclass
export default class OptionItem extends cc.Component {

    @property(cc.Node)
    private optionParent: cc.Node = null;
    @property(cc.Node)
    private fillArea: cc.Node = null;
    @property(cc.Node)
    private fillArea2: cc.Node = null;

    public isShowXuxian: boolean = false;

    private onDragStart(event) {
        let pos = event.target.parent.convertToWorldSpaceAR(cc.v2(event.pos.x, event.pos.y));
        ListenerManager.dispatch(EventType.DRAG_OPTION_START, pos);
    }

    private onDragMove(event) {
        let pos = event.target.parent.convertToWorldSpaceAR(cc.v2(event.pos.x, event.pos.y));
        ListenerManager.dispatch(EventType.DRAG_OPTION, pos);
    }

    private onDragEnd(event) {
        let pos = event.target.parent.convertToWorldSpaceAR(cc.v2(event.pos.x, event.pos.y));
        if (EditorManager.editorData.gameIndex == 2) {
            if (event.isClick) {
                if (this.node.parent != this.optionParent) {
                    this.isShowXuxian = !this.isShowXuxian;
                }
            } else {
                if (HitTest.posInRect(new cc.Vec2(pos.x, pos.y), this.fillArea)) {
                    this.fillArea.getComponent(FillArea).fill(this.node);
                } else {
                    this.reset();
                }
            }
        } else if (EditorManager.editorData.gameIndex == 3) {
            if (SyncDataManager.getSyncData().customSyncData.step == 0) {
                if (event.isClick) {
                    if (this.node.parent != this.optionParent) {
                        this.isShowXuxian = !this.isShowXuxian;
                    }
                } else {
                    if (HitTest.posInRect(new cc.Vec2(pos.x, pos.y), this.fillArea)) {
                        this.fillArea.getComponent(FillArea).fill(this.node);
                    } else {
                        this.reset();
                    }
                }
            } else {
                if (event.isClick) {
                    if (this.node.parent != this.optionParent) {
                        this.isShowXuxian = !this.isShowXuxian;
                    }
                } else {
                    if (HitTest.posInRect(new cc.Vec2(pos.x, pos.y), this.fillArea2)) {
                        this.fillArea2.getComponent(FillArea).fill(this.node);
                    } else {
                        this.reset();
                    }
                }
            }
        } else {
            if (HitTest.posInRect(new cc.Vec2(pos.x, pos.y), this.fillArea)) {
                this.fillArea.getComponent(FillArea).fill(this.node);
            } else {
                this.reset();
            }
        }
        ListenerManager.dispatch(EventType.DRAG_OPTION_END);
    }

    public reset() {
        this.node.parent = this.optionParent;
        this.node.position = cc.v3(0, 0);
        this.isShowXuxian = false;
    }
}
