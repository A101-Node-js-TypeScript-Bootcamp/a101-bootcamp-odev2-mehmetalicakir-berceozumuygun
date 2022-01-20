# A101 NodeJS Bootcamp Ödev-2  
> ## Mehmet Ali Çakır & Berçe Özüm Uyğun  
## Ödev İsterleri 
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

</br></br>


## JWT-Joi Entegrasyonu ve Giriş Süreci  

> Canlı olarak test edebilmek için "sitelinki" 'ne aşağıdaki standartı kullanarak POST isteği atabilirsiniz  
```
{
    "email": "name@surname.com",
    "password": "password"
}
```  
![token-verildi](/img/token_register.png)  

>***NOT:*** Token girişi yapılmadığı sürece diğer istekler çalışmamaktadır.  

> Verilen TOKEN'ı postman üzerinden Authorization>Bearer Token kısmına eklenmelidir.  

![token-girildi](/img/bearerToken_register.png)  

## Error Handler Entegrasyonu  

### E-mail Hatası   
> İstenen e-mail standartlarında giriş yapılmadığında aşağıdaki hata ile karşılaşılmaktadır.  

![email-yanlış-girildi](/img/email-error_register.png)

### Parola Hatası  
> İstenen parola standartı 6 karakter ile 16 karakter arasında olmalıdır. 

![password-yanlış-girildi](/img/password-error_register.png)

</br></br>

## API Kullanımı  
## 1. Trendyol  

> ### Tüm markalar

```http
  GET /api/platforms/trendyol/getAllBrands
```

**Kopyalanabilir Postman Örnek Get Sorgusu** 
```http
  https://patika-a101bc-g12-api.mehmetalicakir.repl.co/api/platforms/trendyol/getAllBrands
```


> ### Markayı getir

```http
  GET /api/platforms/trendyol/getBrand/${Marka Adı}
```

**Kopyalanabilir Postman Örnek Get Sorgusu** 
```http
https://patika-a101bc-g12-api.mehmetalicakir.repl.co/api/platforms/trendyol/getBrand/TRENDYOLMİLLA
```


| Parametre | Tip     | Açıklama                       |
| :-------- | :------- | :-------------------------------- |
| `name`      | `string` | **Gerekli**. İlgili markanın ismi |

> ### Tüm kategorileri getir

```http
  GET /api/platforms/trendyol/getAllCategories
```
**Kopyalanabilir Postman Örnek Get Sorgusu** 
```http
https://patika-a101bc-g12-api.mehmetalicakir.repl.co/api/platforms/trendyol/getAllCategories
```


> ### Kategoriyi getir

```http
  GET /api/platforms/trendyol/getCategory/${id}
```

**Kopyalanabilir Postman Örnek Get Sorgusu** 
```http
  https://patika-a101bc-g12-api.mehmetalicakir.repl.co/api/platforms/trendyol/getCategory/411
```

| Parametre | Tip     | Açıklama                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `number` | **Gerekli**. İlgili kategorinin idsi |


</br></br>


## Ekstra Eklenen Platformlar

## 2. Github  

> ### Kullancı bilgilerini getir

```http
  GET /api/platforms/github/getUser/${username}
```

**Kopyalanabilir Postman Örnek Get Sorgusu** 
```http
  
```


| Parametre | Tip     | Açıklama                       |
| :-------- | :------- | :-------------------------------- |
| `username`      | `string` | **Gerekli**. İlgili kullanıcı adı |

> ### Kullancı repolarını getir

```http
  GET /api/platforms/github/getRepos/${username}
```

**Kopyalanabilir Postman Örnek Get Sorgusu** 
```http
  
```


| Parametre | Tip     | Açıklama                       |
| :-------- | :------- | :-------------------------------- |
| `username`      | `string` | **Gerekli**. İlgili kullanıcı adı |

> ### Kullancı takipçilerini getir

```http
  GET /api/platforms/github/getFollowers/${username}
```

**Kopyalanabilir Postman Örnek Get Sorgusu** 
```http
  
```


| Parametre | Tip     | Açıklama                       |
| :-------- | :------- | :-------------------------------- |
| `username`      | `string` | **Gerekli**. İlgili kullanıcı adı |

> ### Kullancının takip ettiklerini getir

```http
  GET /api/platforms/github/getFollowing/${username}
```

**Kopyalanabilir Postman Örnek Get Sorgusu** 
```http
  
```


| Parametre | Tip     | Açıklama                       |
| :-------- | :------- | :-------------------------------- |
| `username`      | `string` | **Gerekli**. İlgili kullanıcı adı |

> ### Organizasyon bilgileri getir

```http
  GET /api/platforms/github/getOrg/${organizationName}
```

**Kopyalanabilir Postman Örnek Get Sorgusu** 
```http
  
```

| Parametre | Tip     | Açıklama                       |
| :-------- | :------- | :-------------------------------- |
| `organizationName`      | `string` | **Gerekli**. İlgili kullanıcı adı |

> ### Organizasyonun repolarını getir

```http
  GET /api/platforms/github/getOrgRepos/${organizationName}
```

**Kopyalanabilir Postman Örnek Get Sorgusu** 
```http
  
```


| Parametre | Tip     | Açıklama                       |
| :-------- | :------- | :-------------------------------- |
| `organizationName`      | `string` | **Gerekli**. İlgili kullanıcı adı |

## 3. OpenSea 

> ### Tüm koleksiyonları getir

```http
  GET /api/platforms/opensea/getAllCollections
```

**Kopyalanabilir Postman Örnek Get Sorgusu** 
```http
  
```
> ### Koleksiyon getir

```http
  GET /api/platforms/opensea/getSingleCollections/${collectionName}
```

**Kopyalanabilir Postman Örnek Get Sorgusu** 
```http
  
```

| Parametre | Tip     | Açıklama                       |
| :-------- | :------- | :-------------------------------- |
| `collectionName`      | `string` | **Gerekli**. İlgili koleksiyon adı |


## Kaynaklar  
* [NPM-jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)  
* [NPM-express-jwt](https://www.npmjs.com/package/express-jwt)
* [Joi.dev](https://joi.dev/api/?v=17.5.0)  
* [Joi for Node API Schema Validation](https://www.digitalocean.com/community/tutorials/how-to-use-joi-for-node-api-schema-validation)  
* [Trendyol](https://developers.trendyol.com/tr) 
* [GitHub](https://api.github.com/) 
* [OpenSea](https://docs.opensea.io/reference/api-overview)


