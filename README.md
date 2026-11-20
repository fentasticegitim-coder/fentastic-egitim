# Fentastic Eğitim – Statik Site

AGS hazırlık için 6 ders sayfası (Sözel Yetenek, Sayısal Yetenek, Tarih, Coğrafya, Eğitim Bilimleri, Mevzuat). Her derste Konu Anlatımı ve Soru Çözümü sekmesi var.

## Dosyalar
- `index.html` – ana sayfa
- `sozel-yetenek.html`, `sayisal-yetenek.html`, `tarih.html`, `cografya.html`, `egitim-bilimleri.html`, `mevzuat.html` – ders sayfaları
- `style.css`, `script.js` – tasarım ve sekme/soru davranışı
- `assets/` – ders görselleri ve logo (SVG)
- `robots.txt`

## GitHub Pages'e yükleme
1. github.com'da yeni bir depo (repository) oluştur, adı örneğin `fentastic-egitim` olsun. Public seç.
2. "uploading an existing file" bağlantısına tıkla, zip'ten çıkardığın **tüm dosya ve klasörleri** sürükle-bırak (index.html ana dizinde olmalı).
3. "Commit changes" de.
4. Depoda Settings > Pages bölümüne gir. Source olarak "Deploy from a branch", Branch olarak `main` ve `/ (root)` seç, Save de.
5. 1-2 dakika sonra adres: `https://KULLANICIADIN.github.io/fentastic-egitim/`

## Yeni soru eklemek
Ders sayfasındaki bir `<div class="soru" data-dogru="C">` bloğunu kopyala, metni ve şıkları değiştir, `data-dogru` değerine doğru şıkkın harfini yaz.

## Gizlilik
Site kullanıcıdan veri toplamaz, çerez kullanmaz, şifre veya anahtar içermez.
