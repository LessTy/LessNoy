import { useEffect } from 'react';

interface SmoothScrollProps {
  children: React.ReactNode;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  useEffect(() => {
    let ticking = false;
    
    const updateLayers = (scrollTop: number) => {
      // Получаем элементы
      const baseEl = document.querySelector('.layer-base') as HTMLElement | null;
      const middleEl = document.querySelector('.layer-middle') as HTMLElement | null;
      const frontEl = document.querySelector('.layer-front') as HTMLElement | null;
      const contentEl = document.querySelector('.hero-content') as HTMLElement | null;
      const subtitleEl = document.querySelector('.hero-subtitle-container') as HTMLElement | null;
      
      // Оригинальные коэффициенты для параллакса
      const base = scrollTop * 0.625;
      const middle = scrollTop * 0.4;
      const front = scrollTop * 0.175;
      const content = scrollTop * 0.5;
      const subtitleY = scrollTop * 0.25;
      
      // Применяем трансформации для параллакса
      if (baseEl) baseEl.style.transform = `translate3d(0, ${base}px, 0)`;
      if (middleEl) middleEl.style.transform = `translate3d(0, ${middle}px, 0)`;
      if (frontEl) frontEl.style.transform = `translate3d(0, ${front}px, 0)`;
      if (contentEl) contentEl.style.transform = `translate3d(0, ${content}px, 0)`;
      
      // Анимация подзаголовка с ПЛАВНОЙ кривой
      if (subtitleEl) {
        // Нелинейная анимация прозрачности с плавной кривой
        const opacityProgress = Math.min(1, scrollTop / 400); // 400px порог
        // Используем квадратичную кривую для плавности
        const easedOpacity = opacityProgress < 0.5 
          ? 2 * opacityProgress * opacityProgress  // Плавное ускорение
          : 1 - Math.pow(-2 * opacityProgress + 2, 2) / 2;  // Плавное замедление
        const opacity = 1 - (easedOpacity * 0.9); // От 100% до 10% видимости
        
        // Анимация уменьшения размера с плавной кривой
        const scaleProgress = Math.min(1, scrollTop / 600); // 600px порог
        // Используем кубическую кривую для еще большей плавности
        const easedScale = scaleProgress < 0.5
          ? 4 * scaleProgress * scaleProgress * scaleProgress  // Плавное ускорение
          : 1 - Math.pow(-2 * scaleProgress + 2, 3) / 2;  // Плавное замедление
        const scale = 1 - (easedScale * 0.25); // От 100% до 75% размера
        
        // Применяем стили к подзаголовку
        subtitleEl.style.opacity = Math.max(0.1, opacity).toString();
        subtitleEl.style.transform = `translate(-50%, 0) translate3d(0, ${subtitleY}px, 0) scale(${Math.max(0.75, scale)})`;
      }
      
      ticking = false;
    };
    
    const requestTick = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          updateLayers(window.scrollY);
        });
        ticking = true;
      }
    };
    
    const handleScroll = () => {
      requestTick();
    };
    
    // Initial update
    updateLayers(window.scrollY);
    
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return <>{children}</>;
}