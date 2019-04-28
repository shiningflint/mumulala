import { shallowMount, createLocalVue } from '@vue/test-utils'
import App from 'src/App'
import VueRouter from 'vue-router'

const localVue = createLocalVue()
localVue.use(VueRouter)
const router = new VueRouter()

describe('App', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(App, {
      localVue,
      router
    })
  })

  it('Mounts without error', () => {
    expect(wrapper.vm.$el).toMatchSnapshot()
  })
})
