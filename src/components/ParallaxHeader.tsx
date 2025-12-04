import './ParallaxHeader.css';

interface ParallaxHeaderProps {
  children?: React.ReactNode;
}

export default function ParallaxHeader({ children }: ParallaxHeaderProps) {
  return (
    <header className="parallax-wrapper">
      {/* Слои картинок */}
      <div className="parallax-layer layer-base" style={{ backgroundImage: 'url(/img/layer-base.png)' }}></div>
      <div className="parallax-layer layer-middle" style={{ backgroundImage: 'url(/img/layer-middle.png)' }}></div>
      <div className="parallax-layer layer-front" style={{ backgroundImage: 'url(/img/layer-front.png)' }}></div>
      
      {/* Контент переданный через children */}
      {children}
    </header>
  );
}