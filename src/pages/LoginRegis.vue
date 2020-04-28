<template>
    <q-page>
        <div class="row">
            <div class="col q-mr-xl q-ml-xl">
              <div class="text-bold text-h3">Silahkan Login Disini</div>
                <div>Masukan Nama</div>
                <q-input filled v-model="text" :dense="dense" />
                <div>Masukan Password</div>
                <q-input v-model="password" filled :type="isPwd ? 'password' : 'text'" hint="Password with toggle">
        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          />
        </template>
      </q-input>
      <q-btn color="primary" label="Login" />
            </div>
            <div class="col q-ml-xl q-mr-xl">
              <div class="text-bold text-h3">Belum Punya Akun?Silahkan Daftar Disini!!!</div>
                <div>Masukan Nama</div>
                <q-input filled v-model="text" :dense="dense" />
                <div>Masukan Email</div>
                <q-input filled v-model="text" :dense="dense" />
                <div>Masukan No Telepon</div>
                <q-input filled v-model="text" :dense="dense" />
                <div>Masukan Alamat Anda</div>
                <q-input filled v-model="text" :dense="dense" />
                <div>Masukan Password</div>
                <q-input v-model="password" filled :type="isPwd ? 'password' : 'text'" hint="Password with toggle">
        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          />
        </template>
      </q-input>
                <q-btn color="primary" label="Regis" />
            </div>
        </div>
    </q-page>
</template>
<script>
export default {
  data () {
    return {
      isPwd: true,
      dense: false
    }
  }
}
</script>
