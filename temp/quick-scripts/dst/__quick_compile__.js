
(function () {
var scripts = [{"deps":{"./assets/game/scripts/Data/CustomSyncData":2,"./assets/game/scripts/SkeletonExt":4,"./assets/frame/scripts/Data/FrameMsgType":5,"./assets/frame/scripts/Manager/ListenerManager":12,"./assets/frame/scripts/SDK/GameMsg":14,"./assets/frame/scripts/UI/AdaptiveScreen":16,"./assets/frame/scripts/UI/BindNode":17,"./assets/frame/scripts/UI/Item/Tip":20,"./assets/frame/scripts/Utils/BoundingBoxHelp":31,"./assets/frame/scripts/Utils/Tools":36,"./assets/frame/scripts/Data/FrameSyncData":38,"./assets/frame/scripts/Utils/MathUtils":39,"./assets/frame/scripts/Utils/HitTest":40,"./assets/frame/scripts/Data/FrameConstValue":41,"./assets/game/scripts/Manager/EditorManager":43,"./assets/game/scripts/Data/ConstValue":46,"./assets/game/scripts/Manager/GameManager":47,"./assets/game/scripts/Data/EventType":48,"./assets/game/scripts/UI/Item/SoundConfig":51,"./assets/frame/scripts/Manager/ReportManager":3,"./assets/frame/scripts/UI/Item/TeacherPanelLoading":1,"./assets/frame/scripts/Http/NetWork":6,"./assets/frame/scripts/SDK/T2M":7,"./assets/frame/scripts/Utils/BoundingBoxDemo":9,"./assets/frame/scripts/Manager/UIManager":10,"./assets/frame/scripts/Manager/SoundManager":11,"./assets/frame/scripts/UI/BaseUI":13,"./assets/frame/scripts/Manager/SyncDataManager":15,"./assets/frame/scripts/UI/BaseFrameUI":18,"./assets/frame/scripts/UI/GameMain":21,"./assets/frame/scripts/UI/Panel/BaseTeacherPanel":8,"./assets/frame/scripts/Utils/AudioPlayExtension":33,"./assets/frame/scripts/Utils/UIHelp":37,"./assets/frame/scripts/UI/Item/TitleNode":19,"./assets/frame/scripts/UI/Item/MaskRecover":22,"./assets/frame/scripts/UI/Panel/ErrorPanel":23,"./assets/frame/scripts/UI/Panel/AffirmTips":24,"./assets/frame/scripts/UI/Item/MaskGlobal":25,"./assets/frame/scripts/UI/Item/replayBtn":26,"./assets/frame/scripts/UI/Panel/StarCount":27,"./assets/frame/scripts/UI/Panel/LoadingUI":28,"./assets/frame/scripts/UI/Panel/TipUI":29,"./assets/frame/scripts/UI/Panel/BaseGamePanel":30,"./assets/frame/scripts/UI/Panel/UploadAndReturnPanel":32,"./assets/frame/scripts/UI/Panel/OverTips":34,"./assets/frame/scripts/UI/Panel/SubmissionPanel":35,"./assets/game/scripts/UI/Components/DragSync":42,"./assets/game/scripts/UI/Item/Level_2":44,"./assets/game/scripts/UI/panel/TeacherPanel":45,"./assets/game/scripts/UI/Item/OptionItem":49,"./assets/game/scripts/UI/Item/Level_3":50,"./assets/game/scripts/UI/Item/Level_1":52,"./assets/game/scripts/UI/Item/Level_4":53,"./assets/game/scripts/UI/Item/FillArea":54,"./assets/game/scripts/UI/Components/ButtonSync":55,"./assets/game/scripts/UI/panel/GamePanel":56},"path":"preview-scripts/__qc_index__.js"},{"deps":{"../../Manager/ListenerManager":12,"../../Data/FrameMsgType":5,"../BindNode":17},"path":"preview-scripts/assets/frame/scripts/UI/Item/TeacherPanelLoading.js"},{"deps":{},"path":"preview-scripts/assets/game/scripts/Data/CustomSyncData.js"},{"deps":{"../../../game/scripts/Manager/EditorManager":43,"../../../game/scripts/Data/ConstValue":46,"../SDK/GameMsg":14},"path":"preview-scripts/assets/frame/scripts/Manager/ReportManager.js"},{"deps":{},"path":"preview-scripts/assets/game/scripts/SkeletonExt.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/Data/FrameMsgType.js"},{"deps":{"../../../game/scripts/Data/ConstValue":46,"../Utils/UIHelp":37,"../Manager/UIManager":10,"../SDK/GameMsg":14},"path":"preview-scripts/assets/frame/scripts/Http/NetWork.js"},{"deps":{"../Data/FrameMsgType":5,"../Manager/SyncDataManager":15,"../Utils/UIHelp":37,"../Http/NetWork":6,"../Manager/ListenerManager":12,"./GameMsg":14},"path":"preview-scripts/assets/frame/scripts/SDK/T2M.js"},{"deps":{"../../Http/NetWork":6,"../../../../game/scripts/Data/ConstValue":46,"../../Utils/UIHelp":37,"../BaseUI":13,"../../../../game/scripts/Manager/EditorManager":43},"path":"preview-scripts/assets/frame/scripts/UI/Panel/BaseTeacherPanel.js"},{"deps":{"./BoundingBoxHelp":31},"path":"preview-scripts/assets/frame/scripts/Utils/BoundingBoxDemo.js"},{"deps":{"../UI/BaseUI":13},"path":"preview-scripts/assets/frame/scripts/Manager/UIManager.js"},{"deps":{"../Data/FrameConstValue":41,"../Data/FrameMsgType":5,"../SDK/GameMsg":14,"../Http/NetWork":6,"./UIManager":10,"./ListenerManager":12},"path":"preview-scripts/assets/frame/scripts/Manager/SoundManager.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/Manager/ListenerManager.js"},{"deps":{"../Data/FrameConstValue":41,"../Manager/ListenerManager":12,"./BindNode":17},"path":"preview-scripts/assets/frame/scripts/UI/BaseUI.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/SDK/GameMsg.js"},{"deps":{"../../../frame/scripts/Data/FrameSyncData":38,"../../../frame/scripts/Manager/ReportManager":3,"../../../game/scripts/Data/CustomSyncData":2},"path":"preview-scripts/assets/frame/scripts/Manager/SyncDataManager.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/UI/AdaptiveScreen.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/UI/BindNode.js"},{"deps":{"./BaseUI":13,"../Data/FrameConstValue":41},"path":"preview-scripts/assets/frame/scripts/UI/BaseFrameUI.js"},{"deps":{"../../Data/FrameMsgType":5,"../../Manager/ListenerManager":12},"path":"preview-scripts/assets/frame/scripts/UI/Item/TitleNode.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/UI/Item/Tip.js"},{"deps":{"../../../game/scripts/Manager/EditorManager":43,"../Manager/ListenerManager":12,"../Data/FrameMsgType":5,"../Http/NetWork":6,"../Manager/SoundManager":11,"../Manager/ReportManager":3,"../SDK/GameMsg":14,"../Manager/SyncDataManager":15,"../Manager/UIManager":10,"../SDK/T2M":7,"../Utils/UIHelp":37},"path":"preview-scripts/assets/frame/scripts/UI/GameMain.js"},{"deps":{"../../Manager/ListenerManager":12,"../BindNode":17,"../../Data/FrameMsgType":5,"../../Manager/UIManager":10},"path":"preview-scripts/assets/frame/scripts/UI/Item/MaskRecover.js"},{"deps":{"./../../SDK/GameMsg":14,"../../Utils/UIHelp":37,"./../../Manager/SoundManager":11,"./../BaseFrameUI":18},"path":"preview-scripts/assets/frame/scripts/UI/Panel/ErrorPanel.js"},{"deps":{"../../SDK/T2M":7,"../../Utils/UIHelp":37,"../../Data/FrameMsgType":5,"../BaseFrameUI":18},"path":"preview-scripts/assets/frame/scripts/UI/Panel/AffirmTips.js"},{"deps":{"../../Data/FrameMsgType":5,"../../Manager/ListenerManager":12,"../../Manager/UIManager":10,"../BindNode":17,"../../Utils/UIHelp":37},"path":"preview-scripts/assets/frame/scripts/UI/Item/MaskGlobal.js"},{"deps":{"../../Data/FrameMsgType":5,"../../SDK/T2M":7},"path":"preview-scripts/assets/frame/scripts/UI/Item/replayBtn.js"},{"deps":{"../../Utils/Tools":36,"../../../../game/scripts/Manager/EditorManager":43,"./../../Manager/SoundManager":11,"../../Manager/ReportManager":3,"../BaseFrameUI":18,"../../../../game/scripts/Data/ConstValue":46,"../../Utils/UIHelp":37},"path":"preview-scripts/assets/frame/scripts/UI/Panel/StarCount.js"},{"deps":{"../../../../game/scripts/Data/ConstValue":46,"../../../../game/scripts/UI/panel/GamePanel":56,"../../Manager/SoundManager":11,"../../../../game/scripts/UI/panel/TeacherPanel":45,"../../SDK/GameMsg":14,"../../Http/NetWork":6,"../../Manager/UIManager":10,"../BaseFrameUI":18},"path":"preview-scripts/assets/frame/scripts/UI/Panel/LoadingUI.js"},{"deps":{"../Item/Tip":20,"../BaseFrameUI":18},"path":"preview-scripts/assets/frame/scripts/UI/Panel/TipUI.js"},{"deps":{"../../../../game/scripts/Data/ConstValue":46,"../../Http/NetWork":6,"../../../../game/scripts/Manager/EditorManager":43,"../../Manager/ListenerManager":12,"../../Data/FrameMsgType":5,"../../SDK/GameMsg":14,"../../Manager/ReportManager":3,"../../Manager/SyncDataManager":15,"../../Manager/SoundManager":11,"../../Manager/UIManager":10,"../../SDK/T2M":7,"../../Utils/UIHelp":37,"../BaseUI":13},"path":"preview-scripts/assets/frame/scripts/UI/Panel/BaseGamePanel.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/Utils/BoundingBoxHelp.js"},{"deps":{"./../../Manager/ListenerManager":12,"../BaseFrameUI":18,"../../Utils/UIHelp":37,"../../Manager/SoundManager":11,"../../Manager/ReportManager":3,"../../SDK/T2M":7,"../../Data/FrameMsgType":5},"path":"preview-scripts/assets/frame/scripts/UI/Panel/UploadAndReturnPanel.js"},{"deps":{"./../Manager/SoundManager":11},"path":"preview-scripts/assets/frame/scripts/Utils/AudioPlayExtension.js"},{"deps":{"../BaseFrameUI":18,"./../../Manager/SoundManager":11,"../../Utils/UIHelp":37,"../../Data/FrameMsgType":5,"../../Manager/UIManager":10,"../../Utils/Tools":36,"../../SDK/T2M":7,"../../../../game/scripts/Data/ConstValue":46},"path":"preview-scripts/assets/frame/scripts/UI/Panel/OverTips.js"},{"deps":{"../../Http/NetWork":6,"../BaseFrameUI":18,"../../Utils/UIHelp":37,"../../../../game/scripts/Data/ConstValue":46,"../../../../game/scripts/Manager/EditorManager":43},"path":"preview-scripts/assets/frame/scripts/UI/Panel/SubmissionPanel.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/Utils/Tools.js"},{"deps":{"../Data/FrameMsgType":5,"../Manager/UIManager":10,"../../../game/scripts/UI/panel/GamePanel":56,"../../../game/scripts/UI/panel/TeacherPanel":45,"../UI/Panel/ErrorPanel":23,"../Manager/ListenerManager":12,"../UI/Panel/AffirmTips":24,"../UI/Panel/TipUI":29,"../UI/Panel/SubmissionPanel":35,"../UI/Panel/OverTips":34,"../UI/Panel/StarCount":27,"../UI/Panel/UploadAndReturnPanel":32},"path":"preview-scripts/assets/frame/scripts/Utils/UIHelp.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/Data/FrameSyncData.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/Utils/MathUtils.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/Utils/HitTest.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/Data/FrameConstValue.js"},{"deps":{"../../../../frame/scripts/SDK/T2M":7},"path":"preview-scripts/assets/game/scripts/UI/Components/DragSync.js"},{"deps":{},"path":"preview-scripts/assets/game/scripts/Manager/EditorManager.js"},{"deps":{"../../../../frame/scripts/Manager/ListenerManager":12,"../../../../frame/scripts/Manager/SoundManager":11,"../../Data/EventType":48,"../../../../frame/scripts/Manager/SyncDataManager":15,"../../Manager/EditorManager":43,"./FillArea":54,"./OptionItem":49,"./SoundConfig":51},"path":"preview-scripts/assets/game/scripts/UI/Item/Level_2.js"},{"deps":{"../../../../frame/scripts/Manager/ListenerManager":12,"./GamePanel":56,"../../../../frame/scripts/UI/Panel/BaseTeacherPanel":8,"../../../../frame/scripts/Data/FrameMsgType":5,"../../../../frame/scripts/Manager/UIManager":10,"../../../../frame/scripts/Utils/UIHelp":37,"../../Manager/EditorManager":43},"path":"preview-scripts/assets/game/scripts/UI/panel/TeacherPanel.js"},{"deps":{},"path":"preview-scripts/assets/game/scripts/Data/ConstValue.js"},{"deps":{},"path":"preview-scripts/assets/game/scripts/Manager/GameManager.js"},{"deps":{},"path":"preview-scripts/assets/game/scripts/Data/EventType.js"},{"deps":{"../../Data/EventType":48,"../../../../frame/scripts/Utils/HitTest":40,"../../Manager/EditorManager":43,"../../../../frame/scripts/Manager/ListenerManager":12,"./FillArea":54},"path":"preview-scripts/assets/game/scripts/UI/Item/OptionItem.js"},{"deps":{"../../../../frame/scripts/Manager/SyncDataManager":15,"../../../../frame/scripts/Manager/ListenerManager":12,"../../../../frame/scripts/Manager/SoundManager":11,"../../Data/EventType":48,"../../Manager/EditorManager":43,"./FillArea":54,"./OptionItem":49,"./SoundConfig":51},"path":"preview-scripts/assets/game/scripts/UI/Item/Level_3.js"},{"deps":{},"path":"preview-scripts/assets/game/scripts/UI/Item/SoundConfig.js"},{"deps":{"../../Data/EventType":48,"../../../../frame/scripts/Manager/ListenerManager":12,"../../../../frame/scripts/Manager/SoundManager":11,"../../../../frame/scripts/Manager/SyncDataManager":15,"./OptionItem":49,"../../Manager/EditorManager":43,"./FillArea":54,"./SoundConfig":51},"path":"preview-scripts/assets/game/scripts/UI/Item/Level_1.js"},{"deps":{"../../../../frame/scripts/Manager/SyncDataManager":15,"../../../../frame/scripts/Manager/ListenerManager":12,"./FillArea":54,"../../../../frame/scripts/Manager/SoundManager":11,"../../Data/EventType":48,"../../Manager/EditorManager":43,"./OptionItem":49,"./SoundConfig":51},"path":"preview-scripts/assets/game/scripts/UI/Item/Level_4.js"},{"deps":{"../../../../frame/scripts/Manager/ListenerManager":12,"../../../../frame/scripts/Manager/SoundManager":11,"../../../../frame/scripts/Utils/HitTest":40,"../../Manager/EditorManager":43,"../../Data/EventType":48,"./SoundConfig":51},"path":"preview-scripts/assets/game/scripts/UI/Item/FillArea.js"},{"deps":{"../../../../frame/scripts/SDK/T2M":7},"path":"preview-scripts/assets/game/scripts/UI/Components/ButtonSync.js"},{"deps":{"../../Data/EventType":48,"../../../../frame/scripts/Manager/ListenerManager":12,"../../../../frame/scripts/UI/Panel/BaseGamePanel":30,"../../../../frame/scripts/Manager/SyncDataManager":15,"../../Manager/EditorManager":43},"path":"preview-scripts/assets/game/scripts/UI/panel/GamePanel.js"}];
var entries = ["preview-scripts/__qc_index__.js"];
var bundleScript = 'preview-scripts/__qc_bundle__.js';

/**
 * Notice: This file can not use ES6 (for IE 11)
 */
var modules = {};
var name2path = {};

// Will generated by module.js plugin
// var scripts = ${scripts};
// var entries = ${entries};
// var bundleScript = ${bundleScript};

if (typeof global === 'undefined') {
    window.global = window;
}

var isJSB = typeof jsb !== 'undefined';

function getXMLHttpRequest () {
    return window.XMLHttpRequest ? new window.XMLHttpRequest() : new ActiveXObject('MSXML2.XMLHTTP');
}

function downloadText(url, callback) {
    if (isJSB) {
        var result = jsb.fileUtils.getStringFromFile(url);
        callback(null, result);
        return;
    }

    var xhr = getXMLHttpRequest(),
        errInfo = 'Load text file failed: ' + url;
    xhr.open('GET', url, true);
    if (xhr.overrideMimeType) xhr.overrideMimeType('text\/plain; charset=utf-8');
    xhr.onload = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200 || xhr.status === 0) {
                callback(null, xhr.responseText);
            }
            else {
                callback({status:xhr.status, errorMessage:errInfo + ', status: ' + xhr.status});
            }
        }
        else {
            callback({status:xhr.status, errorMessage:errInfo + '(wrong readyState)'});
        }
    };
    xhr.onerror = function(){
        callback({status:xhr.status, errorMessage:errInfo + '(error)'});
    };
    xhr.ontimeout = function(){
        callback({status:xhr.status, errorMessage:errInfo + '(time out)'});
    };
    xhr.send(null);
};

function loadScript (src, cb) {
    if (typeof require !== 'undefined') {
        require(src);
        return cb();
    }

    // var timer = 'load ' + src;
    // console.time(timer);

    var scriptElement = document.createElement('script');

    function done() {
        // console.timeEnd(timer);
        // deallocation immediate whatever
        scriptElement.remove();
    }

    scriptElement.onload = function () {
        done();
        cb();
    };
    scriptElement.onerror = function () {
        done();
        var error = 'Failed to load ' + src;
        console.error(error);
        cb(new Error(error));
    };
    scriptElement.setAttribute('type','text/javascript');
    scriptElement.setAttribute('charset', 'utf-8');
    scriptElement.setAttribute('src', src);

    document.head.appendChild(scriptElement);
}

function loadScripts (srcs, cb) {
    var n = srcs.length;

    srcs.forEach(function (src) {
        loadScript(src, function () {
            n--;
            if (n === 0) {
                cb();
            }
        });
    })
}

function formatPath (path) {
    let destPath = window.__quick_compile_project__.destPath;
    if (destPath) {
        let prefix = 'preview-scripts';
        if (destPath[destPath.length - 1] === '/') {
            prefix += '/';
        }
        path = path.replace(prefix, destPath);
    }
    return path;
}

window.__quick_compile_project__ = {
    destPath: '',

    registerModule: function (path, module) {
        path = formatPath(path);
        modules[path].module = module;
    },

    registerModuleFunc: function (path, func) {
        path = formatPath(path);
        modules[path].func = func;

        var sections = path.split('/');
        var name = sections[sections.length - 1];
        name = name.replace(/\.(?:js|ts|json)$/i, '');
        name2path[name] = path;
    },

    require: function (request, path) {
        var m, requestScript;

        path = formatPath(path);
        if (path) {
            m = modules[path];
            if (!m) {
                console.warn('Can not find module for path : ' + path);
                return null;
            }
        }

        if (m) {
            let depIndex = m.deps[request];
            // dependence script was excluded
            if (depIndex === -1) {
                return null;
            }
            else {
                requestScript = scripts[ m.deps[request] ];
            }
        }
        
        let requestPath = '';
        if (!requestScript) {
            // search from name2path when request is a dynamic module name
            if (/^[\w- .]*$/.test(request)) {
                requestPath = name2path[request];
            }

            if (!requestPath) {
                if (CC_JSB) {
                    return require(request);
                }
                else {
                    console.warn('Can not find deps [' + request + '] for path : ' + path);
                    return null;
                }
            }
        }
        else {
            requestPath = formatPath(requestScript.path);
        }

        let requestModule = modules[requestPath];
        if (!requestModule) {
            console.warn('Can not find request module for path : ' + requestPath);
            return null;
        }

        if (!requestModule.module && requestModule.func) {
            requestModule.func();
        }

        if (!requestModule.module) {
            console.warn('Can not find requestModule.module for path : ' + path);
            return null;
        }

        return requestModule.module.exports;
    },

    run: function () {
        entries.forEach(function (entry) {
            entry = formatPath(entry);
            var module = modules[entry];
            if (!module.module) {
                module.func();
            }
        });
    },

    load: function (cb) {
        var self = this;

        var srcs = scripts.map(function (script) {
            var path = formatPath(script.path);
            modules[path] = script;

            if (script.mtime) {
                path += ("?mtime=" + script.mtime);
            }
            return path;
        });

        console.time && console.time('load __quick_compile_project__');
        // jsb can not analysis sourcemap, so keep separate files.
        if (bundleScript && !isJSB) {
            downloadText(formatPath(bundleScript), function (err, bundleSource) {
                console.timeEnd && console.timeEnd('load __quick_compile_project__');
                if (err) {
                    console.error(err);
                    return;
                }

                let evalTime = 'eval __quick_compile_project__ : ' + srcs.length + ' files';
                console.time && console.time(evalTime);
                var sources = bundleSource.split('\n//------QC-SOURCE-SPLIT------\n');
                for (var i = 0; i < sources.length; i++) {
                    if (sources[i]) {
                        window.eval(sources[i]);
                        // not sure why new Function cannot set breakpoints precisely
                        // new Function(sources[i])()
                    }
                }
                self.run();
                console.timeEnd && console.timeEnd(evalTime);
                cb();
            })
        }
        else {
            loadScripts(srcs, function () {
                self.run();
                console.timeEnd && console.timeEnd('load __quick_compile_project__');
                cb();
            });
        }
    }
};

// Polyfill for IE 11
if (!('remove' in Element.prototype)) {
    Element.prototype.remove = function () {
        if (this.parentNode) {
            this.parentNode.removeChild(this);
        }
    };
}
})();
    