'use client'
import { useEffect, useState } from "react";
import Overlay from "@/components/Overlay";
import "./styles.css";// `app/dashboard/page.tsx` is the UI for the `/dashboard` URL
import { Button } from "@/components/ui/button";


export default function Page() {
    
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState<number>(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);

  async function getAdvice() {
    setLoading(true);
    setError(null); // پاک کردن خطای قبلی

    try {
      const res = await fetch("https://api.adviceslip.com/advice?" + new Date().getTime());
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await res.json();
      setAdvice(data.slip.advice);
      setCount((c) => c + 1);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("خطا در دریافت داده‌ها. لطفاً بعداً تلاش کنید.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getAdvice();
  }, []);


const Message = (count:number):any => {
    return (
        <p>You read <strong>{count}</strong></p>
      );
}

  return (
    <div>
      <Overlay show={loading} />
      {error && <p className="error">{error}</p>}
      <h1>{advice}</h1>
      <Button variant={"secondary"} onClick={getAdvice}>Click me</Button>
      {/* <Message count={count} /> */}
      {Message(count)}
    </div>
  );
}

/* function Message({count}:{count:number}) {
    return (
      <p>You read <strong>{count}</strong></p>
    );
} */
