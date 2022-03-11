<template>
    <nav>
        <div id="myNav" :class="{ 'navbar_open': showNavbar, 'navbar': !showNavbar }">
            <div class="nav">
                <ul>
                    <li class="item">
                        <nuxt-link :to="('/')">
                            <p @click="closeNavigation" class="text__menu">FIRMA</p>
                        </nuxt-link>
                    </li>
                    <li class="item" v-for="element in menu_elements" :key="element.id">
                        <nuxt-link :to="('/' + element.slug)">
                            <p @click="closeNavigation" class="text__menu">{{ element.title }}</p>
                        </nuxt-link>
                    </li>
                    <li class="item">
                        <nuxt-link class="item__kus" :to="('/kesslerundsohne')">
                            <img @click="closeNavigation" class="item__kus--logo" src="/kus_logo_immer.svg" alt="Logo Valenton">
                        </nuxt-link>
                    </li>
                </ul>
            </div>
        </div>
        <div class="openbtn" @click="openNavigation">
            <span :class="{ 'turnR': showNavbar, '': !showNavbar}"></span>
            <span :class="{ 'hide': showNavbar, '': !showNavbar}"></span>
            <span :class="{ 'turnL': showNavbar, '': !showNavbar}"></span>
        </div>       
    </nav>
</template>

<script>
export default {
    name: 'Navigation',

    data() {
        return { 
            data: [],
            showNavbar: false
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
    },
    methods: {
        openNavigation() {
            this.showNavbar = !this.showNavbar;
            if (this.showNavbar == true) {
                document.body.classList.add("overflow-hidden")
            }
            else {
                document.body.classList.remove("overflow-hidden")
            }
        },
        closeNavigation() {
            this.showNavbar = false;
            document.body.classList.remove("overflow-hidden")
        }
    },
    watch: {}
}
</script>
  
<style lang="scss" scoped>
    @use "Navigation";
</style>