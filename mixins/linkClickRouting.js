/**
 * If children of a component contains relative HTML links
 *  the mixins handles these as routes.
 */
 export default {
    data() {
      return {
        links: []
      };
    },
  
    mounted() {
      // TODO: use hasRouter mixin ???
      if (this.$router) {
        this.addListeners();
      }
    },
  
    beforeUnmount() {
      if (this.$router) {
        this.removeListeners();
      }
    },
  
    updated() {
      if (this.$router) {
        this.removeListeners();
        this.$nextTick(() => {
          this.addListeners();
        });
      }
    },
  
    methods: {
      /**
       * Prevents default browser behavior (page reload) for relative links.
       */
      navigate(event) {
        const href = event.target.getAttribute("href");
        const target = event.target.getAttribute("target");
        // TODO: add if it is the same domain check
        if (href && href[0] === "/" && target !== "_blank") {
          event.preventDefault();
          this.$router && this.$router.push(this.localePath(href));
        }
      },
      addListeners() {
        this.links = this.$el.getElementsByTagName("a");
        for (let i = 0; i < this.links.length; i++) {
          this.links[i].addEventListener("click", this.navigate, false);
        }
      },
      removeListeners() {
        for (let i = 0; i < this.links.length; i++) {
          this.links[i].removeEventListener("click", this.navigate, false);
        }
        this.links = [];
      }
    }
  };