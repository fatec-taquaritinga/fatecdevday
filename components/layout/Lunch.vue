<script>
import lunch from '../../content/lunch'

export default {
  name: 'Layout-Lunch',
  data() {
    return {
      maps:
        'https://www.google.com.br/maps/dir/FATEC-TQ+-+Faculdade+de+Tecnologia+de+Taquaritinga,+Taquaritinga,+15900-000,+Brasil/',
      facebook: 'https://www.facebook.com/',
      lunch: lunch.sort((a, b) => (a.distance.raw < b.distance.raw ? -1 : 1))
    };
  }
};
</script>

<template>
  <section id="almoco" class="container in-menu">
    <div class="gutter">
      <h3>Onde almoçar?</h3>
      <p>O intervalo para almoço é livre, cada participante pode escolher onde fazer sua refeição.</p>

      <aside>
        <div v-for="place in lunch" :key="place.name">
          <h5>
            <a :href="facebook + place.facebook" target="_blank">{{place.name}}</a>
          </h5>

          <span>{{place.foods.join(', ')}}</span>

          <p>
            <i class="icon"><img src="~assets/room.svg" alt="Ícone de localização" /></i>
            {{place.address}}
          </p>
          <p>
            <i class="icon"><img src="~assets/my_location.svg" alt="Ícone de distância" /></i>
            {{place.distance.formatted}}
            <small>&bull;</small>
            <i class="icon"><img src="~assets/phone.svg" alt="Ícone de telefone" /></i>
            <a :href="`tel:${place.phone.raw}`" target="_blank">{{place.phone.formatted}}</a>
          </p>

          <a :href="maps + place.maps" target="_blank" class="button">Como chegar</a>
        </div>
      </aside>
    </div>
  </section>
</template>

<style lang="stylus" scoped>
@import '../../stylus/variables';

#almoco {
  background: linear-gradient(#fff, lighten($color-secondary-50, 50%));

  aside {
    margin-top: 3rem;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;

    div {
      font-size: 0.825rem;
      margin: 1rem;
      padding: 1.5rem;
      background: $color-secondary-50;

      h5 {
        font-size: 1.25em;
        margin: 0;

        a {
          color: $color-primary;
          text-decoration: none;
        }
      }

      span {
        display: block;
        color: $text-color-secondary;
        margin: 0 0 1em;
      }

      p {
        margin: 0 0 0.325em;
        line-height: 1;
        display: flex;
        justify-content: center;
        align-items: center;

        a {
          color: $color-secondary;
          text-decoration: none;
          line-height: 1;
        }

        small {
          display: inline-block;
          margin: 0 0.25em;
          color: $text-color-secondary;
        }
      }

      .icon {
        vertical-align: middle;
        height: 1em;
        display: inline-flex;
      }

      .button {
        margin: 1em 0 0;
      }
    }
  }
}
</style>
