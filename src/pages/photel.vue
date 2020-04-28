<template>
  <q-page class="bg-white">
    <div class="row bg-grey-2 q-ml-xl q-mr-xl">
      <div class="col bg-grey-9">
        <div style="background-color:black ; text-align:center" class="text-h5 text-bold text-white q-ml-md q-mr-md q-mt-md">Cari Promo Hotel Termurah</div>
        <div class="row">
        <div class="col bg-grey-10 q-ml-md q-mr-md">
        <div class="q-ml-xl q-mt-sm teks-bold text-white text-subtitle1">Lokasi</div>
        <q-input dense style="background-color:white" filled class="q-ml-xl q-mr-xl" v-model="lokasi" />
        </div>
        </div>
        <div class="row">
        <div class="col bg-grey-10 q-ml-md">
          <div class="q-ml-xl q-mt-sm q-mb-sm teks-bold text-white text-subtitle1">Check-In</div>
      <q-input dense style="background-color:white" class="q-ml-xl q-mr-xl" filled v-model="cin" mask="date">
      <template v-slot:append>
        <q-icon name="event" class="cursor-pointer">
          <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
            <q-date v-model="cin" @input="() => $refs.qDateProxy.hide()" />
          </q-popup-proxy>
        </q-icon>
      </template>
    </q-input>
    </div>
    <div class="col bg-grey-10 q-mr-md">
          <div class="q-ml-xl q-mt-sm q-mb-sm teks-bold text-white text-subtitle1">Check-Out</div>
          <q-input dense style="background-color:white" class="q-ml-xl q-mr-xl" filled v-model="out" mask="date">
      <template v-slot:append>
        <q-icon name="event" class="cursor-pointer">
          <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
            <q-date v-model="out" @input="() => $refs.qDateProxy.hide()" />
          </q-popup-proxy>
        </q-icon>
      </template>
    </q-input>
    </div>
        </div>
        <div class="row">
          <div class="col bg-grey-10 q-ml-md">
            <div class="q-ml-xl q-mt-sm q-mb-sm text-subtitle1 teks-bold text-white">Jumlah Tamu</div>
            <q-input
            dense
            style="background-color:white"
            class="q-ml-xl q-mb-md q-mr-xl"
            v-model.number="tamu"
            type="number"
            filled
          />
          </div>
          <div class="col bg-grey-10 q-mr-md">
            <div class="q-ml-xl q-mt-sm q-mb-sm text-subtitle1 teks-bold text-white">Jumlah Kamar</div>
            <q-input
            dense
            style="background-color:white"
            class="q-ml-xl q-mb-sm q-mr-xl"
      v-model.number="kamar"
      type="number"
      filled
    />
          </div>
        </div>
        <div class="row">
          <div class="col bg-grey-10 q-ml-md"></div>
          <div class="col bg-grey-10">
            <q-btn to="/formulir" icon="search" class="q-my-md q-mx-md" text-color="white" color="orange" label="Cari Kamar" />
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
      <q-carousel-slide :name="1" img-src="https://r-cf.bstatic.com/images/hotel/max1024x768/172/172238812.jpg">
      <div class="absolute-bottom custom-caption">
          <div class="text-h3 text-bold">Nikmati Diskon 30% Dari Reddoorz</div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="2" img-src="https://blog.airyrooms.com/wp-content/uploads/2017/01/tambora-bandengan-88.jpg">
      <div class="absolute-bottom custom-caption">
          <div class="text-h3 text-bold">Nikmati Cashback 40% Dari Airy</div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="3" img-src="https://www.selera.id/wp-content/uploads/2019/09/Pilih-Mana-RedDoorz-atau-Airy-Rooms.jpg">
          <div class="absolute-bottom custom-caption">
          <div class="text-h3 text-bold">Dengan Berbagai Pilihan Kamar Siap Melayani Anda</div>
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
      lokasi: null,
      cin: null,
      out: null,
      kamar: null,
      tamu: null
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
