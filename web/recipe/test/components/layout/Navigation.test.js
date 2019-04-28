import { shallowMount, createLocalVue } from '@vue/test-utils'
import Navigation from 'components/layout/Navigation'
import VueRouter from 'vue-router'

const localVue = createLocalVue()
localVue.use(VueRouter)
const router = new VueRouter()

describe('Navigation', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(Navigation, {
      localVue,
      router
    })
  })

  it('Mounts without error', () => {
    expect(wrapper.vm.$el).toMatchSnapshot()
  })
})
