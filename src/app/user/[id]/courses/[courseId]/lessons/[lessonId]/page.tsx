"use client";
/* eslint-disable jsx-a11y/media-has-caption */
import { useState } from "react";
import { courses, Course, Lesson } from "@/shared/constants/courses";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useParams } from "next/navigation";

export default function LessonPage() {
  const params = useParams();
  const { courseId, lessonId } = params;
  const course = courses.find((c) => c.id === Number(courseId)) as Course;
  const [currentLessonId, setCurrentLessonId] = useState(Number(lessonId));

  if (!course) {
    return <div>Курс не найден</div>;
  }

  const allLessons = course.chapters.flatMap((chapter) => chapter.lessons);
  const currentLesson = allLessons.find(
    (lesson) => lesson.id === currentLessonId,
  ) as Lesson;
  const currentLessonIndex = allLessons.findIndex(
    (lesson) => lesson.id === currentLessonId,
  );

  const goToNextLesson = () => {
    if (currentLessonIndex < allLessons.length - 1) {
      setCurrentLessonId(allLessons[currentLessonIndex + 1].id);
    }
  };

  const goToPreviousLesson = () => {
    if (currentLessonIndex > 0) {
      setCurrentLessonId(allLessons[currentLessonIndex - 1].id);
    }
  };

  if (!currentLesson) {
    return <div>Урок не найден</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-3xl font-bold">{course.title}</h1>
      <Card>
        <CardHeader>
          <CardTitle>{currentLesson.title}</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          {currentLesson.content.text && (
            <p className="mb-4">{currentLesson.content.text}</p>
          )}
          {currentLesson.content.images &&
            currentLesson.content.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Изображение ${index + 1}`}
                className="mb-4 rounded-lg"
              />
            ))}
          {currentLesson.content.video && (
            <div className="mb-4">
              <h3 className="mb-2 text-lg font-semibold">Видео урок</h3>
              <video
                src={currentLesson.content.video}
                controls
                className="w-full rounded-lg"
              />
            </div>
          )}
          {currentLesson.content.homeTask && (
            <div className="mt-6">
              <h3 className="mb-2 text-lg font-semibold">Домашнее задание</h3>
              <p>{currentLesson.content.homeTask}</p>
            </div>
          )}
        </CardContent>
      </Card>

      <div className="mt-8 flex justify-between">
        <Button
          onClick={goToPreviousLesson}
          disabled={currentLessonIndex === 0}
        >
          <ChevronLeft className="mr-2 h-4 w-4" /> Предыдущий урок
        </Button>
        <Button
          onClick={goToNextLesson}
          disabled={currentLessonIndex === allLessons.length - 1}
        >
          Следующий урок <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
