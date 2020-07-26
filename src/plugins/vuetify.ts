import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                home: "#B8F89A",
                works: "#CDFFF6",
                experiences: "#FFD2E8",
                skils: "#FEEAB7"
            }
        }
    }
});
