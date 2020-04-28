<template>
    <q-page class="bg-white">
        <div class="row bg-grey-2 q-mr-xl q-ml-xl">
            <div class="col">
    <q-carousel
      animated
      v-model="slide"
      navigation
      infinite
      autoplay
      arrows
      transition-prev="slide-right"
      transition-next="slide-left"
    >
      <q-carousel-slide :name="1" img-src="https://explorewisata.com/wp-content/uploads/2018/01/tempat-wisata-indonesia.jpg">
      <div class="absolute-bottom custom-caption">
          <div class="text-h3 text-bold">Menikmati Pemandangan Sunrise Di Borobudur </div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="2" img-src="https://wartaterkini.news/wp-content/uploads/2019/05/FB_IMG_1558440253724.jpg" >
      <div class="absolute-bottom custom-caption">
          <div class="text-h3 text-bold">Mengeksplore Danau Ranau Keindahan Alam Yang Tersembunyi</div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="3" img-src="https://www.twisata.com/wp-content/uploads/2015/06/Gambar-Gunung-Bromo.jpg" >
      <div class="absolute-bottom custom-caption">
          <div class="text-h3 text-bold">Buat Jiwa Berpetualangmu Bergejolak Taklukanlah Bromo</div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="4" img-src="https://cdn2.tstatic.net/lampung/foto/bank/images/menara-siger_20171228_130217.jpg" >
      <div class="absolute-bottom custom-caption">
        <div class="text-h3 text-bold"></div>
      </div>
    </q-carousel-slide>
    </q-carousel>
            </div>
        </div>
        <div class="row q-mr-xl q-ml-xl text-h5 text-bold">Tempat Wisata Rekomendasi</div>
        <div class="row q-mr-xl q-ml-xl">
          <div class="col q-mr-sm">
    <q-card class="my-card">
      <q-carousel
      swipeable
      animated
      v-model="slide"
      thumbnails
      infinite
    >
      <q-carousel-slide :name="1" img-src="https://www.indotelko.com/images/media/201907/ori/ilus-lampung-telp.jpg">
      <div class="absolute-top-left custom-caption">
          <div class="text-h6 text-bold">Puncak Mas</div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="2" img-src="https://1.bp.blogspot.com/-OtNwmGDM2TA/W0zgVjN5zWI/AAAAAAAACNE/0242HUOGn0ouL_DEQalkMQ8RzMH7CJi4gCLcBGAs/s1600/IMG_20180717_011253.png" >
      <div class="absolute-top-left custom-caption">
          <div class="text-h6 text-bold">Puncak Mas</div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="3" img-src="https://www.travelz.xyz/wp-content/uploads/2018/10/wisata-puncak-mas-lampung.jpg" >
      <div class="absolute-top-left custom-caption">
          <div class="text-h6 text-bold">Puncak Mas</div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="4" img-src="https://www.nativeindonesia.com/wp-content/uploads/2019/07/cafe-terbuka.jpg" >
      <div class="absolute-top-left custom-caption">
          <div class="text-h6 text-bold">Puncak Mas</div>
        </div>
      </q-carousel-slide>
    </q-carousel>

      <q-list>
        <q-expansion-item
        expand-separator
        icon="location_on"
        label="Lokasi"
      >
        <q-card>
          <q-card-section>
            <div>Alamat: Jl. PB. Marga, Sukadana Ham, Kec. Tj. Karang Tim., Kota Bandar Lampung</div>
            <div>Jam Operasional: 08.00 - 23.00</div>
          </q-card-section>
        </q-card>
      </q-expansion-item>

        <q-expansion-item
        expand-separator
        icon="local_bar"
        label="Fasilitas"
      >
        <q-card>
          <q-card-section>
            <q-chip icon="restaurant">Food Court</q-chip>
            <q-chip icon="wc">Toilet</q-chip>
            <q-chip icon="local_parking">Parkir Area</q-chip>
            <q-chip icon="museum">Masjid</q-chip>
          </q-card-section>
        </q-card>
      </q-expansion-item>

      </q-list>
    </q-card>
          </div>
          <div class="col q-ml-sm">
            <q-card class="my-card">
      <q-carousel
      swipeable
      animated
      v-model="slide"
      thumbnails
      infinite
    >
      <q-carousel-slide :name="1" img-src="https://www.nativeindonesia.com/wp-content/uploads/2019/07/Waterboom.jpg">
      <div class="absolute-top-left custom-caption">
          <div class="text-h6 text-bold">Pantai Mutun</div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="2" img-src="https://media-cdn.tripadvisor.com/media/photo-m/1280/1a/9d/de/80/pantai-mutun.jpg" >
      <div class="absolute-top-left custom-caption">
          <div class="text-h6 text-bold">Pantai Mutun</div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="3" img-src="https://s.kaskus.id/r540x540/images/2020/02/23/10789324_20200223024010.jpg" >
      <div class="absolute-top-left custom-caption">
          <div class="text-h6 text-bold">Pantai Mutun</div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="4" img-src="https://www.nativeindonesia.com/wp-content/uploads/2019/07/Pantai-mutun.jpg" >
      <div class="absolute-top-left custom-caption">
          <div class="text-h6 text-bold">Pantai Mutun</div>
        </div>
      </q-carousel-slide>
    </q-carousel>

      <q-list>
        <q-expansion-item
        expand-separator
        icon="location_on"
        label="Lokasi"
      >
        <q-card>
          <q-card-section>
            <div>Alamat: Sukajaya Lempasing, Padang Cermin, Kabupaten Pesawaran</div>
            <div>Jam Operasional: 08.00 - 23.00</div>
          </q-card-section>
        </q-card>
      </q-expansion-item>

        <q-expansion-item
        expand-separator
        icon="local_bar"
        label="Fasilitas"
      >
        <q-card>
          <q-card-section>
            <q-chip icon="restaurant">Food Court</q-chip>
            <q-chip icon="wc">Toilet</q-chip>
            <q-chip icon="local_parking">Parkir Area</q-chip>
            <q-chip icon="museum">Masjid</q-chip>
          </q-card-section>
        </q-card>
      </q-expansion-item>

      </q-list>
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
  }
}
</script>
<style lang="sass" scoped>
.custom-caption
  text-align: center
  padding: 12px
  color: white
  background-color: rgba(0, 0, 0, .3)
</style>
