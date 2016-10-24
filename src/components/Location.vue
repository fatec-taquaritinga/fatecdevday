<script>
import Vue from 'vue'
import styles from '../helpers/mapStyles'

const google = window.google

export default {
  name: 'Location',
  mounted() {
    Vue.nextTick(() => {
      const options = {
        center: new google.maps.LatLng(-21.4251432, -48.5170046),
        zoom: 14,
        zoomControl: true,
        zoomControlOptions: { style: google.maps.ZoomControlStyle.LARGE },
        disableDoubleClickZoom: true,
        mapTypeControl: false,
        scaleControl: true,
        scrollwheel: false,
        panControl: false,
        streetViewControl: false,
        draggable: true,
        overviewMapControl: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        styles: styles
      }

      const map = new google.maps.Map(document.getElementById('map'), options)

      const info = new google.maps.InfoWindow({
        maxWidth: window.innerWidth - 30,
        content: `<div class="info-container">
            <h4 class="info-title">Fatec Taquaritinga</h4>
            <p class="inf-address">Av. Dr. Flávio Henrique Lemos, 585<br>
              Portal Itamaracá, Taquaritinga - SP<br>
              CEP: 15.900-000</p>
            <a class="button" href="https://www.google.com.br/maps/dir//Fatec+Taquaritinga,+Taquaritinga+-+SP,+15900-000/@-21.4275006,-48.5137219,14z/" target="_blank">Como chegar</a>
          </div>`
      })

      const marker = new google.maps.Marker({
        map: map,
        icon: require('../assets/pin.png'),
        position: new google.maps.LatLng(-21.429378212788446, -48.51506839590911),
        title: 'Fatec Taquaritinga',
        desc: 'Faculdade de Tecnologia de Taquaritinga, oferece cursos superiores tecnológicos gratuitos de qualidade.',
        tel: '(16) 3525-5250',
        email: 'fatec.devday@fatectq.edu.br',
        web: 'http://www.fatectq.edu.br/'
      })

      google.maps.event.addListener(marker, 'click', () => info.open(map, marker))
      google.maps.event.addListener(map, 'click', () => info.close())
    })
  }
}
</script>

<template>
  <section id="local" v-scrolled="'local'">
    <div class='map-container'>
      <div id='map'></div>
    </div>
  </section>
</template>

<style lang='stylus'>
@import '../stylus/variables'

#local
  position: relative
  background: $color-secondary-900
  padding: 0
  .map-container
    position: relative
    height: 70vh
    overflow: hidden
    #map
      position: absolute
      width: 100% !important
      height: 100% !important
      top: 0
      left: 0
      & > div:first-of-type
        background: $color-secondary-900 !important
      .gm-style-cc, a[title^='Clique para ver']
        display: none !important
      .gmnoprint
        padding-bottom: 50px
  .info-container
    padding: 5px 0
    .info-title
      margin: .5em 0 0
    .button
      box-shadow: none
</style>
