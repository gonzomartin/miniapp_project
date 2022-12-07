export default {
    name: "ModelThumb",

    props: {
        model: Object
    },

    template: `
    <li>
        <img :src='"images/" + model.model_thumb' alt="model img">
        <h5>{{model.model_name}}</h5>
    </li>
    `

}