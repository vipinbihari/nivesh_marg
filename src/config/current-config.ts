/**
 * Hindi Blog Configuration (GYANSO)
 * ---------------------------------
 * इस फ़ाइल में हिन्दी ब्लॉग (GYANSO) के लिए सभी कॉन्फ़िगरेशन वैल्यूज़ हैं।
 * स्ट्रक्चर बिल्कुल `current-config.ts` जैसा है लेकिन सारी टेक्स्ट सामग्री सरल हिन्दी में है।
 */

import type { BlogConfig } from './blog-template';
import { THEME_PRESETS } from './blog-template';

// वर्तमान सक्रिय कॉन्फ़िगरेशन
const siteName = 'ज्ञान सो';
const siteUrl = `https://gyanso.com`;

export const BLOG_CONFIG: BlogConfig = {
  // साइट पहचान
  site: {
    name: siteName,
    tagline: 'Investment Education',
    description: 'भारतीय और global stock market पर आसान भाषा में विशेषज्ञ विश्लेषण व practical पाठ।',
    url: siteUrl,
    author: 'Neelam',
    email: `contact@gyanso.com`,
    language: 'hi',
    locale: 'hi-IN',
  },

  // ब्रांडिंग
  branding: {
    logo: {
      light: '/images/blog/logo_neelam.png',
      dark: '/images/blog/logo_neelam.png',
      alt: `${siteName} लोगो`,
      width: 180,
      height: 40,
    },
    favicon: '/images/blog/logo_neelam.png',
    ogImage: '/images/blog/logo_neelam.png',
    appleTouchIcon: '/images/apple-touch-icon.png',
    placeholderImageService: 'https://placehold.co',
  },

  // थीम कॉन्फ़िगरेशन
  theme: {
    colors: {
      primary: THEME_PRESETS.green.primary,
      secondary: THEME_PRESETS.green.secondary,
    },
    typography: {
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'sans-serif'],
        serif: ['Georgia', 'Cambria', 'Times New Roman', 'serif'],
        mono: ['Monaco', 'Menlo', 'Ubuntu Mono', 'monospace'],
      },
      fontSizes: {
        base: '16px',
        headings: {
          h1: '2.5rem',
          h2: '2rem',
          h3: '1.75rem',
          h4: '1.5rem',
        },
      },
    },
    spacing: {
      container: '1280px',
      section: '4rem',
    },
    darkMode: true,
  },

  // लेआउट
  layout: {
    postPerPage: 12,
    featuredPostsCount: 10,
    relatedPostsCount: 3,
    latestPostsOnHomepage: 10,
    breadcrumbSeparator: '›',
    heroConfig: {
      title: `${siteName} में आपका स्वागत है`,
      subtitle: 'खोजें उपयोगी लेख, ट्यूटोरियल और संसाधन। नवीनतम trends और expert opinions पढ़ें।',
      ctaButton1: { text: 'लेख खोजें', url: '/posts/page/1' },
      ctaButton2: { text: 'हमारे बारे में', url: '/about' },
      heroBackgroundImage: {
        src: '/images/blog/blog-home-image-neelam.png',
        alt: 'हीरो बैकग्राउंड इमेज',
        width: 1280,
        height: 640,
      },
    },
  },

  // नेविगेशन
  navigation: {
    header: [
      { label: 'Home', href: '/' },
      { label: 'मार्केट न्यूज', href: '/categories/market-news/page/1' },
      { label: 'तकनीकी विश्लेषण', href: '/categories/technical-analysis/page/1' },
      { label: 'मौलिक विश्लेषण', href: '/categories/fundamental-analysis/page/1' },
    ],
    footer: [
      {
        title: 'Categories',
        links: [
          { label: 'तकनीकी विश्लेषण', href: '/categories/technical-analysis/page/1' },
          { label: 'मौलिक विश्लेषण', href: '/categories/fundamental-analysis/page/1' },
        ],
      },
      {
        title: 'संसाधन',
        links: [
          { label: 'हमारे बारे में', href: '/about' },
          { label: 'संपर्क', href: '/contact' },
          { label: 'साइटमैप', href: '/sitemap.xml' },
        ],
      },
      {
        title: 'कानूनी',
        links: [
          { label: 'गोपनीयता नीति', href: '/privacy' },
          { label: 'सेवा की शर्तें', href: '/terms' },
          { label: 'अस्वीकरण', href: '/disclaimer' },
        ],
      },
    ],
  },

  // फुटर
  footer: {
    copyright: `2025 ${siteName}. सभी अधिकार सुरक्षित।`,
  },

  // सोशल मीडिया
  social: [
   // { platform: 'twitter', url: `https://twitter.com/gyanso`, label: 'ट्विटर पर फॉलो करें' },
   // { platform: 'linkedin', url: `https://linkedin.com/company/gyanso`, label: 'लिंक्डइन पर जुड़ें' },
   // { platform: 'facebook', url: `https://facebook.com/gyanso`, label: 'फेसबुक पर लाइक करें' },
    { platform: 'youtube', url: `https://youtube.com/@gyanso`, label: 'यूट्यूब पर सब्सक्राइब करें' },
  ],

  // SEO
  seo: {
    defaultTitle: siteName,
    titleTemplate: `%s | ${siteName}`,
    robotsDirectives: ['index,follow'],
    twitterHandle: '@gyanso',
  },

  // About पेज
  aboutPage: {
    title: `${siteName} के बारे में`,
    description: `${siteName} – आपका Stock Market ज्ञान स्रोत।`,
    hero: {
      headline: "Stock Market समझें, <span class='text-primary-600 dark:text-primary-400'>खुद को सशक्त बनाएं</span>",
      subheadline: `${siteName} आपको सरल भाषा में Stock Market की गहराई समझाता है ताकि आप आत्मविश्वास से निवेश कर सकें।`,
      ctaButton: { text: 'हमारे लेख पढ़ें', href: '/posts', style: 'primary' },
    },
    mission: {
      title: 'हमारा लक्ष्य',
      text: 'हर स्तर के निवेशकों को स्पष्ट अंतर्दृष्टि और वित्तीय शिक्षा देना.',
      imageUrl: '/images/blog/mission_blog_neelam.png',
      imageAlt: `${siteName} का मिशन`,
    },
    whoWeAre: {
      title: 'हम कौन हैं',
      content: `2024 में शुरू हुआ ${siteName} मार्केट विशेषज्ञों और शिक्षकों की टीम है जो सरल हिन्दी में गुणवत्तापूर्ण सामग्री देती है।`,
    },
    whatWeOffer: {
      title: 'हम क्या देते हैं',
      items: [
        { title: 'तकनीकी विश्लेषण', description: 'चार्ट पैटर्न, संकेतक, और ट्रेडिंग रणनीतियाँ।', icon: '📈' },
        { title: 'मौलिक विश्लेषण', description: 'कंपनी मूल्यांकन, वित्तीय मेट्रिक्स।', icon: '📊' },
        { title: 'मार्केट न्यूज', description: 'नवीनतम मार्केट ट्रेंड और अपडेट।', icon: '📰' },
        { title: 'शिक्षा', description: 'सभी स्तरों के लिए गाइड और ट्यूटोरियल।', icon: '🎓' },
      ],
    },
    values: {
      title: 'हमारे मूल्य',
      items: [
        { name: 'सटीकता', description: 'हम विश्वसनीय डेटा पर आधारित जानकारी देते हैं।', icon: '🎯' },
        { name: 'स्पष्टता', description: 'हम जटिल विषयों को सरल भाषा में समझाते हैं।', icon: '💡' },
        { name: 'ईमानदारी', description: 'हमारी सिफारिशें पारदर्शी और निष्पक्ष हैं।', icon: '⚖️' },
        { name: 'शिक्षा', description: 'ज्ञान से निवेशक को सशक्त बनाना हमारा मकसद है।', icon: '📚' },
      ],
    },
    team: {
      title: 'टीम से मिलें',
      members: [
        {
          name: 'नीलम',
          role: 'ऑपरेटर और संपादक',
          imageUrl: '/images/authors/neelam.png',
          bio: 'नीलम सरल शब्दों में मार्केट की जटिल जानकारी साझा करती हैं।',
        },
      ],
    },
    callToAction: {
      headline: 'अपने निवेश के सफ़र को आगे बढ़ाएं',
      subheadline: 'हमारा नवीनतम विश्लेषण पढ़ें या हमसे संपर्क करें।',
      buttons: [
        { text: 'संदेश भेजें', href: '/contact', style: 'secondary' },
        { text: 'ब्लॉग पढ़ें', href: '/posts', style: 'outline' },
      ],
    },
  },

  // लीगल पेज
  legalPages: {
    privacy: {
      title: 'गोपनीयता नीति',
      lastUpdated: '7 जून 2024',
      sections: [
        { title: 'परिचय', content: `${siteName} आपकी गोपनीयता का सम्मान करता है। यह नीति बताती है कि हम आपका डेटा कैसे इकट्ठा व उपयोग करते हैं।` },
        { title: 'हम क्या जानकारी इकट्ठा करते हैं', content: 'जब आप हमारी साइट इस्तेमाल करते हैं तो हम नाम, ईमेल जैसी बुनियादी जानकारी और तकनीकी डेटा एकत्र करते हैं।' },
        { title: 'जानकारी का उपयोग', content: 'हम सेवाएं सुधारने, ईमेल अलर्ट भेजने और बेहतर उपयोगकर्ता अनुभव के लिए आपके डेटा का उपयोग करते हैं।' },
        { title: 'कुकीज़', content: 'हम साइट विश्लेषण और व्यक्तिगतकरण के लिए कुकीज़ का उपयोग करते हैं। आप ब्राउज़र सेटिंग्स से इन्हें नियंत्रित कर सकते हैं।' },
        { title: 'डेटा सुरक्षा', content: 'हम आपका डेटा सुरक्षित रखने के लिए उचित सुरक्षा उपाय अपनाते हैं।' },
        { title: 'आपके अधिकार', content: 'आप अपने व्यक्तिगत डेटा तक पहुंचने, सुधारने या हटाने का अनुरोध कर सकते हैं।' },
        { title: 'नीति में बदलाव', content: 'हम समय-समय पर यह नीति अपडेट कर सकते हैं। नई तारीख के साथ बदलाव पोस्ट किए जाएंगे।' },
        { title: 'संपर्क', content: `गोपनीयता संबंधी प्रश्नों के लिए privacy@gyanso.com पर मेल करें।` },
      ],
    },
    terms: {
      title: 'सेवा की शर्तें (Terms of Service)',
      lastUpdated: '7 जून 2025',
      sections: [
        { title: 'समझौता', content: `${siteName} का उपयोग करके आप इन शर्तों (terms) का पालन करने के लिए सहमत हैं।` },
        { title: 'लाइसेंस', content: 'सामग्री केवल व्यक्तिगत, गैर-व्यावसायिक उपयोग के लिए है। इसका पुनर्प्रकाशन या प्रतिलिपि बनाना निषिद्ध है।' },
        { title: 'निवेश अस्वीकरण', content: 'यह साइट केवल जानकारी के लिए है, कोई वित्तीय सलाह नहीं देती। निवेश से पहले पेशेवर सलाह लें।' },
        { title: 'उपयोगकर्ता सामग्री', content: 'कृपया कोई आपत्तिजनक, गैरकानूनी या तीसरे पक्ष के अधिकारों का उल्लंघन करने वाली सामग्री पोस्ट न करें।' },
        { title: 'लिंक', content: 'हमारी साइट पर बाहरी लिंक हो सकते हैं जिनकी विश्वसनीयता हमारी जिम्मेदारी नहीं है।' },
        { title: 'देयता सीमा', content: `${siteName} किसी भी प्रत्यक्ष या अप्रत्यक्ष हानि के लिए जिम्मेदार नहीं होगा।` },
        { title: 'कानून', content: 'इन शर्तों पर भारत के कानून लागू होंगे।' },
      ],
    },
    disclaimer: {
      title: 'अस्वीकरण',
      lastUpdated: '7 जून 2024',
      sections: [
        { title: 'वित्तीय सूचना अस्वीकरण', content: `${siteName} पर दी गई जानकारी सामान्य ज्ञान के लिए है। निवेश का कोई भी निर्णय अपनी research और सलाहकार से पूछ कर ही करें।` },
        { title: 'जोखिम', content: 'Stock market investment में पूंजी हानि का जोखिम रहता है।' },
        { title: 'अपडेट्स', content: 'हम बिना सूचना के यह अस्वीकरण अपडेट कर सकते हैं।' },
      ],
    },
  },

  // Upstox CTA
  upstoxCTA: {
    enabled: true,
    title: 'Demat Account खोलें',
    logo: { src: '/images/blog/upstox.jpeg', alt: 'Upstox Logo' },
    badge: { text: 'Recommended', showBadge: true },
    description: 'अपना investment सफर शुरू करें – Upstox के साथ Low Brokerage और आसान trading।',
    features: ['₹0 AMC', '₹20 Brokerage', 'Fast Account Opening', 'Advanced Charting'],
    ctaSection: {
      title: 'आज ही Account खोलें',
      buttonText: 'Account खोलें',
      buttonUrl: 'https://upstox.com/open-demat-account/?f=4SACG7',
      disclaimer: 'Disclaimer: मैं Upstox (AP2513041351) के साथ अधिकृत व्यक्ति हूँ।',
    },
  },

  // लेखक
  authors: {
    Neelam: {
      bio: 'Neelam सरल शब्दों में market की जटिल जानकारी साझा करती हैं।',
      avatar: '/images/authors/neelam.png',
      twitter: '@neelam_kandhi',
      linkedin: '@neelam_kandhi',
    },
  },

  // संपर्क पेज
  contactPage: {
    title: 'संपर्क करें',
    description: 'आपके सवाल, सुझाव और फीडबैक का स्वागत है।',
    faqs: [
      { question: `${siteName} से कैसे संपर्क करें?`, answer: 'आप हमें ईमेल या कॉन्टेक्ट फॉर्म से संदेश भेज सकते हैं।' },
      { question: 'रिस्पॉन्स टाइम कितना है?', answer: 'हम 1–2 बिजनेस दिनों में जवाब देने का प्रयास करते हैं।' },
      { question: 'क्या कॉल शेड्यूल कर सकते हैं?', answer: 'हाँ, मैसेज में अपना समय बताएं, हम पुष्टि करेंगे।' },
    ],
    email: { name: 'Email', address: `admin@${siteUrl.replace(/https?:\/\//, '')}` },
    phone: { name: 'Call', number: '+91 8317039040', formattedNumber: '+91 8317039040' },
    address: { name: 'पता', location: 'Kandhi, Kanpur Dehat, Uttar Pradesh, India' },
    businessHours: {
      title: 'काम के घंटे',
      hours: [
        { days: 'सोम–शुक्र', hours: '9:00 AM - 6:00 PM IST' },
        { days: 'शनिवार, रविवार', hours: 'बंद' },
      ],
    },
  },
};

export const CURRENT_CONFIG = BLOG_CONFIG;

export const getCurrentConfig = () => BLOG_CONFIG;

export const getThemeColors = () => ({
  primary: BLOG_CONFIG.theme.colors.primary,
  secondary: BLOG_CONFIG.theme.colors.secondary,
});
