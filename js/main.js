import ModelThumb from './components/ModelsThumbnail.js'
(() => {
    // create vue instance here
    const { createApp } = Vue

    createApp({
        created() {
            // ALWAYS get your remote data here
            fetch('./data.json')
                .then(res => res.json())
                .then(data => this.modelData = data)
            .catch(error => console.error(error));
        },

        data() {
            return {
                modelData: {}
                
            }
        },

        components: {
            modelthumbnail: ModelThumb
        }

    }).mount('#app')
})()