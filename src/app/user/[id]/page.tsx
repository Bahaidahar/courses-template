import Link from "next/link";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { courses } from "@/shared/constants/courses";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-6 text-3xl font-bold">
        Добро пожаловать чувствуй себя как дома
      </h1>
      <hr className="my-4" />
      <h1 className="mb-6 text-3xl font-bold">Последний курс</h1>
      <Card className="w-full max-w-md">
        <CardContent>
          {courses[0].logo}
          <h2 className="mb-2 text-xl font-semibold">{courses[0].title}</h2>
          <p className="text-gray-600">{courses[0].description}</p>
        </CardContent>
        <CardFooter>
          <Button asChild>
            <Link href={`/user/baha/courses/${courses[0].id}`}>
              Начать курс
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
