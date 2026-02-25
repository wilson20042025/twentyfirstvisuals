import cloudinary from './cloudinary';

export const excludedIds = [
    'IMG_20250203_114856889_f9ke1x', // About page photo
    '1000319183_11zon_1_n4bdgg',     // Coastline mobile hero 1
    '1000319182_11zon_sprtci',       // Coastline mobile hero 2
    '1000319187_11zon_bvsbpr',       // Coastline mobile hero 3
    '1000284573_11zon_1_k6pvx2',      // Form & Light project image 1
    'IMG_4605_2_aogohl',              // Form & Light project image 2
    '1000319474_11zon_r5ipey',        // Form & Light project image 3
    '1000319227_11zon_n55ydr',        // Form & Light project image 4
    '1000319517_11zon_q2zmnz',        // Wallpaper Shotz hero
    '1000319516_11zon_nngamw',        // Wallpaper Shotz image 2
    '1000319515_11zon_kds3uq',        // Wallpaper Shotz image 3
    '1000261574_11zon_kwi38n',        // Duplicate of Twin & Win
    '1000261574_11zon_tarils',        // Duplicate of Twin & Win
    '1000261574_11zon_sfxlr8',        // Twin & Win (project only)
    '1000319516_11zon_hb4n78',        // Duplicate of Wallpaper Shotz
    '1000319516_11zon_meov9c'         // Duplicate of Wallpaper Shotz
];

export async function getGalleryImages() {
    try {
        const { resources } = await cloudinary.search
            .expression('resource_type:image')
            .sort_by('public_id', 'desc')
            .max_results(100)
            .with_field('context')
            .with_field('metadata')
            .execute();

        return resources
            .filter((resource: any) => !excludedIds.some(id => resource.public_id.includes(id)))
            .map((resource: any) => ({
                url: resource.secure_url,
                title: resource.context?.caption || resource.public_id.split('/').pop() || 'Untitled',
                meta: resource.context?.alt || 'Location • Date',
                type: resource.metadata?.layout_type || 'item-square'
            }));
    } catch (error) {
        console.error('Cloudinary fetch error:', error);
        return [];
    }
}
