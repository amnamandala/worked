import { _ as __nuxt_component_0 } from './nuxt-link-CMQ7resr.mjs';
import { defineComponent, resolveComponent, mergeProps, withCtx, createTextVNode, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const cards = [
      {
        title: "Mindful Healing",
        text: "Balance your emotions and find calm through mindfulness.",
        img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800",
        link: "/mindfuls-healing"
      },
      {
        title: "Body & Balance",
        text: "Nurture your hormonal health naturally and gracefully.",
        img: "https://cdn.pixabay.com/photo/2016/12/11/00/37/women-1898499_640.jpg",
        link: "/body-balance"
      },
      {
        title: "Relationship Energy",
        text: "Grow emotional connection & healthy boundaries in love.",
        img: "https://q6j6d8r6.delivery.rocketcdn.me/wp-content/uploads/2022/05/energy-woman-insight.jpg",
        link: "/relationship-energy"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_UButton = resolveComponent("UButton");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-pink-200 dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-all duration-500" }, _attrs))} data-v-640e1a44><section class="text-center py-16 px-4" data-v-640e1a44><img src="https://heymandala.com/wp-content/uploads/2025/08/blog-image-1755372175.jpg" alt="Welcome" class="rounded-3xl shadow-lg mx-auto mb-8 h-100 w-200 size-full max-w-2xl h-110 w-100 animate-fadeIn" data-v-640e1a44><h1 class="text-4xl font-bold text-pink-600 dark:text-pink-300 mb-3" data-v-640e1a44>Welcome to Amna Mandalas</h1><p class="max-w-2xl mx-auto text-lg leading-relaxed" data-v-640e1a44> A space made for every woman’s healing journey — mind, body &amp; soul. 🌷 </p></section><section class="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto px-6 pb-20" data-v-640e1a44><!--[-->`);
      ssrRenderList(cards, (card2, i) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: i,
          to: card2.link,
          class: "group bg-white dark:bg-gray-800 rounded-3xl shadow-xl hover:shadow-2xl overflow-hidden transition transform hover:-translate-y-2"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img${ssrRenderAttr("src", card2.img)}${ssrRenderAttr("alt", card2.title)} class="h-80 w-full object-cover group-hover:scale-105 transition" data-v-640e1a44${_scopeId}><div class="p-6" data-v-640e1a44${_scopeId}><h3 class="text-3xl font-semibold mb-3 text-pink-600 dark:text-pink-300" data-v-640e1a44${_scopeId}>${ssrInterpolate(card2.title)}</h3><p class="text-lg mb-4" data-v-640e1a44${_scopeId}>${ssrInterpolate(card2.text)}</p>`);
              _push2(ssrRenderComponent(_component_UButton, {
                color: "primary",
                variant: "solid",
                size: "lg",
                class: "animate-fadeIn bg-pink-400 hover:bg-pink-200 cursor-pointer transion"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Read More`);
                  } else {
                    return [
                      createTextVNode("Read More")
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              return [
                createVNode("img", {
                  src: card2.img,
                  alt: card2.title,
                  class: "h-80 w-full object-cover group-hover:scale-105 transition"
                }, null, 8, ["src", "alt"]),
                createVNode("div", { class: "p-6" }, [
                  createVNode("h3", { class: "text-3xl font-semibold mb-3 text-pink-600 dark:text-pink-300" }, toDisplayString(card2.title), 1),
                  createVNode("p", { class: "text-lg mb-4" }, toDisplayString(card2.text), 1),
                  createVNode(_component_UButton, {
                    color: "primary",
                    variant: "solid",
                    size: "lg",
                    class: "animate-fadeIn bg-pink-400 hover:bg-pink-200 cursor-pointer transion"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Read More")
                    ]),
                    _: 1
                  })
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-640e1a44"]]);

export { index as default };
//# sourceMappingURL=index-FskilMZ6.mjs.map
