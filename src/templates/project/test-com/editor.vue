<template>
    <div class="ct">
        <SelectorImage :src="model.bannerSrc"
            :options="imageOptions"
            @change="onChangeImage" />
        <SelectorLink :url="model.bannerLink"
            :linkType="model.bannerLinkType"
            :linkName="model.bannerLinkName"
            @change="onChangeLink" />
    </div>
</template>

<script>
import { DefaultImage } from '../common/constants'

export default {
    props: ['model'],
    data() {
        return {
            imageOptions: {
                style: {
                    width: '160px',
                    height: '80px',
                },
                default: DefaultImage,
                cropRatio: '2:1',
            },
        }
    },
    methods: {
        onChangeImage(val) {
            this.$set(this.model, 'bannerSrc', val)
        },
        onChangeLink({ url, linkType, linkName }) {
            this.$set(this.model, 'bannerLink', url)
            this.$set(this.model, 'bannerLinkType', linkType)
            this.$set(this.model, 'bannerLinkName', linkName)
        },
    },
}
</script>

<style lang="less">
</style>
