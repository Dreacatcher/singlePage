import { mapState } from 'vuex'
export default {
  data() {
    return {
    }
  },
  created() {
    console.log(this)
    this.$store.dispatch({
      type: 'holleInitInfo'
    })
  },
  computed: {
    ...mapState({
      holleInitInfo: state => state.holleStore.holleInitInfo
    })
  },
  methods: {
    goToDetail(cont) {
      switch (cont) {
        case '患者登记':
          window.location.href = 'patientsManagement.html'
          break
        case '患者查询':
          window.location.href = 'patientsManagement.html'
          break
        case '患者转归':
          window.location.href = 'patientsManagement.html'
          break
        default:
          break
      }
    }
  }
}
