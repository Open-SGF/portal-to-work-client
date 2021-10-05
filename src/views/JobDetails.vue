<template>
    <Details :heavenlyDetailsObj="detailsObj"></Details>
</template>

<script>
import Details from '../components/Details.vue';

export default {
    name: 'EventDetails',
    components: {
        Details,
    },
    data() {
        return {
            detailsObj: {
                title: 'Job Title',
                company: 'Job Company',
                address: 'Job Address',
                button: {
                    text: 'Apply Now',
                    link: '/job-details',
                },
                properties: [
                    {
                        key: 'Salary',
                        value: '$12.00/hr',
                    },
                    {
                        key: 'Job Type',
                        value: 'Full Time',
                    },
                    {
                        key: 'Job Requirements',
                        value: 'High School or Equiv',
                    },
                ],
                details: `Subject for catalogue: file under 'imagination, comma, lack of'. I don't
                    suppose we'll ever know if we actually succeeded. But at worst, we failed doing
                    the right thing, as opposed to succeeding in doing the wrong. I am totally
                    against bantering. The waves of time wash us all clean. Are you listening to
                    me? A little gratitude wouldn't irretrievably damage my ego. Hello-o-o-o.
                    Life depends on change and renewal. I hate computers and refuse to be
                    bullied by them. Yes, well, it's a brilliant noise. I love that noise.`,
            },
        };
    },
};
</script>
