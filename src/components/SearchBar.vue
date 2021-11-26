<template>
    <ais-instant-search :search-client="searchClient" index-name="test_portal-to-work">
        <ais-search-box class="search-bar">
            <template v-slot="{ currentRefinement, isSearchStalled, refine }">
                <ion-searchbar
                    type="search"
                    :value="currentRefinement"
                    @input="refine($event.currentTarget.value)"
                ></ion-searchbar>
                <ion-fab-button class="ion-padding" router-link="/jobs/filters">
                    <ion-icon :icon="filterOutline"></ion-icon>
                </ion-fab-button>
                <span :hidden="!isSearchStalled">Loading...</span>
            </template>
        </ais-search-box>
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
    <div class="search-bar ion-padding-horizontal"></div>
</template>

<script>
import { IonSearchbar, IonFabButton } from '@ionic/vue';
import { filterOutline } from 'ionicons/icons';
import algoliasearch from 'algoliasearch';
import { ALGOLIA_APP_ID, ALGOLIA_API_KEY } from '../config';
import JobItem from '@/components/JobItem.vue';

export default {
    components: {
        JobItem,
        IonSearchbar,
        IonFabButton,
    },

    data() {
        return {
            searchClient: algoliasearch(ALGOLIA_APP_ID, ALGOLIA_API_KEY),
            filterOutline,
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
