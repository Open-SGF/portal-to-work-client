<template>
    <Details :detailsObj="detailsObj"></Details>
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
                title: 'title',
                company: 'company',
                address: 'address',
                buttonText: 'Click Me',
                properties: [
                    {
                        key: 'property one',
                        value: 'property one details',
                    },
                    {
                        key: 'property two',
                        value: 'property two details',
                    },
                    {
                        key: 'property three',
                        value: 'property three details',
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
