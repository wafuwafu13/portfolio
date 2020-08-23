import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                home: "#B8F89A",
                works: "#CDFFF6",
                experiences: "#FEEAB7",
                // skils: "#FEEAB7"
            }
        }
    }
});
