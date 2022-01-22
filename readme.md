# A101 NodeJS Bootcamp Ödev-2  
> ## [Mehmet Ali Çakır](https://github.com/mehmetalicakir) & [Berçe Özüm Uyğun](https://github.com/berceou) 

## İçindekiler
- [Ödev İsterleri](#%C3%B6dev-i%CC%87sterleri)
- [Kullanılan Teknolojiler](#kullan%C4%B1lan-teknolojiler)
- [JWT-Joi Entegrasyonu ve Giriş Süreci](#jwt-joi-entegrasyonu-ve-giri%C5%9F-s%C3%BCreci) 
- [Error Handler Entegrasyonu](#error-handler-entegrasyonu)
  + [E-mail Hatası](#e-mail-hatas%C4%B1)
  + [Parola Hatası](#parola-hatas%C4%B1)
- [API Kullanımı](#api-kullan%C4%B1m%C4%B1)
  + [Trendyol](#trendyol)
    + [Tüm markaları getir](#t%C3%BCm-markalar)
    + [Markayı getir](#markay%C4%B1-getir)
    + [Tüm kategorileri getir](#t%C3%BCm-kategorileri-getir)
    + [Kategoriyi getir](#kategoriyi-getir)
- [Ekstra Eklenen Platformlar](#ekstra-eklenen-platformlar)
  + [Github](#github)
    + [Kullancı bilgilerini getir](#kullanc%C4%B1-bilgilerini-getir)
    + [Kullancı repolarını getir](#kullanc%C4%B1-repolar%C4%B1n%C4%B1-getir)
    + [Kullancı takipçilerini getir](#kullanc%C4%B1-takip%C3%A7ilerini-getir)
    + [Kullancının takip ettiklerini getir](#kullanc%C4%B1n%C4%B1n-takip-ettiklerini-getir)
    + [Organizasyon bilgileri getir](#organizasyon-bilgileri-getir)
    + [Organizasyonun repolarını getir](#organizasyonun-repolar%C4%B1n%C4%B1-getir)
  + [OpenSea](#opensea)
    + [Tüm koleksiyonları getir](#t%C3%BCm-koleksiyonlar%C4%B1-getir)
    + [Koleksiyon getir](#koleksiyon-getir)
  + [News API](#news-api)
    + [Haber kaynaklarını getir](#haber-kaynaklar%C4%B1n%C4%B1-getir)
    + [Haber kaynaklarının tüm haberlerini getir](#haber-kaynaklar%C4%B1n%C4%B1n-t%C3%BCm-haberlerini-getir)
    + [Amerika haberlerini kategori bazlı getir](#amerika-haberlerini-kategori-bazl%C4%B1-getir)
    + [Büyük Britanya haberlerini kategori bazlı getir](#b%C3%BCy%C3%BCk-britanya-haberlerini-kategori-bazl%C4%B1-getir)
    + [Avustralya haberlerini kategori bazlı getir](#avustralya-haberlerini-kategori-bazl%C4%B1-getir)
    + [Rusya haberlerini kategori bazlı getir](#rusya-haberlerini-kategori-bazl%C4%B1-getir)
    + [Hindistan haberlerini kategori bazlı getir](#hindistan-haberlerini-kategori-bazl%C4%B1-getir)
    + [Fransa haberlerini kategori bazlı getir](#fransa-haberlerini-kategori-bazl%C4%B1-getir)
- [Kaynaklar](#kaynaklar)

</br>

## Ödev İsterleri 
- Node.js Boiler Plate  
    + JWT entegrasyonu  
    + JWT sign etmeden önce **joi** validasyon işlemleri  
    + Trendyol markalar "GET" endpointi  
        + Bu endpoint'e id veya name ile query params eklemek  
    + Trendyol kategoriler **"GET"** endpointi  
    + Trendyol single kategori **"GET"** endpointi  
    + Error-Handler entegrasyonu  
</br> 
## Kullanılan Teknolojiler  

<code><a target="_blank"><img height="50" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png"></a></code>
<code><a target="_blank"><img height="50" src="https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg"></a></code>
<code><a target="_blank"><img height="50" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/97px-Git_icon.svg.png"></a></code>
<code><a target="_blank"><img height="50" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/240px-JavaScript-logo.png"></a></code>
<code><a target="_blank"><img height="50" src="https://upload.wikimedia.org/wikipedia/commons/c/c2/Postman_%28software%29.png"></a></code>  

</br>


## JWT Entegrasyonu ve JOI Validasyonu  

> ### JSON Web Token (JWT) 

JSON Web Token *(JWT)*, iletişim yapan birimler arasındaki veri alışverişinin güvenli bir şekilde sağlanması için **token** kullanarak bilginin kendini kendini betimlediği bir yol sunan endüstri standardıdır. Oluşturulan token, dijital olarak imzalandığı için doğrulanabilir ve güvenilirdir.

Kimliklendirme işlemlerinde, kullanıcı kendi kimlik bilgileriyle başarılı bir şekilde giriş yaptığında, geriye bir **JWT** döndürülür ve tekrar kullanılmak üzere localStorage veya cookies gibi yapılarda JWT saklanır. Sunucudaki kaynağa erişim izni JWT’nin geçerliliği ile kontrol edilir. Eğer geçerli ise, erişim izni verilir. JWT’ler kendi kendini betimledikleri için, bütün gerekli bilgi JWT’nin içerisindedir.

Kullanıcı korunmuş bir kaynağa erişmek istediğinde, istemci tarafından *Authorization* başlığı içerisinde *Bearer* şeması kullanılarak JWT sunucuya iletilmelidir. Aşağıdaki diyagramda JWT işleyişi gösterilmiştir.

![JWT-diagram](/img/jwt-diagram.png)

> ### JOI

Gelen kullanıcı girişlerinin kontrol işlemlerini yapabilmek için *joi* paketi kullanılmaktadır.

```
const Joi = require('joi');
const schema = Joi.object({
    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),

    password: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
})
``` 
Yukarıdaki kod betiği gibi bir işlem yapıldığında;
- ```email```:
  + Geçerli bir email adresi olması
  + İkili etki alanına sahip olması örneğin: ```örnek.com```
  + Üst düzey domain *(TLD)* mutlaka ```.com``` ya da ```.net``` içeriyor olması beklenmektedir.

- ```password```:
  + Belirtilen regex desenini karşılaması
  + String ve alfabetik karakterleri içeriyor olması beklenmektedir.

***Not:*** Kullanıcının boş geçmesini istemediğimiz alanlara ```require()``` eklemeliyiz.

<br/>

Ödev içeriğinde joi validasyonu kullanarak;
  + şifre: en az 6 karakter, en fazla ise 16 karakter
  + email formatı: ```name@surname.com```  

  şeklinde tanımlanmıştır.  
  </br>

> Canlı olarak test edebilmek için,  
```
https://patika-a101bc-g12-api.mehmetalicakir.repl.co/api/user/register
```
>adresine aşağıdaki standartı kullanarak POST isteği atabilirsiniz.  
```
{
    "email": "name@surname.com",
    "password": "password"
}
```  
![token-verildi](/img/token_register.png)  

***NOT:*** Token girişi yapılmadığı sürece diğer istekler çalışmamaktadır.  

> Verilen TOKEN'ı Postman uygulaması üzerinden ```Authorization>Bearer Token``` kısmına ekleyebilirsiniz.  

![token-girildi](/img/bearerToken_register.png)  

## Error Handler Entegrasyonu  

Error Handling, senkron ve asenkron olarak meydana gelen hataların **Express** tarafından nasıl yakalandığı ve işlendiği ile alakalıdır. ExpressJS varsayılan olarak bir hata işleyiciyle gelir. Senkron kodda oluşan hataları yakalamak için ek bir şey yapılmasına gerek yoktur. Fakat asenkron kodlarda dönebilecek hataları Express'in yakalayıp işlemesi için ```next()``` fonksiyonuna verilmesi gerekir.

### E-mail Hatası   
> İstenen e-mail standartlarında giriş yapılmadığında aşağıdaki hata ile karşılaşılmaktadır.  

![email-yanlış-girildi](/img/email-error_register.png)

### Parola Hatası  
> İstenen parola standartı 6 karakter ile 16 karakter arasında olmalıdır. 

![password-yanlış-girildi](/img/password-error_register.png)

</br></br>

## API Kullanımı  
## Trendyol  
API kullanımı için [Trendyol dökümantasyonu](https://developers.trendyol.com/tr) kullanılmıştır.
> ### Tüm markaları getir

```
  GET /api/platforms/trendyol/getAllBrands
```

**Kopyalanabilir Postman Örnek Get Sorgusu** 
```
  https://patika-a101bc-g12-api.mehmetalicakir.repl.co/api/platforms/trendyol/getAllBrands
```


> ### Markayı getir

```
  GET /api/platforms/trendyol/getBrand/${Marka Adı}
```

**Kopyalanabilir Postman Örnek Get Sorgusu** 
```
https://patika-a101bc-g12-api.mehmetalicakir.repl.co/api/platforms/trendyol/getBrand/TRENDYOLMİLLA
```


| Parametre | Tip     | Açıklama                       |
| :-------- | :------- | :-------------------------------- |
| `name`      | `string` | **Gerekli**. İlgili markanın ismi |

> ### Tüm kategorileri getir

```
  GET /api/platforms/trendyol/getAllCategories
```
**Kopyalanabilir Postman Örnek Get Sorgusu** 
```
https://patika-a101bc-g12-api.mehmetalicakir.repl.co/api/platforms/trendyol/getAllCategories
```


> ### Kategoriyi getir

```
  GET /api/platforms/trendyol/getCategory/${id}
```

**Kopyalanabilir Postman Örnek Get Sorgusu** 
```
  https://patika-a101bc-g12-api.mehmetalicakir.repl.co/api/platforms/trendyol/getCategory/411
```

| Parametre | Tip     | Açıklama                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `number` | **Gerekli**. İlgili kategorinin idsi |


</br></br>


## Ekstra Eklenen Platformlar

Ödev isterisinde bulunmasa da kalan vakitten dolayı ekip olarak pratik yapmak amacıyla *ek platformlar* bulunarak benzer **"GET"** işlemleri de ödeve eklenmiştir. Bu kısımlar ödev zorunluluğunu kapsamamaktadır.
## Github  
API kullanımı için [GitHub dökümantasyonu](https://api.github.com/) kullanılmıştır.
> ### Kullancı bilgilerini getir

```
  GET /api/platforms/github/getUser/${username}
```

**Kopyalanabilir Postman Örnek Get Sorgusu** 
```
  https://patika-a101bc-g12-api.mehmetalicakir.repl.co/api/platforms/github/getUser/mehmetalicakir
```


| Parametre | Tip     | Açıklama                       |
| :-------- | :------- | :-------------------------------- |
| `username`      | `string` | **Gerekli**. İlgili kullanıcı adı |

> ### Kullancı repolarını getir

```
  GET /api/platforms/github/getRepos/${username}
```

**Kopyalanabilir Postman Örnek Get Sorgusu** 
```
  https://patika-a101bc-g12-api.mehmetalicakir.repl.co/api/platforms/github/getRepos/berceou
```


| Parametre | Tip     | Açıklama                       |
| :-------- | :------- | :-------------------------------- |
| `username`      | `string` | **Gerekli**. İlgili kullanıcı adı |

> ### Kullancı takipçilerini getir

```
  GET /api/platforms/github/getFollowers/${username}
```

**Kopyalanabilir Postman Örnek Get Sorgusu** 
```
  https://patika-a101bc-g12-api.mehmetalicakir.repl.co/api/platforms/github/getFollowers/mehmetalicakir
```


| Parametre | Tip     | Açıklama                       |
| :-------- | :------- | :-------------------------------- |
| `username`      | `string` | **Gerekli**. İlgili kullanıcı adı |

> ### Kullancının takip ettiklerini getir

```
  GET /api/platforms/github/getFollowing/${username}
```

**Kopyalanabilir Postman Örnek Get Sorgusu** 
```
  https://patika-a101bc-g12-api.mehmetalicakir.repl.co/api/platforms/github/getFollowing/berceou
```


| Parametre | Tip     | Açıklama                       |
| :-------- | :------- | :-------------------------------- |
| `username`      | `string` | **Gerekli**. İlgili kullanıcı adı |

> ### Organizasyon bilgileri getir

```
  GET /api/platforms/github/getOrg/${organizationName}
```

**Kopyalanabilir Postman Örnek Get Sorgusu** 
```
  https://patika-a101bc-g12-api.mehmetalicakir.repl.co/api/platforms/github/getOrg/A101-Node-js-TypeScript-Bootcamp
```

| Parametre | Tip     | Açıklama                       |
| :-------- | :------- | :-------------------------------- |
| `organizationName`      | `string` | **Gerekli**. İlgili kullanıcı adı |

> ### Organizasyonun repolarını getir

```
  GET /api/platforms/github/getOrgRepos/${organizationName}
```

**Kopyalanabilir Postman Örnek Get Sorgusu** 
```
  https://patika-a101bc-g12-api.mehmetalicakir.repl.co/api/platforms/github/getOrgRepos/A101-Node-js-TypeScript-Bootcamp
```


| Parametre | Tip     | Açıklama                       |
| :-------- | :------- | :-------------------------------- |
| `organizationName`      | `string` | **Gerekli**. İlgili kullanıcı adı |

## OpenSea 
API kullanımı için [OpenSea dökümantasyonu](https://docs.opensea.io/reference/api-overview) kullanılmıştır.
> ### Tüm koleksiyonları getir

```
  GET /api/platforms/opensea/getAllCollections
```

**Kopyalanabilir Postman Örnek Get Sorgusu** 
```
  https://patika-a101bc-g12-api.mehmetalicakir.repl.co/api/platforms/opensea/getAllCollections
```
> ### Koleksiyon getir

```
  GET /api/platforms/opensea/getSingleCollection/${collectionName}
```

**Kopyalanabilir Postman Örnek Get Sorgusu** 
```
  https://patika-a101bc-g12-api.mehmetalicakir.repl.co/api/platforms/opensea/getSingleCollection/doodles-official
```

| Parametre | Tip     | Açıklama                       |
| :-------- | :------- | :-------------------------------- |
| `collectionName`      | `string` | **Gerekli**. İlgili koleksiyon adı |


## News API  
API kullanımı için [News dökümantasyonu](https://documenter.getpostman.com/view/3479169/Szf7zncp?version=latest#236e4205-de53-41e0-bfc2-f17d396f9741) kullanılmıştır.
> ### Haber kaynaklarını getir

```
  GET /api/platforms/news/getSources
```

**Kopyalanabilir Postman Örnek Get Sorgusu** 
```
  https://patika-a101bc-g12-api.mehmetalicakir.repl.co/api/platforms/news/getSources
```

> ### Haber kaynaklarının tüm haberlerini getir

> ### Kullanılabilir Haber Kaynakları:
> * bbc-news
> * cnn
> * fox-news
> * google-news



```
  GET /api/platforms/news/getNewsBySource/${source}
```

**Kopyalanabilir Postman Örnek Get Sorgusu** 
```
  https://patika-a101bc-g12-api.mehmetalicakir.repl.co/api/platforms/news/getNewsBySource/cnn
```


| Parametre | Tip     | Açıklama                       |
| :-------- | :------- | :-------------------------------- |
| `source`      | `string` | **Gerekli**. Haber kaynağının id'si |



> ### Amerika haberlerini kategori bazlı getir

> ### Kullanılabilir Kategoriler:
> * business
> * entertainment
> * general
> * health
> * science
> * sports
> * technology


```
  GET /api/platforms/news/getNewsFromUSA/${category}
```

**Kopyalanabilir Postman Örnek Get Sorgusu** 
```
  https://patika-a101bc-g12-api.mehmetalicakir.repl.co/api/platforms/news/getNewsFromUSA/business
```


| Parametre | Tip     | Açıklama                       |
| :-------- | :------- | :-------------------------------- |
| `category`      | `string` | **Gerekli**. Haber kategorisinin adı |

> ### Büyük Britanya haberlerini kategori bazlı getir

> ### Kullanılabilir Kategoriler:
> * business
> * entertainment
> * general
> * health
> * science
> * sports
> * technology


```
  GET /api/platforms/news/getNewsFromGB/${category}
```

**Kopyalanabilir Postman Örnek Get Sorgusu** 
```
  https://patika-a101bc-g12-api.mehmetalicakir.repl.co/api/platforms/news/getNewsFromGB/entertainment
```


| Parametre | Tip     | Açıklama                       |
| :-------- | :------- | :-------------------------------- |
| `category`      | `string` | **Gerekli**. Haber kategorisinin adı |

> ### Avustralya haberlerini kategori bazlı getir

> ### Kullanılabilir Kategoriler:
> * business
> * entertainment
> * general
> * health
> * science
> * sports
> * technology


```
  GET /api/platforms/news/getNewsFromAustralia/${category}
```

**Kopyalanabilir Postman Örnek Get Sorgusu** 
```
  https://patika-a101bc-g12-api.mehmetalicakir.repl.co/api/platforms/news/getNewsFromAustralia/general
```


| Parametre | Tip     | Açıklama                       |
| :-------- | :------- | :-------------------------------- |
| `category`      | `string` | **Gerekli**. Haber kategorisinin adı |

> ### Rusya haberlerini kategori bazlı getir

> ### Kullanılabilir Kategoriler:
> * business
> * entertainment
> * general
> * health
> * science
> * sports
> * technology


```
  GET /api/platforms/news/getNewsFromRussia/${category}
```

**Kopyalanabilir Postman Örnek Get Sorgusu** 
```
  https://patika-a101bc-g12-api.mehmetalicakir.repl.co/api/platforms/news/getNewsFromRussia/health
```


| Parametre | Tip     | Açıklama                       |
| :-------- | :------- | :-------------------------------- |
| `category`      | `string` | **Gerekli**. Haber kategorisinin adı |

> ### Hindistan haberlerini kategori bazlı getir

> ### Kullanılabilir Kategoriler:
> * business
> * entertainment
> * general
> * health
> * science
> * sports
> * technology


```
  GET /api/platforms/news/getNewsFromIndia/${category}
```

**Kopyalanabilir Postman Örnek Get Sorgusu** 
```
  https://patika-a101bc-g12-api.mehmetalicakir.repl.co/api/platforms/news/getNewsFromIndia/science
```


| Parametre | Tip     | Açıklama                       |
| :-------- | :------- | :-------------------------------- |
| `category`      | `string` | **Gerekli**. Haber kategorisinin adı |

> ### Fransa haberlerini kategori bazlı getir

> ### Kullanılabilir Kategoriler:
> * business
> * entertainment
> * general
> * health
> * science
> * sports
> * technology


```
  GET /api/platforms/news/getNewsFromFrance/${category}
```

**Kopyalanabilir Postman Örnek Get Sorgusu** 
```
  https://patika-a101bc-g12-api.mehmetalicakir.repl.co/api/platforms/news/getNewsFromFrance/technology
```


| Parametre | Tip     | Açıklama                       |
| :-------- | :------- | :-------------------------------- |
| `category`      | `string` | **Gerekli**. Haber kategorisinin adı |



## Kaynaklar  
* [NPM/jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)  
* [NPM/express-jwt](https://www.npmjs.com/package/express-jwt)
* [Joi.dev](https://joi.dev/api/?v=17.5.0)  
* [JWT Standartı](https://devnot.com/2017/json-web-token-jwt-standardi/)
* [Joi for Node API Schema Validation](https://www.digitalocean.com/community/tutorials/how-to-use-joi-for-node-api-schema-validation)  
* [Error Handling](https://expressjs.com/tr/guide/error-handling.html) 
* [Trendyol API](https://developers.trendyol.com/tr) 
* [GitHub API](https://api.github.com/) 
* [OpenSea API](https://docs.opensea.io/reference/api-overview)
* [News API](https://documenter.getpostman.com/view/3479169/Szf7zncp?version=latest#236e4205-de53-41e0-bfc2-f17d396f9741)


