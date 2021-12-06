<template>
    <ais-instant-search :search-client="searchClient" index-name="test_portal-to-work">
        <ais-search-box class="search-bar ion-padding-horizontal">
            <template v-slot="{ currentRefinement, refine }">
                <ion-searchbar
                    type="search"
                    :value="currentRefinement"
                    @input="refine($event.currentTarget.value)"
                ></ion-searchbar>
                <ion-fab-button class="ion-padding" router-link="/jobs/filters">
                    <ion-icon :icon="filterOutline"></ion-icon>
                </ion-fab-button>
            </template>
        </ais-search-box>
        <div class="ion-padding-horizontal">
            <slot></slot>
        </div>
        <ais-hits class="ion-padding-horizontal" :transform-items="transformItems">
            <template v-slot="{ items, sendEvent }">
                <JobItem
                    v-for="item in items"
                    :key="parseInt(item.objectID)"
                    :number="parseInt(item.objectID)"
                    :isFavorite="searchFavoritesArray(item.objectID)"
                    :title="item.title"
                    :description="item.description"
                    v-on:favorite-tapped="toggleItemInFavoritesArray(item.objectID)"
                    @click="sendEvent('click', item, 'Item Added')"
                >
                </JobItem>
            </template>
        </ais-hits>
    </ais-instant-search>
</template>

<script>
import { IonSearchbar, IonFabButton } from '@ionic/vue';
import { filterOutline } from 'ionicons/icons';
import algoliasearch from 'algoliasearch';
import { ALGOLIA_APP_ID, ALGOLIA_API_KEY } from '../config';
import JobItem from '@/components/JobItem.vue';

// TODO: store data of favorited jobs, refine styling of search page, integrate with google maps

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
            results: [],
            favoriteResults: [],
        };
    },

    methods: {
        transformItems(items) {
            items.forEach((item) => {
                this.results.push(item);
            });
            return items;
        },
        toggleItemInFavoritesArray(id) {
            let result = this.results.find((item) => item.objectID === id);
            let isFavorite = this.favoriteResults.includes(result);
            if (isFavorite) {
                const index = this.favoriteResults.indexOf(result);
                if (index > -1) {
                    this.favoriteResults.splice(index, 1);
                }
            } else {
                this.favoriteResults.push(result);
            }
            console.log(this.favoriteResults);
        },
        searchFavoritesArray(id) {
            return this.favoriteResults.find((item) => item.objectID === id) ? true : false;
        },
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
