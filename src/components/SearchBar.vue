<template>
    <div class="search-bar ion-padding-horizontal">
        <ion-searchbar
            class="search"
            :value="value"
            @input="handleChange"
            @click="handleClick"
            debounce="1000"
            placeholder="Search Jobs"
        ></ion-searchbar>
        <ion-fab-button class="ion-padding" router-link="/jobs/filters">
            <ion-icon :icon="filterOutline"></ion-icon>
        </ion-fab-button>
    </div>
</template>

<script>
import { IonSearchbar, IonFabButton } from '@ionic/vue';
import { filterOutline } from 'ionicons/icons';
export default {
    props: {
        value: {
            required: true,
            type: String,
        },
    },

    components: {
        IonSearchbar,
        IonFabButton,
    },

    data() {
        return {
            filterOutline,
        };
    },

    methods: {
        handleChange(e) {
            this.$emit('handleChange', e.target.value);
        },
        handleClick(e) {
            this.$emit('handleClick', e.target.value);
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
