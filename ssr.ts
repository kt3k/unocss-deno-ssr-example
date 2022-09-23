import { createGenerator } from "https://esm.sh/@unocss/core@0.45.22";
import presetUno from "https://esm.sh/@unocss/preset-uno@0.45.22";

// Creates Uno generator
const uno = createGenerator({ presets: [presetUno()] });

// Generates css based on input (here the only input is "ml-1")
var { css } = await uno.generate("ml-1", { preflights: false });
console.log(css);

// The input is "ml-1 ml-2 ml-3"
var { css } = await uno.generate("ml-1 ml-2 ml-3", { preflights: false });
console.log(css);
