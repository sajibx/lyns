import fs from 'fs';
import path from 'path';

const soaps = [
    { id: 1, name: "Citrus Bloom", slug: "citrus-bloom", details: "A slice of dried orange and delicate flower petals in the background." },
    { id: 2, name: "Roasted Mocha", slug: "roasted-mocha", details: "Roasted espresso beans and a shard of dark chocolate in the background." },
    { id: 3, name: "Provence Harvest", slug: "provence-harvest", details: "Sprigs of dried purple lavender and scattered whole oats in the background." },
    { id: 4, name: "Midnight Purify", slug: "midnight-purify", details: "A pitch-black soap block, with fresh green tea tree leaves in the background." },
    { id: 5, name: "Golden Nectar", slug: "golden-nectar", details: "A rich golden-orange soap block, with raw amber honey and turmeric powder in the background." },
    { id: 6, name: "Alpine Frost", slug: "alpine-frost", details: "A pale green marbled soap block, with crisp eucalyptus leaves and peppermint in the background." },
    { id: 7, name: "Verdant Oasis", slug: "verdant-oasis", details: "A deep forest green soap block, with a fresh slice of aloe vera leaf in the background." },
    { id: 8, name: "Rosewood Embers", slug: "rosewood-embers", details: "A dusty pink soap block, with raw sandalwood and deep crimson dried rose petals in the background." },
    { id: 9, name: "Zenith Zest", slug: "zenith-zest", details: "A vibrant yellow-green textured soap block, with sliced fresh ginger and woven lemongrass in the background." },
    { id: 10, name: "Matcha Petal", slug: "matcha-petal", details: "A pale matcha-green soap block, with loose dried green tea leaves and a white jasmine flower in the background." },
    { id: 11, name: "Velvet Meadow", slug: "velvet-meadow", details: "A creamy off-white textured soap block, with scattered tiny dried yellow chamomile flowers in the background." },
    { id: 12, name: "Tropical Silk", slug: "tropical-silk", details: "A bright pale-orange speckled soap block, with a shard of raw coconut shell in the background." },
];

const generateImage = async (soap) => {
    // Emphasize the text requirement heavily
    const basePrompt = `A gorgeous cinematic macro photography shot of an artisan soap block. The word "LYNS" is deeply debossed and engraved prominently into the center of the soap block. "LYNS" is the ONLY text on the soap. ${soap.details} Dark moody luxurious low-key lighting, dark slate background, 8k resolution, photorealistic.`;

    const encodedPrompt = encodeURIComponent(basePrompt);
    const url = `https://image.pollinations.ai/prompt/${encodedPrompt}?width=800&height=1000&nologo=true&seed=${Math.floor(Math.random() * 100000)}`;

    console.log(`Generating ${soap.name}...`);
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const buffer = await response.arrayBuffer();
        const filePath = path.join(process.cwd(), 'public', `soap-${soap.slug}.jpg`);
        fs.writeFileSync(filePath, Buffer.from(buffer));
        console.log(`Saved ${soap.name} to ${filePath}`);
        return true;
    } catch (error) {
        console.error(`Failed to generate ${soap.name}:`, error);
        return false;
    }
};

const run = async () => {
    console.log("Starting image generation via Pollinations API...");
    for (const soap of soaps) {
        let success = false;
        let retries = 0;
        while (!success && retries < 3) {
            success = await generateImage(soap);
            if (!success) {
                retries++;
                console.log(`Retrying ${soap.name}... (${retries}/3)`);
                await new Promise(resolve => setTimeout(resolve, 2000));
            }
        }
        // Wait a bit to respect rate limits
        await new Promise(resolve => setTimeout(resolve, 1500));
    }
    console.log("Finished generating all images!");
};

run();
