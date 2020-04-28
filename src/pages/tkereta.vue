<template>
  <q-page class="bg-white">
    <div class="row bg-grey-2 q-ml-xl q-mr-xl">
      <div class="col bg-grey-9">
        <div style="background-color:black ; text-align:center" class="text-h5 text-bold text-white q-ml-md q-mr-md q-mt-md">Cari Promo Tiket Kereta Termurah</div>
        <div class="row">
        <div class="col bg-grey-10 q-ml-md">
        <div class="q-ml-xl q-mt-sm teks-bold text-white text-subtitle1">Kota Asal</div>
        <q-input dense style="background-color:white" filled class="q-ml-xl q-mr-xl" v-model="asal" />
        </div>
        <div class="col bg-grey-10 q-mr-md">
          <div class="q-ml-xl q-mt-sm teks-bold text-white text-subtitle1">Kota Tujuan</div>
          <q-input dense style="background-color:white" filled class="q-ml-xl q-mr-xl" v-model="tujuan" />
          </div>
        </div>
        <div class="row">
        <div class="col bg-grey-10 q-ml-md">
          <div class="q-ml-xl q-mt-sm q-mb-sm teks-bold text-white text-subtitle1">Tanggal Berangkat</div>
      <q-input dense style="background-color:white" class="q-ml-xl q-mr-xl" filled v-model="berangkat" mask="date">
      <template v-slot:append>
        <q-icon name="event" class="cursor-pointer">
          <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
            <q-date v-model="berangkat" @input="() => $refs.qDateProxy.hide()" />
          </q-popup-proxy>
        </q-icon>
      </template>
    </q-input>
    </div>
    <div class="col bg-grey-10 q-mr-md">
          <div class="q-ml-xl q-mt-sm q-mb-sm teks-bold text-white text-subtitle1">Tanggal Pulang</div>
          <q-input dense style="background-color:white" class="q-ml-xl q-mr-xl" filled v-model="pulang" mask="date">
      <template v-slot:append>
        <q-icon name="event" class="cursor-pointer">
          <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
            <q-date v-model="pulang" @input="() => $refs.qDateProxy.hide()" />
          </q-popup-proxy>
        </q-icon>
      </template>
    </q-input>
    </div>
        </div>
        <div class="row">
          <div class="col bg-grey-10 q-ml-md">
            <div class="q-ml-xl q-mt-sm q-mb-sm text-subtitle1 teks-bold text-white">Dewasa</div>
            <q-input
            dense
            style="background-color:white"
            class="q-ml-xl q-mb-md q-mr-xl"
            v-model.number="dewasa"
            type="number"
            filled
          />
          </div>
          <div class="col bg-grey-10">
            <div class="q-ml-xl q-mt-sm q-mb-sm text-subtitle1 teks-bold text-white">Bayi</div>
            <q-input
            dense
            style="background-color:white"
            class="q-ml-xl q-mb-sm q-mr-xl"
      v-model.number="bayi"
      type="number"
      filled
    />
          </div>
          <div class="col bg-grey-10 q-mr-md">
          </div>
        </div>
        <div class="row">
          <div class="col bg-grey-10 q-ml-md"></div>
          <div class="col bg-grey-10">
            <q-btn to="/formulir" icon="search" class="q-my-md q-mx-md" text-color="white" color="orange" label="Cari Tiket" />
          </div>
          <div class="col bg-grey-10 q-mr-md"></div>
        </div>
    </div>
      <div class="col">
        <q-carousel
      keep-alive
      draggable="false"
      animated
      v-model="slide"
      vertical
      navigation
      infinite
      autoplay
      transition-prev="slide-down"
      transition-next="slide-up"
    >
      <q-carousel-slide :name="1" img-src="https://asset.kompas.com/crops/Sopi2ulRUWGp-jhrZDHqkLPvIDw=/156x0:1000x563/750x500/data/photo/2019/11/03/5dbe423d433c4.jpg">
      <div class="absolute-bottom custom-caption">
          <div class="text-h3 text-bold">Siap Mengantar Luar Dan Dalam Kota</div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="2" img-src="https://i.ytimg.com/vi/g-ZZ-APkwEw/maxresdefault.jpg">
      <div class="absolute-bottom custom-caption">
          <div class="text-h3 text-bold">Dengan Fasilitas Yang Nyaman Dan Bersih Siap Memanjakan Anda</div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="3" img-src="https://jakartabytrain.files.wordpress.com/2016/04/p1070812.jpg?w=1000&h=625">
          <div class="absolute-bottom custom-caption">
          <div class="text-h3 text-bold">Tanpa Macet Sampai Tujuan Dengan Cepat Dan Aman </div>
        </div>
      </q-carousel-slide>
    </q-carousel>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      date: '2019/02/01',
      slide: 1,
      asal: null,
      tujuan: null,
      dewasa: null,
      bayi: null,
      berangkat: null,
      pulang: null
    }
  },
  methods: {
  },
  name: 'PageIndex'
}
</script>

<style lang="sass" scoped>
.custom-caption
  text-align: center
  padding: 12px
  color: white
  background-color: rgba(0, 0, 0, .3)
</style>
