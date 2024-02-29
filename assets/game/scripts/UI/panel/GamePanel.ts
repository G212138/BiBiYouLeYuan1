import { ListenerManager } from '../../../../frame/scripts/Manager/ListenerManager';
import { SyncData, SyncDataManager } from '../../../../frame/scripts/Manager/SyncDataManager';
import BaseGamePanel from '../../../../frame/scripts/UI/Panel/BaseGamePanel';
import { EventType } from '../../Data/EventType';
import { EditorManager } from '../../Manager/EditorManager';
import Level_1 from '../Item/Level_1';
import Level_2 from '../Item/Level_2';
import Level_3 from '../Item/Level_3';
import Level_4 from '../Item/Level_4';

const { ccclass, property } = cc._decorator;

@ccclass
export default class GamePanel extends BaseGamePanel {
    public static className = 'GamePanel';

    @property(cc.Node)
    private gameLevel: cc.Node[] = [];

    start() {
        super.start();
        ListenerManager.on(EventType.GAME_OVER, this.gameOver, this);
        ListenerManager.on(EventType.SUBMIT, this.submit, this);
    }

    onDestroy() {
        super.onDestroy();
        ListenerManager.off(EventType.GAME_OVER, this.gameOver, this);
        ListenerManager.off(EventType.SUBMIT, this.submit, this);
    }

    private submit(isRight) {
        if (isRight) {
            this.answerRight(true);
        } else {
            this.answerWrong(true);
        }
    }

    /**
     * 游戏入口
     * 这里已经拿到数据
     */
    protected setPanel() {
        super.setPanel();
        // TODO 业务逻辑        
        for (let i = 0; i < this.gameLevel.length; i++) {
            this.gameLevel[i].active = false;
        }
        this.gameLevel[EditorManager.editorData.gameIndex].active = true;
        ListenerManager.dispatch(EventType.ENTER_GAME);
        // if (EditorManager.editorData.gameIndex == 0) {
        //     this.gameLevel[EditorManager.editorData.gameIndex].getComponent(Level_1).init();
        // } else if (EditorManager.editorData.gameIndex == 1) {
        //     this.gameLevel[EditorManager.editorData.gameIndex].getComponent(Level_2).init();
        // } else if (EditorManager.editorData.gameIndex == 2) {
        //     this.gameLevel[EditorManager.editorData.gameIndex].getComponent(Level_3).init();
        // } else if (EditorManager.editorData.gameIndex == 3) {
        //     this.gameLevel[EditorManager.editorData.gameIndex].getComponent(Level_4).init();
        // }
    }

    /**
     * 心跳回调（当actionId不相等时才会触发）
     * @param recovery
     */
    protected onRecoveryData(recovery: SyncData): void {
        super.onRecoveryData(recovery);
        for (let i = 0; i < this.gameLevel.length; i++) {
            this.gameLevel[i].active = false;
        }
        this.gameLevel[EditorManager.editorData.gameIndex].active = true;
        ListenerManager.dispatch(EventType.ENTER_GAME);
        // ListenerManager.dispatch(EventType.GAME_RECONNECT);
    }

    /**
     * 作答正确
     * 父类实现了数据上报
     * @param isCurLevelFinish 本关是否完成
     */
    protected answerRight(isCurLevelFinish: boolean) {
        super.answerRight(isCurLevelFinish);
    }

    /**
     * 作答错误
     * 父类实现了数据上报
     * @param isCurLevelFinish 本关是否完成
     */
    protected answerWrong(isCurLevelFinish: boolean = false) {
        super.answerWrong(isCurLevelFinish);
    }

    /**
     * 游戏结束
     * 父类实现了结算界面（游戏结束或星级评判）的弹出
     */
    protected gameOver() {
        super.gameOver();
    }

    /**
     * 重玩
     */
    protected onReplay() {
        super.onReplay();
        SyncDataManager.getSyncData().customSyncData.curLevel = 0;
        SyncDataManager.getSyncData().customSyncData.isShowLine = false;
        SyncDataManager.getSyncData().customSyncData.isShowLine2 = false;
        SyncDataManager.getSyncData().customSyncData.showNumCount = 0;
        SyncDataManager.getSyncData().customSyncData.isShowCircle = false;
        SyncDataManager.getSyncData().customSyncData.fillAreaOptions = [];
        SyncDataManager.getSyncData().customSyncData.fillAreaOptions2 = [];
        SyncDataManager.getSyncData().customSyncData.isShowNum = false;
        SyncDataManager.getSyncData().customSyncData.isShowXuxian = [];
        SyncDataManager.getSyncData().customSyncData.isShowXuxian2 = [];
        SyncDataManager.getSyncData().customSyncData.step = 0;
        for (let i = 0; i < this.gameLevel.length; i++) {
            this.gameLevel[i].active = false;
        }
        this.gameLevel[EditorManager.editorData.gameIndex].active = true;
        ListenerManager.dispatch(EventType.ENTER_GAME);
        // ListenerManager.dispatch(EventType.GAME_REPLAY);
    }

    update(dt) {
        super.update(dt);
    }
}
