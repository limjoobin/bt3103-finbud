<template>
    <div>
        <h1>Test</h1>
        <header1></header1>
        <body-2></body-2>
        <ig-footer></ig-footer>
    </div>
</template>

<script>
import HeaderIG from './HeaderIG.vue'
import CommunityContent from './CommunityContent.vue'
import Footer from './Footer.vue'

export default {
    name: 'Community',
    data (){
        return{}
    },
    components:{
        'header1': HeaderIG,
        'body-2': CommunityContent,
        'ig-footer': Footer,
    }

}
</script>


<style>

</style>