import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { fullUrl, site } from "@/lib/site";
import { getWorkBySlug } from "@/data/work";
import { CTAButton } from "@/components/CTAButton";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { WorkDetailCloseButton } from "@/components/WorkDetailCloseButton";
import { WorkGridImage } from "@/components/WorkGridImage";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getWorkBySlug(slug);
  if (!item) return { title: "Not Found", robots: { index: false, follow: true } };
  const title = `${item.title} | Work`;
  const description =
    "Love this logo? Start your logo design brief and we'll create a direction that fits your brand.";
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: fullUrl(`/work/${slug}`),
      type: "website",
      siteName: "VARG",
      locale: "en_US",
      images: [{ url: fullUrl(item.imagePath), alt: item.title, width: item.imageWidth ?? 600, height: item.imageHeight ?? 600 }],
    },
    twitter: { card: "summary_large_image", title, description },
    alternates: { canonical: fullUrl(`/work/${slug}`) },
    robots: { index: true, follow: true },
  };
}

export default async function WorkDetailPage({ params }: Props) {
  const { slug } = await params;
  const item = getWorkBySlug(slug);
  if (!item) notFound();

  const breadcrumbs = [
    { name: "Home", url: fullUrl("/") },
    { name: "Work", url: fullUrl("/work") },
    { name: item.title, url: fullUrl(`/work/${slug}`) },
  ];

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbs} />
      <div className="px-4 pt-24 pb-20 sm:px-6 sm:pt-32">
        <AnimateOnScroll>
        <div className="mx-auto max-w-6xl">
          <nav className="mb-8 flex items-center justify-between text-sm text-[var(--foreground)]/70 transition-colors duration-200" aria-label="Breadcrumb">
            <span>
              <Link href="/work" className="hover:text-[var(--foreground)]">
                Work
              </Link>
              <span className="mx-2">/</span>
              <span className="text-[var(--foreground)]">{item.title}</span>
            </span>
            <WorkDetailCloseButton />
          </nav>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="relative aspect-square overflow-hidden rounded-[40px]">
              <WorkGridImage
                src={item.imagePath}
                alt={item.title}
                width={item.imageWidth ?? 600}
                height={item.imageHeight ?? 600}
                className="h-full w-full rounded-[40px] object-contain"
                loading="eager"
              />
            </div>
            <div className="flex flex-col justify-center text-left">
              <h1 className="text-2xl font-semibold tracking-tight text-[var(--foreground)] sm:text-3xl" id="work-cta-heading">
                Ready for a logo with this clarity?
              </h1>
              <p className="mt-4 text-[var(--foreground)]/80">
                Want a logo with this level of clarity? Start your brief and we'll build a direction that fits your brand.
              </p>
              <div className="mt-8 flex flex-row flex-wrap gap-4">
                <CTAButton href="/contact" variant="secondary" className="min-w-0 flex-1">
                  Contact
                </CTAButton>
                <CTAButton href={`/contact?start=1&mode=guided&ref=${slug}`} className="min-w-0 flex-1">
                  Get your Logo
                </CTAButton>
              </div>
              <div className="mt-8">
                <p className="mb-2 text-sm font-medium text-[var(--foreground)]/80">Social medias</p>
                <div className="flex flex-wrap gap-4 text-sm text-[var(--foreground)]/60">
                  <a href={site.social.instagram} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-[var(--foreground)]" aria-label="Instagram">Instagram</a>
                  <a href={site.social.pinterest} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-[var(--foreground)]" aria-label="Pinterest">Pinterest</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        </AnimateOnScroll>
      </div>
    </>
  );
}
