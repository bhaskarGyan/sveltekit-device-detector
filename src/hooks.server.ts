import { handleDeviceDetector } from '$lib';
import { sequence } from '@sveltejs/kit/hooks';

const deviceDetector = handleDeviceDetector({});

export const handle = sequence(deviceDetector, ({ resolve, event }) => {
	return resolve(event);
});
