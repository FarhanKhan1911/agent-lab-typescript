import type { BingoSquareData } from '../types';
import { BingoSquare } from './BingoSquare';

interface BingoBoardProps {
  board: BingoSquareData[];
  winningSquareIds: Set<number>;
  onSquareClick: (squareId: number) => void;
}

export function BingoBoard({ board, winningSquareIds, onSquareClick }: BingoBoardProps) {
  return (
    <div className="grid grid-cols-5 gap-2 w-full max-w-sm mx-auto aspect-square relative">
      {/* More coffee stains */}
      <div className="absolute top-4 left-8 w-8 h-8 bg-coffee-brown rounded-full opacity-10"></div>
      <div className="absolute bottom-6 right-6 w-5 h-5 bg-coffee-brown rounded-full opacity-15"></div>
      <div className="absolute top-1/3 right-2 w-4 h-4 bg-coffee-brown rounded-full opacity-8"></div>

      {board.map((square) => (
        <BingoSquare
          key={square.id}
          square={square}
          isWinning={winningSquareIds.has(square.id)}
          onClick={() => onSquareClick(square.id)}
        />
      ))}
    </div>
  );
}
