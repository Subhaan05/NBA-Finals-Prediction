export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-16 text-white">
      <h1 className="mb-8 text-5xl font-bold text-white">NBA Finals Predictor</h1>
      <p className="mb-10 max-w-3xl text-lg text-zinc-300">Predict the winner of the NBA Finals based on historical data.</p>

      <section className="max-w-3xl rounded-2xl bg-zinc-900 p-6 shadow-lg">
         <h2 className="mb-6 text-2xl font-semibold text-orange-400">About the Predictor</h2>
         <p className="mb-4 text-base leading-relaxed">Utilising over 40 years of historical data, this website predicts the 2026 winner of the NBA Finals.</p>
         <p className="mb-4 text-base leading-relaxed">The aim of the project is to compare teams, analyse their performance, and provide insights into the factors that contribute to success in the NBA Finals.</p>
         <p className="mb-2 text-base leading-relaxed">The following factors are considered in the prediction model:</p>
         <ul className="mb-4 ml-6 list-disc text-base leading-relaxed text-zinc-300">
            <li>Playoff performance</li>
            <li>Head-to-head matchups</li>
            <li>Injuries and player availability</li>
            <li>Offensive Output</li>
            <li>Defensive Capabilities</li>
         </ul>
         <p className="mb-4 text-base leading-relaxed font-semibold">By analysing these factors, the predictor provides a comprehensive overview of the potential outcomes for the NBA Finals.</p>

      
      </section>

      <section className="max-w-3xl mb-6 mt-10 rounded-2xl bg-zinc-900 p-6 shadow-lg">
        <h2 className="mb-6 text-2xl font-semibold text-orange-400">Future Features</h2>
        <p className="mb-4 text-base leading-relaxed"> Here is a list of features that will be added in the future:</p>
        <ul className="mb-4 ml-6 list-disc text-base leading-relaxed text-zinc-300">
          <li>Statistics</li>
          <li>Predictions</li>
          <li>Visualisations</li>
        </ul>
      </section>
      
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
            Boston Celtics vs. New York Knicks
          </p>
        </div>

        <div className="mb-4 rounded-xl bg-zinc-800 p-4">
          <p className="text-sm uppercase tracking-wide text-zinc-400">
            Predicted Winner
          </p>
          <p className="mt-2 text-2xl font-bold text-orange-300">
            New York Knicks
          </p>
        </div>

        <div className="mb-4 rounded-xl bg-zinc-800 p-4">
          <p className="text-sm uppercase tracking-wide text-zinc-400">
            Win Probability
          </p>
          <p className="mt-2 text-2xl font-bold text-green-300">
            68.79%
          </p>
        </div>

        <div className="rounded-xl bg-zinc-800 p-4">
          <p className="text-sm uppercase tracking-wide text-zinc-400">
            Why the Model Likes This Team
          </p>
          <ul className="mt-3 ml-6 list-disc space-y-2 text-zinc-300">
            <li>The New York Knicks have a large offensive output in the playoffs.</li>
            <li>They have a good track record in playoff head-to-head matchups against the Boston Celtics.</li>
            <li>Boston Celtics are struggling with injuries this season.</li>
          </ul>
        </div>
      </section>

    </main>
  );
}