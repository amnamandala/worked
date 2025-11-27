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
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-pink-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-all duration-500" }, _attrs))} data-v-f850f978><section class="flex flex-col md:flex-row items-center justify-center py-16 max-w-6xl mx-auto px-6 gap-10" data-v-f850f978><div class="md:w-1/2 flex justify-center" data-v-f850f978><img src="https://i.pinimg.com/originals/e0/f8/72/e0f872578348f6ecf7a9dbedaff534b0.png" alt="Woman contact" class="rounded-2xl shadow-lg w-full max-w-sm" data-v-f850f978></div><div class="md:w-1/2 bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg animate-fadeIn" data-v-f850f978><h2 class="text-3xl font-bold mb-4 text-pink-800 dark:text-pink-300" data-v-f850f978>Contact Us</h2><form class="flex flex-col gap-4" data-v-f850f978><input type="text" placeholder="Your Name" class="p-3 rounded-lg border dark:bg-gray-700" data-v-f850f978><input type="email" placeholder="Email" class="p-3 rounded-lg border dark:bg-gray-700" data-v-f850f978><textarea rows="4" placeholder="Message" class="p-3 rounded-lg border dark:bg-gray-700" data-v-f850f978></textarea><button type="submit" class="bg-pink-500 hover:bg-pink-700 cursor-pointer text-white rounded-lg py-2 transition" data-v-f850f978> Send Message </button></form></div></section></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const contact = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-f850f978"]]);

export { contact as default };
//# sourceMappingURL=contact-CNubc62Y.mjs.map
