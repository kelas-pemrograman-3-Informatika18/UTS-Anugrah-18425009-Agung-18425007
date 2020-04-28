<template>
  <q-page class="bg-deep-blue-10">
    <div class="row bg-grey-2">
      <div class="col q-ml-xl q-mr-xl">
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
      <q-carousel-slide :name="1" img-src="https://cdn-image.bisnis.com/posts/2020/04/22/1231165/singapura_260320.jpg">
      <div class="absolute-bottom custom-caption">
          <div class="text-h2 text-bold">Nikmati Diskon Penerbangan Internasional Sebesar 90%</div>
          <div class="text-subtitle1">Dengan Beragam Maskapai Terpercaya</div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="2" img-src="https://images.unsplash.com/photo-1568651925522-cd4447340898?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80">
      <div class="absolute-bottom custom-caption">
          <div class="text-h2 text-bold">Jelajahi Tempat Wisata Unik Yang belum Pernah Anda Kunjungi</div>
          <div class="text-subtitle1">Tanpa Harus Khawatir Kantong Kering </div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="3" img-src="https://q-cf.bstatic.com/images/hotel/max1024x768/130/130483550.jpg">
          <div class="absolute-bottom custom-caption">
          <div class="text-h2 text-bold">Beristirahat Di Hotel Murah Dan Nyaman Hanya Sekali Klik</div>
          <div class="text-subtitle1">Dengan Banyak Pilihan Kamar</div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="4" img-src="https://d1d8o7q9jg8pjk.cloudfront.net/c/lg_5d1447478a632.jpeg">
      <div class="absolute-bottom custom-caption">
          <div class="text-h2 text-bold">Promo Diskon 30% Dengan Pembayaran Menggunakan Gopay</div>
          <div class="text-subtitle1">Bayar Tiket Dan Pesan Hotel Hanya Sekali Klik</div>
        </div>
      </q-carousel-slide>
    </q-carousel>
    </div>
    </div>
    <div class="row">
    <div class="text-h5 text-bold q-px-xl q-pt-sm">Kota Populer</div>
    </div>
    <div class="row">
      <div class="col q-ml-xl" style="height: 170px; max-width: 300px">
        <q-card class="my-card">
      <q-img src="https://www.dw.com/image/44565755_303.jpg"
      :ratio="16/9"
      />

      <q-card-section>
        <div class="text-h6">Bandung</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        {{ lorem }}
      </q-card-section>
    </q-card>
      </div>
        <div class="col q-ml-md" style="height: 170px; max-width: 300px">
        <q-card class="my-card">
      <q-img src="https://cdn.britannica.com/88/132688-050-E9739DD9/Skyline-Jakarta-Indonesia.jpg"
      :ratio="16/9"
      />

      <q-card-section>
        <div class="text-h6">Jakarta</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        {{ lorem }}
      </q-card-section>
    </q-card>
      </div>
        <div class="col q-ml-md" style="height: 170px; max-width: 300px">
        <q-card clickable active="active" to="tiket-pesawat" class="my-card">
      <q-img src="https://www.lampost.co/upload/lampung-gelar-festival-budaya-menara-siger.jpeg"
      :ratio="16/9"
      />

      <q-card-section>
        <div class="text-h6">Lampung</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        {{ lorem }}
      </q-card-section>
    </q-card>
      </div>
      <div class="col q-ml-md" style="height: 170px; max-width: 300px">
        <q-card class="my-card">
      <q-img src="https://cdn.water-sport-bali.com/wp-content/uploads/2012/04/Tips-Wisata-Bali-Feature-Image.jpg"
      :ratio="16/9"
      />

      <q-card-section>
        <div class="text-h6">Bali</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        {{ lorem }}
      </q-card-section>
    </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      slide: 1
    }
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
