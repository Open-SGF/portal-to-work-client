<template>
    <div class="ion-text-center edit-address">
        <div class="address-content">
            <div class="top-text">
                <ion-text color="tertiary">
                    Find jobs near you, using your current location or current address.
                </ion-text>
            </div>
            <ion-button color="tertiary" class="use-location">Use Current Location</ion-button>
            <hr />
            <div class="ion-text-left">
                <ion-note>Street Address</ion-note>
                <ion-searchbar class="address-line"></ion-searchbar>
            </div>
            <ion-img src="https://via.placeholder.com/300x110" alt="map" />
            <ion-button>Continue</ion-button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'EditAddressForm',
};
</script>

<style>
.edit-address {
    /*min-height: calc(100vh - 57px);*/
}

.address-content {
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    flex-direction: column;
    height: 100%;
    flex: 1 0 auto;
    padding: 50px 0;
    width: 90%;
    margin: 0 auto;
}

.use-location {
    --ion-color-tertiary-contrast: true;
}

hr {
    background-color: black;
    width: 250px;
}

.address-line {
    height: 48px;
}
</style>
