const generateDummyData = () => {
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

    const generateCoord = (start) => {
        const posOrNeg = Math.random() > 0.5 ? -1 : 1;
        const addition = Math.random() * 0.01 * posOrNeg;
        const roundedAddition = Math.round(addition * 1000000) / 1000000;
        return start + roundedAddition;
    };

    for (let i = 0; i < 2000; i++) {
        let title = `${titlePrefixes[generateIndex(titlePrefixes.length)]} ${
            titleRoles[generateIndex(titleRoles.length)]
        }`;

        let description = `A description for ${title}`;

        let newJob = {
            title: title,
            description: description,
            category: `${categories[generateIndex(categories.length)]}`,
            location: {
                lat: generateCoord(37.210388),
                long: generateCoord(-93.297256),
            },
            salary: generateIndex(200000),
            datePosted: '',
        };
        jobsDB.push(newJob);
    }
    return jobsDB;
};

export { generateDummyData as default };
