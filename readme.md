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
## Kullanılan Teknolojiler  

<code><a target="_blank"><img height="50" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png"></a></code>
<code><a target="_blank"><img height="50" src="https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg"></a></code>
<code><a target="_blank"><img height="50" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/97px-Git_icon.svg.png"></a></code>
<code><a target="_blank"><img height="50" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/240px-JavaScript-logo.png"></a></code>
<code><a target="_blank"><img height="50" src="https://upload.wikimedia.org/wikipedia/commons/c/c2/Postman_%28software%29.png"></a></code>

## Ödev Yapım Aşamaları  

### API Kullanımı  
#### 1. Trendyol  

> *Tüm markalar*   

```http
  GET /api/platforms/trendyol/getAllBrands
```

> *Markayı getir*

```http
  GET /api/platforms/trendyol/getBrand/${Marka Adı}
```

| Parametre | Tip     | Açıklama                       |
| :-------- | :------- | :-------------------------------- |
| `name`      | `string` | **Gerekli**. İlgili markanın ismi |

> *Tüm kategorileri getir*

```http
  GET /api/platforms/trendyol/getAllCategories
```
> *Kategoriyi getir*

```http
  GET /api/platforms/trendyol/getCategory/${id}
```

| Parametre | Tip     | Açıklama                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `number` | **Gerekli**. İlgili kategorinin idsi |

### JWT Entegrasyonu ve ErrorHandler Entegrasyonu  


## Kaynaklar  
* [NPM-jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)  
* [NPM-express-jwt](https://www.npmjs.com/package/express-jwt)
* [Joi.dev](https://joi.dev/api/?v=17.5.0)  
* [Joi for Node API Schema Validation](https://www.digitalocean.com/community/tutorials/how-to-use-joi-for-node-api-schema-validation)  
* 

