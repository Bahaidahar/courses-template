"use client";
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/media-has-caption */

import { courses, Course, Chapter, Lesson } from "@/shared/constants/courses";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useParams, useRouter } from "next/navigation";

export default function CoursePage() {
  const params = useParams();
  const { courseId } = params;
  const course = courses.find((c) => c.id === Number(courseId)) as Course;

  const router = useRouter();
  if (!course) {
    return <div>Курс не найден</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="mb-4 text-3xl font-bold">{course.title}</h1>
        <p className="mb-4 text-xl">{course.description}</p>
        {course.logo}
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        <div className="md:col-span-2">
          <h2 className="mb-4 text-2xl font-semibold">Содержание курса</h2>
          <Accordion type="single" collapsible className="w-full">
            {course.chapters.map((chapter: Chapter) => (
              <AccordionItem key={chapter.id} value={`chapter-${chapter.id}`}>
                <AccordionTrigger>{chapter.title}</AccordionTrigger>
                <AccordionContent>
                  {chapter.lessons.map((lesson: Lesson) => (
                    <Button
                      key={lesson.id}
                      variant="ghost"
                      className="w-full justify-start"
                      onClick={() =>
                        router.push("/user/baha/courses/1/lessons/" + lesson.id)
                      }
                    >
                      {lesson.title}
                    </Button>
                  ))}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>Информация о курсе</CardTitle>
              <CardDescription>Детали и прогресс</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Количество глав: {course.chapters.length}</p>
              <p>
                Общее количество уроков:{" "}
                {course.chapters.reduce(
                  (sum, chapter) => sum + chapter.lessons.length,
                  0,
                )}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
