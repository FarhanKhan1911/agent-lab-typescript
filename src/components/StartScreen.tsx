interface StartScreenProps {
  onStart: () => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-full p-6 bg-parchment relative overflow-hidden">
      {/* Steam animation background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-1 h-8 bg-coffee-brown rounded-full animate-pulse"></div>
        <div className="absolute top-16 left-12 w-0.5 h-6 bg-coffee-brown rounded-full animate-pulse delay-100"></div>
        <div className="absolute top-24 right-16 w-1 h-10 bg-coffee-brown rounded-full animate-pulse delay-200"></div>
        <div className="absolute top-20 right-20 w-0.5 h-8 bg-coffee-brown rounded-full animate-pulse delay-300"></div>
      </div>

      <div className="text-center max-w-sm relative z-10">
        <h1 className="text-5xl font-coffee-heading text-coffee-brown mb-2 drop-shadow-sm">
          ☕ Coffee Shop Bingo
        </h1>
        <p className="text-lg text-coffee-brown mb-8 italic">Find your coffee companions!</p>

        <div className="bg-cream rounded-lg p-6 shadow-lg border-2 border-wood mb-8 relative">
          {/* Coffee stain effect */}
          <div className="absolute top-2 right-2 w-4 h-4 bg-coffee-brown rounded-full opacity-30"></div>
          <div className="absolute bottom-4 left-4 w-3 h-3 bg-coffee-brown rounded-full opacity-20"></div>

          <h2 className="font-semibold text-coffee-brown mb-3 font-coffee-heading text-xl">How to Play</h2>
          <ul className="text-left text-coffee-brown text-sm space-y-2">
            <li>• ☕ Find people who match the questions</li>
            <li>• 🥐 Tap a square when you find a match</li>
            <li>• 🎉 Get 5 in a row to win a free coffee!</li>
          </ul>
        </div>

        <button
          onClick={onStart}
          className="w-full bg-accent text-cream font-semibold py-4 px-8 rounded-lg text-lg active:bg-accent-light transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105"
        >
          Start Your Brew ☕
        </button>
      </div>
    </div>
  );
}
