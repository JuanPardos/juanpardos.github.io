export const languages = { es: 'ES', en: 'EN' } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'es';

type Dict = Record<string, string>;

export const ui: Record<Lang, Dict> = {
  es: {
    'nav.home': '← Inicio',
    'nav.blog': '← Blog',

    'home.tagline': 'Desarrollador de software',
    'home.intro': 'Bienvenido a mi página personal',

    'card.blog.title': 'Blog',
    'card.blog.desc': 'Artículos, tutoriales y notas.',
    'card.skills.title': 'Habilidades',
    'card.skills.desc': 'Tecnologías y herramientas.',
    'card.links.title': 'Enlaces',
    'card.links.desc': 'Mis perfiles y enlaces de interés.',
    'card.contact.title': 'Contacto',
    'card.contact.desc': 'Ponte en contacto conmigo.',

    'blog.title': 'Blog',
    'blog.intro': 'Artículos, tutoriales y notas que me parecen interesantes.',
    'blog.empty': 'Todavía no hay artículos publicados.',

    'skills.title': 'Habilidades',
    'skills.intro': 'Tecnologías y herramientas con las que trabajo o estoy aprendiendo.',
    'skills.cat.languages': 'Lenguajes',
    'skills.cat.frontend': 'Frontend',
    'skills.cat.backend': 'Backend',
    'skills.cat.tools': 'Herramientas',
    'skills.cat.others': 'Otros',

    'links.title': 'Enlaces',
    'links.intro': 'Mis perfiles y enlaces de interés.',
    'links.x.desc': 'Mis publicaciones más autistas.',
    'links.github.desc': 'Mis proyectos abandonados.',
    'links.github.pinned': 'Repositorios destacados',
    'links.anilist.desc': 'Mis queridas monas chinas.',
    'links.anilist.watchingList': 'Viendo actualmente',
    'links.steam.desc': 'En ocasiones juego a cosas.',

    'contact.title': 'Contacto',
    'contact.intro': '¿Quieres dejarme un comentario? Rellena el formulario.',
    'contact.name': 'Nombre*',
    'contact.name.ph': 'Tu nombre',
    'contact.email': 'Email*',
    'contact.email.ph': 'tucorreo@ejemplo.com',
    'contact.message': 'Mensaje*',
    'contact.message.ph': 'Cómo puedo ayudarte…',
    'contact.send': 'Enviar',
    'contact.sending': 'Enviando…',
    'contact.ok': '¡Mensaje enviado! Gracias por escribir.',
    'contact.fail': 'No se pudo enviar. Inténtalo de nuevo, asegurate de que el captcha esté resuelto.',
    'contact.neterror': 'Error de conexión. Inténtalo de nuevo.',

    'footer.lang': 'Idioma',
    'footer.made': 'Hecho con Astro. Con la ayuda de IA.',
  },
  en: {
    'nav.home': '← Home',
    'nav.blog': '← Blog',

    'home.tagline': 'Software developer',
    'home.intro': 'Welcome to my personal page',

    'card.blog.title': 'Blog',
    'card.blog.desc': 'Articles, tutorials and notes.',
    'card.skills.title': 'Skills',
    'card.skills.desc': 'Technologies and tools.',
    'card.links.title': 'Links',
    'card.links.desc': 'My profiles and useful links.',
    'card.contact.title': 'Contact',
    'card.contact.desc': 'Get in touch with me.',

    'blog.title': 'Blog',
    'blog.intro': 'Articles, tutorials and notes about what I learn. Not available in English.',
    'blog.empty': 'No articles published yet.',

    'skills.title': 'Skills',
    'skills.intro': 'Technologies and tools I work with or am learning.',
    'skills.cat.languages': 'Languages',
    'skills.cat.frontend': 'Frontend',
    'skills.cat.backend': 'Backend',
    'skills.cat.tools': 'Tools',
    'skills.cat.others': 'Others',

    'links.title': 'Links',
    'links.intro': 'My profiles and useful links.',
    'links.x.desc': 'My most autistic posts.',
    'links.github.desc': 'My abandoned projects.',
    'links.github.pinned': 'Pinned repositories',
    'links.anilist.desc': 'My beloved waifus.',
    'links.anilist.watchingList': 'Watching list',
    'links.steam.desc': 'Sometimes I play games.',

    'contact.title': 'Contact',
    'contact.intro': "Want to talk? Fill in the form.",
    'contact.name': 'Name*',
    'contact.name.ph': 'Your name',
    'contact.email': 'Email*',
    'contact.email.ph': 'youremail@example.com',
    'contact.message': 'Message*',
    'contact.message.ph': 'How can I help you…',
    'contact.send': 'Send',
    'contact.sending': 'Sending…',
    'contact.ok': 'Message sent! Thanks for writing.',
    'contact.fail': 'Could not send. Please try again. Make sure the captcha is solved.',
    'contact.neterror': 'Connection error. Please try again.',

    'footer.lang': 'Language',
    'footer.made': 'Made with Astro. With the aid of AI.',
  },
};
