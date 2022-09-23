import { createGenerator } from "https://esm.sh/@unocss/core@0.45.22";
import presetUno from "https://esm.sh/@unocss/preset-uno@0.45.22";
const uno = createGenerator({ presets: [presetUno()] });
const res = await uno.generate(["ml-1"], { preflights: false });
const { css } = res;
console.log(css);
