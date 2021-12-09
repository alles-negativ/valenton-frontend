<template>
    <nav>
        <div class="nav">
            <ul>
                <li class="item" v-for="element in menu_elements" :key="element.id">
                    <nuxt-link :to="('/' + element.slug)">
                        <p class="text__menu">{{ element.title }}</p>
                    </nuxt-link>
                </li>
            </ul>
        </div>    
    </nav>
</template>

<script>
export default {
    name: 'Navigation',

    data() {
        return { 
            data: []
        }
    },
    async fetch() {
        const { json: data } = await this.$kirby.find({
            "query": "site.children",
            "select": {
                "title": true,
                "slug": true,
                "isHomePage": true,
                "isErrorPage": true,
                "status": true           
            }
        })
        this.data = data
    },
    computed: {
        menu_elements: function() {
            let elements = []
                for (let i = 0; i < this.data.length; i++) {
                    if (this.data[i].status == "listed" && !this.data[i].isHomePage) {    
                        elements.push(this.data[i])
                    }
                }
            return elements
        }
    }
}
</script>
  
<style lang="scss" scoped>
    @use "Navigation";
</style>