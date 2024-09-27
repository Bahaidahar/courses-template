import { ReactNode } from "react";

export interface Lesson {
  id: number;
  title: string;
  content: {
    images?: string[];
    text?: string;
    video?: string;
    homeTask?: string;
  };
}

export interface Chapter {
  id: number;
  title: string;
  lessons: Lesson[];
}

export interface Course {
  id: number;
  title: string;
  description: string;
  logo: ReactNode;
  chapters: Chapter[];
}

export const courses: Course[] = [
  {
    id: 1,
    title: "Введение в Frontend",
    description: "Изучите основы Frontend и создайте свое первое приложение",
    logo: (
      <div className="mt-4 flex h-[240px] w-full items-center justify-center rounded-xl bg-gradient-to-r from-orange-400 to-red-400">
        <p className="text-3xl font-semibold text-white">Frontend</p>
      </div>
    ),
    chapters: [
      {
        id: 1,
        title: "Основы HTML",
        lessons: [
          {
            id: 1,
            title: "Структура HTML-документа",
            content: {
              text: "HTML (HyperText Markup Language) - это основа любой веб-страницы...",
              video: "https://example.com/html-structure-video",
              homeTask:
                "Создайте простую HTML-страницу с заголовком, параграфом и списком.",
            },
          },
          {
            id: 2,
            title: "Работа с текстом в HTML",
            content: {
              text: "В HTML существует множество тегов для работы с текстом...",
              images: ["/placeholder.svg?height=200&width=300"],
              homeTask:
                "Создайте HTML-страницу с различными текстовыми элементами.",
            },
          },
        ],
      },
      {
        id: 2,
        title: "Основы CSS",
        lessons: [
          {
            id: 3,
            title: "Введение в CSS",
            content: {
              text: "CSS (Cascading Style Sheets) используется для стилизации HTML-элементов...",
              video: "https://example.com/css-intro-video",
              homeTask:
                "Добавьте стили к вашей HTML-странице из предыдущего задания.",
            },
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Введение в Backend",
    description: "Изучите основы Backend и создайте свое первое приложение",
    logo: (
      <div className="mt-4 flex h-[240px] w-full items-center justify-center rounded-xl bg-gradient-to-r from-purple-400 to-blue-400">
        <p className="text-3xl font-semibold text-white">Backend</p>
      </div>
    ),
    chapters: [
      {
        id: 1,
        title: "Основы серверного программирования",
        lessons: [
          {
            id: 1,
            title: "Что такое сервер?",
            content: {
              text: "Сервер - это программа или устройство, предоставляющее услуги другим программам или устройствам...",
              images: ["/placeholder.svg?height=200&width=300"],
              homeTask:
                "Опишите различия между клиентской и серверной частью веб-приложения.",
            },
          },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Введение в Design",
    description: "Изучите основы Design и создайте свое первое приложение",
    logo: (
      <div className="mt-4 flex h-[240px] w-full items-center justify-center rounded-xl bg-gradient-to-r from-pink-400 to-yellow-400">
        <p className="text-3xl font-semibold text-white">Design</p>
      </div>
    ),
    chapters: [],
  },
  {
    id: 3,
    title: "Введение в Gamedev",
    description: "Изучите основы Gamedev и создайте свое первое приложение",
    logo: (
      <div className="mt-4 flex h-[240px] w-full items-center justify-center rounded-xl bg-gradient-to-r from-green-400 to-emerald-500">
        <p className="text-3xl font-semibold text-white">Gamedev</p>
      </div>
    ),
    chapters: [],
  },
];
