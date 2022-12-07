export default {
    name: 'ModelBoxComponent',

    props: ['model'],

    emits: ['closeinfobox'],
    
    template: `
    <section class="modelBox">
        <div @click="closeBox" class="nav__close" id="nav-close">
            <i class='bx bx-x'></i>
        </div>
        <div>
            <img :src='"images/"+ model.model_picture' alt="model picture" class="model-bg">
        </div>
        <div class="modelInfo">
            <h2 class="modelTittle">{{model.model_name}}</h2>
            <div class="modelInfo_box">
                <div class="modelInfo_el">
                    <img src="./images/logo-cooper.png" alt="model logo" class="model-logo">
                    <div>
                        <h3>Starting from:</h3>
                        <h4 class="price">{{model.model_price[0]}}</h4>
                        <p class="hp">{{model.model_hp[0]}}</p>
                    </div>
                </div>
                <div class="modelInfo_el">
                    <img src="./images/logo-cooper_s.png" alt="model logo" class="model-logo">
                    <div>
                        <h3>Starting from:</h3>
                        <h4 class="price">{{model.model_price[1]}}</h4>
                        <p class="hp">{{model.model_hp[1]}}</p>
                    </div>
                </div>
                <div class="modelInfo_el">
                    <img src="./images/logo-electric.png" alt="model logo" class="model-logo">
                    <div>
                        <h3>Starting from:</h3>
                        <h4 class="price">{{model.model_price[2]}}</h4>
                        <p class="hp">{{model.model_hp[2]}}</p>
                    </div>
                </div>
                <div class="modelInfo_el">
                    <img src="./images/logo-jcw.png" alt="model logo" class="model-logo">
                    <div>
                        <h3>Starting from:</h3>
                        <h4 class="price">{{model.model_price[3]}}</h4>
                        <p class="hp">{{model.model_hp[3]}}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    `,
    methods: {
        closeBox(){
            this.$emit('closeinfobox');
        }
    }
}