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
            <li>Regular season performance</li>
            <li>Playoff performance</li>
            <li>Head-to-head matchups</li>
            <li>Injuries and player availability</li>
            <li>Coaching strategies</li>
         </ul>
         <p className="mb-4 text-base leading-relaxed font-semibold">By analysing these factors, the predictor provides a comprehensive overview of the potential outcomes for the NBA Finals.</p>


      </section>
      
    </main>
  );
}