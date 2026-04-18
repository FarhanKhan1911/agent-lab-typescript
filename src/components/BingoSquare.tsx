import type { BingoSquareData } from '../types';

interface BingoSquareProps {
  square: BingoSquareData;
  isWinning: boolean;
  onClick: () => void;
}

export function BingoSquare({ square, isWinning, onClick }: BingoSquareProps) {
  const baseClasses =
    'relative flex items-center justify-center p-2 text-center border-2 rounded-lg transition-all duration-200 select-none min-h-[60px] text-xs leading-tight shadow-sm hover:shadow-md transform hover:scale-105';

  const stateClasses = square.isMarked
    ? isWinning
      ? 'bg-bingo border-bingo text-coffee-brown shadow-lg scale-105'
      : 'bg-marked border-marked-border text-coffee-brown shadow-inner'
    : 'bg-cream border-wood text-coffee-brown hover:bg-cream/80';

  const freeSpaceClasses = square.isFreeSpace
    ? 'font-coffee-heading text-sm bg-coffee-brown text-cream border-coffee-brown'
    : '';

  return (
    <button
      onClick={onClick}
      disabled={square.isFreeSpace}
      className={`${baseClasses} ${stateClasses} ${freeSpaceClasses}`}
      aria-pressed={square.isMarked}
      aria-label={square.isFreeSpace ? 'Free coffee space' : square.text}
    >
      <span className="wrap-break-word hyphens-auto font-coffee-body">
        {square.isFreeSpace ? '☕ FREE COFFEE' : square.text}
      </span>
      {square.isMarked && !square.isFreeSpace && (
        <span className="absolute top-0.5 right-0.5 text-coffee-brown text-sm drop-shadow-sm">✓</span>
      )}
      {/* Steam effect for marked squares */}
      {square.isMarked && (
        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
          <div className="w-0.5 h-3 bg-coffee-brown rounded-full opacity-60 animate-pulse"></div>
          <div className="w-0.5 h-2 bg-coffee-brown rounded-full opacity-40 animate-pulse delay-100 ml-1"></div>
        </div>
      )}
    </button>
  );
}
