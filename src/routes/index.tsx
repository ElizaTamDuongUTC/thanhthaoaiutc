import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Check, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import portrait from "@/assets/eliza-tam-duong.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "THÀNH THẠO AI — Khóa học AI cho giáo viên | Eliza Tâm Dương" },
      { name: "description", content: "Học AI từ gốc, hiểu bản chất, biết phối hợp công cụ và xây dựng thói quen ứng dụng hiệu quả trong công việc giáo viên. Đồng hành 1:1 cùng Eliza Tâm Dương." },
      { property: "og:title", content: "THÀNH THẠO AI — Khóa học AI cho giáo viên" },
      { property: "og:description", content: "Học AI từ gốc và ứng dụng hiệu quả vào công việc giáo viên cùng Eliza Tâm Dương. Hỗ trợ 1:1 suốt quá trình học." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

const difficulties = [
  { title: "Chưa biết bắt đầu từ đâu", text: "AI có quá nhiều điều mới, thầy cô muốn tìm một điểm bắt đầu dễ hiểu và phù hợp với mình." },
  { title: "Dùng công cụ còn rời rạc", text: "Đã thử một vài công cụ nhưng chưa biết chọn lựa, sắp xếp và phối hợp sao cho hiệu quả." },
  { title: "Thiếu một quy trình rõ ràng", text: "Muốn đưa AI vào công việc thường ngày mà chưa hình thành được cách làm nhất quán." },
];

const outcomes = [
  { title: "Hiểu AI từ nền tảng", text: "Hiểu bản chất và biết sử dụng AI phù hợp với những nhiệm vụ thực tế của mình." },
  { title: "Biết phối hợp công cụ", text: "Chọn đúng công cụ và kết nối chúng thành một quy trình làm việc có mục đích." },
  { title: "Xây dựng cách làm riêng", text: "Từng bước hình thành quy trình ứng dụng AI phù hợp với công việc giáo viên." },
  { title: "Duy trì thói quen hiệu quả", text: "Chủ động ứng dụng AI, thay vì chạy đua theo số lượng công cụ mới." },
];

function HomePage() {
  return (
    <main className="overflow-hidden bg-background">
      <section className="bg-soft">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 pb-12 pt-12 md:min-h-[680px] md:grid-cols-[1.15fr_0.85fr] md:gap-16 md:py-16 lg:px-12">
          <div className="max-w-2xl">
            <span className="mb-6 inline-block rounded-full border border-deep/15 bg-background px-4 py-2 text-xs font-semibold uppercase text-deep sm:text-sm">Khóa học AI dành cho giáo viên mọi cấp học</span>
            <p className="mb-3 text-sm font-semibold uppercase text-copper">Cùng Eliza Tâm Dương</p>
            <h1 className="font-serif text-[clamp(3rem,5.8vw,5.75rem)] font-bold leading-[1.08] text-deep">THÀNH THẠO <span className="italic text-copper">AI</span></h1>
            <p className="mt-6 max-w-xl font-serif text-2xl font-semibold leading-snug text-deep sm:text-3xl">Học AI từ gốc, ứng dụng hiệu quả trong công việc giáo viên.</p>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">Hiểu bản chất, biết phối hợp công cụ và hình thành thói quen ứng dụng AI có mục đích — theo cách phù hợp với thầy cô.</p>
            <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-4">
              <Button asChild size="feature"><a href="#lien-he">Đăng ký ngay <ArrowRight aria-hidden="true" /></a></Button>
              <span className="text-sm leading-relaxed text-deep">Cầm tay chỉ việc<br /><strong>Hỗ trợ 1:1 suốt quá trình học</strong></span>
            </div>
          </div>
          <figure className="relative mx-auto w-full max-w-[430px] md:ml-auto">
            <img className="aspect-[4/5] w-full rounded-lg object-cover object-top shadow-xl" src={portrait.url} alt="Eliza Tâm Dương trong áo dài trắng, cầm sách" fetchPriority="high" />
            <figcaption className="mt-3 text-right text-xs font-medium text-deep">Eliza Tâm Dương · Người chia sẻ</figcaption>
          </figure>
        </div>
      </section>

      <section className="px-6 py-20 md:py-24 lg:px-12" aria-labelledby="kho-khan">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase text-copper">Điểm bắt đầu</p>
            <h2 id="kho-khan" className="font-serif text-3xl font-bold text-deep sm:text-4xl">Thầy cô có đang gặp những khó khăn này?</h2>
            <div className="mx-auto mt-6 h-1 w-16 bg-copper" />
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {difficulties.map((item, index) => (
              <article key={item.title} className="rounded-lg border border-border bg-card p-7 sm:p-8">
                <span className="font-serif text-3xl italic text-copper">0{index + 1}</span>
                <h3 className="mt-5 text-xl font-semibold text-deep">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-soft px-6 py-20 md:py-24 lg:px-12" aria-labelledby="danh-cho-ai">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.85fr_1.15fr] md:gap-20">
          <div><p className="mb-3 text-sm font-semibold uppercase text-copper">Dành cho thầy cô</p><h2 id="danh-cho-ai" className="font-serif text-3xl font-bold text-deep sm:text-4xl">Dù bắt đầu từ đâu, thầy cô đều có thể học.</h2></div>
          <div className="divide-y divide-deep/15 border-y border-deep/15">
            <div className="py-6"><h3 className="text-xl font-semibold text-deep">Chưa từng sử dụng AI</h3><p className="mt-2 leading-relaxed text-muted-foreground">Thầy cô cần được hướng dẫn từng bước, từ những điều nền tảng nhất.</p></div>
            <div className="py-6"><h3 className="text-xl font-semibold text-deep">Đã dùng AI nhưng chưa hiệu quả</h3><p className="mt-2 leading-relaxed text-muted-foreground">Thầy cô muốn biết cách lựa chọn và phối hợp các công cụ thành một cách làm rõ ràng.</p></div>
          </div>
        </div>
      </section>

      <section className="bg-deep px-6 py-20 text-deep-foreground md:py-24 lg:px-12" aria-labelledby="gia-tri">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.75fr_1.25fr] md:gap-16">
          <div><p className="mb-3 text-sm font-semibold uppercase text-deep-foreground/75">Điều thầy cô hướng tới</p><h2 id="gia-tri" className="font-serif text-4xl font-bold leading-tight">Không cần biết thật nhiều công cụ. Cần biết dùng đúng cách.</h2></div>
          <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2">
            {outcomes.map((item, index) => <div key={item.title} className="border-t border-deep-foreground/30 pt-5"><span className="text-sm font-semibold text-deep-foreground/70">0{index + 1} /</span><h3 className="mt-4 text-xl font-semibold">{item.title}</h3><p className="mt-3 leading-relaxed text-deep-foreground/80">{item.text}</p></div>)}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:py-24 lg:px-12" aria-labelledby="dong-hanh">
        <div className="mx-auto max-w-7xl text-center"><p className="mb-3 text-sm font-semibold uppercase text-copper">Cách đồng hành</p><h2 id="dong-hanh" className="font-serif text-3xl font-bold text-deep sm:text-4xl">Không phải tự mình xoay xở.</h2><p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">Thầy cô được cầm tay chỉ việc, hướng dẫn từng bước và hỗ trợ 1:1 trong suốt quá trình học tập.</p><Button asChild variant="outline" size="feature" className="mt-8"><a href="#lien-he">Trao đổi về khóa học <ArrowRight aria-hidden="true" /></a></Button></div>
      </section>

      <section className="border-y border-border bg-soft px-6 py-20 md:py-24 lg:px-12" aria-labelledby="nguoi-chia-se">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center"><img src={portrait.url} alt="Chân dung Eliza Tâm Dương" loading="lazy" className="h-32 w-32 rounded-full border-4 border-background object-cover object-[center_25%] shadow-md" /><p className="mt-7 text-sm font-semibold uppercase text-copper">Người chia sẻ</p><h2 id="nguoi-chia-se" className="mt-2 font-serif text-3xl font-bold text-deep sm:text-4xl">Eliza Tâm Dương</h2><p className="mt-5 max-w-xl leading-relaxed text-muted-foreground">Đồng hành cùng thầy cô trong hành trình học AI từ gốc, hiểu cách phối hợp công cụ và từng bước đưa AI vào công việc.</p></div>
      </section>

      <section className="px-6 py-20 md:py-24 lg:px-12" aria-labelledby="hoc-phi">
        <div className="mx-auto max-w-7xl text-center"><p className="mb-3 text-sm font-semibold uppercase text-copper">Học phí</p><h2 id="hoc-phi" className="font-serif text-3xl font-bold text-deep sm:text-4xl">Bắt đầu hành trình thành thạo AI</h2><div className="mx-auto mt-10 max-w-lg rounded-lg border border-border bg-card p-7 shadow-lg sm:p-10"><p className="text-sm font-semibold uppercase text-muted-foreground">Học phí ưu đãi</p><p className="mt-4 text-lg text-muted-foreground">Học phí gốc <span className="line-through">2.000.000 đồng</span></p><p className="mt-2 font-serif text-4xl font-bold text-copper sm:text-5xl">999.000 <span className="text-2xl">đồng</span></p><div className="my-8 border-t border-border" /><ul className="space-y-4 text-left text-foreground"><li className="flex gap-3"><Check className="mt-0.5 size-5 shrink-0 text-deep" aria-hidden="true" /> Học AI từ nền tảng, hướng tới ứng dụng thực tế</li><li className="flex gap-3"><Check className="mt-0.5 size-5 shrink-0 text-deep" aria-hidden="true" /> Hướng dẫn từng bước, cầm tay chỉ việc</li><li className="flex gap-3"><Check className="mt-0.5 size-5 shrink-0 text-deep" aria-hidden="true" /> Hỗ trợ 1:1 suốt quá trình học tập</li></ul><Button asChild variant="copper" size="feature" className="mt-9 w-full"><a href="#lien-he">Đăng ký và liên hệ <ArrowRight aria-hidden="true" /></a></Button></div></div>
      </section>

      <section id="lien-he" className="bg-deep px-6 py-20 text-deep-foreground md:py-24 lg:px-12" aria-labelledby="dang-ky">
        <div className="mx-auto max-w-3xl text-center"><p className="mb-3 text-sm font-semibold uppercase text-deep-foreground/75">Đăng ký & liên hệ</p><h2 id="dang-ky" className="font-serif text-3xl font-bold sm:text-4xl">Sẵn sàng học AI theo cách của mình?</h2><p className="mx-auto mt-5 max-w-xl leading-relaxed text-deep-foreground/85">Liên hệ Eliza Tâm Dương để đăng ký hoặc trao đổi thêm về khóa học.</p><a href="tel:0962571826" className="mt-7 block font-serif text-3xl font-bold sm:text-5xl">0962 571 826</a><Button asChild variant="copper" size="feature" className="mt-8"><a href="tel:0962571826"><Phone aria-hidden="true" /> Gọi đăng ký ngay</a></Button></div>
      </section>
      <footer className="border-t border-border px-6 py-8 text-center text-sm text-muted-foreground">THÀNH THẠO AI · Eliza Tâm Dương</footer>
    </main>
  );
}