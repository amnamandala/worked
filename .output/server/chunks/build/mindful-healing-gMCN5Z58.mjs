import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'vue-router';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-pink-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100" }, _attrs))} data-v-b5ec0342><section class="max-w-5xl mx-auto py-16 px-6 animate-fadeIn" data-v-b5ec0342><img src="https://images.unsplash.com/photo-1603052875638-4f3e4d9a3f90?w=1000&amp;q=80" class="rounded-3xl mb-6 shadow-lg" data-v-b5ec0342><h1 class="text-4xl font-bold text-pink-600 dark:text-pink-300 mb-4" data-v-b5ec0342>Mindful Healing</h1><p class="text-lg leading-relaxed font-bold" data-v-b5ec0342> Healing starts from awareness. Mindfulness teaches us to notice emotions without judgment, breathe deeply, and ground our hearts. Every woman carries the power to reset her emotional energy. Through calm breathing, journaling, and moments of silence, you bloom again. </p></section></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog/mindful-healing.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const mindfulHealing = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-b5ec0342"]]);

export { mindfulHealing as default };
//# sourceMappingURL=mindful-healing-gMCN5Z58.mjs.map
