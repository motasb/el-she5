// app/gallery/page.tsx

import ImageGallery from "../components/ImageGallery";



async function GalleryPage() {
  const res = await fetch(
    `https://api.unsplash.com/search/photos?query=architecture&per_page=10&client_id=q-gpVdNMfh704iw-c8kGbaZmxey5cWyoBylaYlX7SgE`,
    {
      // الخيار التالي يستخدم لضمان جلب البيانات من الخادم (SSR) وليس من ذاكرة التخزين المؤقت
      cache: 'no-store'
    }
  );

  const data = await res.json();
  const images: string[] = data.results.map((photo: { urls: { regular: string } }) => photo.urls.regular);

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>معرض الصور</h1>
      <ImageGallery images={images} />
    </div>
  );
}

export default GalleryPage;
