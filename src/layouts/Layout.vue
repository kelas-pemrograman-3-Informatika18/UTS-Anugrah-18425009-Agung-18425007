<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="text-primary">
      <q-toolbar-title>
        <div class="row">
        <div class="col q-ml-xl q-mr-xl " />
        <div class="col text-yellow"><q-icon name="warning" /> Berpergianlah Secara Bijak #StayAtHome</div>
        <div class="col q-ml-xl q-mr-xl" />
        </div>
      </q-toolbar-title>
    </q-toolbar>
      <q-toolbar class="bg-white">
        <q-toolbar-title class="q-ml-xl">
          <q-img
          src="~src/statics/logo.png"
          style="width:160px"
          ></q-img>
          <q-btn
          class="q-ml-sm"
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          color="black"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />
        </q-toolbar-title>
        <div class="q-mr-xl">
          <q-btn flat rounded label="About" class="q-mr-sm" text-color="black" @click="toolbar = true" />
          <q-dialog v-model="toolbar">
      <q-card>
        <q-toolbar>
          <q-avatar>
            <img src="~src/statics/logo.png" style="width:160px">
          </q-avatar>

        </q-toolbar>

        <q-card-section>
          <div>Version:1.0</div>
          <div>Contact Us:</div>
          <div>wikawikasupport@gmail.com</div>
          <q-btn flat label="OK" color="primary" v-close-popup />
        </q-card-section>
      </q-card>
    </q-dialog>
          <q-btn text-color="black" outline rounded label="Sign In" class="q-mr-sm" to="/pendaftaran"/>
        </div>
        <!--toolbar bawah-->
      </q-toolbar>
      <q-toolbar class="bg-grey-2">
        <q-toolbar-title>
          <q-btn-dropdown flat class="q-ml-xl" color="grey-2" label="Transportasi" text-color="black">
      <q-list>
        <q-item clickable active="active" exact v-ripple :to="{ name: 'tiket-pesawat'}" v-close-popup @click="onItemClick ">
          <q-item-section>
            <q-item-label>Tiket Pesawat</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable active="active" exact v-ripple :to="{ name: 'tiket-bus'}" v-close-popup @click="onItemClick">
          <q-item-section>
            <q-item-label>Tiket Bus</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable active="active" exact v-ripple :to="{ name: 'tiket-travel'}" v-close-popup @click="onItemClick">
          <q-item-section>
            <q-item-label>Tiket Travel</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable active="active" exact v-ripple :to="{ name: 'tiket-kereta'}" v-close-popup @click="onItemClick">
          <q-item-section>
            <q-item-label>Tiket Kereta</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-btn-dropdown>
    <!--Button penginapan-->
    <q-btn-dropdown flat class="q-ml-sm" color="grey-2" label="Penginapan" text-color="black">
      <q-list>
        <q-item clickable active="active" exact v-ripple :to="{ name: 'pesan-hotel'}" v-close-popup @click="onItemClick ">
          <q-item-section>
            <q-item-label>Hotel</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-btn-dropdown>
    <!--Button tempat wisata-->
     <q-btn-dropdown flat class="q-ml-sm" color="grey-2" label="Blog Tempat Wisata" text-color="black">
      <q-list>
        <q-item clickable active="active" exact v-ripple :to="{ name: 'blog-wisata-dalam-negeri'}" v-close-popup @click="onItemClick ">
          <q-item-section>
            <q-item-label>Dalam Negeri</q-item-label>
          </q-item-section>
        </q-item>

      </q-list>
    </q-btn-dropdown>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      :width="220"
        :breakpoint="500"
      bordered
      overlay
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          <q-img
          src="~src/statics/logo.png"
          style="width:160px"
          ></q-img>
        </q-item-label>
        <q-item clicklable active="active" exact v-ripple :to="{ name: 'dashboard'}">
          <q-item-section avatar>
            <q-icon name="dashboard" />
          </q-item-section>
          <q-item-section>
            Dashboard
          </q-item-section>
        </q-item>
        <q-item clicklable active="active" exact v-ripple :to="{ name: 'pemesanan'}">
          <q-item-section avatar>
            <q-icon name="event_note" />
          </q-item-section>
          <q-item-section>
            Pesanan Saya
          </q-item-section>
        </q-item>
        <q-separator separator="true" />
        <q-item clicklable active="active" exact v-ripple :to="{ name: 'tiket-pesawat'}">
          <q-item-section avatar>
            <q-icon name="flight_takeoff" />
          </q-item-section>
          <q-item-section>
            Tiket Pesawat
          </q-item-section>
        </q-item>
        <q-item clicklable active="active" exact v-ripple :to="{ name: 'tiket-bus'}">
          <q-item-section avatar>
            <q-icon name="directions_bus" />
          </q-item-section>
          <q-item-section>
            Tiket Bus
          </q-item-section>
        </q-item>
        <q-item clicklable active="active" exact v-ripple :to="{ name: 'tiket-travel'}">
          <q-item-section avatar>
            <q-icon name="airport_shuttle" />
          </q-item-section>
          <q-item-section>
            Tiket Travel
          </q-item-section>
        </q-item>
        <q-item clicklable active="active" exact v-ripple :to="{ name: 'tiket-kereta'}">
          <q-item-section avatar>
            <q-icon name="directions_subway" />
          </q-item-section>
          <q-item-section>
            Tiket Kereta
          </q-item-section>
        </q-item>
        <q-separator separator="true" />
        <q-item clicklable active="active" exact v-ripple :to="{ name: 'pesan-hotel'}">
          <q-item-section avatar>
            <q-icon name="apartment" />
          </q-item-section>
          <q-item-section>
            Hotel
          </q-item-section>
        </q-item>
        <q-separator separator="true" />
        <q-item clicklable active="active" exact v-ripple :to="{ name: 'blog-wisata-dalam-negeri'}">
          <q-item-section avatar>
            <q-icon name="emoji_flags" />
          </q-item-section>
          <q-item-section>
            Dalam Negeri
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container class="bg-grey-3">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MainLayout',
  data () {
    return {
      leftDrawerOpen: false,
      icon: false,
      bar: false,
      bar2: false,
      toolbar: false
    }
  }
}
</script>
