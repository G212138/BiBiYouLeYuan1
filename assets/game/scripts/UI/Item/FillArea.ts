import { ListenerManager } from "../../../../frame/scripts/Manager/ListenerManager";
import { SoundManager } from "../../../../frame/scripts/Manager/SoundManager";
import { SyncDataManager } from "../../../../frame/scripts/Manager/SyncDataManager";
import { HitTest } from "../../../../frame/scripts/Utils/HitTest";
import { Tools } from "../../../../frame/scripts/Utils/Tools";
import { EventType } from "../../Data/EventType";
import { EditorManager } from "../../Manager/EditorManager";
import { SoundConfig } from "./SoundConfig";


const { ccclass, property } = cc._decorator;

@ccclass
export default class FillArea extends cc.Component {
    @property(cc.Node)
    private highlight: cc.Node = null;
    @property(cc.Integer)
    private index: number = 0;

    onLoad() {
        ListenerManager.on(EventType.DRAG_OPTION, this.onDragOption, this);
    }
    onDestroy() {
        ListenerManager.off(EventType.DRAG_OPTION, this.onDragOption, this);
    }

    private onDragOption(pos: cc.Vec2) {
        if (!this.highlight) return;
        if (EditorManager.editorData.gameIndex == 3) {
            if (SyncDataManager.getSyncData().customSyncData.step == 0 && this.index == 1) {
                return;
            } else if (SyncDataManager.getSyncData().customSyncData.step == 1 && this.index == 0) {
                return;
            }
        }

        if (HitTest.posInRect(new cc.Vec2(pos.x, pos.y), this.node)) {
            this.highlight.active = true;
            this.highlight.color = new cc.Color(247, 255, 29);
            this.highlight.opacity = 255;
        } else {
            this.highlight.active = false;
        }
        
    }

    public fill(item: cc.Node) {
        if (!item) return;
        if (this.highlight) {
            this.highlight.active = false;
        }
        item.parent = this.node;
        if (EditorManager.editorData.gameIndex == 0) {
            item.y = 33;
        } else {
            item.y = 0;
        }
        
        SoundManager.playEffect(SoundConfig.soudlist["放置音效"], false, false, false);

        if (EditorManager.editorData.gameIndex == 3) {
            Tools.playSpine(item.getChildByName("icon").getChildByName("hp_coin2").getComponent(sp.Skeleton), "animation2", false);
        }        
    }
}
