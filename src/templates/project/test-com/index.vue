<template>
    <div class="ct" v-if="visible">
        <div class="banner" 
            @click="onClickBanner">
            <img class="img"
                alt="banner" 
                :src="banner"
                @error="onImageError"/>
        </div>
    </div>
</template>

<script>
import {DefaultImage} from '../common/constants'

export default {
    props: ['model', 'viewer'],
    data() {
        return {
            defaultImage: DefaultImage,
            errorImage: '',
        }
    },
    computed: {
        visible(){
            return typeof this.banner === 'string' && this.banner.length
        },
        banner(){
            let banner = this.model.bannerSrc
            if(this.viewer === 'buyer') return this.errorImage || banner
            return this.errorImage || banner || this.defaultImage
        },
    },
    methods: {
        onClickBanner(){
            const {bannerLink, bannerLinkType} = this.model
            WDYAPI.gotoLink(bannerLink, bannerLinkType)
        },
        onImageError(){
            this.errorImage = this.defaultImage
        },
    },
}
</script>

<style lang="less">

</style>
