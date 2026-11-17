export default function Ganesha({ size = 54, className = '', style = {}, src = '/images/ganesha-icon.png' }) {
  const height = Math.round(size * 188 / 152);
  return <img
    className={className}
    src={src}
    alt="Lord Ganesha"
    width={size}
    height={height}
    decoding="async"
    style={{ width: size, height, objectFit: 'contain', ...style }}
  />;
}
