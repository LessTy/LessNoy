import { Button } from "@/components/ui/button";
import { LogOut, User as UserIcon, Settings } from "lucide-react"; // Добавили иконки
import { Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

const Header = () => {
  const { user, logout } = useAuth();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/20 backdrop-blur-lg border-b border-slate-500/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 hover:opacity-80 transition"
          >
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-xl font-bold text-primary-foreground">
                Л
              </span>
            </div>
            <span className="text-xl font-bold text-white">
              В избушке у<span className="text-primary"> Лешего</span>
            </span>
          </Link>

          {/* Navigation (Центральное меню) */}
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/about">
              <Button variant="ghost" className="text-white hover:text-primary">
                О проекте
              </Button>
            </Link>
            <Link to="/products">
              <Button variant="ghost" className="text-white hover:text-primary">
                Продукты
              </Button>
            </Link>
            <Link to="/blog">
              <Button variant="ghost" className="text-white hover:text-primary">
                Блог
              </Button>
            </Link>
          </nav>

          {/* Right Side (Правая часть) */}
          <div className="flex items-center gap-3">
            {/* Кнопка Контакты (всегда видна) */}
            <Link to="/contacts" className="hidden sm:block">
              <Button
                variant="ghost"
                size="sm"
                className="text-white hover:text-primary"
              >
                Контакты
              </Button>
            </Link>

            {/* ЛОГИКА АВТОРИЗАЦИИ */}
            {user ? (
              <>
                {/* Если Админ - показываем кнопку Админки */}
                {(user.role === "admin" || user.isAdmin) && (
                  <Link to="/admin">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-red-400 hover:text-red-300 hover:bg-red-950/30"
                      title="Админ панель"
                    >
                      <Settings className="w-4 h-4 mr-1" />
                      <span className="hidden sm:inline">Админ</span>
                    </Button>
                  </Link>
                )}

                {/* Кнопка Личный кабинет */}
                <Link to="/dashboard">
                  <Button
                    variant="outline"
                    size="sm"
                    className="bg-primary/10 text-primary border-primary/30 hover:bg-primary/20"
                  >
                    <UserIcon className="w-4 h-4 sm:mr-2" />
                    <span className="hidden sm:inline">Кабинет</span>
                  </Button>
                </Link>

                {/* Кнопка Выход */}
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={logout}
                  className="text-slate-400 hover:text-white"
                  title="Выйти"
                >
                  <LogOut className="w-4 h-4" />
                </Button>
              </>
            ) : (
              /* Если не вошел - кнопка Войти */
              <Link to="/login">
                <Button variant="default" size="sm">
                  Войти
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
