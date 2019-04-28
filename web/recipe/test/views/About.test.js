import { shallowMount, createLocalVue } from '@vue/test-utils'
import About from 'views/About'
import VueRouter from 'vue-router'

const localVue = createLocalVue()
localVue.use(VueRouter)
const router = new VueRouter()

describe('About', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(About, {
      localVue,
      router
    })
  })

  it('Mounts without error', () => {
    expect(wrapper.vm.$el).toMatchSnapshot()
  })
})
