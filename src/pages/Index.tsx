import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

export default function Index() {
  const features = [
    {
      icon: "Thermometer",
      title: "Теплоизоляция",
      description: "Высокие теплоизоляционные свойства снижают потери тепла до 80%"
    },
    {
      icon: "Zap",
      title: "Энергоэффективность",
      description: "Экономия на отоплении до 30% благодаря современным материалам"
    },
    {
      icon: "Shield",
      title: "Надежность",
      description: "Срок службы более 20 лет с минимальным обслуживанием"
    },
    {
      icon: "Settings",
      title: "Автоматика",
      description: "Современные системы управления с дистанционным контролем"
    }
  ];

  const products = [
    {
      name: "Секционные ворота Стандарт",
      price: "от 45 000 ₽",
      features: ["Толщина панели 40мм", "Теплоизоляция", "Ручное управление"],
      image: "/img/7db80179-6c7b-4a07-85aa-8e61eab119a5.jpg"
    },
    {
      name: "Секционные ворота Премиум",
      price: "от 75 000 ₽",
      features: ["Толщина панели 60мм", "Усиленная изоляция", "Автоматическое управление"],
      image: "/img/0c0ddcd8-cbfd-4e59-88e1-10d9bbce9f07.jpg"
    },
    {
      name: "Секционные ворота Люкс",
      price: "от 120 000 ₽",
      features: ["Толщина панели 80мм", "Максимальная изоляция", "Умное управление"],
      image: "/img/c6f7f85f-f4cc-4fa3-9c0b-cc154433b511.jpg"
    }
  ];

  const services = [
    { icon: "Wrench", title: "Установка", description: "Профессиональный монтаж с гарантией" },
    { icon: "Settings", title: "Настройка", description: "Настройка автоматики и систем управления" },
    { icon: "Shield", title: "Гарантия", description: "5 лет гарантии на все виды работ" },
    { icon: "Phone", title: "Поддержка", description: "Круглосуточная техническая поддержка" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Home" size={32} className="text-primary" />
              <span className="text-2xl font-bold text-gray-900">GateMaster</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-600 hover:text-primary transition-colors">Главная</a>
              <a href="#products" className="text-gray-600 hover:text-primary transition-colors">Продукция</a>
              <a href="#services" className="text-gray-600 hover:text-primary transition-colors">Услуги</a>
              <a href="#portfolio" className="text-gray-600 hover:text-primary transition-colors">Портфолио</a>
              <a href="#contacts" className="text-gray-600 hover:text-primary transition-colors">Контакты</a>
            </nav>
            <Button>Получить консультацию</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4">Энергоэффективные решения</Badge>
              <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Секционные ворота с высокой теплоизоляцией
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Современные секционные ворота с улучшенными теплоизоляционными свойствами. 
                Экономьте на отоплении до 30% и защитите свой гараж от холода.
              </p>
              <div className="flex space-x-4">
                <Button size="lg" className="px-8">
                  Рассчитать стоимость
                </Button>
                <Button variant="outline" size="lg" className="px-8">
                  <Icon name="Play" size={20} className="mr-2" />
                  Смотреть видео
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/img/7db80179-6c7b-4a07-85aa-8e61eab119a5.jpg" 
                alt="Секционные ворота" 
                className="rounded-xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <Icon name="Thermometer" className="text-primary" size={24} />
                  <div>
                    <p className="font-semibold">Экономия энергии</p>
                    <p className="text-sm text-gray-600">до 30%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Преимущества наших ворот
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Современные технологии и качественные материалы обеспечивают максимальную 
              энергоэффективность и долговечность
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={feature.icon} size={32} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Продукция</h2>
            <p className="text-xl text-gray-600">Выберите подходящий вариант для вашего гаража</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{product.name}</CardTitle>
                  <div className="text-2xl font-bold text-primary">{product.price}</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <Icon name="Check" size={16} className="text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full">Заказать</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Услуги</h2>
            <p className="text-xl text-gray-600">Полный цикл работ от консультации до обслуживания</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={service.icon} size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Installation Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4">Профессиональная установка</Badge>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Установка секционных ворот
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Наши специалисты выполняют монтаж с соблюдением всех технических требований. 
                Гарантируем качество установки и долговечность конструкции.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <Icon name="CheckCircle" className="text-green-500 mr-3" size={20} />
                  <span>Монтаж за 1 день</span>
                </div>
                <div className="flex items-center">
                  <Icon name="CheckCircle" className="text-green-500 mr-3" size={20} />
                  <span>Гарантия 5 лет</span>
                </div>
                <div className="flex items-center">
                  <Icon name="CheckCircle" className="text-green-500 mr-3" size={20} />
                  <span>Сертифицированные специалисты</span>
                </div>
              </div>
              <Button size="lg">Заказать установку</Button>
            </div>
            <div>
              <img 
                src="/img/c6f7f85f-f4cc-4fa3-9c0b-cc154433b511.jpg" 
                alt="Установка ворот" 
                className="rounded-xl shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Портфолио</h2>
            <p className="text-xl text-gray-600">Наши выполненные проекты</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="aspect-video bg-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                <img 
                  src="/img/7db80179-6c7b-4a07-85aa-8e61eab119a5.jpg" 
                  alt={`Проект ${item}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-primary/5 rounded-2xl p-12 text-center">
            <Icon name="Shield" size={64} className="text-primary mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Гарантия качества</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Мы предоставляем 5-летнюю гарантию на все виды работ и используемые материалы. 
              Наши специалисты всегда готовы помочь с техническими вопросами.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">5 лет</div>
                <p className="text-gray-600">Гарантия на установку</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <p className="text-gray-600">Техническая поддержка</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <p className="text-gray-600">Довольных клиентов</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Отзывы клиентов</h2>
            <p className="text-xl text-gray-600">Что говорят о нас наши клиенты</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Александр Петров",
                text: "Отличная работа! Ворота установили быстро, качественно. Теперь в гараже действительно теплее.",
                rating: 5
              },
              {
                name: "Мария Сидорова",
                text: "Очень довольна выбором. Энергоэффективные ворота оправдали все ожидания.",
                rating: 5
              },
              {
                name: "Дмитрий Козлов",
                text: "Профессиональный подход, качественные материалы. Рекомендую всем!",
                rating: 5
              }
            ].map((review, index) => (
              <Card key={index} className="p-6">
                <div className="flex mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Icon key={i} name="Star" size={20} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{review.text}"</p>
                <p className="font-semibold">{review.name}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacts" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Контакты</h2>
            <p className="text-xl text-gray-600">Свяжитесь с нами для консультации</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="space-y-6">
                <div className="flex items-center">
                  <Icon name="Phone" className="text-primary mr-4" size={24} />
                  <div>
                    <p className="font-semibold">Телефон</p>
                    <p className="text-gray-600">+7 (495) 123-45-67</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Icon name="Mail" className="text-primary mr-4" size={24} />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-gray-600">info@gatemaster.ru</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Icon name="MapPin" className="text-primary mr-4" size={24} />
                  <div>
                    <p className="font-semibold">Адрес</p>
                    <p className="text-gray-600">г. Москва, ул. Примерная, д. 123</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Icon name="Clock" className="text-primary mr-4" size={24} />
                  <div>
                    <p className="font-semibold">Время работы</p>
                    <p className="text-gray-600">Пн-Пт: 9:00-18:00, Сб: 10:00-16:00</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">Получить консультацию</h3>
                <form className="space-y-4">
                  <div>
                    <input 
                      type="text" 
                      placeholder="Ваше имя" 
                      className="w-full p-3 border border-gray-300 rounded-lg"
                    />
                  </div>
                  <div>
                    <input 
                      type="tel" 
                      placeholder="Телефон" 
                      className="w-full p-3 border border-gray-300 rounded-lg"
                    />
                  </div>
                  <div>
                    <textarea 
                      placeholder="Сообщение" 
                      rows={4}
                      className="w-full p-3 border border-gray-300 rounded-lg"
                    ></textarea>
                  </div>
                  <Button className="w-full" size="lg">
                    Отправить заявку
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Home" size={32} className="text-primary" />
                <span className="text-2xl font-bold">GateMaster</span>
              </div>
              <p className="text-gray-400">
                Профессиональная установка и продажа секционных ворот с высокими теплоизоляционными свойствами.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Продукция</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Секционные ворота</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Автоматика</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Аксессуары</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Запчасти</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Установка</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Ремонт</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Обслуживание</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Консультации</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-gray-400">
                <li>+7 (495) 123-45-67</li>
                <li>info@gatemaster.ru</li>
                <li>г. Москва, ул. Примерная, д. 123</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 GateMaster. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}