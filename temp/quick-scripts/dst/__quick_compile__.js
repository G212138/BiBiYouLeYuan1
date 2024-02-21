
(function () {
var scripts = [{"deps":{"./assets/game/scripts/Data/ConstValue":52,"./assets/game/scripts/Manager/EditorManager":4,"./assets/game/scripts/Manager/GameManager":51,"./assets/game/scripts/SkeletonExt":6,"./assets/game/scripts/Data/CustomSyncData":16,"./assets/game/scripts/UI/Components/ButtonSync":50,"./assets/game/scripts/UI/Item/Level_3":55,"./assets/game/scripts/UI/Item/Level_2":54,"./assets/game/scripts/UI/Item/OptionItem":2,"./assets/game/scripts/UI/Item/Level_1":53,"./assets/game/scripts/UI/Item/Level_4":56,"./assets/game/scripts/UI/Item/SoundConfig":15,"./assets/game/scripts/UI/Item/FillArea":18,"./assets/game/scripts/UI/panel/TeacherPanel":14,"./assets/game/scripts/UI/panel/GamePanel":7,"./assets/game/scripts/UI/Components/DragSync":8,"./assets/frame/scripts/Data/FrameSyncData":45,"./assets/frame/scripts/Http/NetWork":10,"./assets/frame/scripts/Manager/ListenerManager":5,"./assets/frame/scripts/Manager/SoundManager":19,"./assets/frame/scripts/Manager/SyncDataManager":21,"./assets/frame/scripts/Manager/UIManager":22,"./assets/frame/scripts/Manager/ReportManager":26,"./assets/frame/scripts/SDK/GameMsg":11,"./assets/frame/scripts/SDK/T2M":20,"./assets/frame/scripts/UI/BindNode":17,"./assets/frame/scripts/UI/BaseUI":24,"./assets/frame/scripts/UI/GameMain":29,"./assets/frame/scripts/UI/AdaptiveScreen":28,"./assets/frame/scripts/UI/BaseFrameUI":25,"./assets/frame/scripts/UI/Item/MaskGlobal":30,"./assets/frame/scripts/UI/Item/MaskRecover":27,"./assets/frame/scripts/UI/Item/TeacherPanelLoading":3,"./assets/frame/scripts/UI/Item/TitleNode":33,"./assets/frame/scripts/UI/Item/replayBtn":32,"./assets/frame/scripts/UI/Item/Tip":23,"./assets/frame/scripts/UI/Panel/BaseTeacherPanel":34,"./assets/frame/scripts/UI/Panel/BaseGamePanel":43,"./assets/frame/scripts/UI/Panel/ErrorPanel":31,"./assets/frame/scripts/UI/Panel/SubmissionPanel":36,"./assets/frame/scripts/UI/Panel/LoadingUI":39,"./assets/frame/scripts/UI/Panel/StarCount":41,"./assets/frame/scripts/UI/Panel/OverTips":35,"./assets/frame/scripts/UI/Panel/UploadAndReturnPanel":38,"./assets/frame/scripts/UI/Panel/TipUI":40,"./assets/frame/scripts/UI/Panel/AffirmTips":12,"./assets/frame/scripts/Utils/BoundingBoxDemo":42,"./assets/frame/scripts/Utils/HitTest":44,"./assets/frame/scripts/Utils/BoundingBoxHelp":48,"./assets/frame/scripts/Utils/MathUtils":37,"./assets/frame/scripts/Utils/Tools":46,"./assets/frame/scripts/Utils/UIHelp":49,"./assets/frame/scripts/Utils/AudioPlayExtension":13,"./assets/frame/scripts/Data/FrameConstValue":9,"./assets/frame/scripts/Data/FrameMsgType":47,"./assets/game/scripts/Data/EventType":1},"path":"preview-scripts/__qc_index__.js"},{"deps":{},"path":"preview-scripts/assets/game/scripts/Data/EventType.js"},{"deps":{"./FillArea":18,"../../Data/EventType":1,"../../Manager/EditorManager":4,"../../../../frame/scripts/Utils/HitTest":44,"../../../../frame/scripts/Manager/ListenerManager":5},"path":"preview-scripts/assets/game/scripts/UI/Item/OptionItem.js"},{"deps":{"../../Manager/ListenerManager":5,"../../Data/FrameMsgType":47,"../BindNode":17},"path":"preview-scripts/assets/frame/scripts/UI/Item/TeacherPanelLoading.js"},{"deps":{},"path":"preview-scripts/assets/game/scripts/Manager/EditorManager.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/Manager/ListenerManager.js"},{"deps":{},"path":"preview-scripts/assets/game/scripts/SkeletonExt.js"},{"deps":{"../../Data/EventType":1,"../../Manager/EditorManager":4,"../../../../frame/scripts/Manager/SyncDataManager":21,"../../../../frame/scripts/Manager/ListenerManager":5,"../../../../frame/scripts/UI/Panel/BaseGamePanel":43},"path":"preview-scripts/assets/game/scripts/UI/panel/GamePanel.js"},{"deps":{"../../../../frame/scripts/SDK/T2M":20},"path":"preview-scripts/assets/game/scripts/UI/Components/DragSync.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/Data/FrameConstValue.js"},{"deps":{"../Manager/UIManager":22,"../Utils/UIHelp":49,"../SDK/GameMsg":11,"../../../game/scripts/Data/ConstValue":52},"path":"preview-scripts/assets/frame/scripts/Http/NetWork.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/SDK/GameMsg.js"},{"deps":{"../../Data/FrameMsgType":47,"../../SDK/T2M":20,"../../Utils/UIHelp":49,"../BaseFrameUI":25},"path":"preview-scripts/assets/frame/scripts/UI/Panel/AffirmTips.js"},{"deps":{"./../Manager/SoundManager":19},"path":"preview-scripts/assets/frame/scripts/Utils/AudioPlayExtension.js"},{"deps":{"../../../../frame/scripts/Manager/ListenerManager":5,"../../../../frame/scripts/Data/FrameMsgType":47,"../../../../frame/scripts/UI/Panel/BaseTeacherPanel":34,"../../../../frame/scripts/Manager/UIManager":22,"../../../../frame/scripts/Utils/UIHelp":49,"../../Manager/EditorManager":4,"./GamePanel":7},"path":"preview-scripts/assets/game/scripts/UI/panel/TeacherPanel.js"},{"deps":{},"path":"preview-scripts/assets/game/scripts/UI/Item/SoundConfig.js"},{"deps":{},"path":"preview-scripts/assets/game/scripts/Data/CustomSyncData.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/UI/BindNode.js"},{"deps":{"./SoundConfig":15,"../../Data/EventType":1,"../../Manager/EditorManager":4,"../../../../frame/scripts/Utils/HitTest":44,"../../../../frame/scripts/Manager/SoundManager":19,"../../../../frame/scripts/Manager/ListenerManager":5},"path":"preview-scripts/assets/game/scripts/UI/Item/FillArea.js"},{"deps":{"../Data/FrameMsgType":47,"../SDK/GameMsg":11,"../Http/NetWork":10,"../Data/FrameConstValue":9,"./ListenerManager":5,"./UIManager":22},"path":"preview-scripts/assets/frame/scripts/Manager/SoundManager.js"},{"deps":{"../Data/FrameMsgType":47,"../Utils/UIHelp":49,"../Http/NetWork":10,"../Manager/ListenerManager":5,"./GameMsg":11,"../Manager/SyncDataManager":21},"path":"preview-scripts/assets/frame/scripts/SDK/T2M.js"},{"deps":{"../../../frame/scripts/Manager/ReportManager":26,"../../../game/scripts/Data/CustomSyncData":16,"../../../frame/scripts/Data/FrameSyncData":45},"path":"preview-scripts/assets/frame/scripts/Manager/SyncDataManager.js"},{"deps":{"../UI/BaseUI":24},"path":"preview-scripts/assets/frame/scripts/Manager/UIManager.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/UI/Item/Tip.js"},{"deps":{"../Data/FrameConstValue":9,"../Manager/ListenerManager":5,"./BindNode":17},"path":"preview-scripts/assets/frame/scripts/UI/BaseUI.js"},{"deps":{"./BaseUI":24,"../Data/FrameConstValue":9},"path":"preview-scripts/assets/frame/scripts/UI/BaseFrameUI.js"},{"deps":{"../../../game/scripts/Data/ConstValue":52,"../SDK/GameMsg":11,"../../../game/scripts/Manager/EditorManager":4},"path":"preview-scripts/assets/frame/scripts/Manager/ReportManager.js"},{"deps":{"../../Data/FrameMsgType":47,"../../Manager/ListenerManager":5,"../../Manager/UIManager":22,"../BindNode":17},"path":"preview-scripts/assets/frame/scripts/UI/Item/MaskRecover.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/UI/AdaptiveScreen.js"},{"deps":{"../../../game/scripts/Manager/EditorManager":4,"../Data/FrameMsgType":47,"../Manager/ListenerManager":5,"../Manager/ReportManager":26,"../Http/NetWork":10,"../Manager/SoundManager":19,"../SDK/T2M":20,"../SDK/GameMsg":11,"../Manager/SyncDataManager":21,"../Manager/UIManager":22,"../Utils/UIHelp":49},"path":"preview-scripts/assets/frame/scripts/UI/GameMain.js"},{"deps":{"../../Manager/ListenerManager":5,"../../Data/FrameMsgType":47,"../../Manager/UIManager":22,"../BindNode":17,"../../Utils/UIHelp":49},"path":"preview-scripts/assets/frame/scripts/UI/Item/MaskGlobal.js"},{"deps":{"../../Utils/UIHelp":49,"./../../SDK/GameMsg":11,"./../../Manager/SoundManager":19,"./../BaseFrameUI":25},"path":"preview-scripts/assets/frame/scripts/UI/Panel/ErrorPanel.js"},{"deps":{"../../Data/FrameMsgType":47,"../../SDK/T2M":20},"path":"preview-scripts/assets/frame/scripts/UI/Item/replayBtn.js"},{"deps":{"../../Data/FrameMsgType":47,"../../Manager/ListenerManager":5},"path":"preview-scripts/assets/frame/scripts/UI/Item/TitleNode.js"},{"deps":{"../../Http/NetWork":10,"../../../../game/scripts/Data/ConstValue":52,"../../../../game/scripts/Manager/EditorManager":4,"../../Utils/UIHelp":49,"../BaseUI":24},"path":"preview-scripts/assets/frame/scripts/UI/Panel/BaseTeacherPanel.js"},{"deps":{"../../Utils/Tools":46,"../BaseFrameUI":25,"../../Manager/UIManager":22,"./../../Manager/SoundManager":19,"../../SDK/T2M":20,"../../Utils/UIHelp":49,"../../../../game/scripts/Data/ConstValue":52,"../../Data/FrameMsgType":47},"path":"preview-scripts/assets/frame/scripts/UI/Panel/OverTips.js"},{"deps":{"../BaseFrameUI":25,"../../Http/NetWork":10,"../../Utils/UIHelp":49,"../../../../game/scripts/Data/ConstValue":52,"../../../../game/scripts/Manager/EditorManager":4},"path":"preview-scripts/assets/frame/scripts/UI/Panel/SubmissionPanel.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/Utils/MathUtils.js"},{"deps":{"./../../Manager/ListenerManager":5,"../../Data/FrameMsgType":47,"../BaseFrameUI":25,"../../Manager/SoundManager":19,"../../Utils/UIHelp":49,"../../Manager/ReportManager":26,"../../SDK/T2M":20},"path":"preview-scripts/assets/frame/scripts/UI/Panel/UploadAndReturnPanel.js"},{"deps":{"../../../../game/scripts/Data/ConstValue":52,"../../Http/NetWork":10,"../../../../game/scripts/UI/panel/TeacherPanel":14,"../../Manager/SoundManager":19,"../../../../game/scripts/UI/panel/GamePanel":7,"../BaseFrameUI":25,"../../SDK/GameMsg":11,"../../Manager/UIManager":22},"path":"preview-scripts/assets/frame/scripts/UI/Panel/LoadingUI.js"},{"deps":{"../BaseFrameUI":25,"../Item/Tip":23},"path":"preview-scripts/assets/frame/scripts/UI/Panel/TipUI.js"},{"deps":{"./../../Manager/SoundManager":19,"../../Utils/Tools":46,"../../../../game/scripts/Manager/EditorManager":4,"../BaseFrameUI":25,"../../Utils/UIHelp":49,"../../Manager/ReportManager":26,"../../../../game/scripts/Data/ConstValue":52},"path":"preview-scripts/assets/frame/scripts/UI/Panel/StarCount.js"},{"deps":{"./BoundingBoxHelp":48},"path":"preview-scripts/assets/frame/scripts/Utils/BoundingBoxDemo.js"},{"deps":{"../../../../game/scripts/Manager/EditorManager":4,"../../Data/FrameMsgType":47,"../../Http/NetWork":10,"../../Manager/ReportManager":26,"../../../../game/scripts/Data/ConstValue":52,"../../Manager/SoundManager":19,"../../Manager/SyncDataManager":21,"../../Manager/ListenerManager":5,"../../Manager/UIManager":22,"../../SDK/T2M":20,"../../Utils/UIHelp":49,"../../SDK/GameMsg":11,"../BaseUI":24},"path":"preview-scripts/assets/frame/scripts/UI/Panel/BaseGamePanel.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/Utils/HitTest.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/Data/FrameSyncData.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/Utils/Tools.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/Data/FrameMsgType.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/Utils/BoundingBoxHelp.js"},{"deps":{"../Data/FrameMsgType":47,"../../../game/scripts/UI/panel/TeacherPanel":14,"../../../game/scripts/UI/panel/GamePanel":7,"../Manager/ListenerManager":5,"../UI/Panel/ErrorPanel":31,"../Manager/UIManager":22,"../UI/Panel/OverTips":35,"../UI/Panel/AffirmTips":12,"../UI/Panel/StarCount":41,"../UI/Panel/SubmissionPanel":36,"../UI/Panel/TipUI":40,"../UI/Panel/UploadAndReturnPanel":38},"path":"preview-scripts/assets/frame/scripts/Utils/UIHelp.js"},{"deps":{"../../../../frame/scripts/SDK/T2M":20},"path":"preview-scripts/assets/game/scripts/UI/Components/ButtonSync.js"},{"deps":{},"path":"preview-scripts/assets/game/scripts/Manager/GameManager.js"},{"deps":{},"path":"preview-scripts/assets/game/scripts/Data/ConstValue.js"},{"deps":{"./OptionItem":2,"../../Manager/EditorManager":4,"../../Data/EventType":1,"./SoundConfig":15,"./FillArea":18,"../../../../frame/scripts/Manager/ListenerManager":5,"../../../../frame/scripts/Manager/SyncDataManager":21,"../../../../frame/scripts/Manager/SoundManager":19},"path":"preview-scripts/assets/game/scripts/UI/Item/Level_1.js"},{"deps":{"./FillArea":18,"./OptionItem":2,"./SoundConfig":15,"../../Data/EventType":1,"../../Manager/EditorManager":4,"../../../../frame/scripts/Manager/ListenerManager":5,"../../../../frame/scripts/Manager/SoundManager":19,"../../../../frame/scripts/Manager/SyncDataManager":21},"path":"preview-scripts/assets/game/scripts/UI/Item/Level_2.js"},{"deps":{"./FillArea":18,"./OptionItem":2,"./SoundConfig":15,"../../Data/EventType":1,"../../Manager/EditorManager":4,"../../../../frame/scripts/Manager/SyncDataManager":21,"../../../../frame/scripts/Manager/SoundManager":19,"../../../../frame/scripts/Manager/ListenerManager":5},"path":"preview-scripts/assets/game/scripts/UI/Item/Level_3.js"},{"deps":{"./FillArea":18,"./OptionItem":2,"../../Data/EventType":1,"./SoundConfig":15,"../../Manager/EditorManager":4,"../../../../frame/scripts/Manager/ListenerManager":5,"../../../../frame/scripts/Manager/SoundManager":19,"../../../../frame/scripts/Manager/SyncDataManager":21},"path":"preview-scripts/assets/game/scripts/UI/Item/Level_4.js"}];
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
    