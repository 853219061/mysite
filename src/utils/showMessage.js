

import getComponentRootDom from "./getComponentRootDom.js";
import Icon from '@/components/Icon.vue';
import styles from '@/utils/showMessage.module.less';
/*
 * @pram {String} content 消息内容
 * @pram {String} type 消息类型 info error success warn
 * @pram {Number} duration 消失时间 0 不消失
 * @pram {HtmlElement} container 容器 默认 是放到 浏览器正中
 */
export default function showMessage(options = {}) {

    let content = options.content || "";
    let type = options.type || "info";
    let duration = options.duration || 1000;
    let container = options.container || document.body;


    var rightType = ['info', 'error', 'success', 'warn']

    if (!rightType.includes(type)) {
        throw new RangeError("type should be in  ['info', 'error', 'success', 'warn'] ");
    }

    console.log(content, duration, container);

    const div = document.createElement("div");
    div.className = `${styles.message} ${styles['message-' + type]}`;
    var iconDom = getComponentRootDom(Icon, { type: `icon-${type}` });
    iconDom.className += ' ' + styles.iconfont;

    console.log(iconDom)
    div.innerHTML = `<span class="${styles.icon}">${iconDom.outerHTML}</span><div>${content}</div>`;


    // 容器需要 相对定位;
    if(options.container){
        if (getComputedStyle(container).position == "static") {
            container.style.position = "relative";
        }
    }
    

    container.appendChild(div);

    // 浏览器 强行渲染
    div.offsetHeight; // 导致 reflow

    div.style.opacity = 1;
    div.style.transform = 'translate(-50%,-50%) ';

    setTimeout(() => {

        div.style.opacity = 0;
        div.style.transform = 'translate(-50%,-50%) translateY(-20px) ';

        div.addEventListener('transitionend', () => {
            div.remove();

            options.callback && options.callback();
        })

        //
    }, duration);

}



/*
使用实例

main.js注册:
import showMessage  from './utils/showMessage';
Vue.prototype.$showMessage = showMessage;


vue 组件使用
  handleClick() {
      this.$showMessage({
        content: "123456",
        type: "success",
        duration: 2000,
        container: this.$refs.container,
        callback: ()=>{ console.log('消失')}
      })
    }
*/