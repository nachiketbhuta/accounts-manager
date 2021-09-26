import { shallowMount } from '@vue/test-utils'
import Button from '@/components/common/Button.vue'

describe('Button.vue', () => {
  it('renders button text', () => {
    const btnText = 'Add Ledger'
    const wrapper = shallowMount(Button, {
        propsData: {
            text: 'Add Ledger'
        }
    })
    expect(wrapper.text()).toBe(btnText)
  })

  it('contains button classes', () => {
    const btnClass = '.btn'
    const wrapper = shallowMount(Button, {
        propsData: {
            text: 'Add Ledger'
        }
    })
    expect(wrapper.find(btnClass).exists()).toBe(true)
  })

  it('contains primary button classes', () => {
    const btnClass = '.btn-primary'
    const wrapper = shallowMount(Button, {
        propsData: {
            text: 'Add Ledger'
        }
    })
    expect(wrapper.find(btnClass).exists()).toBe(true)
  })

  it('trigger click event', async () => {
    const wrapper = shallowMount(Button, {
        propsData: {
            text: 'Add Ledger'
        }
    })
    await wrapper.trigger('click')
  })
})
