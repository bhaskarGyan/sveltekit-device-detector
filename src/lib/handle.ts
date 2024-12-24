import type { Handle } from '@sveltejs/kit';
import { deviceDetect } from './core/detect';
import { getSelectorsByUserAgent } from './core/selectors';

export function handleDeviceDetector(
	options: {},
	passedHandle: Handle = async ({ event, resolve }) => resolve(event)
): Handle {
	return async function handle({ event, resolve }) {
		const ua = event.request.headers.get('user-agent') || '';
		const device = deviceDetect(ua);
		const deviceMetadata = getSelectorsByUserAgent(ua);
		event.locals.deviceType = { ...deviceMetadata, ...device };

		const response = await passedHandle({ event, resolve });

		return response;
	};
}
