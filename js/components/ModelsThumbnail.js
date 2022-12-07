export default {
    name: "ModelThumb",

    emit: ['loadmodelinfo'],

    props: {
        model: Object
    },

    template: `
    <li @click="loadModelBox">
        <img :src='"images/" + model.model_thumb' alt="model img">
        <h5>{{model.model_name}}</h5>
    </li>
    `,

    methods: {
        loadModelBox() {
            this.$emit('loadmodelinfo', this.model);
        }
    }

}