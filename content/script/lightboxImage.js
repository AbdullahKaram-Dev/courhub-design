class ResponsiveImageViewer {
  constructor() {
    this.hoverPreview = null;
    this.mobileOverlay = null;
    this.overlayImage = null;
    this.closeButton = null;
    this.isMobile = window.innerWidth <= 768;
    this.isHovering = false;
    this.currentHoverTarget = null;
    this.eventDelegator = document.querySelector(".owl-carousel__projects")

    this.init();
  }

  init() {
    this.createHoverPreview();
    this.createMobileOverlay();
    this.attachEventListeners();
    this.handleResize();
  }

  createHoverPreview() {
    this.hoverPreview = document.createElement('img');
    this.hoverPreview.className = 'lb-hover-preview';
    this.hoverPreview.style.cssText = `
      position: fixed;
      max-width: 400px;
      max-height: 400px;
      object-fit: contain;
      border-radius: 8px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
      z-index: 1000;
      pointer-events: none;
      opacity: 0;
      transform: scale(0.8);
      transition: opacity 0.3s ease, transform 0.3s ease;
    `;
    document.body.appendChild(this.hoverPreview);
  }

  createMobileOverlay() {
    this.mobileOverlay = document.createElement('div');
    this.mobileOverlay.className = 'lb-mobile-overlay';
    this.mobileOverlay.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.8);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 2000;
      opacity: 0;
      visibility: hidden;
      transition: opacity 0.3s ease, visibility 0.3s ease;
    `;

    this.overlayImage = document.createElement('img');
    this.overlayImage.style.cssText = `
      max-width: 90%;
      max-height: 90%;
      object-fit: contain;
      border-radius: 8px;
      box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
    `;

    this.closeButton = document.createElement('button');
    this.closeButton.className = 'lb-close-button btn-close';
    this.closeButton.setAttribute('aria-label', 'Close image overlay');
    this.closeButton.style.cssText = `
      position: absolute;
      top: 20px;
      right: 20px;
      width: 40px;
      height: 40px;
      line-height: 40px;
      background-color: #FFF;
      opacity: 1;
      border: none;
      border-radius: 50%;
      font-size: 18px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background-color 0.3s ease;
    `;

    this.mobileOverlay.appendChild(this.overlayImage);
    this.mobileOverlay.appendChild(this.closeButton);
    document.body.appendChild(this.mobileOverlay);
  }

  attachEventListeners() {
    this.eventDelegator?.addEventListener('mouseenter', (e) => {
      if (e.target?.classList?.contains('project__img')) {
        this.handleMouseEnter(e);
      }
    }, true);

    this.eventDelegator?.addEventListener('mousemove', (e) => {
      if (e.target?.classList?.contains('project__img')) {
        this.handleMouseMove(e);
      }
    }, true);

    this.eventDelegator?.addEventListener('mouseleave', (e) => {
      if (e.target?.classList?.contains('project__img')) {
        this.handleMouseLeave(e);
      }
    }, true);

    this.eventDelegator?.addEventListener('click', (e) => {
      if (e.target?.classList?.contains('project__img')) {
        this.handleImageClick(e);
      }
    });

    this.mobileOverlay.addEventListener('click', (e) => {
      if (e.target === this.mobileOverlay) {
        this.closeMobileOverlay();
      }
    });

    this.closeButton.addEventListener('click', () => {
      this.closeMobileOverlay();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.closeMobileOverlay();
      }
    });

    window.addEventListener('resize', () => this.handleResize());
  }

  handleMouseEnter(e) {
    if (this.isMobile) return;

    this.isHovering = true;
    this.currentHoverTarget = e.target;
    this.hoverPreview.src = e.target.src;
    this.hoverPreview.alt = e.target.alt;
    this.updatePreviewPosition(e);

    setTimeout(() => {
      if (this.isHovering && this.currentHoverTarget === e.target) {
        this.hoverPreview.style.opacity = '1';
        this.hoverPreview.style.transform = 'scale(1)';
      }
    }, 10);
  }

  handleMouseMove(e) {
    if (this.isMobile || !this.isHovering || this.currentHoverTarget !== e.target) return;
    this.updatePreviewPosition(e);
  }

  handleMouseLeave(e) {
    if (this.isMobile) return;

    this.isHovering = false;
    this.currentHoverTarget = null;
    this.hoverPreview.style.opacity = '0';
    this.hoverPreview.style.transform = 'scale(0.8)';
  }

  handleImageClick(e) {
    if (!this.isMobile) return;

    this.overlayImage.src = e.target.src;
    this.overlayImage.alt = e.target.alt;
    this.mobileOverlay.style.opacity = '1';
    this.mobileOverlay.style.visibility = 'visible';
    document.body.style.overflow = 'hidden';
  }

  updatePreviewPosition(e) {
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const previewWidth = 400;
    const previewHeight = 400;

    let left = e.clientX - (previewWidth / 2);
    let top = e.clientY - (previewHeight / 2);

    if (left < 10) {
      left = 10;
    } else if (left + previewWidth > viewportWidth - 10) {
      left = viewportWidth - previewWidth - 10;
    }

    if (top < 10) {
      top = 10;
    } else if (top + previewHeight > viewportHeight - 10) {
      top = viewportHeight - previewHeight - 10;
    }

    this.hoverPreview.style.left = left + 'px';
    this.hoverPreview.style.top = top + 'px';
  }

  closeMobileOverlay() {
    this.mobileOverlay.style.opacity = '0';
    this.mobileOverlay.style.visibility = 'hidden';
    document.body.style.overflow = '';
  }

  handleResize() {
    const wasMobile = this.isMobile;
    this.isMobile = window.innerWidth <= 768;

    if (wasMobile !== this.isMobile) {
      if (this.isMobile) {
        this.hoverPreview.style.opacity = '0';
        this.hoverPreview.style.transform = 'scale(0.8)';
        this.isHovering = false;
        this.currentHoverTarget = null;
      }

      if (!this.isMobile) {
        this.closeMobileOverlay();
      }
    }
  }

  destroy() {
    if (this.hoverPreview) {
      this.hoverPreview.remove();
    }
    if (this.mobileOverlay) {
      this.mobileOverlay.remove();
    }
    this.eventDelegator?.removeEventListener('mouseenter', this.handleMouseEnter, true);
    this.eventDelegator?.removeEventListener('mousemove', this.handleMouseMove, true);
    this.eventDelegator?.removeEventListener('mouseleave', this.handleMouseLeave, true);
    this.eventDelegator?.removeEventListener('click', this.handleImageClick);
    document.removeEventListener('keydown', this.closeMobileOverlay);
    window.removeEventListener('resize', this.handleResize);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new ResponsiveImageViewer();
});