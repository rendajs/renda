import { dirname, fromFileUrl, resolve } from "std/path/mod.ts";
import { rollup } from "$rollup";
import { assert } from "std/testing/asserts.ts";

Deno.test({
	name: "Dead code is tree shaken away",
	async fn() {
		const testPath = dirname(fromFileUrl(import.meta.url));
		const inputPath = resolve(testPath, "./input.js");

		const bundle = await rollup({
			input: inputPath,
			onwarn: (message) => {
				if (message.code == "CIRCULAR_DEPENDENCY") return;
				console.error(message.message);
			},
		});
		const { output } = await bundle.generate({});
		if (output.length != 1) {
			throw new Error("Expected exactly one output file");
		}

		const { code } = output[0];
		const expectedLength = 1000;
		if (code.length > expectedLength) {
			console.log(code);
			assert(false, `Expected generated code to be less than ${expectedLength} characters, output code is printed above.`);
		}
	},
});
