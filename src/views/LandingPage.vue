<template>
    <ion-page>
        <ion-grid class="grid">
            <ion-row class="jobLogo">
                <img src="/assets/moJobsLogo.png" alt="MoJobs Logo" />
            </ion-row>
            <ion-row class="captcha">
                <div class="g-recaptcha">
                    <vue-recaptcha
                        @widgetId="recaptchaWidget = $event"
                        @verify="callbackVerify($event)"
                        @expired="callbackExpired()"
                        @fail="callbackFail()"
                    >
                    </vue-recaptcha>
                </div>
            </ion-row>
        </ion-grid>
    </ion-page>
</template>

<script>
import { ref } from 'vue';
import { VueRecaptcha, useRecaptcha } from 'vue3-recaptcha-v2';

export default {
    name: 'recaptcha',
    components: { VueRecaptcha },
    setup: () => {
        // Reset Recaptcha
        const { resetRecaptcha } = useRecaptcha();
        const recaptchaWidget = ref(null);

        const callbackVerify = (response) => {
            console.log(response);
        };
        const callbackExpired = () => {
            console.log('expired!');
        };
        const callbackFail = () => {
            console.log('fail');
        };
        // Reset Recaptcha action
        const actionReset = () => {
            resetRecaptcha(recaptchaWidget.value);
        };

        return {
            recaptchaWidget,
            callbackVerify,
            callbackFail,
            actionReset,
        };
    },
};
</script>

<style scoped>
.grid {
    transform: translateY(30%);
}

.captcha {
    display: flex;
    justify-content: center;
}

.jobLogo {
    padding-bottom: 40px;
    display: flex;
    justify-content: center;
    width: 300px;
    height: auto;
}
</style>
