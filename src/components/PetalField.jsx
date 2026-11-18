export const petals = Array.from({ length: 13 }, (_, i) => ({
  id: i,
  left: `${(i * 31 + 8) % 100}%`,
  delay: `${i * -0.77}s`,
  duration: `${8 + i % 5}s`,
}));

export default function PetalField({ className = '' }) {
  return (
    <div className={`petal-field ${className}`.trim()} aria-hidden="true">
      {petals.map(petal => (
        <i
          key={petal.id}
          style={{ left: petal.left, animationDelay: petal.delay, animationDuration: `${petal.duration}` }}
        />
      ))}
    </div>
  );
}
