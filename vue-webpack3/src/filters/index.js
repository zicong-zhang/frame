import Vue from 'vue';

Vue.filter('date', (value) => {
  if (!value) return '';
  return value.replace(/\-/g, '.');
});
