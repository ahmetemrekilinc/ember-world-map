import Component from '@ember/component';
import {computed} from '@ember/object';
import {isBlank} from '@ember/utils';
import layout from './template';
import $ from 'jquery';

export default Component.extend({
  layout,
  tagName:'',

  _data: computed('data', function(){
    let data = this.get('data');
    if(isBlank(data)){
      return {};
    }
    return data;
  }),

  _colorScale: computed('color', function(){
    let color = this.get('color');
    let colorsMap = {
      "BLUE": ['#C8EEFF', '#0071A4'],
        "RED": ['#ffcbd7', '#d40000'],
        "GREEN": ['#e6ffe6', '#00c600']
    };
    if(colorsMap[color]){
      return colorsMap[color];
    }
    return ['#C8EEFF', '#0071A4'];
  }),

  init(){
    this._super(...arguments);
    let data = this.get('_data');
    let _colorScale = this.get('_colorScale');
    $(function(){
      $('.ember-world-map').vectorMap({
        map: 'world_mill',
        series: {
          regions: [{
            values: data,
            scale: _colorScale,
            normalizeFunction: 'polynomial'
          }]
        },
        onRegionTipShow: function(e, el, code){
          if(data[code]){
            el.html(el.html()+' ('+data[code]+')');
          }
        }
      });
    });
  }

});
