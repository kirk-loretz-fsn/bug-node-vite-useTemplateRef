import { createSSRApp } from "vue";
import { renderToString } from "vue/server-renderer";
import App from "./App.vue";

const app = createSSRApp(App);

// import { useTemplateRef } from "vue";
// const app = createSSRApp({
//     setup() {
//         const input = useTemplateRef("input");
//         return { input };
//     },
//     template: `<div>
//       <input type="text" ref="input">
//       <button type="button" @click="console.log(input)">Click me</button>
//     </div>`
// });

renderToString(app).then((html) => {
  console.log(html);
});
