
import ModelThumb from './components/ModelsThumbnail.js'
import ModelBoxComponent from './components/ModelsBox.js'
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
                modelData: {},
                modelBox: {},
                showBox: false
                
            }
        },

        components: {
            modelthumbnail: ModelThumb,
            thebox: ModelBoxComponent
        },

        methods: {
            loadModelBox(model) {
                this.modelBox = model;
                this.showBox = true;
            }
        }

    }).mount('#app')
})()