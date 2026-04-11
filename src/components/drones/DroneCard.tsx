interface DroneCardProps {
  drone: any;
  onSelect: () => void;
}

export default function DroneCard({ drone, onSelect }: DroneCardProps) {
  return (
    <div className="drone-card">
      <div className="drone-img-wrapper">
        <img src={drone.image} alt={drone.name} loading="lazy" />
        <span className="drone-tag">{drone.category}</span>
      </div>
      
      <div className="drone-content">
        <h3>{drone.name}</h3>
        <div className="spec-preview">
          <span>{drone.specs.sensor}</span>
          <span className="separator">•</span>
          <span>{drone.specs.range} Range</span>
        </div>
        
        <div className="drone-footer">
          <div className="price-tag">
            <label>Unit Cost</label>
            <span className="drone-price">${drone.price.toLocaleString()}</span>
          </div>
          <button className="btn-deploy" onClick={onSelect}>
            Procure Unit
          </button>
        </div>
      </div>
    </div>
  );
}