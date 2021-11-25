<template>
    <ais-instant-search :search-client="searchClient" index-name="test_portal-to-work">
        <ais-search-box />
        <div class="ion-padding-horizontal">
            <slot></slot>
        </div>
        <ais-hits>
            <template v-slot:item="{ item }">
                <JobItem
                    :key="item.number"
                    :number="item.number"
                    :title="item.title"
                    :description="item.description"
                >
                </JobItem>
            </template>
        </ais-hits>
    </ais-instant-search>
</template>

<script>
import algoliasearch from 'algoliasearch';
import { ALGOLIA_APP_ID, ALGOLIA_API_KEY } from '../config';
import JobItem from '@/components/JobItem.vue';

export default {
    props: {
        value: {
            required: true,
            type: String,
        },
    },

    components: {
        JobItem,
    },

    data() {
        return {
            searchClient: algoliasearch(ALGOLIA_APP_ID, ALGOLIA_API_KEY),
        };
    },
};
</script>
<style scoped>
.search-bar {
    width: 100%;
    display: flex;
}

.search {
    width: 100%;
}
</style>
