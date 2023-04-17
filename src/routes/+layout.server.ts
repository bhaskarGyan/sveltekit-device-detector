import type { LayoutServerLoad } from './$types';

export const load = (async ({locals}) => {
   
    return {deviceType:locals.deviceType};
}) satisfies LayoutServerLoad;