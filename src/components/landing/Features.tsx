export default function Features() {
  return (
    <section className="py-20 px-6 grid md:grid-cols-3 gap-8 text-center">
      
      <div className="bg-gray-900 p-6 rounded-xl">
        <h3 className="text-xl mb-2">Real-Time Monitoring</h3>
        <p className="text-gray-400">Drone-based live crowd analysis</p>
      </div>

      <div className="bg-gray-900 p-6 rounded-xl">
        <h3 className="text-xl mb-2">Riot Prediction</h3>
        <p className="text-gray-400">AI risk scoring engine</p>
      </div>

      <div className="bg-gray-900 p-6 rounded-xl">
        <h3 className="text-xl mb-2">Geo Intelligence</h3>
        <p className="text-gray-400">Live map with heat zones</p>
      </div>

    </section>
  );
}