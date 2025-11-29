import React from "react";
import { useAuth } from "@/contexts/AuthContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Book, Users, Award, TrendingUp, LogOut } from "lucide-react";

const Dashboard = () => {
  const { user, logout } = useAuth();

  if (!user) {
    return <div>Пожалуйста, войдите в систему</div>;
  }

  const purchasedPrograms = user.purchases.length;
  const completedModules = Object.keys(user.progress).length;
  const totalModules = 12; // Example total

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <div className="py-12">
        <div className="container mx-auto px-4">
          {/* Welcome Section */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">
              Добро пожаловать, {user.name}!
            </h1>
            <p className="text-muted-foreground">
              Отслеживайте свой прогресс в программах трансформации
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Купленных программ
                </CardTitle>
                <Book className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{purchasedPrograms}</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Пройденных модулей
                </CardTitle>
                <Award className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{completedModules}</div>
                <p className="text-xs text-muted-foreground">
                  из {totalModules}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Общий прогресс
                </CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {Math.round((completedModules / totalModules) * 100)}%
                </div>
                <Progress
                  value={(completedModules / totalModules) * 100}
                  className="mt-2"
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Сообщество
                </CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">47</div>
                <p className="text-xs text-muted-foreground">
                  участников онлайн
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Current Programs */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-6">Ваши программы</h2>
            {user.purchases.length === 0 ? (
              <Card className="p-8 text-center">
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    У вас пока нет активных программ
                  </p>
                  <Button asChild>
                    <a href="/products">Выбрать программу</a>
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {user.purchases.map((programId) => (
                  <Card key={programId}>
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        {programId === "audit"
                          ? "Личный энергоаудит"
                          : programId === "system"
                            ? "Проектирование пермасистемы"
                            : "Тороидальная жизнь"}
                        <Badge variant="secondary">Активна</Badge>
                      </CardTitle>
                      <CardDescription>
                        Продолжайте свое путешествие трансформации
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Прогресс</span>
                            <span>75%</span>
                          </div>
                          <Progress value={75} />
                        </div>
                        <Button className="w-full">Продолжить обучение</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="p-6">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Блог</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Читайте новые статьи о тороидальности и пермакультуре
                </p>
                <Button variant="outline" asChild>
                  <a href="/blog">Перейти к блогу</a>
                </Button>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Сообщество</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Общайтесь с единомышленниками в закрытой группе
                </p>
                <Button variant="outline">Открыть Telegram</Button>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Поддержка</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Свяжитесь с наставником для индивидуальной консультации
                </p>
                <Button variant="outline" asChild>
                  <a href="/contacts">Написать</a>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Account Actions */}
          <Card className="p-6">
            <CardHeader>
              <CardTitle>Настройки аккаунта</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="outline">Изменить пароль</Button>
                <Button variant="outline">Настройки профиля</Button>
                <Button variant="destructive" onClick={logout}>
                  <LogOut className="w-4 h-4 mr-2" />
                  Выйти
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;
