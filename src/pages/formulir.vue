<template>
    <q-page>
        <div class="row q-ml-xl q-mr-xl">
            <div class="col q-mr-sm">
                <div class="text-h3 text-bold">Isi Data Diri</div>
                <div>Masukan Nama</div>
                <q-input filled v-model="nama" :dense="dense" />
                <div class="row">
                    <div class="col q-mr-sm">
                        <div>Masukan Email</div>
                <q-input filled v-model="email" :dense="dense" />
                    </div>
                    <div class="col q-ml-sm">
                        <div>Masukan No tlp</div>
                <q-input filled v-model="tlp" :dense="dense" />
                    </div>
                </div>
            </div>
            <div class="col q-ml-sm">
                <div class="text-h3 text-bold q-mb-lg">Isi Metode Pembayaran</div>
                <q-select filled v-model="model" :options="options" label="Metode Pembayaran" />
                <q-btn
      size="22px"
      class="q-mt-md"
      color="orange"
      label="Proses"
      to="/dashboard"
    />
            </div>
        </div>
    </q-page>
</template>
<script>
export default {
  data () {
    return {
      model: null,
      text: null,
      email: null,
      tgl: null,
      options: [
        'BCA', 'Gopay', 'Indomaret', 'BRI', 'Alfamart'
      ]
    }
  }
}
</script>
