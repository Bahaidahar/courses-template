import { Button } from "@/components/ui/button";
import { AuthDialog } from "@/widgets/header/ui/AuthDialog";

import React from "react";

const HomePage = () => {
  return (
    <div className="">
      {/* Hero Section */}
      <section className="py-20 text-center">
        <h1 className="mb-6 text-4xl font-bold md:text-6xl">
          Добро пожаловать в NIC Learning
        </h1>
        <p className="mb-8 text-lg md:text-xl">
          Прокачайте свои навыки программирования и откройте новые горизонты с
          нашими IT-курсами!
        </p>

        <AuthDialog>
          <Button>Перейти к курсам</Button>
        </AuthDialog>
      </section>

      {/* Why Choose Us Section */}
      <section className="px-8 py-16 md:px-16">
        <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
          Почему выбирают нас?
        </h2>
        <div className="flex flex-col space-y-8 md:flex-row md:justify-center md:space-x-16 md:space-y-0">
          <div className="text-center">
            <h3 className="mb-4 text-2xl font-semibold">
              Экспертные преподаватели
            </h3>
            <p>
              Наши курсы ведут специалисты с многолетним опытом работы в ведущих
              IT-компаниях.
            </p>
          </div>
          <div className="text-center">
            <h3 className="mb-4 text-2xl font-semibold">Гибкость обучения</h3>
            <p>
              Учитесь в любое время и в любом месте, самостоятельно выбирая
              подходящий темп обучения.
            </p>
          </div>
          <div className="text-center">
            <h3 className="mb-4 text-2xl font-semibold">
              Практическое обучение
            </h3>
            <p>
              Выполняйте реальные проекты и получайте ценные навыки, необходимые
              для работы.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
