export const policyData = {
    lastUpdated: new Date().toLocaleDateString('pt-BR', { year: 'numeric', month: 'long', day: 'numeric' }),
    companyName: "Bugtech", // Placeholder
    contactEmail: "bugtech3d@gmail.com", // Placeholder
    apps: [
        "Todos os Aplicativos Android"
    ],
    introduction: "Nós levamos sua privacidade a sério. Esta Política de Privacidade descreve como coletamos, usamos e compartilhamos suas informações quando você usa nossos aplicativos móveis disponíveis no Google Play Store. Estamos comprometidos em garantir que seus dados pessoais sejam protegidos e usados de acordo com as diretrizes do Google Play e as leis de proteção de dados aplicáveis.",
    sections: [
        {
            id: "collection",
            title: "Coleta e Uso de Dados",
            icon: "Database",
            content: `Podemos coletar e usar os seguintes tipos de informações para fornecer e melhorar nossos serviços:

**1. Informações Fornecidas pelo Usuário:**
*   **Dados da Conta:** Nome, e-mail e outras informações de perfil, caso você crie uma conta.
*   **Conteúdo do Usuário:** Fotos, vídeos ou textos que você envia ou cria no aplicativo.
*   **Comunicações:** Se você entrar em contato conosco, poderemos manter um registro dessa comunicação.

**2. Informações Coletadas Automaticamente:**
*   **Dados do Dispositivo:** Modelo do dispositivo, versão do sistema operacional, identificadores únicos (como Android ID ou Advertising ID) e dados de rede móvel.
*   **Dados de Uso:** Informações sobre como você interage com o aplicativo, recursos usados e tempo gasto.
*   **Localização:** Podemos coletar sua localização aproximada ou precisa, dependendo das permissões concedidas, para fornecer recursos baseados em localização.

**3. Permissões do Android:**
Nossos aplicativos podem solicitar acesso a recursos específicos do dispositivo (Câmera, Microfone, Armazenamento, Contatos). Esse acesso é utilizado estritamente para as funcionalidades do aplicativo e somente com o seu consentimento explícito através do sistema de permissões do Android.`
        },
        {
            id: "sharing",
            title: "Compartilhamento de Dados",
            icon: "Share2",
            content: `Não vendemos suas informações pessoais. Podemos compartilhar seus dados apenas nas seguintes circunstâncias:

*   **Provedores de Serviço:** Com terceiros que nos ajudam a operar o aplicativo (hospedagem, análise de dados, atendimento ao cliente), sob obrigações de confidencialidade.
*   **Requisitos Legais:** Quando exigido por lei ou para proteger nossos direitos, segurança ou propriedade.
*   **Serviços de Terceiros e SDKs:** Nossos aplicativos podem usar serviços de terceiros (como Google AdMob, Google Analytics, Firebase) que podem coletar dados para anúncios personalizados e análises. Recomendamos revisar as políticas de privacidade desses serviços.`
        },
        {
            id: "security",
            title: "Segurança dos Dados",
            icon: "ShieldCheck",
            content: "Implementamos medidas de segurança técnicas e organizacionais adequadas para proteger seus dados contra acesso não autorizado, alteração, divulgação ou destruição. Utilizamos criptografia (HTTPS/TLS) na transmissão de dados e armazenamos informações em servidores seguros."
        },
        {
            id: "retention",
            title: "Retenção e Exclusão",
            icon: "Clock",
            content: "Retemos seus dados pessoais apenas pelo tempo necessário para cumprir as finalidades descritas nesta política. Você tem o direito de solicitar a exclusão de seus dados pessoais entrando em contato conosco. Se o aplicativo permitir a criação de contas, oferecemos uma opção para excluir sua conta e dados associados diretamente no aplicativo ou através de nosso site."
        },
        {
            id: "children",
            title: "Privacidade Infantil",
            icon: "Baby",
            content: "Nossos aplicativos não são direcionados a crianças menores de 13 anos (ou idade aplicável em sua região) e não coletamos intencionalmente informações pessoais de crianças. Se descobrirmos que coletamos dados de uma criança sem o consentimento dos pais, tomaremos medidas para excluir essas informações imediatamente."
        },
        {
            id: "changes",
            title: "Alterações nesta Política",
            icon: "RefreshCw",
            content: "Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos você sobre quaisquer alterações publicando a nova política nesta página. Recomendamos que você revise esta página regularmente para se manter informado."
        },
        {
            id: "contact",
            title: "Entre em Contato",
            icon: "Mail",
            content: "Se você tiver dúvidas ou preocupações sobre esta Política de Privacidade ou sobre nossas práticas de dados, entre em contato conosco:"
        }
    ]
};
