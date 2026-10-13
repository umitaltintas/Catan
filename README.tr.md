# Katanittes

*[English](README.md) · Türkçe · [Español](README.es.md)*

**Catan'dan esinlenen, tarayıcıda çalışan bir kâşif ve yerleşim oyunu.** Kendi haritaların, kutuda olmayan oyun modları, seni hiç sevmeyen botlar, arkadaşlarla online oyun ve piksel arayüzlü, elde yapılmış bir 3D maket tahta.

Ücretsiz; reklam, hesap ya da kurulum yok. Bilgisayarda ve telefonda çalışır.

| | |
|---|---|
| 🇹🇷 **Türkçe oyna** | https://umitaltintas.github.io/Catan/?lang=tr |
| 🎮 **Oyna** | https://umitaltintas.github.io/Catan/ |

> Arayüz **Türkçe ve İspanyolca** olarak mevcut. Dili ana menüden değiştirebilir ya da sayfayı `?lang=tr` / `?lang=es` ile açabilirsin. Tarayıcın Türkçeyse oyun kendiliğinden Türkçe açılır.

---

## Bu fork hakkında

Bu repo, Sowtank'ın yaptığı orijinal oyunun ([KurusuDes/CatanTestFriendos](https://github.com/KurusuDes/CatanTestFriendos)) bir fork'u. Burada yapılan değişiklikler:

- **Türkçe çeviri:** Menüler, lobi, oyun ekranı, yardım, harita editörü, online mesajlar, oyun günlüğü ve hata mesajları çevrildi. Günlük kayıtları dilden bağımsız saklanıyor; aynı online odadaki oyuncuların her biri kendi dilini kullanabilir.
- **Daha hafif ve sakin:** 3D tahtada ortam hareketi yok (rüzgâr, dalga, kayan bulut, sallanan tekne yok). Sahne sadece bir şey değişince yeniden çiziliyor; oyuncu düşünürken GPU neredeyse hiç çalışmıyor. Gölgeler ve parça kenar çizgileri sadece parçalar ya da kamera hareket edince güncelleniyor. Shader'lar oyun başlamadan derleniyor ve arayüzdeki birkaç takılma giderildi.
- **Kaldırılanlar:** Kumar temalı minioyun bölümü (ADHD) ve altın parça süsleri, fragman ve tanıtım videoları, orijinal yazarın geliştirme notları ve model üretim betikleri.

---

## Özellikler

### Haritalar
- **10 harita şekli:** klasik (19 kare), mini (14), 5–6 oyuncu için genişletilmiş (30), büyük (37), dev (61), göl halkası, yıldız, iki krallık, takımadalar ve rastgele Pangea.
- Paylaşılabilir harita kodlarıyla **harita editörü**.
- Dengeli ya da kaotik kaynak ve sayı dağılımı, isteğe bağlı **altın** kareler, ayarlanabilir limanlar ve çöller.

### İmza modlar
- **Blindfold:** Bütün tahta ters başlar. İlk köylerini körlemesine yerleştirirsin (diğerleri nereye koyduğunu görür), yerleşim bitince tahta ters döner.
- **Savaş sisi:** Herkesin kendi görüşü var: binalarının çevresi ve yollarının yanında yarım kare. Göremediğin birinin üstüne inşa edersen parçan en yakın boş yere kayar.

### Diğer modlar (hepsi birleştirilebilir)
- **Gizli evler:** Açılışa kadar kimse diğerlerinin ilk evlerini nereye koyduğunu görmez. Çakışırsa geç kalan yer değiştirir.
- **Gizli sayılar:** Kaynakları görürsün ama sayı pulları biri yanına inşa edince açılır.
- **Tur olayları:** Her tur bir olay çıkar: bereketli hasat, kuraklık, adil ticaret, karaborsa, deprem, fırtına, kralın hediyesi, salgın, vergi, isyan ya da sükûnet.
- **Canlı toprak:** Her 3 turda bir haritadaki sayılar (ya da kaynaklar) karışır.
- **Dengeli zarlar:** Zarlar 36 kartlık bir desteden gelir, istatistik tutar.
- **Kibar hırsız**, **hırsızsız**, **başlangıç şehri** ve **turbo** (iki kat üretim).
- Bunları bir araya getiren **hazır kombinasyonlar:** Klasik, Blindfold, Savaş sisi, Kâşifler, Paranoya, Tam kaos, Hızlı ve Savaş.

### Ayarlanabilir kurallar
Zafer puanı, el sınırı, yerleşim turları, başlangıç bonusu, oyuncu başına parça sayısı, gelişim kartı desteleri (normal, savaş, ilerleme ya da hiç), altın, limanlar ve çöller. Temel kuralların hepsi var: hırsız, kart atma, 3:1 ve 2:1 limanlar, oyuncular arası takas, gelişim kartları, en uzun yol ve en büyük ordu.

### Oyuncular
- Banka, deste ve haritalar buna göre ölçeklenerek **8 oyuncuya kadar**.
- Her krallık 12×12 piksel editörde kendi **bayrağını** çizer ve bir **kale rengi** seçer. Bayrak 3D tahtada binalarının üstünde durur.
- Takas yapan, hırsızlık yapan ve yol kesen üç seviyede **botlar** (kolay, normal, zor). 💡 düğmesi bir hamle önerir.
- Tek cihazda **sırayla oyun**; insan oyuncular arasında ekranı devretme adımı var, kimse kimsenin elini görmez.
- **İzleyici modu:** Sadece botların oynadığı bir maçı istediğin hızda izle.

### Arkadaşlarla online
- WebRTC (PeerJS) üzerinden **eşler arası** bağlantı. Oyunu oda kurucusunun tarayıcısı çalıştırır, oyun sunucusu yok. Kısa bir oda kodu ya da link paylaşman yeterli.
- **Otomatik yeniden bağlanma:** Bağlantın koparsa yerine geri dönersin.
- Biri koptuğunda masa **oylama** yapar: bekle, yerine bot geçsin ya da oyuncuyu çıkar.
- Kurucunun bağlantısı koparsa **odayı aynı kodla yeniden açıp** devam edebilir.
- **Tepkiler:** Emoji balonları bütün binalarından yükselir; orta tıkla haritaya herkesin göreceği bir işaret koyarsın.

### Tahta ve arayüz
- three.js ile yapılmış **3D maket tahta:** 8 PBR dokuyu harmanlayan tek parça arazi, görüntü tabanlı aydınlatmalı fiziksel gökyüzü, derinliğe göre köpüren su, ortam gölgelendirmesi (ambient occlusion) ve tilt-shift kamera.
- **Kare çeşitleri:** Her kaynağın birkaç görünümü var (çam tepesi, oduncu açıklığı, yuvarlak ağıl, tepede değirmen, kil ocağı, tuğla fırını, karlı zirve, taş ocağı...). Kare başına seçilir, herkes aynı haritayı görür.
- **Üstten görünüm** düğmesi: Kamera haritaya tam yukarıdan bakar, düz bir plan gibi. Uzaklaştıkça sayı pulları ve liman tabelaları küçülür, kareleri kapatmaz.
- Haritanın sağ üst köşesinde **zar geçmişi:** Son atışlar, en yenisi üstte, atan oyuncunun renginde.
- Basılı tutup güç doldurabildiğin 3D zarlar, karelerden eline, takasta oyuncular arasında ve bankaya **uçan kartlar** ve tarayıcıda üretilen ses efektleriyle **piksel arayüz**.

---

## Teknik

- **Derleme adımı olmayan statik site:** Düz JavaScript ES modülleri, HTML ve CSS. Doğrudan GitHub Pages'ten yayınlanıyor.
- **Kural motoru** (`js/engine/`): Saf fonksiyonlar. `applyAction(state, action)` her hamleyi doğrulayıp uygular, görsel efektler bir olay listesi olarak çıkar. Aynı motor yerel oyunları, online oyunları (kurucuda) ve testleri çalıştırır.
- **Çeviriler** (`js/i18n.js`, `js/i18n/tr/`): Koddaki İspanyolca metin anahtar olarak kullanılır. `t('Tirar dados')` metni geçerli dilde döndürür; çevirisi yoksa İspanyolcaya düşer.
- **Kütüphaneler:** 3D tahta için [three.js](https://threejs.org/), WebRTC için [PeerJS](https://peerjs.com/). İkisi de CDN'den yüklenir.

| Alan | Dosyalar | Ne yapar |
|---|---|---|
| Kural motoru | `js/engine/game.js`, `board.js`, `constants.js`, `config.js`, `rng.js` | Oyun durumu, kurallar, harita üretimi, tohumlu rastgelelik |
| Botlar | `js/engine/bot.js` | Üç zorluk seviyesi ve ipucu düğmesi |
| Uygulama | `js/app.js`, `js/main.js` | Oyun durumu, hamlelerin dağıtımı, bot sıraları, kayıt, ana menü |
| Online | `js/net.js` | Odalar, kurucu otoriteli senkronizasyon, yeniden bağlanma, oylama |
| Oyun ekranı | `js/ui/gameView.js` | Kartlar, el, aksiyonlar, zarlar, takas, uçan kartlar |
| 3D tahta | `js/ui/board3d.js`, `dice3d.js`, `flag.js` | Arazi, kare çeşitleri, parçalar, sis, 3D zarlar, bayraklar |
| 2D tahta | `js/ui/boardView.js` | WebGL yoksa yedek görünüm |
| Diğer arayüz | `js/ui/lobby.js`, `editor.js`, `pixel.js`, `sfx.js`, `help.js` | Lobi ve odalar, harita editörü, piksel ikonlar, sesler, yardım |
| Çeviriler | `js/i18n.js`, `js/i18n/tr/` | `t()` yardımcısı, dil algılama ve değiştirme, Türkçe sözlükler |
| Stiller | `css/style.css`, `css/pixel.css` | Piksel tema (Sweetie-16 paleti) |
| Varlıklar | `assets/` | Dokular, `kit.glb` modelleri ve ikonlar |
| Testler | `tests/` | Kural testleri ve değişmezleri kontrol eden yüzlerce bot-bot maçı |

## Yerelde çalıştırma

```bash
python3 -m http.server 8123
# sonra http://localhost:8123/?lang=tr adresini aç
```

Motor testleri (kurallar ve değişmezleri kontrol eden 300 bot-bot maçı):

```bash
npm test
```

## Lisans ve emeği geçenler

Oyunun yapımcısı **Sowtank** ([orijinal repo](https://github.com/KurusuDes/CatanTestFriendos)). Orijinal kod ve varlıklar [MIT lisansı](LICENSE) altında, © 2026 Sowtank. Bu projeyi ya da bir kısmını kullanırsan görünür bir şekilde kaynak göstermen rica ediliyor (ayrıntılar [NOTICE.md](NOTICE.md) dosyasında). Oyun bu emeği, orijinal repoya linkle birlikte ana menünün altında ve yardım ekranında gösteriyor.

**Resmî olmayan hayran projesi.** Catan GmbH, CATAN Studio ya da Kosmos ile bağlantılı değildir, onlar tarafından desteklenmez ya da onaylanmaz. *CATAN*, sahiplerinin ticari markasıdır. Üçüncü taraf bildirimleri (three.js, PeerJS, fontlar) [NOTICE.md](NOTICE.md) dosyasında.
