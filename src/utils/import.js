/* eslint-disable prettier/prettier */
import { defineAsyncComponent } from "vue";
export function registerGlobalComponents(app) {
  app.component(
    "auth-layout",
    defineAsyncComponent(() => import("@/layouts/auth-layout"))
  );
  app.component(
    "default-layout",
    defineAsyncComponent(() => import("@/layouts/default-layout"))
  );
}
