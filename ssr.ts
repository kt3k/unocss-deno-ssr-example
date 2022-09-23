import { createGenerator } from "https://esm.sh/@unocss/core@0.45.22";
import presetUno from "https://esm.sh/@unocss/preset-uno@0.45.22";
import { green } from "https://deno.land/std@0.157.0/fmt/colors.ts";

// Creates Uno generator
const uno = createGenerator({ presets: [presetUno()] });

async function generate(input: string) {
  // Generates css based on the input
  const { css } = await uno.generate(input, { preflights: false });
  console.log();
  console.log(green("Input:"));
  console.log(input);
  console.log(green("Output:"));
  console.log(css);
}

await generate("ml-1");
await generate("ml-1 ml-2 ml-3");
await generate("border border-t border-gray-400");
