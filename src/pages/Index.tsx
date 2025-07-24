import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [showCalculator, setShowCalculator] = useState(false);

  const services = [
    {
      icon: 'Home',
      title: 'Строительство домов',
      description: 'Возведение коттеджей и загородных домов под ключ с использованием современных технологий',
      price: 'от 25 000 ₽/м²'
    },
    {
      icon: 'Hammer',
      title: 'Ремонт и реконструкция',
      description: 'Капитальный ремонт, реставрация и модернизация существующих зданий',
      price: 'от 8 000 ₽/м²'
    },
    {
      icon: 'Building',
      title: 'Коммерческое строительство',
      description: 'Строительство офисных зданий, торговых центров и промышленных объектов',
      price: 'от 35 000 ₽/м²'
    },
    {
      icon: 'Wrench',
      title: 'Инженерные системы',
      description: 'Проектирование и монтаж систем отопления, водоснабжения и электрики',
      price: 'от 3 000 ₽/м²'
    }
  ];

  const projects = [
    {
      title: 'Коттедж "Лесная сказка"',
      area: '250 м²',
      type: 'Частный дом',
      year: '2024',
      image: '/img/f5b8537f-c2af-479f-aeb8-0e50180d6bfb.jpg'
    },
    {
      title: 'ЖК "Солнечный"',
      area: '3 200 м²',
      type: 'Многоквартирный дом',
      year: '2023',
      image: '/img/f5b8537f-c2af-479f-aeb8-0e50180d6bfb.jpg'
    },
    {
      title: 'Бизнес-центр "Альфа"',
      area: '1 800 м²',
      type: 'Коммерческое здание',
      year: '2023',
      image: '/img/f5b8537f-c2af-479f-aeb8-0e50180d6bfb.jpg'
    }
  ];

  const reviews = [
    {
      name: 'Александр Петров',
      rating: 5,
      text: 'Отличная работа! Дом построили точно в срок, качество на высшем уровне. Рекомендую всем!',
      project: 'Дом 180 м²'
    },
    {
      name: 'Мария Сидорова',
      rating: 5,
      text: 'Профессиональный подход на всех этапах. Очень довольны результатом ремонта.',
      project: 'Ремонт квартиры'
    },
    {
      name: 'Дмитрий Козлов',
      rating: 5,
      text: 'Строили офисное здание. Все сделано качественно, без задержек. Спасибо команде!',
      project: 'Офисное здание'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="font-heading font-bold text-2xl text-primary">АСК-Строй</div>
            <nav className="hidden md:flex space-x-8">
              <a href="#services" className="text-secondary hover:text-primary transition-colors">Услуги</a>
              <a href="#portfolio" className="text-secondary hover:text-primary transition-colors">Портфолио</a>
              <a href="#about" className="text-secondary hover:text-primary transition-colors">О компании</a>
              <a href="#reviews" className="text-secondary hover:text-primary transition-colors">Отзывы</a>
              <a href="#contacts" className="text-secondary hover:text-primary transition-colors">Контакты</a>
            </nav>
            <Button onClick={() => setShowCalculator(true)} className="bg-primary hover:bg-primary/90">
              Рассчитать стоимость
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(30, 41, 59, 0.7), rgba(30, 41, 59, 0.7)), url('/img/f5b8537f-c2af-479f-aeb8-0e50180d6bfb.jpg')`
          }}
        />
        <div className="relative z-10 text-center text-white max-w-4xl px-4">
          <h1 className="font-heading font-bold text-5xl md:text-7xl mb-6 animate-fade-in">
            АСК-Строй
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light animate-fade-in">
            Дом начинается с нас
          </p>
          <p className="text-lg mb-12 opacity-90 max-w-2xl mx-auto animate-fade-in">
            Строительная компания полного цикла с 15-летним опытом. 
            Создаем дома вашей мечты с гарантией качества и точными сроками.
          </p>
          <Button 
            size="lg" 
            onClick={() => setShowCalculator(true)}
            className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-lg font-medium animate-scale-in"
          >
            Рассчитать стоимость
            <Icon name="ArrowRight" className="ml-2" size={20} />
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-accent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl text-secondary mb-4">Наши услуги</h2>
            <p className="text-lg text-secondary/70 max-w-2xl mx-auto">
              Предоставляем полный спектр строительных услуг от проектирования до сдачи объекта
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 hover-scale">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={service.icon} size={32} className="text-primary" />
                  </div>
                  <CardTitle className="font-heading text-xl mb-2">{service.title}</CardTitle>
                  <Badge variant="secondary" className="w-fit mx-auto">{service.price}</Badge>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl text-secondary mb-4">Наше портфолио</h2>
            <p className="text-lg text-secondary/70 max-w-2xl mx-auto">
              Более 200 успешно реализованных проектов за 15 лет работы
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 hover-scale">
                <div className="h-48 bg-gray-200 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="font-heading text-xl">{project.title}</CardTitle>
                  <div className="flex gap-2 flex-wrap">
                    <Badge variant="outline">{project.area}</Badge>
                    <Badge variant="outline">{project.type}</Badge>
                    <Badge variant="outline">{project.year}</Badge>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-accent">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading font-bold text-4xl text-secondary mb-6">О компании АСК-Строй</h2>
              <p className="text-lg text-secondary/80 mb-6">
                Мы работаем на строительном рынке уже 15 лет и за это время зарекомендовали себя 
                как надежный партнер в реализации проектов любой сложности.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Icon name="CheckCircle" className="text-primary" size={24} />
                  <span className="text-secondary">Более 200 завершенных проектов</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="CheckCircle" className="text-primary" size={24} />
                  <span className="text-secondary">15 лет опыта в строительстве</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="CheckCircle" className="text-primary" size={24} />
                  <span className="text-secondary">Гарантия на все виды работ</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="CheckCircle" className="text-primary" size={24} />
                  <span className="text-secondary">Собственный штат специалистов</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="font-heading font-semibold text-2xl text-secondary mb-6">Наши преимущества</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">200+</div>
                  <div className="text-sm text-secondary/70">Проектов</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">15</div>
                  <div className="text-sm text-secondary/70">Лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">50+</div>
                  <div className="text-sm text-secondary/70">Специалистов</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">5</div>
                  <div className="text-sm text-secondary/70">Лет гарантии</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl text-secondary mb-4">Отзывы клиентов</h2>
            <p className="text-lg text-secondary/70 max-w-2xl mx-auto">
              Мнения наших клиентов о качестве работ и сервисе
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-yellow-400 fill-yellow-400" size={16} />
                    ))}
                  </div>
                  <CardTitle className="font-heading text-lg">{review.name}</CardTitle>
                  <Badge variant="outline" className="w-fit">{review.project}</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-secondary/80">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20 bg-accent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl text-secondary mb-4">Контакты</h2>
            <p className="text-lg text-secondary/70 max-w-2xl mx-auto">
              Свяжитесь с нами для консультации и расчета стоимости проекта
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="MapPin" className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-xl text-secondary mb-2">Адрес офиса</h3>
                  <p className="text-secondary/80">г. Краснодар, ул. Строительная 15, офис 301</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Phone" className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-xl text-secondary mb-2">Телефон</h3>
                  <p className="text-secondary/80">+7 (495) 123-45-67</p>
                  <p className="text-secondary/80">+7 (985) 987-65-43</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Mail" className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-xl text-secondary mb-2">Email</h3>
                  <p className="text-secondary/80">info@ask-stroy.ru</p>
                  <p className="text-secondary/80">sales@ask-stroy.ru</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Clock" className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-xl text-secondary mb-2">Режим работы</h3>
                  <p className="text-secondary/80">Пн-Пт: 9:00 - 18:00</p>
                  <p className="text-secondary/80">Сб: 10:00 - 16:00</p>
                  <p className="text-secondary/80">Вс: выходной</p>
                </div>
              </div>
            </div>
            <Card className="p-6">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="font-heading text-2xl">Оставить заявку</CardTitle>
                <CardDescription>
                  Заполните форму и мы свяжемся с вами в ближайшее время
                </CardDescription>
              </CardHeader>
              <CardContent className="px-0 pb-0">
                <div className="space-y-4">
                  <Input placeholder="Ваше имя" />
                  <Input placeholder="Телефон" />
                  <Input placeholder="Email" />
                  <Textarea placeholder="Опишите ваш проект..." rows={4} />
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    Отправить заявку
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Calculator Modal */}
      {showCalculator && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <Card className="w-full max-w-md">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="font-heading text-2xl">Расчет стоимости</CardTitle>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => setShowCalculator(false)}
                >
                  <Icon name="X" size={20} />
                </Button>
              </div>
              <CardDescription>
                Заполните данные для примерного расчета стоимости строительства
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-secondary">Тип объекта</label>
                  <select className="w-full mt-1 p-2 border rounded-md">
                    <option>Частный дом</option>
                    <option>Коммерческое здание</option>
                    <option>Ремонт</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium text-secondary">Площадь (м²)</label>
                  <Input placeholder="Введите площадь" className="mt-1" />
                </div>
                <div>
                  <label className="text-sm font-medium text-secondary">Ваше имя</label>
                  <Input placeholder="Введите имя" className="mt-1" />
                </div>
                <div>
                  <label className="text-sm font-medium text-secondary">Телефон</label>
                  <Input placeholder="Введите телефон" className="mt-1" />
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90">
                  Рассчитать стоимость
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-secondary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="font-heading font-bold text-2xl mb-4">АСК-Строй</div>
              <p className="text-white/70 mb-4">
                Дом начинается с нас. Строительная компания полного цикла с 15-летним опытом.
              </p>
            </div>
            <div>
              <h3 className="font-heading font-semibold text-lg mb-4">Услуги</h3>
              <ul className="space-y-2 text-white/70">
                <li>Строительство домов</li>
                <li>Ремонт и реконструкция</li>
                <li>Коммерческое строительство</li>
                <li>Инженерные системы</li>
              </ul>
            </div>
            <div>
              <h3 className="font-heading font-semibold text-lg mb-4">Компания</h3>
              <ul className="space-y-2 text-white/70">
                <li>О нас</li>
                <li>Портфолио</li>
                <li>Отзывы</li>
                <li>Контакты</li>
              </ul>
            </div>
            <div>
              <h3 className="font-heading font-semibold text-lg mb-4">Контакты</h3>
              <div className="space-y-2 text-white/70">
                <div className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  <span>info@ask-stroy.ru</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  <span>г. Краснодар, ул. Строительная 15, офис 301</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/70">
            <p>&copy; 2024 АСК-Строй. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;