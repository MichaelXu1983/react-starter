module.exports = {
    // 色彩
    // ---
    // 文字色
    'color-text-base': ' #000', // 基本
    'color-text-base-inverse': ' #fff', // 基本 - 反色
    'color-text-secondary': ' #a4a9b0', // 辅助色
    'color-text-placeholder': ' #bbb', // 文本框提示
    'color-text-disabled': ' #bbb', // 失效
    'color-text-caption': ' #888', // 辅助描述
    'color-text-paragraph': ' #333', // 段落
    'color-link': '#AE68A2', // 链接
  
    // 背景色
    'fill-base': ' #fff', // 组件默认背景
    'fill-body': ' #f5f5f9', // 页面背景
    'fill-tap': ' #ddd', // 组件默认背景 - 按下
    'fill-disabled': ' #ddd', // 通用失效背景
    'fill-mask': ' rgba(0, 0, 0, 0.4)', // 遮罩背景
    'color-icon-base': ' #ccc', // 许多小图标的背景，比如一些小圆点，加减号
    'fill-grey': ' #f7f7f7',
  
    // 透明度
    'opacity-disabled': ' 0.3', // switch checkbox radio 等组件禁用的透明度
  
    // 全局/品牌色
    'brand-primary': '#AE68A2',
    'brand-primary-tap': '#75479F',
    'brand-success': '#6abf47',
    'brand-warning': '#ffc600',
    'brand-error': '#f4333c',
    'brand-important': '#AE68A2', // 用于小红点
    'brand-wait': '#AE68A2',
  
    // 边框色
    'border-color-base': ' #ddd',
  
    // 字体尺寸
    // ---
    'font-size-icontext': ' 10px',
    'font-size-caption-sm': ' 12px',
    'font-size-base': ' 14px ',
    'font-size-subhead': ' 15px ',
    'font-size-caption': ' 16px ',
    'font-size-heading': ' 17px ',
  
    // 圆角
    // ---
    'radius-xs': ' 4px ',
    'radius-sm': ' 5px ',
    'radius-md': ' 10px ',
    'radius-lg': ' 13px ',
    'radius-circle': ' 50%',
  
    // 边框尺寸
    // ---
    'border-width-sm': ' 1PX',
    'border-width-md': ' 1PX',
    'border-width-lg': ' 2px ',
  
    // 间距
    // ---
    // 水平间距
    'h-spacing-sm': ' 5px ',
    'h-spacing-md': ' 8px ',
    'h-spacing-lg': ' 15px ',
  
    // 垂直间距
    'v-spacing-xs': ' 3px ',
    'v-spacing-sm': ' 6px ',
    'v-spacing-md': ' 9px',
    'v-spacing-lg': ' 15px ',
    'v-spacing-xl': ' 21px ',
  
    // 高度
    // ---
    'line-height-base': ' 1', // 单行行高
    'line-height-paragraph': ' 1.5', // 多行行高
  
    // 图标尺寸
    // ---
    'icon-size-xxs': ' 15px ',
    'icon-size-xs': ' 18px ',
    'icon-size-sm': ' 21px ',
    'icon-size-md': ' 22px ', // 导航条上的图标、grid的图标大小
    'icon-size-lg': ' 36px ',
  
    // 动画缓动
    // ---
    'ease-in-out-quint': ' cubic-bezier(.86, 0, .07, 1)',
  
    // 组件变量
    // ---
  
    'actionsheet-item-height': ' 50px ',
    'actionsheet-item-font-size': ' 18px',
  
    // button
    'button-height': ' 52px ',
    'button-font-size': ' 16px ',
  
    'button-height-sm': ' 30px ',
    'button-font-size-sm': ' 13px ',
  
    'primary-button-fill': '#69409e',
    'primary-button-fill-tap': ' #69409e',
  
    'ghost-button-color': '#aa66a2', // 同时应用于背景、文字颜色、边框色
    'ghost-button-fill-tap': '#aa66a2',
  
    'warning-button-fill': ' #e94f4f',
    'warning-button-fill-tap': ' #d24747',
  
    'link-button-fill-tap': ' #69409e',
    'link-button-font-size': ' 14px ',
  
    // menu
    'menu-multi-select-btns-height': '52px',
  
    // modal
    'modal-font-size-heading': ' 18px ',
    'modal-button-font-size': ' 18px ', // 按钮字号
    'modal-button-height': ' 50px ', // 按钮高度
  
    // list
    'list-title-height': ' 30px ',
    'list-item-height-sm': ' 35px ',
    'list-item-height': ' 44px ',
  
    // input
    'input-label-width': ' 17px ', // InputItem、TextareaItem 文字长度基础值
    'input-font-size': ' 17px ',
    'input-color-icon': ' #ccc', // input clear icon 的背景色
    'input-color-icon-tap': '#AE68A2',
  
    // tabs
    'tabs-color': '#AE68A2',
    'tabs-height': ' 43.5px ',
    'tabs-font-size-heading': '15px',
    'tabs-ink-bar-height': '2px',
  
    // segmented-control
    'segmented-control-color': ' #AE68A2', // 同时应用于背景、文字颜色、边框色
    'segmented-control-height': ' 27px ',
    'segmented-control-fill-tap': '#aa66a2',
  
    // tab-bar
    'tab-bar-fill': ' #ebeeef',
    'tab-bar-height': ' 50px ',
  
    // toast
    'toast-fill': ' rgba(58, 58, 58, 0.75)', // toast, activity-indicator 的背景颜色
  
    // search-bar
    'search-bar-fill': ' #efeff4',
    'search-bar-height': ' 44px ',
    'search-bar-input-height': ' 28px ',
    'search-bar-font-size': ' 15px ',
    'search-color-icon': ' #bbb', // input search icon 的背景色
  
    // notice-bar
    'notice-bar-fill': ' #fefcec',
    'notice-bar-height': ' 36px ',
    'notice-bar-color': ' #f76a24',
  
    // switch
    'switch-fill': ' #4dd865',
    'switch-fill-android': ' #AE68A2',
  
    // tag
    'tag-height': ' 25px ',
    'tag-height-sm': ' 15px ',
    'tag-color': ' #AE68A2',
  
    // keyboard
    'keyboard-confirm-color': '#AE68A2',
    'keyboard-confirm-tap-color': ' #AE68A2-tap',
  
    // picker
    'option-height': ' 42px ', // picker 标题的高度
  
    // z-index
    'progress-zindex': ' 2000',
    'popover-zindex': ' 1999',
    'toast-zindex': ' 1999',
    'action-sheet-zindex': ' 1000', // actonsheet 会放到 popup / modal 中
    'picker-zindex': ' 1000',
    'popup-zindex': ' 999',
    'modal-zindex': ' 999', // modal.alert 应该最大，其他应该较小
    'tabs-pagination-zindex': ' 999',
  }
  