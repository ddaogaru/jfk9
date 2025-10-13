import Marquee from '@/components/ui/marquee';

export const dynamic = 'force-static';

export default function MarqueeDebugPage() {
  return (
    <main className="min-h-screen p-8 space-y-6">
      <h1 className="text-2xl font-bold">Marquee Debug</h1>
      <p className="text-muted-foreground">This page isolates the marquee to verify it scrolls.</p>

      <section className="border rounded-lg p-4">
        <h2 className="font-semibold mb-2">Horizontal (normal)</h2>
        <Marquee pauseOnHover className="[--duration:10s]">
          {[...Array(10)].map((_, i) => (
            <span key={i} className="px-6 py-2 bg-secondary rounded-md border">
              Item {i + 1}
            </span>
          ))}
        </Marquee>
      </section>

      <section className="border rounded-lg p-4">
        <h2 className="font-semibold mb-2">Horizontal (reverse)</h2>
        <Marquee reverse pauseOnHover className="[--duration:8s]">
          {[...Array(8)].map((_, i) => (
            <span key={i} className="px-6 py-2 bg-secondary rounded-md border">
              Rev {i + 1}
            </span>
          ))}
        </Marquee>
      </section>
    </main>
  );
}
