type EditorialTrustProps = {
  published: string;
  reviewed: string;
  category?: string;
  contentType?: string;
  author?: string;
};

export default function EditorialTrust({
  published,
  reviewed,
  category,
  contentType,
  author = "DaniniLans uredništvo",
}: EditorialTrustProps) {
  const resolvedCategory = contentType ?? category ?? "Edukativni sadržaj";

  return (
    <aside className="editorialTrust" aria-label="Informacije o sadržaju">
      <div><span>Autor / urednik</span><strong>{author}</strong></div>
      <div><span>Vrsta sadržaja</span><strong>{resolvedCategory}</strong></div>
      <div><span>Objavljeno</span><time dateTime={published}>{published}</time></div>
      <div><span>Poslednja provera</span><time dateTime={reviewed}>{reviewed}</time></div>
    </aside>
  );
}
