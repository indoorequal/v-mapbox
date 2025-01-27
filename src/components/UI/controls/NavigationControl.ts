import Vue from 'vue';
import controlMixin from './controlMixin';

export default Vue.extend({
  name: 'NavigationControl',
  mixins: [controlMixin],

  props: {
    showCompass: {
      type: Boolean,
      default: true,
    },
    showZoom: {
      type: Boolean,
      default: true,
    },
    visualizePitch: {
      type: Boolean,
      default: true,
    },
  },

  created() {
    this.control = new this.mapbox.NavigationControl(this.$props);
    this.$_addControl();
  },

  render() {},
});
