<template>
    <div>
        <h1>Community Page</h1>
        <header1></header1>
        <body-2></body-2>
    </div>
</template>

<script>
import HeaderCommunity from './HeaderCommunity.vue'
import CommunityContent from './CommunityContent.vue'

export default {
    name: 'Community',
    data (){
        return{}
    },
    components:{
        'header1': HeaderCommunity,
        'body-2': CommunityContent,
    }
}
</script>

<style scoped>

</style>
