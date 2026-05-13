type PredictionCardProps = {
  matchup: string;
  winner: string;
  probability: number;
};


export default function PredictionCard({
    matchup,
    winner,
    probability
}: PredictionCardProps) {

  return (
    <section className="max-w-3xl rounded-2xl bg-zinc-900 p-6 shadow-lg">
        <h2 className="mb-6 text-2xl font-semibold text-orange-400">
          Mock Finals Prediction
        </h2>

        <p className="mb-6 text-base leading-relaxed text-zinc-300">
          This is a mock prediction for the 2026 NBA Finals, showcasing how the final prediction will be displayed once the model is fully implemented.
        </p>

        <div className="mb-4 rounded-xl bg-zinc-800 p-4">
          <p className="text-sm uppercase tracking-wide text-zinc-400">
            Matchup 
          </p>
          <p className="mt-2 text-xl font-semibold text-white">
            {matchup}
          </p>
        </div>

        <div className="mb-4 rounded-xl bg-zinc-800 p-4">
          <p className="text-sm uppercase tracking-wide text-zinc-400">
            Predicted Winner
          </p>
          <p className="mt-2 text-2xl font-bold text-orange-300">
            {winner}
          </p>
        </div>

        <div className="mb-4 rounded-xl bg-zinc-800 p-4">
          <p className="text-sm uppercase tracking-wide text-zinc-400">
            Win Probability
          </p>
          <p className="mt-2 text-2xl font-bold text-green-300">
            {probability.toFixed(2)}%
          </p>
        </div>

      </section>
  );
}