"use strict";
cc._RF.push(module, 'ea676vAcV5E2pRA639ZNj33', 'FillArea');
// game/scripts/UI/Item/FillArea.ts

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
var HitTest_1 = require("../../../../frame/scripts/Utils/HitTest");
var EventType_1 = require("../../Data/EventType");
var EditorManager_1 = require("../../Manager/EditorManager");
var SoundConfig_1 = require("./SoundConfig");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var FillArea = /** @class */ (function (_super) {
    __extends(FillArea, _super);
    function FillArea() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.highlight = null;
        return _this;
    }
    FillArea.prototype.onLoad = function () {
        ListenerManager_1.ListenerManager.on(EventType_1.EventType.DRAG_OPTION, this.onDragOption, this);
    };
    FillArea.prototype.onDestroy = function () {
        ListenerManager_1.ListenerManager.off(EventType_1.EventType.DRAG_OPTION, this.onDragOption, this);
    };
    FillArea.prototype.onDragOption = function (pos) {
        if (!this.highlight)
            return;
        if (HitTest_1.HitTest.posInRect(new cc.Vec2(pos.x, pos.y), this.node)) {
            this.highlight.active = true;
            this.highlight.color = new cc.Color(247, 255, 29);
            this.highlight.opacity = 255;
        }
        else {
            this.highlight.active = false;
        }
    };
    FillArea.prototype.fill = function (item) {
        if (!item)
            return;
        if (this.highlight) {
            this.highlight.active = false;
        }
        item.parent = this.node;
        if (EditorManager_1.EditorManager.editorData.gameIndex == 0) {
            item.y = 33;
        }
        else {
            item.y = 0;
        }
        SoundManager_1.SoundManager.playEffect(SoundConfig_1.SoundConfig.soudlist["放置音效"], false, false, false);
    };
    __decorate([
        property(cc.Node)
    ], FillArea.prototype, "highlight", void 0);
    FillArea = __decorate([
        ccclass
    ], FillArea);
    return FillArea;
}(cc.Component));
exports.default = FillArea;

cc._RF.pop();