import { createGenerator } from "https://esm.sh/@unocss/core@0.45.22";
import presetUno from "https://esm.sh/@unocss/preset-uno@0.45.22";

// Creates Uno generator
const uno = createGenerator({ presets: [presetUno()] });

// Generates css
const { css } = await uno.generate("border border-t border-blue-100", { preflights: false });
console.log(css);
