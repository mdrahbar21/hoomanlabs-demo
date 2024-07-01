"use client"

import AutoBind from 'auto-bind';
import EventEmitter from 'events';
import { gsap } from 'gsap';
import { clamp } from 'lodash';

interface Scroll {
  position: number;
  current: number;
  target: number;
}

interface PageProps {
  url: string;
  name: string;
  element: string;
}

export default class Page extends EventEmitter {
  element: HTMLElement;
  name: string;
  url: string;
  isDown: boolean;
  scroll: Scroll;
  start: number;
  onScrollMouseWheelEvent: (event: WheelEvent) => void;
  onScrollTouchStartEvent: (event: TouchEvent) => void;
  onScrollTouchMoveEvent: (event: TouchEvent) => void;
  onScrollTouchEndEvent: (event: TouchEvent) => void;
  onScrollMouseDownEvent: (event: MouseEvent) => void;
  onScrollMouseMoveEvent: (event: MouseEvent) => void;
  onScrollMouseUpEvent: (event: MouseEvent) => void;
  onScrollUpdateEvent: number | undefined;

  constructor({ url, name, element }: PageProps) {
    super();

    this.element = document.createElement(element);
    this.isDown = false;
    this.start = 0;

    this.scroll = {
      position: 0,
      current: 0,
      target: 0,
    };

    this.onScrollMouseWheelEvent = this.onScrollMouseWheel.bind(this);
    this.onScrollTouchStartEvent = this.onScrollTouchStart.bind(this);
    this.onScrollTouchMoveEvent = this.onScrollTouchMove.bind(this);
    this.onScrollTouchEndEvent = this.onScrollTouchEnd.bind(this);
    this.onScrollMouseDownEvent = this.onScrollMouseDown.bind(this);
    this.onScrollMouseMoveEvent = this.onScrollMouseMove.bind(this);
    this.onScrollMouseUpEvent = this.onScrollMouseUp.bind(this);

    this.name = name;
    this.url = url;

    AutoBind(this);
  }

  async show(animation = gsap.timeline()) {
    this.addEventListeners();

    if (this.element) {
      document.body.appendChild(this.element);

      this.scroll = {
        position: 0,
        current: 0,
        target: 0,
      };

      this.onScrollUpdate();
    }

    await new Promise<void>((resolve) => {
      animation.call(() => resolve());
    });

    return Promise.resolve();
  }

  async hide(animation = gsap.timeline()) {
    if (this.element && this.element.parentNode !== document.body) return;

    await new Promise<void>((resolve) => {
      animation.call(() => resolve());
    });

    if (this.element) {
      document.body.removeChild(this.element);

      if (this.onScrollUpdateEvent !== undefined) {
        window.cancelAnimationFrame(this.onScrollUpdateEvent);
      }
    }

    this.removeEventListeners();

    return Promise.resolve();
  }

  onScrollMouseWheel(event: WheelEvent) {
    let delta = -event.deltaY;
    let speed = 75;

    if (delta < 0) speed *= -1;

    const total = this.element.clientHeight - window.innerHeight;

    this.scroll.target += speed;
    this.scroll.target = clamp(this.scroll.target, 0, total);
  }

  onScrollTouchStart(event: TouchEvent) {
    this.isDown = true;

    this.scroll.position = this.scroll.current;
    this.start = event.touches ? event.touches[0].clientY : 0;
  }

  onScrollTouchMove(event: TouchEvent) {
    if (!this.isDown) return;

    const total = this.element.clientHeight - window.innerHeight;
    const y = event.touches ? event.touches[0].clientY : 0;

    const distance = (this.start - y) * 2;

    this.scroll.target = this.scroll.position + distance;
    this.scroll.target = clamp(this.scroll.target, 0, total);
  }

  onScrollTouchEnd() {
    this.isDown = false;
  }

  onScrollMouseDown(event: MouseEvent) {
    this.isDown = true;

    this.scroll.position = this.scroll.current;
    this.start = event.clientY;
  }

  onScrollMouseMove(event: MouseEvent) {
    if (!this.isDown) return;

    const total = this.element.clientHeight - window.innerHeight;
    const y = event.clientY;

    const distance = (this.start - y) * 2;

    this.scroll.target = this.scroll.position + distance;
    this.scroll.target = clamp(this.scroll.target, 0, total);
  }

  onScrollMouseUp() {
    this.isDown = false;
  }

  onScrollUpdate() {
    this.scroll.current += (this.scroll.target - this.scroll.current) * 0.1;

    gsap.set(this.element, {
      y: -this.scroll.current,
    });

    this.onScrollUpdateEvent = window.requestAnimationFrame(this.onScrollUpdate.bind(this));
  }

  addEventListeners() {
    if (this.element) {
      window.addEventListener('wheel', this.onScrollMouseWheelEvent);

      window.addEventListener('touchstart', this.onScrollTouchStartEvent);
      window.addEventListener('touchmove', this.onScrollTouchMoveEvent);
      window.addEventListener('touchend', this.onScrollTouchEndEvent);

      window.addEventListener('mousedown', this.onScrollMouseDownEvent);
      window.addEventListener('mousemove', this.onScrollMouseMoveEvent);
      window.addEventListener('mouseup', this.onScrollMouseUpEvent);
    }
  }

  removeEventListeners() {
    if (this.element) {
      window.removeEventListener('wheel', this.onScrollMouseWheelEvent);

      window.removeEventListener('touchstart', this.onScrollTouchStartEvent);
      window.removeEventListener('touchmove', this.onScrollTouchMoveEvent);
      window.removeEventListener('touchend', this.onScrollTouchEndEvent);

      window.removeEventListener('mousedown', this.onScrollMouseDownEvent);
      window.removeEventListener('mousemove', this.onScrollMouseMoveEvent);
      window.removeEventListener('mouseup', this.onScrollMouseUpEvent);
    }
  }
}
