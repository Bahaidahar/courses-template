import Link from "next/link";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { courses } from "@/shared/constants/courses";

export default function MyCourses() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-6 text-3xl font-bold">Мои курсы</h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {courses
          .filter((coures) => coures.id !== 1)
          .map((course) => (
            <Card key={course.id}>
              <CardContent>{course.logo}</CardContent>
              <CardFooter>
                <Button asChild>
                  <Link href={`/user/baha/courses/${course.id}`}>
                    Продолжить
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
      </div>
    </div>
  );
}
