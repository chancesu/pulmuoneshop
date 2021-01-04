import Vue from "vue";
import Vuex from "vuex";

const requireModule = require.context(
    ".",
    true,
    /^((?!\.unit\.).)*.index\.js$/
);
const rootModule = { modules: {} };

requireModule.keys().forEach(fileName => {
    if (fileName === "./index.js") return;

    const modulePath = fileName
        .replace(/^\.\//, "")
        .replace(/\.\w+$/, "")
        .split(/\//)[0];

    rootModule.modules[modulePath] = requireModule(fileName).default;
});

export default {
    ...rootModule.modules
}