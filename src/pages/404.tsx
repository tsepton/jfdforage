import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Custom404() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/");
  }, [router]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-jfd-ground p-8 text-center">
      <p className="text-jfd-ink-soft">Redirection vers l’accueil…</p>
    </main>
  );
}
