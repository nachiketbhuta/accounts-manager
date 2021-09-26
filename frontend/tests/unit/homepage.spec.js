import { shallowMount } from '@vue/test-utils'
import Homepage from '@/components/Homepage.vue'
import Button from '@/components/common/Button.vue'

describe('Homepage.vue', () => {
  it('renders title', () => {
    const msg = 'Accounts Manager'
    const wrapper = shallowMount(Homepage)
    expect(wrapper.find('h2').text()).toMatch(msg)
  })
})
