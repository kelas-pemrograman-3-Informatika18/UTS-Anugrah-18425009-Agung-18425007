<template>
  <q-page class="bg-white">
    <div class="row bg-grey-2 q-ml-xl q-mr-xl">
      <div class="col bg-grey-9">
        <div style="background-color:black ; text-align:center" class="text-h5 text-bold text-white q-ml-md q-mr-md q-mt-md">Cari Promo Tiket Travel Termurah</div>
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
            <div class="q-ml-xl q-mt-sm q-mb-sm text-subtitle1 teks-bold text-white">Jumlah Kursi</div>
            <q-input
            dense
            style="background-color:white"
            class="q-ml-xl q-mb-md q-mr-xl"
            v-model.number="kursi"
            type="number"
            filled
          />
          </div>
          <div class="col bg-grey-10">
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
      <q-carousel-slide :name="1" img-src="https://assets-a1.kompasiana.com/statics/files/14107741851004275754.jpg">
      <div class="absolute-bottom custom-caption">
          <div class="text-h3 text-bold">Eksplor Lebih Sampai Ke Pelosok Indonesia</div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="2" img-src="https://www.jejakpiknik.com/wp-content/uploads/2019/06/travel-bogor-bandung-e1561807241773-630x380.jpeg">
      <div class="absolute-bottom custom-caption">
          <div class="text-h3 text-bold">Dilengkapi Fasilitas Yang Nyaman Membuat Perjalanan Anda Berkesan </div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="3" img-src="https://scontent-lga3-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/c181.0.718.718a/s640x640/50618297_135649234122943_1155541579049906472_n.jpg?_nc_ht=scontent-lga3-1.cdninstagram.com&_nc_cat=107&_nc_ohc=j02yOJXpJOoAX-RshSB&oh=26bef7586d1a4a38b468b3c4c32e7af7&oe=5EBF631B">
          <div class="absolute-bottom custom-caption">
          <div class="text-h3 text-bold">Diskon Spesial Dari Kramat Jati 50%</div>
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
      slide: 1,
      asal: null,
      tujuan: null,
      berangkat: null,
      pulang: null,
      kursi: null
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
