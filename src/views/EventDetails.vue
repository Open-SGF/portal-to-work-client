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
                title: 'Event Title',
                company: 'Event Company',
                address: 'Address',
                button: {
                    text: 'RSVP',
                    link: '/event-details',
                },
                properties: [
                    {
                        key: 'Date',
                        value: 'Monday, November 4, 2021',
                    },
                    {
                        key: 'Time',
                        value: '9:30am to 11:30am',
                    },
                    {
                        key: 'Cost',
                        value: 'Free',
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
