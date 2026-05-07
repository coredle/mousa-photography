"use client";

import { useState, useCallback, use } from "react";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import { PROJECTS, ProjectPhoto } from "@/lib/portfolioData";
import ProjectLightbox from "@/components/portfolio/ProjectLightbox";
import ProjectHero from "@/components/portfolio/ProjectHero";
import ProjectDescription from "@/components/portfolio/ProjectDescription";
import ProjectGallery from "@/components/portfolio/ProjectGallery";
import ProjectBottomNav from "@/components/portfolio/ProjectBottomNav";
import styles from "./project.module.css";
import Footer from "@/components/Footer";

export default function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) notFound();

  const [lightboxPhoto, setLightboxPhoto] = useState<ProjectPhoto | null>(null);
  const [lightboxIdx, setLightboxIdx] = useState(0);

  const openLightbox = useCallback((photo: ProjectPhoto, idx: number) => {
    setLightboxPhoto(photo);
    setLightboxIdx(idx);
  }, []);

  const closeLightbox = useCallback(() => setLightboxPhoto(null), []);

  const prevPhoto = useCallback(() => {
    const newIdx = (lightboxIdx - 1 + project.photos.length) % project.photos.length;
    setLightboxIdx(newIdx);
    setLightboxPhoto(project.photos[newIdx]);
  }, [lightboxIdx, project.photos]);

  const nextPhoto = useCallback(() => {
    const newIdx = (lightboxIdx + 1) % project.photos.length;
    setLightboxIdx(newIdx);
    setLightboxPhoto(project.photos[newIdx]);
  }, [lightboxIdx, project.photos]);

  return (
    <>
      <Navbar />
      <ProjectHero project={project} />
      <main className={styles.main}>
        <ProjectDescription project={project} />
        <ProjectGallery project={project} onOpenLightbox={openLightbox} />
        <ProjectBottomNav />
      </main>

      {lightboxPhoto && (
        <ProjectLightbox
          photo={lightboxPhoto}
          index={lightboxIdx}
          total={project.photos.length}
          onClose={closeLightbox}
          onPrev={prevPhoto}
          onNext={nextPhoto}
        />
      )}
      <Footer />
    </>
  );
}
