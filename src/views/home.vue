<!--
 * @Author: 王康平
 * @后端开发: 
 * @Date: 2021-04-19 10:43:15
-->
<template>
    <ul>
        <li>
            <h2>角色</h2>
        </li>
        <li v-for="item in list" :key="item.id">
            {{item.role_name}}
        </li>
    </ul>
</template>


<script>
export default {
    asyncData({ store }) {
        return Promise.all([
            store.dispatch('getRole'),
        ]);
    },

    computed: {
        list() {
            return this.$store.state.SportsHome.list
        }
    }
}
</script>