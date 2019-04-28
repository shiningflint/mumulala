import { shallowMount, createLocalVue } from '@vue/test-utils'
import Navigation from 'components/layout/Navigation'

const localVue = createLocalVue()

describe('Navigation', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(Navigation, {
      localVue
    })
  })

  it('Mounts without error', () => {
    expect(wrapper.vm.$el).toMatchSnapshot()
  })
})
