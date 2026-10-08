export function LegalPage({ title, updated, children }: { title: string; updated: string; children: React.ReactNode }) {
  return (
    <div className="pb-[clamp(4.5rem,9vw,8rem)] pt-36 sm:pt-44">
      <div className="container-x grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-4 [container-type:inline-size]">
          <h1 className="t-display text-[min(3.75rem,10.4cqi)] lg:sticky lg:top-28">{title}</h1>
        </div>
        <article className="legal lg:col-span-8">
          {children}
          <p className="mt-12 border-t border-line pt-6 text-[0.9375rem]">Ultimo aggiornamento: {updated}.</p>
        </article>
      </div>
    </div>
  );
}
