// This bit of code will push data up to the Algolio Database
// import generateDummyData from '../generateDummyData';
// Stick this in a component to run on load:
// mounted() {
//     const client = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_ADMIN_KEY');
//     const index = client.initIndex('test_portal-to-work');
//     const dummyData = generateDummyData(1000);
//     index.saveObjects(dummyData, {
//         autoGenerateObjectIDIfNotExist: true,
//     });
// },

const generateDummyData = (entries) => {
    const jobsDB = [];

    const categories = [
        'construction',
        'finance',
        'food service',
        'retail',
        'security',
        'customer service',
        'technology',
    ];

    const titlePrefixes = [
        'chief',
        'executive',
        'main',
        'assistant',
        'primary',
        'secondary',
        'tertiary',
        'backup',
        'on-call',
        'combat',
        'emergency',
    ];

    const titleRoles = [
        'accountant',
        'line-man',
        'bodyguard',
        'cashier',
        'barrista',
        'sword fighter',
        'officer',
        'gun fighter',
        'chef',
        'line cook',
        'software developer',
        'web developer',
        'scrum master',
        'salesman',
        'receptionist',
        'construction worker',
        'carpenter',
        'mason',
        'blacksmith',
        'thief',
        'burglar',
        'con-man',
        'visionary',
        'driver',
    ];

    const generateIndex = (range) => Math.round(Math.random() * range);

    function preciseRound(n, d) {
        let mult = 10 ** d;
        return Math.floor(n * mult) / mult;
    }

    const generateCoord = (start) => {
        const posOrNeg = Math.random() > 0.5 ? -1 : 1;
        const addition = Math.random() * 0.01 * posOrNeg;
        return start + preciseRound(addition, 6);
    };

    for (let i = 0; i < entries; i++) {
        let title = `${titlePrefixes[generateIndex(titlePrefixes.length)]} ${
            titleRoles[generateIndex(titleRoles.length)]
        }`;

        let description = `A description for ${title}`;
        let lat = Math.floor(generateCoord(37.210388) * 1000000) / 1000000;
        let lon = Math.floor(generateCoord(-93.297256) * 1000000) / 1000000;

        console.log(`lat:${lat}, lon:${lon}`);

        let newJob = {
            title: title,
            description: description,
            category: `${categories[generateIndex(categories.length)]}`,
            location: {
                lat: lat,
                long: lon,
            },
            salary: generateIndex(200000),
            datePosted: '',
        };
        jobsDB.push(newJob);
    }
    return jobsDB;
};

export { generateDummyData as default };
