## Steps to publish content into Intagram using the Instagram Graph API

### Graph API endpoints:

Com o token de acesso consigo solicitar as informações da conta do instagram(Id)

```javascript
GET: graph.facebook.com/v20.0/me?fields=id

{
    "Headers": {
        "access_token": "EAAGDsW5PvbYBO2i0Qb3AMqfa7iiK"
    }
}

Result:

{
    "id": "100545125709409"
}
```

Uma vez extraído o id da conta, podemos realizar a requisição do Id da `instagram_business_account`


```javascript
GET: graph.facebook.com/v20.0/100545125709409?fields=instagram_business_account

{
    "Headers": {
        "access_token": "EAAGDsW5PvbYBO2i0Qb3AMqfa7iiK"
    }
}

Result:

{
    "instagram_business_account": {
        "id": "1709951245345845"
    },
    "id": "100545125709409"
}
```

### Publicações de mídia única:

---
Refs:

- https://developers.facebook.com/docs/instagram-platform/instagram-api-with-facebook-login/content-publishing

- https://www.youtube.com/watch?v=7BItnNzfiUc&t=5s

- https://www.youtube.com/watch?v=ra3QAfDb9tA

- https://developers.facebook.com/tools/explorer


---
1 - [Overview](https://developers.facebook.com/docs/instagram-platform/instagram-api-with-facebook-login)

2 - [Permissions](https://developers.facebook.com/docs/permissions#instagram_content_publish)

3 - Todas as solicitações da API devem incluir o token de acesso do Facebook do usuário do app;

4 - Permissões:

- **instagram_content_publish**: Com a permissão instagram_content_publish, seu aplicativo pode criar publicações de foto e vídeo de feed orgânico em nome de um usuário comercial.
- **Allowed Usage**: Gerenciamento do processo de criação de conteúdo orgânico do Instagram (por exemplo, publicar fotos e vídeos no feed principal) em nome de uma empresa.

    