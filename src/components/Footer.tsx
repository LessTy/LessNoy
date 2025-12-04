import { Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-slate-800 text-slate-100">
      <div className="container mx-auto px-4 py-2">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2 mb-2">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img 
                src="/img/Logo.png" 
                alt="Логотип Проект: Автономия" 
                className="w-12 h-12 rounded-lg object-contain"
              />
              <span className="text-lg font-bold text-white">
                Проект:<span className="text-primary"> Автономия</span>
              </span>
            </div>
            <p className="text-sm text-slate-300">
              Системный подход к жизни для тех, кто устал её обслуживать.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Навигация</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-slate-300 hover:text-primary transition-colors">Главная</Link></li>
              <li><Link to="/method" className="text-slate-300 hover:text-primary transition-colors">Философия</Link></li>
              <li><Link to="/about" className="text-slate-300 hover:text-primary transition-colors">Об авторе</Link></li>
              <li><Link to="/services" className="text-slate-300 hover:text-primary transition-colors">Услуги</Link></li>
              <li><Link to="/project-farm" className="text-slate-300 hover:text-primary transition-colors">Проект</Link></li>
              <li><Link to="/blog" className="text-slate-300 hover:text-primary transition-colors">Блог</Link></li>
              <li><Link to="/contacts" className="text-slate-300 hover:text-primary transition-colors">Контакты</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Услуги</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/services" className="text-slate-400 hover:text-primary transition">
                  Анализ жизненной стратегии
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-slate-400 hover:text-primary transition">
                  Архитектура Автономии
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-1 flex-shrink-0 text-primary" />
                <a href="mailto:lessnoy7@gmail.com" className="text-slate-400 hover:text-primary transition">
                  lessnoy7@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-1 flex-shrink-0 text-primary" />
                <a href="https://t.me/JlELLIuu" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary transition">
                  Telegram: @JlELLIuu
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0 text-primary" />
                <span className="text-slate-400">Онлайн, по всему миру</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-800 py-2">
          <div className="flex flex-col md:flex-row items-center justify-between text-sm text-slate-400">
            <p>&copy; {new Date().getFullYear()} Проект: Автономия. Все права защищены.</p>
            <div className="flex items-center gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-primary transition">
                Политика конфиденциальности
              </a>
              <a href="#" className="hover:text-primary transition">
                Условия использования
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;