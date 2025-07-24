import { useEffect, useState } from "react";
import type { Frog } from "../types/frog";

export interface FrogItemProps {
  frog?: Frog;
  inmovable?: boolean;
  className?: string;
}

const Frogitem = (props: FrogItemProps) => {

  const [dragging, setDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    document.addEventListener('mousedown', startDrag);
    document.addEventListener('mouseup', stopDrag); 
    document.addEventListener('mousemove', drag); 
    document.addEventListener('touchstart', startDrag);
    document.addEventListener('touchend', stopDrag); 
    document.addEventListener('touchmove', drag);

    return () => {
      document.removeEventListener('mousedown', startDrag);
      document.removeEventListener('touchstart', stopDrag);
      document.removeEventListener('mousemove', drag);
      document.removeEventListener('touchmove', startDrag);
      document.removeEventListener('mouseup', stopDrag);
      document.removeEventListener('touchend', drag);
    };
  }, [dragging, startX]);

  const startDrag = (event: MouseEvent | TouchEvent) => {
    setDragging(true);
    setStartX(event instanceof MouseEvent ? event?.clientX : event?.touches[0].clientX);
    event.preventDefault();
    event.stopPropagation();
  }

  const drag = (event) => {
    if (!this._dragging) return;
    let deltaX = (event.clientX || event.touches[0].clientX) - this._startX;
    const maxDelta = this._width * (this._images.length - this.selected);
    if (this.selected === 0 && deltaX > 0) deltaX = 0;
    if (this.selected === this._images.length-1 && deltaX < 0) deltaX = 0;
    this._images.forEach(img => img.style.transform = `translateX(${deltaX}px)`);
    event.preventDefault();
    event.stopPropagation();
  }

  const stopDrag = (event) => {
    if (!this._dragging) return;
    this._dragging = false;
    let deltaX = (event.clientX || event.changedTouches[0].clientX) - this._startX;
    if (Math.abs(deltaX) < 10) return this.dispatchEvent(
      new CustomEvent('dismiss', {
        detail: {
          selected: this.selected
        },
        bubbles: true
      })
    );
    if (this.selected === 0 && deltaX > 0) deltaX = 0;
    if (this.selected === this._images.length-1 && deltaX < 0) deltaX = 0;

    let idxOffset = 0;
    if (deltaX > this._width/4) idxOffset = 1;
    if (deltaX < -this._width/4) idxOffset = -1;
    this.selected -= idxOffset;
    
    const r1 = this._images[0].getBoundingClientRect();
    this.updateChildren();
    const r2 = this._images[0].getBoundingClientRect();
    this._images.forEach(img => img.style.transform = `translateX(${r1.left - r2.left}px)`);

    requestAnimationFramePromise()
      .then(_ => requestAnimationFramePromise())
      .then(_ => {
        this._images.forEach(img => {
          img.style.transition = 'transform 0.1s ease-in-out';
        });
      })
      .then(_ => requestAnimationFramePromise())
      .then(_ => requestAnimationFramePromise())
      .then(_ => {
        this._images.forEach(img => img.style.transform = '');
        return transitionEndPromise(this);
      }) 
      .then(_ => this._images.forEach(img => img.style.transition = ''));

    event.preventDefault();
    event.stopPropagation();
  }

  updateChildren() {
    this._images = this.querySelectorAll('.carousel__item');
    if (this._images.length <= 0) return;
    for (let i = 0; i < this._images.length; i++) {
      this._images[i].style.left = `${100*(i-this.selected)}%`;
      this._images[i].style.transform = '';
    }
    const last = this._images[this._images.length-1];
    const rect = last.getBoundingClientRect();
    this._width = rect.width;
  }

  return (
    <div className={props.className}>
      <picture>
        {/* This is conditional */}
        <div className="action action--nope">Nope</div>
        <div className="action action--like">Like</div>
        <div className="action action--superlike">Super<br />Like</div>
      </picture>
      <div className="item__details">
        <span className="item__details__name"></span>,
        <span className="item__details__age"></span>
        <span className="item__details__job"></span>
      </div>
    </div>
  );
};

export default Frogitem;
