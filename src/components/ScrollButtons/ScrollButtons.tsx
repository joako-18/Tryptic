import "./ScrollButtons.css";

interface Props {
  targetRef: React.RefObject<HTMLDivElement>;
}

function ScrollButtons({ targetRef }: Props) {
  const scroll = (amount: number) => {
    if (targetRef.current) {
      targetRef.current.scrollBy({ top: amount, behavior: "smooth" });
    }
  };

  return (
    <div className="scroll-buttons">
      <button className="scroll-btn" onClick={() => scroll(-250)} aria-label="Arriba">
        <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="18 15 12 9 6 15"></polyline>
        </svg>
      </button>
      <button className="scroll-btn" onClick={() => scroll(250)} aria-label="Abajo">
        <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>
    </div>
  );
}

export default ScrollButtons;
