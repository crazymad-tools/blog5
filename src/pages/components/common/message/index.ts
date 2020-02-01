export default new class Message {
  maxMessage: number = 3;
  notices: { timer: any, createAt: number, remove: Function }[] = [];

  checkContainer() {
    let dom = document.getElementById('globalNoticeContainer');
    if (!dom) {
      dom = document.createElement('div');
      dom.setAttribute('id', 'globalNoticeContainer')
      document.body.appendChild(dom);
    }
    return dom;
  }

  createNotice(icon: string, type: string, content: string, delay: number) {
    let container = this.checkContainer();

    if (this.notices.length >= this.maxMessage) {
      this.notices.pop()?.remove(false);
    }

    let dom = document.createElement('div');
    dom.classList.add('global-notice', type);
    container.appendChild(dom);

    dom.innerHTML = `
      <span class="iconfont ${icon}"></span>
      <span class="global-notice-content">${content}</span>
    `;

    let timer: any = null;
    const remove = (animation: boolean = true) => {
      clearTimeout(timer);
      dom.classList.add('before-remove');
      animation ? setTimeout(() => {
        container.removeChild(dom);
      }, 300) : container.removeChild(dom);
      this.notices.pop();
    }
    timer = setTimeout(() => {
      remove();
    }, delay);
    this.notices.push({
      timer,
      remove,
      createAt: new Date().getTime()
    });
  }

  error(content: string, delay: number = 1000) {
    this.createNotice('blog-icon-error', 'error', content, delay);
  };

  success(content: string, delay: number = 3000) {
    this.createNotice('blog-icon-correct', 'success', content, delay);
  };

  warn(content: string, delay: number = 3000) {
    this.createNotice('blog-icon-error', 'warn', content, delay);
  };

  info(content: string, delay: number = 3000) {
    this.createNotice('blog-icon-info', 'info', content, delay);
  };
}