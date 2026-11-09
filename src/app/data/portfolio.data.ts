// Tout le contenu du portfolio, en français et en anglais.
// Pour modifier un texte, changez-le ici : les composants le lisent automatiquement.

export type Lang = 'fr' | 'en';
export interface L { fr: string; en: string; }

export const PROFILE = {
  name: 'Youssef Rahali',
  email: 'youssef.rahali.ing@gmail.com',
  phone: '+216 22 221 251',
  phoneHref: 'tel:+21622221251',
  whatsapp: 'https://wa.me/21622221251',
  linkedin: 'https://www.linkedin.com/in/youssef-rahali-14bb42195/',
  github: 'https://github.com/YoussefRahali',
  location: { fr: 'Tunis, Tunisie', en: 'Tunis, Tunisia' } as L,
  photo: 'photo.jpg',
  cv: 'cv.pdf',
};

export interface Repo { label: L; url: string; }
export interface Project {
  id: string;
  file: string;
  name: string;
  status: L;
  tagline: L;
  description: L;
  highlights: L[];
  stack: string[];
  context: L;
  year: string;
  repos: Repo[];
}

const BACK: L = { fr: 'Back-end', en: 'Back-end' };
const FRONT: L = { fr: 'Front-end', en: 'Front-end' };

export const PROJECTS: Project[] = [
  {
    id: 'nextrakt',
    file: 'nextrakt.ts',
    name: 'NEXTRAKT',
    status: { fr: 'PFE', en: 'Final-year project' },
    tagline: {
      fr: 'Plateforme SaaS d’Intelligent Document Processing (IDP) multi-tenant.',
      en: 'Multi-tenant Intelligent Document Processing (IDP) SaaS platform.',
    },
    description: {
      fr: 'NEXTRAKT automatise le traitement des documents financiers : extraction des données par IA, contrôles anti-fraude, validation humaine et intégration dans l’ERP. Architecture microservices de 12 services, sécurisée et déployée sur Kubernetes.',
      en: 'NEXTRAKT automates financial document processing: AI-powered data extraction, fraud checks, human validation and ERP integration. A 12-service microservices architecture, secured and deployed on Kubernetes.',
    },
    highlights: [
      { fr: 'Extraction hybride : Google Gemini API avec repli sur Tesseract OCR, documents stockés dans MinIO.', en: 'Hybrid extraction: Google Gemini API with Tesseract OCR fallback, documents stored in MinIO.' },
      { fr: 'Détection de fraude (cohérence HT/TVA/TTC, IBAN/SIRET, dates, signature) et file de validation Human-in-the-Loop.', en: 'Fraud detection (net/VAT/gross consistency, IBAN/SIRET, dates, signature) and a Human-in-the-Loop review queue.' },
      { fr: 'Architecture événementielle RabbitMQ et notifications temps réel via WebSocket.', en: 'Event-driven architecture with RabbitMQ and real-time WebSocket notifications.' },
      { fr: 'Sécurité multi-tenant : JWT/JWKS, 2FA TOTP, RBAC, HMAC inter-services, chiffrement Jasypt, bcrypt.', en: 'Multi-tenant security: JWT/JWKS, TOTP 2FA, RBAC, inter-service HMAC, Jasypt encryption, bcrypt.' },
      { fr: 'Intégrations : ERP Odoo 17, emails IMAP, Gmail/Drive OAuth, webhooks B2B, abonnements et quotas Stripe.', en: 'Integrations: Odoo 17 ERP, IMAP email ingestion, Gmail/Drive OAuth, B2B webhooks, Stripe subscriptions and quotas.' },
      { fr: 'Docker/Kubernetes, CI/CD Jenkins, qualité SonarQube/JaCoCo/Testcontainers, observabilité Prometheus/Grafana/Zipkin.', en: 'Docker/Kubernetes, Jenkins CI/CD, SonarQube/JaCoCo/Testcontainers quality, Prometheus/Grafana/Zipkin observability.' },
    ],
    stack: ['Java 17', 'Spring Boot 3.2', 'Spring Cloud', 'Angular 19', 'Ionic', 'FastAPI', 'scikit-learn', 'PostgreSQL', 'MinIO', 'RabbitMQ', 'Docker', 'Kubernetes', 'Jenkins'],
    context: { fr: 'Stage PFE · ULMUS TECHNOLOGIE', en: 'Final-year internship · ULMUS TECHNOLOGIE' },
    year: '2026',
    repos: [
      { label: BACK, url: 'https://github.com/YoussefRahali/Ulmus-Back-Microservice' },
      { label: FRONT, url: 'https://github.com/YoussefRahali/Ulmus-Front' },
    ],
  },
  {
    id: 'smartconseil',
    file: 'smartConseil.ts',
    name: 'SmartConseil',
    status: { fr: 'Stage', en: 'Internship' },
    tagline: {
      fr: 'Application web de gestion des conseils académiques.',
      en: 'Web application for managing academic councils.',
    },
    description: {
      fr: 'SmartConseil digitalise l’organisation des conseils académiques d’ESPRIT : gestion des participants, planification des sessions, rapports et supervision par les administrateurs, avec une chaîne CI/CD complète.',
      en: 'SmartConseil digitises ESPRIT’s academic council workflow: participant management, session scheduling, reports and admin supervision, backed by a complete CI/CD pipeline.',
    },
    highlights: [
      { fr: 'Gestion des participants (enseignants, rapporteurs, chef de département), planification des sessions et génération de rapports.', en: 'Participant management (teachers, rapporteurs, head of department), session scheduling and report generation.' },
      { fr: 'Rectification et supervision par les administrateurs ; authentification centralisée via Keycloak.', en: 'Correction and supervision workflow for administrators; centralised authentication with Keycloak.' },
      { fr: 'CI/CD : tests unitaires et d’intégration, analyse statique, build et push Docker, déploiement automatisé.', en: 'CI/CD: unit and integration tests, static analysis, Docker build and push, automated deployment.' },
      { fr: 'Monitoring avec Prometheus et Grafana.', en: 'Monitoring with Prometheus and Grafana.' },
    ],
    stack: ['Java 17', 'Spring Boot 3.2', 'Angular 19', 'MongoDB', 'Keycloak', 'Docker', 'Kubernetes', 'Jenkins', 'SonarQube', 'JaCoCo'],
    context: { fr: 'Stage d’ingénieur · ESPRIT', en: 'Engineering internship · ESPRIT' },
    year: '2025',
    repos: [
      { label: BACK, url: 'https://github.com/YoussefRahali/SmartConseil-Back' },
      { label: FRONT, url: 'https://github.com/YoussefRahali/SmartConseil-Front' },
    ],
  },
  {
    id: 'speedygo',
    file: 'speedyGo.ts',
    name: 'SpeedyGo',
    status: { fr: 'Académique', en: 'Academic' },
    tagline: {
      fr: 'Application web de transport, livraison et covoiturage.',
      en: 'Transport, delivery and carpooling web application.',
    },
    description: {
      fr: 'SpeedyGo réunit transport, livraison et covoiturage dans une seule application, avec paiement en ligne, notifications, recommandations par IA et optimisation des trajets par géolocalisation. Projet réalisé en équipe.',
      en: 'SpeedyGo brings transport, delivery and carpooling together in one app, with online payment, notifications, AI recommendations and geolocation-based route optimisation. Built as a team project.',
    },
    highlights: [
      { fr: 'Paiement en ligne avec Stripe.', en: 'Online payment with Stripe.' },
      { fr: 'Notifications par SMS et email (Twilio, MailerSend).', en: 'SMS and email notifications (Twilio, MailerSend).' },
      { fr: 'Recommandations par IA et optimisation des trajets par géolocalisation.', en: 'AI recommendations and geolocation-based route optimisation.' },
      { fr: 'Authentification et rôles avec Keycloak.', en: 'Authentication and roles with Keycloak.' },
    ],
    stack: ['Java 17', 'Spring Boot 3.2', 'Angular 19', 'MongoDB', 'Keycloak', 'Stripe', 'Twilio'],
    context: { fr: 'Projet académique · ESPRIT', en: 'Academic project · ESPRIT' },
    year: '2025',
    repos: [
      { label: BACK, url: 'https://github.com/ranya200/BackEndspeedygo' },
      { label: FRONT, url: 'https://github.com/ranya200/Frontspeedygo' },
    ],
  },
];

export type SkillCat = 'backend' | 'frontend' | 'archi' | 'data' | 'security' | 'devops' | 'other';
export interface Skill { name: string; cat: SkillCat; }

export const SKILL_CATS: { id: SkillCat | 'all'; label: L }[] = [
  { id: 'all', label: { fr: 'Toutes', en: 'All' } },
  { id: 'backend', label: { fr: 'Backend', en: 'Backend' } },
  { id: 'frontend', label: { fr: 'Frontend / Mobile', en: 'Frontend / Mobile' } },
  { id: 'archi', label: { fr: 'Architecture', en: 'Architecture' } },
  { id: 'data', label: { fr: 'Bases de données', en: 'Databases' } },
  { id: 'security', label: { fr: 'Sécurité', en: 'Security' } },
  { id: 'devops', label: { fr: 'DevOps / Qualité', en: 'DevOps / Quality' } },
  { id: 'other', label: { fr: 'Autres', en: 'Other' } },
];

const s = (cat: SkillCat, ...names: string[]): Skill[] => names.map((name) => ({ name, cat }));

export const SKILLS: Skill[] = [
  ...s('backend', 'Java', 'Spring Boot', 'Spring Security', 'Spring Cloud', 'Python', 'FastAPI', 'PHP / Symfony', '.NET'),
  ...s('frontend', 'Angular', 'TypeScript', 'JavaScript', 'Bootstrap', 'Ionic', 'Capacitor', 'FlutterFlow'),
  ...s('archi', 'Microservices', 'REST API', 'RabbitMQ', 'WebSocket', 'Event-driven'),
  ...s('data', 'PostgreSQL', 'MySQL', 'MongoDB', 'MinIO'),
  ...s('security', 'Keycloak', 'OAuth2', 'JWT', 'RBAC', '2FA'),
  ...s('devops', 'Docker', 'Kubernetes', 'Jenkins', 'GitLab CI', 'Git', 'SonarQube', 'JUnit', 'Mockito', 'Testcontainers', 'Prometheus', 'Grafana'),
  ...s('other', 'Odoo / ERP', 'Power BI', 'C', 'Jira', 'Scrum', 'UML', 'Google Gemini', 'scikit-learn'),
];

export interface Experience {
  file: string;
  title: L;
  company: string;
  location: string;
  period: L;
  type: L;
  summary: L;
  achievements: L[];
  tech: string[];
}

export const EXPERIENCES: Experience[] = [
  {
    file: 'ulmus-pfe.ts',
    title: { fr: 'Stage de fin d’études (PFE)', en: 'Final-year internship' },
    company: 'ULMUS TECHNOLOGIE',
    location: 'Tunis',
    period: { fr: 'Janv. 2026 – Juin 2026', en: 'Jan 2026 – Jun 2026' },
    type: { fr: '6 mois', en: '6 months' },
    summary: {
      fr: 'Conception et développement de NEXTRAKT, plateforme SaaS multi-tenant d’IDP pour l’automatisation du traitement des documents financiers.',
      en: 'Designed and built NEXTRAKT, a multi-tenant IDP SaaS platform automating financial document processing.',
    },
    achievements: [
      { fr: 'Architecture microservices de 12 services, événementielle (RabbitMQ) et temps réel (WebSocket)', en: '12-service event-driven (RabbitMQ) and real-time (WebSocket) microservices architecture' },
      { fr: 'Pipeline d’extraction IA (Gemini + OCR) et détection de fraude', en: 'AI extraction pipeline (Gemini + OCR) and fraud detection' },
      { fr: 'Sécurité multi-tenant : JWT/JWKS, 2FA, RBAC, HMAC', en: 'Multi-tenant security: JWT/JWKS, 2FA, RBAC, HMAC' },
      { fr: 'Déploiement Kubernetes, CI/CD Jenkins et observabilité', en: 'Kubernetes deployment, Jenkins CI/CD and observability' },
    ],
    tech: ['Spring Boot', 'Spring Cloud', 'Angular', 'FastAPI', 'PostgreSQL', 'RabbitMQ', 'Kubernetes'],
  },
  {
    file: 'esprit-stage.ts',
    title: { fr: 'Stage d’ingénieur', en: 'Engineering internship' },
    company: 'ESPRIT',
    location: 'Tunis',
    period: { fr: 'Juil. 2025 – Août 2025', en: 'Jul 2025 – Aug 2025' },
    type: { fr: '2 mois', en: '2 months' },
    summary: {
      fr: 'Développement de SmartConseil, application web de gestion des conseils académiques.',
      en: 'Built SmartConseil, a web application for managing academic councils.',
    },
    achievements: [
      { fr: 'Gestion des participants, planification et rapports', en: 'Participant management, scheduling and reports' },
      { fr: 'Authentification centralisée Keycloak', en: 'Centralised Keycloak authentication' },
      { fr: 'Chaîne CI/CD complète et monitoring Prometheus/Grafana', en: 'Complete CI/CD pipeline and Prometheus/Grafana monitoring' },
    ],
    tech: ['Spring Boot', 'Angular', 'MongoDB', 'Keycloak', 'Docker', 'Jenkins', 'SonarQube'],
  },
  {
    file: 'saphir-immersion.ts',
    title: { fr: 'Stage d’immersion en entreprise', en: 'Company immersion internship' },
    company: 'SAPHIR CONSULT',
    location: 'Tunis',
    period: { fr: 'Juin 2024 – Juil. 2024', en: 'Jun 2024 – Jul 2024' },
    type: { fr: '1 mois', en: '1 month' },
    summary: {
      fr: 'Développement d’une interface permettant aux clients de déposer et suivre leurs réclamations.',
      en: 'Built an interface for customers to submit and track their complaints.',
    },
    achievements: [
      { fr: 'Dépôt et suivi des réclamations clients', en: 'Customer complaint submission and tracking' },
      { fr: 'Authentification via JWT', en: 'JWT authentication' },
      { fr: 'Expérience utilisateur améliorée avec Bootstrap', en: 'Improved user experience with Bootstrap' },
    ],
    tech: ['JWT', 'Bootstrap'],
  },
];

export interface Education { degree: L; school: string; period: string; }
export const EDUCATION: Education[] = [
  { degree: { fr: 'Diplôme d’ingénieur en informatique, spécialité génie logiciel', en: 'Engineering degree in Computer Science, Software Engineering' }, school: 'ESPRIT, Tunis', period: '2023 – 2026' },
  { degree: { fr: 'Cycle préparatoire intégré (MPI)', en: 'Integrated preparatory cycle (MPI)' }, school: 'SUPTECH, Tunis', period: '2021 – 2023' },
];

export interface Certification {
  title: string;
  issuer: string;
  date: L;
  image: string;
  pdf: string;
  verify?: string;
}

export const CERTIFICATIONS: Certification[] = [
  {
    title: 'Building Transformer-Based NLP Applications',
    issuer: 'NVIDIA Deep Learning Institute',
    date: { fr: 'Novembre 2025', en: 'November 2025' },
    image: 'certifications/nvidia-transformer-nlp.jpg',
    pdf: 'certifications/nvidia-transformer-nlp.pdf',
    verify: 'https://learn.nvidia.com/certificates?id=6bZSAKGoRV6zJTCCAVJMoQ',
  },
  {
    title: 'Applications of AI for Anomaly Detection',
    issuer: 'NVIDIA Deep Learning Institute',
    date: { fr: 'Novembre 2025', en: 'November 2025' },
    image: 'certifications/nvidia-anomaly-detection.jpg',
    pdf: 'certifications/nvidia-anomaly-detection.pdf',
  },
  {
    title: 'Hashgraph Developer Course',
    issuer: 'The Hashgraph Association',
    date: { fr: 'Novembre 2025', en: 'November 2025' },
    image: 'certifications/hedera-hashgraph-developer.jpg',
    pdf: 'certifications/hedera-hashgraph-developer.pdf',
  },
  {
    title: 'AWS Academy Graduate – Cloud Foundations',
    issuer: 'AWS Academy',
    date: { fr: 'Novembre 2025 · 20 h', en: 'November 2025 · 20 h' },
    image: 'certifications/aws-cloud-foundations.jpg',
    pdf: 'certifications/aws-cloud-foundations.pdf',
    verify: 'https://www.credly.com/go/HdrGJAio',
  },
  {
    title: 'Fundamentals of Deep Learning',
    issuer: 'NVIDIA Deep Learning Institute',
    date: { fr: 'Mars 2025', en: 'March 2025' },
    image: 'certifications/nvidia-deep-learning.jpg',
    pdf: 'certifications/nvidia-deep-learning.pdf',
    verify: 'https://learn.nvidia.com/certificates?id=7eYjA0k5SxexisgxcjnH_w',
  },
];

export const LANGUAGES: { name: L; level: L }[] = [
  { name: { fr: 'Arabe', en: 'Arabic' }, level: { fr: 'Langue maternelle', en: 'Native' } },
  { name: { fr: 'Français', en: 'French' }, level: { fr: 'B2', en: 'B2' } },
  { name: { fr: 'Anglais', en: 'English' }, level: { fr: 'B2', en: 'B2' } },
];

/** Textes de l'interface. */
export const UI = {
  fr: {
    nav: { home: 'Accueil', projects: 'Projets', skills: 'Compétences', experience: 'Expérience', certifications: 'Certifications', contact: 'Contact', hire: 'Me recruter', menu: 'Ouvrir le menu', close: 'Fermer le menu', theme: 'Changer de thème', lang: 'Choisir la langue' },
    hero: {
      badge: 'Disponible immédiatement',
      hello: 'Bonjour, je suis',
      roleBefore: 'Développeur',
      roles: ['Full-Stack', 'Spring Boot', 'Angular', 'DevOps'],
      intro: 'Ingénieur en génie logiciel (ESPRIT, 2026). Je conçois des applications <strong>microservices</strong> robustes, <strong>sécurisées</strong> et <strong>déployées</strong> de bout en bout, avec de solides bases en IA appliquée.',
      stats: [
        { value: '3', label: 'Stages' },
        { value: '12', label: 'Microservices (PFE)' },
        { value: '5', label: 'Certifications' },
      ],
      cta: 'Me contacter',
      cv: 'Télécharger le CV',
      follow: 'Retrouvez-moi',
      floating: 'Dernier projet',
      floatingValue: 'NEXTRAKT · SaaS IDP',
      available: 'Disponible',
      scroll: 'Défiler',
    },
    projects: { eyebrow: 'Réalisations', title: 'Mes projets', lead: 'Des applications full-stack conçues pendant mes stages et ma formation, de l’architecture au déploiement.', stack: 'tech stack', context: 'contexte', year: 'année', details: 'voir les détails', code: 'Code', highlights: 'Points clés', close: 'Fermer' },
    skills: { eyebrow: 'Expertise technique', title: 'Compétences & technologies', lead: 'Les technologies que j’utilise pour construire des applications complètes, du front-end à l’infrastructure.' },
    experience: { eyebrow: 'Parcours professionnel', title: 'Expérience', lead: 'Mes stages en entreprise et les projets que j’y ai menés.', achievements: 'Réalisations clés', tech: 'Technologies utilisées', education: 'Formation', languages: 'Langues' },
    certifications: { eyebrow: 'Apprentissage continu', title: 'Certifications', lead: 'Formations certifiantes en intelligence artificielle, cloud et blockchain.', view: 'Voir le certificat', verify: 'Vérifier', close: 'Fermer' },
    contact: {
      eyebrow: 'Restons en contact', title: 'Me contacter',
      lead: 'Vous recrutez un développeur full-stack ? Écrivez-moi, je réponds sous 24 heures.',
      email: 'Email', phone: 'Téléphone / WhatsApp', location: 'Localisation',
      form: { name: 'Nom', email: 'Email', company: 'Entreprise (facultatif)', message: 'Message', send: 'Envoyer le message', sending: 'Envoi…', sent: 'Merci, votre message a bien été envoyé. Je vous réponds rapidement.', error: 'L’envoi a échoué. Écrivez-moi directement à l’adresse email ci-contre.' },
    },
    footer: { rights: 'Tous droits réservés.', built: 'Réalisé avec Angular · Hébergé sur Netlify', top: 'Retour en haut' },
  },
  en: {
    nav: { home: 'Home', projects: 'Projects', skills: 'Skills', experience: 'Experience', certifications: 'Certifications', contact: 'Contact', hire: 'Hire me', menu: 'Open menu', close: 'Close menu', theme: 'Toggle theme', lang: 'Choose language' },
    hero: {
      badge: 'Available immediately',
      hello: 'Hi, I’m',
      roleBefore: 'Developer',
      roles: ['Full-Stack', 'Spring Boot', 'Angular', 'DevOps'],
      intro: 'Software engineer (ESPRIT, 2026). I build robust <strong>microservices</strong> applications that are <strong>secure</strong> and <strong>deployed</strong> end to end, with a solid background in applied AI.',
      stats: [
        { value: '3', label: 'Internships' },
        { value: '12', label: 'Microservices (final project)' },
        { value: '5', label: 'Certifications' },
      ],
      cta: 'Get in touch',
      cv: 'Download CV',
      follow: 'Find me on',
      floating: 'Latest project',
      floatingValue: 'NEXTRAKT · IDP SaaS',
      available: 'Available',
      scroll: 'Scroll',
    },
    projects: { eyebrow: 'Featured work', title: 'My projects', lead: 'Full-stack applications built during my internships and studies, from architecture to deployment.', stack: 'tech stack', context: 'context', year: 'year', details: 'view details', code: 'Code', highlights: 'Highlights', close: 'Close' },
    skills: { eyebrow: 'Technical expertise', title: 'Skills & technologies', lead: 'The technologies I use to build complete applications, from front-end to infrastructure.' },
    experience: { eyebrow: 'Professional journey', title: 'Experience', lead: 'My company internships and the projects I delivered there.', achievements: 'Key achievements', tech: 'Technologies used', education: 'Education', languages: 'Languages' },
    certifications: { eyebrow: 'Continuous learning', title: 'Certifications', lead: 'Certified training in artificial intelligence, cloud and blockchain.', view: 'View certificate', verify: 'Verify', close: 'Close' },
    contact: {
      eyebrow: 'Let’s connect', title: 'Get in touch',
      lead: 'Hiring a full-stack developer? Send me a message, I reply within 24 hours.',
      email: 'Email', phone: 'Phone / WhatsApp', location: 'Location',
      form: { name: 'Name', email: 'Email', company: 'Company (optional)', message: 'Message', send: 'Send message', sending: 'Sending…', sent: 'Thank you, your message has been sent. I’ll get back to you soon.', error: 'Sending failed. Please email me directly at the address shown.' },
    },
    footer: { rights: 'All rights reserved.', built: 'Built with Angular · Hosted on Netlify', top: 'Back to top' },
  },
};
