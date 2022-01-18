# A101 NodeJS Bootcamp Ödev-2  
> Mehmet Ali Çakır & Berçe Özüm Uyğun  
## Ödev İçeriği  
- Node.js Boiler Plate  
    + JWT entegrasyonu  
    + JWT sign etmeden önce joi.js validasyon  
    + Trendyol markalar "GET" endpointi  
        + Bu endpoint'e id veya name ile query params eklemek  
    + Trendyol kategoriler "GET" endpointi  
    + Trendyol single kategori "GET" endpointi  
    + Error-Handler entegrasyonu   
## Ödev Yapım Aşamaları  


## API Kullanımı

### Trendyol

#### Tüm markaları getir

```http
  GET /api/platforms/trendyol/getAllBrands
```

#### Markayı getir

```http
  GET /api/platforms/trendyol/getBrand/${Marka Adı}
```

| Parametre | Tip     | Açıklama                       |
| :-------- | :------- | :-------------------------------- |
| `name`      | `string` | **Gerekli**. İlgili markanın ismi |

#### Tüm kategorileri getir

```http
  GET /api/platforms/trendyol/getAllCategories
```
#### Kategoriyi getir

```http
  GET /api/platforms/trendyol/getCategory/${id}
```

| Parametre | Tip     | Açıklama                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `number` | **Gerekli**. İlgili kategorinin idsi |


## Kaynaklar  

