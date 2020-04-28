<template>
    <q-page>
        <div class="row q-ml-xl q-mr-xl">
            <div class="col">
                <div>Masukan Kode Pemesanan</div>
                <q-input v-model="search" filled type="search" hint="Search">
        <template v-slot:append>
          <q-btn label="Cari" />
        </template>
      </q-input>
            </div>
        </div>
        <div class="row">
            <div class="col">
                Anda Belum Mempunyai Pesanan
            </div>
        </div>
    </q-page>
</template>
