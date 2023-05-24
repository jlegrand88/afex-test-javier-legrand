import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import YoutubeVideosForm from '../YoutubeVideosForm.vue'
import { createPinia } from 'pinia';

const pinia = createPinia();

describe('YoutubeVideosForm', () => {
  it('renders properly', () => {
    const wrapper = mount(YoutubeVideosForm, {
      global: {
        plugins: [pinia],
      }
    })
    expect(wrapper.text()).toContain('Añadir nuevo video')
  })
})
