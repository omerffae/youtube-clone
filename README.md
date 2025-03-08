# YouTube Video Feed Projesi

## 📜 Proje Açıklaması
YouTube API'ını RapidAPI üzerinden kullanarak Türkçe içerik odaklı video feed uygulaması. Kullanıcılar kategori seçimine göre trend videoları görüntüleyebilir ve özelleştirilmiş arama yapabilir.

## ✨ Temel Özellikler
- Kategori bazlı dinamik video listesi
- Trend/Ana Sayfa/Özel Arama seçenekleri
- Skeleton loading efekti
- Hata yönetimi ve error boundary
- Responsive tasarım
- Video kartlarında; başlık, kanal adı, görüntülenme sayısı ve yayın tarihi

## 🛠️ Kurulum
1. Repoyu klonlayın:
```bash
git clone [https://github.com/omerffae/youtube-clone.git]
```
2. Bağımlılıkları yükleyin:
```bash
npm install
```
3. API key konfigürasyonu yapın (Aşağıdaki "Yapılandırma" bölümüne bakın)

## 🔧 Yapılandırma
1. [RapidAPI](https://rapidapi.com/) sitesinden ücretsiz API key alın
2. `src/utils/api.js` dosyasını açın
3. `YOUR_APİ_KEY` yazan yeri edindiğiniz API key ile değiştirin

## 🚀 Kullanım
```bash
npm start
```
- Ana sayfa: Trend videolar
- Sidebar'daki kategorilerle gezinti
- URL parametreleriyle özel arama (Ör: `?category=teknoloji`)

## 📂 Dosya Yapısı
```
src/
├── components/
│   ├── Error/
│   ├── Loader/
│   ├── SideBar/
│   └── VideoCard/
├── pages/
│   └── Feed/
└── utils/
    └── api.js
```

## 💻 Kullanılan Teknolojiler
- React 18
- React Router 6
- Axios
- RapidAPI (YouTube138 API)
- Tailwind CSS

## 📝 Bağımlılıklar
```json
"dependencies": {
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "react-router-dom": "^6.22.3",
  "axios": "^1.6.2",
  "tailwindcss": "^3.4.0"
}
```

## 🤝 Katkıda Bulunma
1. Fork'layın (https://github.com/omerffae/youtube-clone.git)
2. Branch oluşturun (`git checkout -b feature/fooBar`)
3. Commit'leyin (`git commit -am 'Add some fooBar'`)
4. Push yapın (`git push origin feature/fooBar`)
5. Pull Request oluşturun

