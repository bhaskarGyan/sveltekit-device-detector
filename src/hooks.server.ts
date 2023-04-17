import { handleDeviecDetector } from "$lib";
import { sequence } from "@sveltejs/kit/hooks";


const deviceDetector = handleDeviecDetector({})

export const handle = sequence(deviceDetector, ({ resolve, event }) => {
	return resolve(event);
});