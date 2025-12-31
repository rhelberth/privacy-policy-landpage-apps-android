# Página de Política de Privacidade

Esta é uma landing page moderna e responsiva para hospedar as políticas de privacidade dos seus aplicativos Android, pronta para deploy na Vercel.

## 🚀 Como Iniciar

1.  **Instalar dependências:**
    ```bash
    npm install
    ```

2.  **Rodar localmente:**
    ```bash
    npm run dev
    ```
    Acesse `http://localhost:5173`.

## 📝 Personalização

Todo o conteúdo da política de privacidade está centralizado no arquivo:
`src/policyData.js`

Você deve editar este arquivo para alterar:
*   Nome da Empresa (`companyName`)
*   Email de Contato (`contactEmail`)
*   Texto das seções (Coleta, Compartilhamento, etc.)
*   Adicionar ou remover seções conforme necessário.

**Importante:** Certifique-se de revisar o texto para garantir que ele reflete exatamente as práticas de dados dos seus aplicativos, conforme exigido pelo Google Play.

## 🌐 Deploy na Vercel

1.  Crie um repositório no GitHub/GitLab/Bitbucket e envie este código.
2.  Acesse [Vercel](https://vercel.com) e faça login.
3.  Clique em "Add New..." -> "Project".
4.  Selecione o repositório que você criou.
5.  A Vercel detectará automaticamente que é um projeto Vite.
6.  Clique em "Deploy".

Seu site estará no ar em segundos!
