import Link from "next/link";
import { useRouter } from "next/router";

export default function TodoItem() {
  const router = useRouter();
  const item = router.query.todoItem;

  return (
    <>
      <p> todo: {item} </p>
      <Link href='/products'>Go Back to products</Link>
    </>
  );
}
