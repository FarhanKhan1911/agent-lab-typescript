import type { BingoSquareData } from '../types';
import { BingoBoard } from './BingoBoard';

interface GameScreenProps {
  board: BingoSquareData[];
  winningSquareIds: Set<number>;
  hasBingo: boolean;
  onSquareClick: (squareId: number) => void;
  onReset: () => void;
}

export function GameScreen({
  board,
  winningSquareIds,
  hasBingo,
  onSquareClick,
  onReset,
}: GameScreenProps) {
  return (
    <div className="flex flex-col min-h-full bg-wood relative">
      {/* Wooden table texture overlay */}
      <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-wood via-coffee-brown to-wood"></div>

      {/* Header - wooden table edge */}
      <header className="flex items-center justify-between p-3 bg-coffee-brown border-b-4 border-wood shadow-lg relative z-10">
        <button
          onClick={onReset}
          className="text-cream text-sm px-3 py-1.5 rounded bg-wood hover:bg-wood/80 transition-colors"
        >
          ← Back to Menu
        </button>
        <h1 className="font-coffee-heading text-2xl text-cream drop-shadow-sm">☕ Coffee Shop Bingo</h1>
        <div className="w-16"></div>
      </header>

      {/* Instructions - like a chalkboard sign */}
      <div className="bg-coffee-brown text-cream text-center py-2 px-4 border-b border-wood">
        <p className="text-sm italic font-coffee-body">
          Tap a square when you find someone who matches ☕
        </p>
      </div>

      {/* Bingo indicator - celebratory coffee */}
      {hasBingo && (
        <div className="bg-bingo text-coffee-brown text-center py-3 font-coffee-heading text-lg shadow-md border-b border-wood">
          🎉 BINGO! Free coffee for you! ☕🥐
        </div>
      )}

      {/* Board - on a napkin/coaster */}
      <div className="flex-1 flex items-center justify-center p-4 relative">
        <div className="bg-parchment rounded-lg p-4 shadow-xl border-2 border-coffee-brown/30 relative">
          {/* Coffee stains on the napkin */}
          <div className="absolute top-2 right-2 w-6 h-6 bg-coffee-brown rounded-full opacity-20"></div>
          <div className="absolute bottom-4 left-4 w-4 h-4 bg-coffee-brown rounded-full opacity-15"></div>
          <div className="absolute top-1/2 left-6 w-3 h-3 bg-coffee-brown rounded-full opacity-10"></div>

          <BingoBoard
            board={board}
            winningSquareIds={winningSquareIds}
            onSquareClick={onSquareClick}
          />
        </div>
      </div>
    </div>
  );
}
