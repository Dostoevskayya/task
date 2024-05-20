import "vuetify/styles"
import { createVuetify } from "vuetify"
import { aliases, mdi } from "vuetify/iconsets/mdi"

export default createVuetify({
  defaults: {
    VBtn: {
      variant: "outlined",
      rounded: false,
    },
    icons: {
      defaultSet: "mdi",
      aliases,
      sets: {
        mdi,
      },
    },
  },
})
