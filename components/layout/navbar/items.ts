import {
  IoCodeSlashOutline,
  IoLogoJavascript,
  IoLogoPython,
  IoLogoNodejs,
  IoBrushOutline,
  IoDocumentTextOutline,
  IoLogoWordpress,
  IoExtensionPuzzleOutline,
  IoBagHandleOutline,
  IoPhonePortraitOutline,
  IoLogoAndroid,
  IoLogoApple,
  IoLogoReact,
  IoLogoGoogle,
  IoLibraryOutline,
  IoCodeWorkingOutline,
  IoConstructOutline,
  IoBugOutline,
  IoColorPaletteOutline,
  IoImageOutline,
  IoEyeOutline,
  IoEaselOutline,
  IoFilmOutline,
  IoHammerOutline,
  IoResizeOutline,
  IoTextOutline,
  IoReorderFourOutline
} from "react-icons/io5"

export const navItems = [
  {
    name: "لیست‌دسته‌بندی‌ها",
    icon: IoReorderFourOutline,
    children: [
      {
        name: "خدمات هوش مصنوعی",
        icon: IoCodeSlashOutline, // آیکون PHP
        description: "مجموع خدمات مورد نیاز در حوزه پردازش تصویر با هوش مصنوعی",
        href: "/php-scripts"
      }
    ]
  },
  {
    name: "اسکریپت‌های وب",
    icon: IoCodeSlashOutline, // آیکون برای اسکریپت‌ها و کدهای وب
    description: "فروش اسکریپت‌های آماده برای وب‌سایت‌ها با زبان‌های مختلف",
    href: "/web-scripts",
    children: [
      {
        name: "اسکریپت‌های PHP",
        icon: IoCodeSlashOutline, // آیکون PHP
        description: "اسکریپت‌های آماده برای توسعه وب‌سایت با زبان PHP",
        href: "/php-scripts"
      },
      {
        name: "اسکریپت‌های JavaScript",
        icon: IoLogoJavascript, // آیکون JavaScript
        description:
          "اسکریپت‌های قدرتمند برای فرانت‌اند و بک‌اند با زبان JavaScript",
        href: "/javascript-scripts"
      },
      {
        name: "اسکریپت‌های Python",
        icon: IoLogoPython, // آیکون Python
        description: "اسکریپت‌های کاربردی برای توسعه وب با زبان Python",
        href: "/python-scripts"
      },
      {
        name: "اسکریپت‌های Node.js",
        icon: IoLogoNodejs, // آیکون Node.js
        description:
          "اسکریپت‌های سریع و مقیاس‌پذیر برای توسعه بک‌اند با Node.js",
        href: "/nodejs-scripts"
      }
    ]
  },
  {
    name: "قالب‌های وب‌سایت",
    icon: IoBrushOutline, // آیکون برای قالب‌ها و طراحی وب‌سایت
    description: "فروش قالب‌های آماده برای وب‌سایت با طراحی‌های متنوع",
    href: "/website-templates",
    children: [
      {
        name: "قالب‌های HTML/CSS",
        icon: IoDocumentTextOutline, // آیکون HTML/CSS
        description: "قالب‌های ساده و ریسپانسیو با استفاده از HTML و CSS",
        href: "/html-css-templates"
      },
      {
        name: "قالب‌های وردپرس",
        icon: IoLogoWordpress, // آیکون وردپرس
        description: "قالب‌های زیبا و سفارشی برای سایت‌های وردپرسی",
        href: "/wordpress-themes"
      },
      {
        name: "قالب‌های جوملا",
        icon: IoExtensionPuzzleOutline, // آیکون جوملا
        description: "قالب‌های حرفه‌ای برای سیستم مدیریت محتوای جوملا",
        href: "/joomla-templates"
      },
      {
        name: "قالب‌های Shopify",
        icon: IoBagHandleOutline, // آیکون Shopify
        description: "قالب‌های تجاری برای فروشگاه‌های آنلاین با Shopify",
        href: "/shopify-themes"
      }
    ]
  },
  {
    name: "موبایل",
    icon: IoPhonePortraitOutline, // آیکون برای موبایل و اپلیکیشن‌ها
    description: "فروش سورس‌کدهای آماده برای توسعه اپلیکیشن‌های موبایل",
    href: "/mobile-apps",
    children: [
      {
        name: "سورس‌کدهای Android",
        icon: IoLogoAndroid, // آیکون Android
        description:
          "سورس‌کدهای اپلیکیشن‌های اندروید با زبان‌های جاوا و کاتلین",
        href: "/android-source-codes"
      },
      {
        name: "سورس‌کدهای iOS",
        icon: IoLogoApple, // آیکون iOS
        description:
          "سورس‌کدهای اپلیکیشن‌های iOS با زبان‌های Swift و Objective-C",
        href: "/ios-source-codes"
      },
      {
        name: "سورس‌کدهای React Native",
        icon: IoLogoReact, // آیکون React Native
        description: "سورس‌کدهای اپلیکیشن‌های چندسکویی با React Native",
        href: "/react-native-source-codes"
      },
      {
        name: "سورس‌کدهای Flutter",
        icon: IoLogoGoogle, // آیکون Flutter
        description: "سورس‌کدهای اپلیکیشن‌های چندسکویی با فلاتر",
        href: "/flutter-source-codes"
      }
    ]
  },
  {
    name: "ابزارها و کتابخانه‌ها",
    icon: IoLibraryOutline, // آیکون برای کتابخانه‌ها و ابزارهای کمکی
    description: "فروش کتابخانه‌ها و ابزارهای کمکی برای توسعه‌دهندگان",
    href: "/libraries-tools",
    children: [
      {
        name: "کتابخانه‌های جاوااسکریپت",
        icon: IoCodeWorkingOutline, // آیکون جاوااسکریپت
        description: "کتابخانه‌ها و فریمورک‌های محبوب جاوااسکریپت",
        href: "/javascript-libraries"
      },
      {
        name: "پلاگین‌های jQuery",
        icon: IoConstructOutline, // آیکون jQuery
        description: "پلاگین‌های آماده برای بهبود تجربه کاربری با jQuery",
        href: "/jquery-plugins"
      },
      {
        name: "ابزارهای تست",
        icon: IoBugOutline, // آیکون ابزارهای تست
        description: "ابزارهای تست خودکار و دیباگینگ برای پروژه‌های نرم‌افزاری",
        href: "/testing-tools"
      },
      {
        name: "کتابخانه‌های UI/UX",
        icon: IoColorPaletteOutline, // آیکون UI/UX
        description: "کتابخانه‌های رابط کاربری برای طراحی زیبا و مدرن",
        href: "/ui-ux-libraries"
      }
    ]
  },
  {
    name: "خدمات پردازش تصویر",
    icon: IoImageOutline, // آیکون برای خدمات پردازش تصویر
    description: "خدمات مختلف پردازش تصویر با استفاده از هوش مصنوعی",
    href: "/image-processing-services",
    children: [
      {
        name: "بهبود کیفیت تصویر",
        icon: IoEyeOutline, // آیکون بهبود کیفیت تصویر
        description: "افزایش وضوح و شفافیت تصاویر با استفاده از هوش مصنوعی",
        href: "/image-enhancement"
      },
      {
        name: "حذف پس‌زمینه",
        icon: IoEaselOutline, // آیکون حذف پس‌زمینه
        description: "حذف پس‌زمینه تصویر به صورت خودکار و سریع",
        href: "/background-removal"
      },
      {
        name: "تبدیل تصویر به ویدیو",
        icon: IoFilmOutline, // آیکون تبدیل تصویر به ویدیو
        description: "تولید ویدیو از مجموعه تصاویر با افکت‌های جذاب",
        href: "/image-to-video"
      },
      {
        name: "ترمیم تصویر",
        icon: IoHammerOutline, // آیکون ترمیم تصویر
        description: "ترمیم و بازسازی تصاویر قدیمی و آسیب‌دیده",
        href: "/image-restoration"
      },
      {
        name: "تغییر سایز تصویر",
        icon: IoResizeOutline, // آیکون تغییر سایز تصویر
        description: "تغییر سایز و اندازه تصاویر بدون افت کیفیت",
        href: "/image-resizing"
      },
      {
        name: "تولید تصویر از متن",
        icon: IoTextOutline, // آیکون تولید تصویر از متن
        description: "تبدیل متن به تصویر با استفاده از مدل‌های یادگیری عمیق",
        href: "/text-to-image"
      }
    ]
  }
]
