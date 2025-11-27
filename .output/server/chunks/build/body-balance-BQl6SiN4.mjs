import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "body-balance",
  __ssrInlineRender: true,
  setup(__props) {
    const balanceTips = [
      { title: "Listen to Your Body", text: "Your body communicates through sensations — rest, move, and eat intuitively." },
      { title: "Cycle Syncing", text: "Adapt your routines according to hormonal phases for improved energy and focus." },
      { title: "Gentle Nutrition", text: "Opt for warm, whole meals that ground your energy and calm your hormones." },
      { title: "Soothing Rituals", text: "Light candles, stretch slowly, or meditate to balance inner rhythms." }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-gradient-to-b from-pink-100 to-pink-200 dark:from-gray-900 dark:to-pink-900 px-6 py-20 text-gray-900 dark:text-gray-100" }, _attrs))}><div class="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-center"><img src="https://images.unsplash.com/photo-1524253482453-3fed8d2fe12b?w=800" class="rounded-3xl shadow-xl md:w-1/2 hover:scale-105 transition" alt="Balance Image"><div class="md:w-1/2"><h1 class="text-5xl font-extrabold text-pink-600 mb-6">Body &amp; Balance</h1><p class="text-lg mb-8 leading-relaxed">Reconnect with your body’s rhythm — find harmony through nurturing rituals and mindful care.</p><div class="grid grid-cols-1 sm:grid-cols-2 gap-6"><!--[-->`);
      ssrRenderList(balanceTips, (item, i) => {
        _push(`<div class="bg-white/50 dark:bg-pink-700/30 rounded-xl p-5 shadow hover:shadow-lg transition"><h3 class="text-xl font-semibold text-pink-500 mb-2">${ssrInterpolate(item.title)}</h3><p>${ssrInterpolate(item.text)}</p></div>`);
      });
      _push(`<!--]--></div></div></div></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/body-balance.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=body-balance-BQl6SiN4.mjs.map
