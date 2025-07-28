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
  const [width, setWidth] = useState(1);
  const [images, setImages] = useState<HTMLImageElement[]>([]);

  useEffect(() => {
    document.addEventListener('mousedown', startDrag);
    document.addEventListener('mouseup', stopDrag); 
    document.addEventListener('mousemove', drag); 
    document.addEventListener('touchstart', startDrag);
    document.addEventListener('touchend', stopDrag); 
    document.addEventListener('touchmove', drag);

    return () => {
      document.removeEventListener('mousedown', startDrag);
      document.removeEventListener('touchstart', startDrag);
      document.removeEventListener('mousemove', drag);
      document.removeEventListener('touchmove', drag);
      document.removeEventListener('mouseup', stopDrag);
      document.removeEventListener('touchend', stopDrag);
    };
  }, [dragging, startX]);

  const startDrag = (event: MouseEvent | TouchEvent) => {
    setDragging(true);
    setStartX(event instanceof MouseEvent ? event?.clientX : event?.touches[0].clientX);
    event.preventDefault();
    event.stopPropagation();
  }

  const drag = (event: MouseEvent | TouchEvent) => {
    if (!dragging) return;
    let deltaX = (event instanceof MouseEvent ? event.clientX : event.touches[0].clientX) - startX;
    const maxDelta = width * (images.length - selected);
    if (selected === 0 && deltaX > 0) deltaX = 0;
    if (selected === images.length-1 && deltaX < 0) deltaX = 0;
    images.forEach(img => img.style.transform = `translateX(${deltaX}px)`);
    event.preventDefault();
    event.stopPropagation();
  }

  const stopDrag = (event: MouseEvent | TouchEvent) => {
    if (!dragging) return;
    setDragging(false);
    let deltaX = (event instanceof MouseEvent ? event.clientX : event.changedTouches[0].clientX) - startX;
    if (Math.abs(deltaX) < 10) return dispatchEvent(
      new CustomEvent('dismiss', {
        detail: {
          selected: selected
        },
        bubbles: true
      })
    );
    if (selected === 0 && deltaX > 0) deltaX = 0;
    if (selected === images.length-1 && deltaX < 0) deltaX = 0;

    let idxOffset = 0;
    if (deltaX > width/4) idxOffset = 1;
    if (deltaX < -width/4) idxOffset = -1;
    setSelected(selected - idxOffset);
    
    const r1 = images[0].getBoundingClientRect();
    // updateChildren();
    const r2 = images[0].getBoundingClientRect();
    images.forEach(img => img.style.transform = `translateX(${r1.left - r2.left}px)`);

  //   requestAnimationFramePromise()
  //     .then(_ => requestAnimationFramePromise())
  //     .then(_ => {
  //       this._images.forEach(img => {
  //         img.style.transition = 'transform 0.1s ease-in-out';
  //       });
  //     })
  //     .then(_ => requestAnimationFramePromise())
  //     .then(_ => requestAnimationFramePromise())
  //     .then(_ => {
  //       this._images.forEach(img => img.style.transform = '');
  //       return transitionEndPromise(this);
  //     }) 
  //     .then(_ => this._images.forEach(img => img.style.transition = ''));

  //   event.preventDefault();
  //   event.stopPropagation();
  }

  // updateChildren() {
  //   this._images = this.querySelectorAll('.carousel__item');
  //   if (this._images.length <= 0) return;
  //   for (let i = 0; i < this._images.length; i++) {
  //     this._images[i].style.left = `${100*(i-this.selected)}%`;
  //     this._images[i].style.transform = '';
  //   }
  //   const last = this._images[this._images.length-1];
  //   const rect = last.getBoundingClientRect();
  //   this._width = rect.width;
  // }

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