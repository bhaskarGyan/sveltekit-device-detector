import { handleDeviecDetector } from "$lib";
import { sequence } from "@sveltejs/kit/hooks";


const deviceDetector = handleDeviecDetector({})

export const handle = sequence(deviceDetector, ({ resolve, event }) => {
    console.log(event.locals.deviceType)
	return resolve(event);
});