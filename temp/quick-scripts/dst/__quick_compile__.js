
(function () {
var scripts = [{"deps":{"./assets/game/scripts/Data/CustomSyncData":3,"./assets/game/scripts/Data/EventType":43,"./assets/game/scripts/Data/ConstValue":48,"./assets/game/scripts/SkeletonExt":5,"./assets/game/scripts/Manager/GameManager":46,"./assets/game/scripts/UI/Components/ButtonSync":47,"./assets/game/scripts/UI/Item/Level_1":55,"./assets/game/scripts/UI/Item/OptionItem":51,"./assets/game/scripts/UI/Item/Level_2":49,"./assets/game/scripts/UI/Item/Level_3":45,"./assets/game/scripts/UI/Item/Level_4":52,"./assets/game/scripts/UI/Item/SoundConfig":54,"./assets/game/scripts/UI/Item/FillArea":53,"./assets/game/scripts/UI/panel/TeacherPanel":2,"./assets/game/scripts/UI/panel/GamePanel":36,"./assets/game/scripts/UI/Components/DragSync":56,"./assets/frame/scripts/Data/FrameConstValue":4,"./assets/frame/scripts/Http/NetWork":6,"./assets/frame/scripts/Manager/ReportManager":7,"./assets/frame/scripts/Manager/SyncDataManager":14,"./assets/frame/scripts/Manager/ListenerManager":16,"./assets/frame/scripts/Manager/UIManager":12,"./assets/frame/scripts/Manager/SoundManager":13,"./assets/frame/scripts/SDK/T2M":8,"./assets/frame/scripts/SDK/GameMsg":11,"./assets/frame/scripts/UI/BaseUI":15,"./assets/frame/scripts/UI/BaseFrameUI":39,"./assets/frame/scripts/UI/BindNode":19,"./assets/frame/scripts/UI/GameMain":18,"./assets/frame/scripts/UI/AdaptiveScreen":22,"./assets/frame/scripts/UI/Item/MaskRecover":20,"./assets/frame/scripts/UI/Item/TeacherPanelLoading":1,"./assets/frame/scripts/UI/Item/Tip":23,"./assets/frame/scripts/UI/Item/TitleNode":24,"./assets/frame/scripts/UI/Item/replayBtn":21,"./assets/frame/scripts/UI/Item/MaskGlobal":17,"./assets/frame/scripts/UI/Panel/BaseGamePanel":28,"./assets/frame/scripts/UI/Panel/ErrorPanel":26,"./assets/frame/scripts/UI/Panel/BaseTeacherPanel":9,"./assets/frame/scripts/UI/Panel/LoadingUI":30,"./assets/frame/scripts/UI/Panel/OverTips":33,"./assets/frame/scripts/UI/Panel/SubmissionPanel":27,"./assets/frame/scripts/UI/Panel/StarCount":32,"./assets/frame/scripts/UI/Panel/TipUI":25,"./assets/frame/scripts/UI/Panel/UploadAndReturnPanel":31,"./assets/frame/scripts/UI/Panel/AffirmTips":29,"./assets/frame/scripts/Utils/BoundingBoxDemo":40,"./assets/frame/scripts/Utils/BoundingBoxHelp":35,"./assets/frame/scripts/Utils/MathUtils":34,"./assets/frame/scripts/Utils/HitTest":10,"./assets/frame/scripts/Utils/Tools":42,"./assets/frame/scripts/Utils/UIHelp":37,"./assets/frame/scripts/Utils/AudioPlayExtension":44,"./assets/frame/scripts/Data/FrameMsgType":38,"./assets/frame/scripts/Data/FrameSyncData":41,"./assets/game/scripts/Manager/EditorManager":50},"path":"preview-scripts/__qc_index__.js"},{"deps":{"../../Data/FrameMsgType":38,"../../Manager/ListenerManager":16,"../BindNode":19},"path":"preview-scripts/assets/frame/scripts/UI/Item/TeacherPanelLoading.js"},{"deps":{"../../../../frame/scripts/UI/Panel/BaseTeacherPanel":9,"../../Manager/EditorManager":50,"../../../../frame/scripts/Data/FrameMsgType":38,"../../../../frame/scripts/Manager/ListenerManager":16,"./GamePanel":36,"../../../../frame/scripts/Utils/UIHelp":37,"../../../../frame/scripts/Manager/UIManager":12},"path":"preview-scripts/assets/game/scripts/UI/panel/TeacherPanel.js"},{"deps":{},"path":"preview-scripts/assets/game/scripts/Data/CustomSyncData.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/Data/FrameConstValue.js"},{"deps":{},"path":"preview-scripts/assets/game/scripts/SkeletonExt.js"},{"deps":{"../SDK/GameMsg":11,"../Manager/UIManager":12,"../Utils/UIHelp":37,"../../../game/scripts/Data/ConstValue":48},"path":"preview-scripts/assets/frame/scripts/Http/NetWork.js"},{"deps":{"../../../game/scripts/Manager/EditorManager":50,"../../../game/scripts/Data/ConstValue":48,"../SDK/GameMsg":11},"path":"preview-scripts/assets/frame/scripts/Manager/ReportManager.js"},{"deps":{"../Http/NetWork":6,"../Manager/ListenerManager":16,"../Data/FrameMsgType":38,"../Utils/UIHelp":37,"./GameMsg":11,"../Manager/SyncDataManager":14},"path":"preview-scripts/assets/frame/scripts/SDK/T2M.js"},{"deps":{"../../../../game/scripts/Data/ConstValue":48,"../../Http/NetWork":6,"../../../../game/scripts/Manager/EditorManager":50,"../BaseUI":15,"../../Utils/UIHelp":37},"path":"preview-scripts/assets/frame/scripts/UI/Panel/BaseTeacherPanel.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/Utils/HitTest.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/SDK/GameMsg.js"},{"deps":{"../UI/BaseUI":15},"path":"preview-scripts/assets/frame/scripts/Manager/UIManager.js"},{"deps":{"../Data/FrameConstValue":4,"../Http/NetWork":6,"./ListenerManager":16,"../Data/FrameMsgType":38,"../SDK/GameMsg":11,"./UIManager":12},"path":"preview-scripts/assets/frame/scripts/Manager/SoundManager.js"},{"deps":{"../../../frame/scripts/Data/FrameSyncData":41,"../../../frame/scripts/Manager/ReportManager":7,"../../../game/scripts/Data/CustomSyncData":3},"path":"preview-scripts/assets/frame/scripts/Manager/SyncDataManager.js"},{"deps":{"../Manager/ListenerManager":16,"../Data/FrameConstValue":4,"./BindNode":19},"path":"preview-scripts/assets/frame/scripts/UI/BaseUI.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/Manager/ListenerManager.js"},{"deps":{"../../Data/FrameMsgType":38,"../../Manager/ListenerManager":16,"../BindNode":19,"../../Manager/UIManager":12,"../../Utils/UIHelp":37},"path":"preview-scripts/assets/frame/scripts/UI/Item/MaskGlobal.js"},{"deps":{"../../../game/scripts/Manager/EditorManager":50,"../Data/FrameMsgType":38,"../Manager/SoundManager":13,"../Manager/ReportManager":7,"../Manager/ListenerManager":16,"../Http/NetWork":6,"../Manager/UIManager":12,"../SDK/GameMsg":11,"../Manager/SyncDataManager":14,"../SDK/T2M":8,"../Utils/UIHelp":37},"path":"preview-scripts/assets/frame/scripts/UI/GameMain.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/UI/BindNode.js"},{"deps":{"../../Data/FrameMsgType":38,"../../Manager/ListenerManager":16,"../BindNode":19,"../../Manager/UIManager":12},"path":"preview-scripts/assets/frame/scripts/UI/Item/MaskRecover.js"},{"deps":{"../../Data/FrameMsgType":38,"../../SDK/T2M":8},"path":"preview-scripts/assets/frame/scripts/UI/Item/replayBtn.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/UI/AdaptiveScreen.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/UI/Item/Tip.js"},{"deps":{"../../Manager/ListenerManager":16,"../../Data/FrameMsgType":38},"path":"preview-scripts/assets/frame/scripts/UI/Item/TitleNode.js"},{"deps":{"../BaseFrameUI":39,"../Item/Tip":23},"path":"preview-scripts/assets/frame/scripts/UI/Panel/TipUI.js"},{"deps":{"./../../SDK/GameMsg":11,"./../../Manager/SoundManager":13,"../../Utils/UIHelp":37,"./../BaseFrameUI":39},"path":"preview-scripts/assets/frame/scripts/UI/Panel/ErrorPanel.js"},{"deps":{"../../Utils/UIHelp":37,"../../Http/NetWork":6,"../BaseFrameUI":39,"../../../../game/scripts/Manager/EditorManager":50,"../../../../game/scripts/Data/ConstValue":48},"path":"preview-scripts/assets/frame/scripts/UI/Panel/SubmissionPanel.js"},{"deps":{"../../../../game/scripts/Manager/EditorManager":50,"../../../../game/scripts/Data/ConstValue":48,"../../Manager/ListenerManager":16,"../../Manager/ReportManager":7,"../../Http/NetWork":6,"../../Data/FrameMsgType":38,"../../Manager/SoundManager":13,"../../Manager/SyncDataManager":14,"../../Manager/UIManager":12,"../../SDK/T2M":8,"../../Utils/UIHelp":37,"../../SDK/GameMsg":11,"../BaseUI":15},"path":"preview-scripts/assets/frame/scripts/UI/Panel/BaseGamePanel.js"},{"deps":{"../../Data/FrameMsgType":38,"../../SDK/T2M":8,"../BaseFrameUI":39,"../../Utils/UIHelp":37},"path":"preview-scripts/assets/frame/scripts/UI/Panel/AffirmTips.js"},{"deps":{"../../../../game/scripts/Data/ConstValue":48,"../../../../game/scripts/UI/panel/TeacherPanel":2,"../../../../game/scripts/UI/panel/GamePanel":36,"../../Http/NetWork":6,"../../SDK/GameMsg":11,"../../Manager/UIManager":12,"../../Manager/SoundManager":13,"../BaseFrameUI":39},"path":"preview-scripts/assets/frame/scripts/UI/Panel/LoadingUI.js"},{"deps":{"../BaseFrameUI":39,"./../../Manager/ListenerManager":16,"../../Data/FrameMsgType":38,"../../Manager/SoundManager":13,"../../SDK/T2M":8,"../../Utils/UIHelp":37,"../../Manager/ReportManager":7},"path":"preview-scripts/assets/frame/scripts/UI/Panel/UploadAndReturnPanel.js"},{"deps":{"./../../Manager/SoundManager":13,"../../Utils/Tools":42,"../../Utils/UIHelp":37,"../../../../game/scripts/Data/ConstValue":48,"../../../../game/scripts/Manager/EditorManager":50,"../../Manager/ReportManager":7,"../BaseFrameUI":39},"path":"preview-scripts/assets/frame/scripts/UI/Panel/StarCount.js"},{"deps":{"../../Utils/Tools":42,"./../../Manager/SoundManager":13,"../../SDK/T2M":8,"../BaseFrameUI":39,"../../Utils/UIHelp":37,"../../Data/FrameMsgType":38,"../../../../game/scripts/Data/ConstValue":48,"../../Manager/UIManager":12},"path":"preview-scripts/assets/frame/scripts/UI/Panel/OverTips.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/Utils/MathUtils.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/Utils/BoundingBoxHelp.js"},{"deps":{"../../../../frame/scripts/Manager/ListenerManager":16,"../../Manager/EditorManager":50,"../../../../frame/scripts/UI/Panel/BaseGamePanel":28,"../../../../frame/scripts/Manager/SyncDataManager":14,"../../Data/EventType":43},"path":"preview-scripts/assets/game/scripts/UI/panel/GamePanel.js"},{"deps":{"../Data/FrameMsgType":38,"../../../game/scripts/UI/panel/GamePanel":36,"../../../game/scripts/UI/panel/TeacherPanel":2,"../Manager/ListenerManager":16,"../Manager/UIManager":12,"../UI/Panel/AffirmTips":29,"../UI/Panel/ErrorPanel":26,"../UI/Panel/StarCount":32,"../UI/Panel/OverTips":33,"../UI/Panel/SubmissionPanel":27,"../UI/Panel/TipUI":25,"../UI/Panel/UploadAndReturnPanel":31},"path":"preview-scripts/assets/frame/scripts/Utils/UIHelp.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/Data/FrameMsgType.js"},{"deps":{"../Data/FrameConstValue":4,"./BaseUI":15},"path":"preview-scripts/assets/frame/scripts/UI/BaseFrameUI.js"},{"deps":{"./BoundingBoxHelp":35},"path":"preview-scripts/assets/frame/scripts/Utils/BoundingBoxDemo.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/Data/FrameSyncData.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/Utils/Tools.js"},{"deps":{},"path":"preview-scripts/assets/game/scripts/Data/EventType.js"},{"deps":{"./../Manager/SoundManager":13},"path":"preview-scripts/assets/frame/scripts/Utils/AudioPlayExtension.js"},{"deps":{"./FillArea":53,"./OptionItem":51,"./SoundConfig":54,"../../Manager/EditorManager":50,"../../Data/EventType":43,"../../../../frame/scripts/Manager/ListenerManager":16,"../../../../frame/scripts/Utils/Tools":42,"../../../../frame/scripts/Manager/SoundManager":13,"../../../../frame/scripts/Manager/SyncDataManager":14},"path":"preview-scripts/assets/game/scripts/UI/Item/Level_3.js"},{"deps":{},"path":"preview-scripts/assets/game/scripts/Manager/GameManager.js"},{"deps":{"../../../../frame/scripts/SDK/T2M":8},"path":"preview-scripts/assets/game/scripts/UI/Components/ButtonSync.js"},{"deps":{},"path":"preview-scripts/assets/game/scripts/Data/ConstValue.js"},{"deps":{"./FillArea":53,"./SoundConfig":54,"./OptionItem":51,"../../Data/EventType":43,"../../Manager/EditorManager":50,"../../../../frame/scripts/Manager/ListenerManager":16,"../../../../frame/scripts/Utils/Tools":42,"../../../../frame/scripts/Manager/SyncDataManager":14,"../../../../frame/scripts/Manager/SoundManager":13},"path":"preview-scripts/assets/game/scripts/UI/Item/Level_2.js"},{"deps":{},"path":"preview-scripts/assets/game/scripts/Manager/EditorManager.js"},{"deps":{"./FillArea":53,"../../Data/EventType":43,"../../Manager/EditorManager":50,"../../../../frame/scripts/Utils/HitTest":10,"../../../../frame/scripts/Manager/SyncDataManager":14,"../../../../frame/scripts/Manager/ListenerManager":16},"path":"preview-scripts/assets/game/scripts/UI/Item/OptionItem.js"},{"deps":{"./FillArea":53,"./OptionItem":51,"../../Data/EventType":43,"./SoundConfig":54,"../../Manager/EditorManager":50,"../../../../frame/scripts/Manager/ListenerManager":16,"../../../../frame/scripts/Utils/Tools":42,"../../../../frame/scripts/Manager/SoundManager":13,"../../../../frame/scripts/Manager/SyncDataManager":14},"path":"preview-scripts/assets/game/scripts/UI/Item/Level_4.js"},{"deps":{"../../../../frame/scripts/Manager/ListenerManager":16,"../../../../frame/scripts/Manager/SyncDataManager":14,"../../../../frame/scripts/Manager/SoundManager":13,"../../Data/EventType":43,"../../Manager/EditorManager":50,"../../../../frame/scripts/Utils/HitTest":10,"./SoundConfig":54,"../../../../frame/scripts/Utils/Tools":42},"path":"preview-scripts/assets/game/scripts/UI/Item/FillArea.js"},{"deps":{},"path":"preview-scripts/assets/game/scripts/UI/Item/SoundConfig.js"},{"deps":{"./SoundConfig":54,"./OptionItem":51,"./FillArea":53,"../../Data/EventType":43,"../../Manager/EditorManager":50,"../../../../frame/scripts/Manager/SoundManager":13,"../../../../frame/scripts/Utils/Tools":42,"../../../../frame/scripts/Manager/ListenerManager":16,"../../../../frame/scripts/Manager/SyncDataManager":14},"path":"preview-scripts/assets/game/scripts/UI/Item/Level_1.js"},{"deps":{"../../../../frame/scripts/SDK/T2M":8},"path":"preview-scripts/assets/game/scripts/UI/Components/DragSync.js"}];
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
    