# ASTECH GLOBAL — Vercel kurulumu

Bu paket, videonun kaldırıldığı ve sol üstte Manrope ExtraBold fontunun kullanıldığı son sürümdür.

## GitHub üzerinden yayınlama
1. ZIP dosyasını bilgisayarınızda çıkartın.
2. GitHub hesabınızda yeni bir repository oluşturun.
3. Paketin İÇİNDEKİ public klasörünü, vercel.json ve README.md dosyalarını repository köküne yükleyin.
4. Vercel panelinde Add New > Project ile bu repository'yi import edin.
5. Framework Preset: Other; Root Directory: repository kökü; Build Command: boş; Output Directory: public.
6. Deploy düğmesine basın. vercel.json derleme ve çıktı ayarlarını içerir.

## Dosyalar
- public/index.html: sayfa içeriği
- public/style.css: tasarım ve fontlar
- public/app.js: açılış animasyonu ve etkileşimler
- public/skyline.webp: sabit arka plan görseli
- vercel.json: Vercel dağıtım ayarları

Sunucu, veritabanı veya ortam değişkeni gerekmez. Fontlar Google Fonts üzerinden yüklenir.
Request demo ve iletişim butonları e-posta uygulamasını açar. WhatsApp butonu +90 545 216 39 95 numarasına gider.

Bu paket Vercel hesabınıza otomatik yüklenmiş değildir. GitHub/Vercel adımlarını tamamlayınca yayınlanır.

Kaynak: https://vercel.com/docs/deployments ve https://vercel.com/docs/builds/configure-a-build
