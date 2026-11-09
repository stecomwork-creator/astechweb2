# ASTECH GLOBAL

Güncel, Türkçe ve İngilizce kurumsal web sitesi.

- `public/`: Vercel üzerinde yayınlanan statik dosyalar.
- `source/build.py`: 5 sayfanın TR/EN HTML dosyalarını üretir; `python source/build.py` ile çalıştırılır.
- `public/corporate.css`: güncel kurumsal stil, krem palet ve logo tipografisi.
- `public/corporate.js`: menü ve demo bağlantıları.
- `public/privacy-policy/`: korunan gizlilik politikası.
- `vercel.json`: mevcut Vercel yapılandırması, çıktı klasörü `public`.

Sayfalar: Ana Sayfa, Çözümler, Biz Kimiz, İletişim, SSS. Sunucu, veritabanı veya ortam değişkeni gerekmez. Yerel önizleme: `python -m http.server 8000 --directory public`.

Mevcut Vercel projesi `main` dalına bağlıysa commit sonrasında otomatik dağıtım başlar.
