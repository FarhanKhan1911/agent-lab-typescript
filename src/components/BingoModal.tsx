interface BingoModalProps {
  onDismiss: () => void;
}

export function BingoModal({ onDismiss }: BingoModalProps) {
  return (
    <div className="fixed inset-0 bg-coffee-brown/70 flex items-center justify-center p-4 z-50">
      <div className="bg-parchment rounded-xl p-6 max-w-xs w-full text-center shadow-2xl border-4 border-wood animate-[bounce_0.5s_ease-out] relative">
        {/* Coffee stains on modal */}
        <div className="absolute top-4 right-4 w-6 h-6 bg-coffee-brown rounded-full opacity-20"></div>
        <div className="absolute bottom-6 left-6 w-4 h-4 bg-coffee-brown rounded-full opacity-15"></div>

        <div className="text-6xl mb-4 animate-pulse">☕🎉</div>
        <h2 className="text-4xl font-coffee-heading text-coffee-brown mb-2 drop-shadow-sm">BINGO!</h2>
        <p className="text-coffee-brown mb-6 font-coffee-body italic">Free coffee on us! 🥐</p>

        <button
          onClick={onDismiss}
          className="w-full bg-accent text-cream font-coffee-heading py-3 px-6 rounded-lg hover:bg-accent-light transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          Keep Playing ☕
        </button>
      </div>
    </div>
  );
}
