import {mount} from '@vue/test-utils';
import Toast from '../src/toast.vue';

describe('toast', () => {
  let wrapper = mount(Toast);

  it('检查初始化数据渲染', () => {
    expect(wrapper.isVueInstance()).toBe(true);
    expect(wrapper.html()).toContain('这是一个提示信息');
    expect(wrapper.vm.text).toBe('这是一个提示信息');
    expect(wrapper.vm.isShow).toBe(true);
    expect(wrapper.vm.duration).toBe(3000);
  })

  it('检查更改文字信息', () => {
    wrapper.vm.text = '文字已更改';
    expect(wrapper.html()).toContain('文字已更改');
    expect(wrapper.vm.text).toBe('文字已更改');
  });

  it('检查隐藏提示框', () => {
    wrapper.vm.isShow = false;
    expect(wrapper.contains('div')).toBe(false);
    expect(wrapper.vm.isShow).toBe(false);
  });

  it('检查更改时间', () => {
    wrapper.vm.duration = 500;
    expect(wrapper.vm.duration).toBe(500);
  });
});