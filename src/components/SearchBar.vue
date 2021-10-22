<template>
    <div class="col-md-6">
        <div class="form-group">
            <input :value="value" @input="handleChange" />
            <label for="name">Name</label>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        value: {
            required: true,
            type: String,
        },
    },

    methods: {
        handleChange(e) {
            this.$emit('handleChange', e.target.value);
        },
    },
};
</script>
