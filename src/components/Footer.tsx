import { Mail, Phone, MapPin, Facebook, Instagram, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-900/80 border-t border-slate-800 text-slate-100">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-lg font-bold text-primary-foreground">Л</span>
              </div>
              <span className="text-lg font-bold">В избушке у Лешего</span>
            </div>
            <p className="text-sm text-slate-300">
              Экосистема осознанной жизни. Трансформация через философию тороидальности и принципы пермакультуры.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Навигация</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-slate-300 hover:text-primary transition-colors">
                  Главная
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-300 hover:text-primary transition-colors">
                  О проекте
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-slate-300 hover:text-primary transition-colors">
                  Продукты
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-slate-300 hover:text-primary transition-colors">
                  Блог
                </Link>
              </li>
              <li>
                <Link to="/contacts" className="text-slate-300 hover:text-primary transition-colors">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Услуги</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-slate-400 hover:text-primary transition">
                  Личный энергоаудит
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-primary transition">
                  Проектирование пермасистемы
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-primary transition">
                  Тороидальная жизнь
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-primary transition">
                  Практикум
                </a>
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

        {/* Social Links */}
        <div className="border-t border-slate-800 pt-8 mb-8">
          <div className="flex items-center justify-between">
            <p className="text-sm text-slate-400">Следите за нами в социальных сетях</p>
            <div className="flex items-center gap-4">
              <a href="https://t.me/JlELLIuu" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary transition">
                <MessageCircle className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-primary transition">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-primary transition">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between text-sm text-slate-400">
            <p>&copy; 2025 В избушке у Лешего. Все права защищены.</p>
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
