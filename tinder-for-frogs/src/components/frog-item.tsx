import type { Frog } from "../types/frog";

export interface FrogItemProps {
  frog?: Frog;
  inmovable?: boolean;
  className?: string;
}

const Frogitem = (props: FrogItemProps) => {
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
