export const languages = { es: 'ES', en: 'EN' } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'es';

type Dict = Record<string, string>;

export const ui: Record<Lang, Dict> = {
  es: {
    'nav.home': '← Inicio',
    'nav.blog': '← Blog',

    'home.tagline': 'Desarrollador de software',
    'home.intro': 'Bienvenido a mi página personal. Aquí iré recopilando mis proyectos, ideas y notas.',
    'card.blog.title': 'Blog',
    'card.blog.desc': 'Artículos, ideas y notas sobre lo que voy aprendiendo.',
    'card.skills.title': 'Habilidades',
    'card.skills.desc': 'Tecnologías y herramientas con las que trabajo.',
    'card.links.title': 'Enlaces',
    'card.links.desc': 'Mis perfiles y enlaces de interés.',
    'card.contact.title': 'Contacto',
    'card.contact.desc': '¿Quieres dejarme un comentario? Rellena el formulario.',

    'blog.title': 'Blog',
    'blog.intro': 'Artículos, ideas y notas sobre lo que voy aprendiendo.',
    'blog.empty': 'Todavía no hay artículos publicados.',

    'skills.title': 'Skills',
    'skills.intro': 'Tecnologías y herramientas con las que trabajo.',
    'skills.cat.languages': 'Lenguajes',
    'skills.cat.frontend': 'Frontend',
    'skills.cat.backend': 'Backend',
    'skills.cat.tools': 'Herramientas',
    'skills.cat.others': 'Otros',

    'links.title': 'Links',
    'links.intro': 'Mis perfiles y enlaces de interés.',
    'links.x.desc': 'Mis publicaciones y novedades.',
    'links.github.desc': 'Mis repositorios y proyectos.',
    'links.anilist.desc': 'Mi perfil de Anilist.',
    'links.steam.desc': 'Mi perfil de Steam.',

    'contact.title': 'Contact',
    'contact.intro': '¿Quieres dejarme un comentario? Rellena el formulario.',
    'contact.name': 'Nombre',
    'contact.name.ph': 'Tu nombre',
    'contact.email': 'Email',
    'contact.email.ph': 'tucorreo@ejemplo.com',
    'contact.message': 'Mensaje',
    'contact.message.ph': 'Cuéntame en qué puedo ayudarte…',
    'contact.send': 'Enviar',
    'contact.sending': 'Enviando…',
    'contact.ok': '¡Mensaje enviado! Gracias por escribir.',
    'contact.fail': 'No se pudo enviar. Inténtalo de nuevo, asegurate de que el captcha esté resuelto.',
    'contact.neterror': 'Error de conexión. Inténtalo de nuevo.',

    'footer.lang': 'Idioma',
    'footer.made': 'Hecho con Astro. Con la ayuda de la IA.',
  },
  en: {
    'nav.home': '← Home',
    'nav.blog': '← Blog',

    'home.tagline': 'Software developer',
    'home.intro': 'Welcome to my personal page. Here I gather my projects, ideas and notes.',
    'card.blog.title': 'Blog',
    'card.blog.desc': 'Articles, ideas and notes about what I learn.',
    'card.skills.title': 'Skills',
    'card.skills.desc': 'Technologies and tools I work with.',
    'card.links.title': 'Links',
    'card.links.desc': 'My profiles and useful links.',
    'card.contact.title': 'Contact',
    'card.contact.desc': 'Want to talk? Get in touch with me.',

    'blog.title': 'Blog',
    'blog.intro': 'Articles, ideas and notes about what I learn. Not available in English yet.',
    'blog.empty': 'No articles published yet.',

    'skills.title': 'Skills',
    'skills.intro': 'Technologies and tools I work with.',
    'skills.cat.languages': 'Languages',
    'skills.cat.frontend': 'Frontend',
    'skills.cat.backend': 'Backend',
    'skills.cat.tools': 'Tools',
    'skills.cat.others': 'Others',

    'links.title': 'Links',
    'links.intro': 'My profiles and useful links.',
    'links.x.desc': 'My posts and updates.',
    'links.github.desc': 'My repositories and projects.',
    'links.anilist.desc': 'My Anilist profile.',
    'links.steam.desc': 'My Steam profile.',

    'contact.title': 'Contact',
    'contact.intro': "Want to talk? Fill in the form.",
    'contact.name': 'Name',
    'contact.name.ph': 'Your name',
    'contact.email': 'Email',
    'contact.email.ph': 'youremail@example.com',
    'contact.message': 'Message',
    'contact.message.ph': 'Tell me how I can help…',
    'contact.send': 'Send',
    'contact.sending': 'Sending…',
    'contact.ok': 'Message sent! Thanks for writing.',
    'contact.fail': 'Could not send. Please try again. Make sure the captcha is solved.',
    'contact.neterror': 'Connection error. Please try again.',

    'footer.lang': 'Language',
    'footer.made': 'Made with Astro. With the aid of AI.',
  },
};
