"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FeatureCardTwentyFive from '@/components/sections/feature/FeatureCardTwentyFive';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import MediaAbout from '@/components/sections/about/MediaAbout';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TestimonialCardFive from '@/components/sections/testimonial/TestimonialCardFive';
import { Award, Flame, Heart, Leaf, Shield } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="shift-hover"
        defaultTextAnimation="entrance-slide"
        borderRadius="rounded"
        contentWidth="mediumSmall"
        sizing="largeSizeMediumTitles"
        background="aurora"
        cardStyle="subtle-shadow"
        primaryButtonStyle="flat"
        secondaryButtonStyle="solid"
        headingFontWeight="bold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        { name: "Home", id: "hero" },
        { name: "Menu", id: "menu" },
        { name: "Testimonials", id: "testimonials" },
        { name: "Book Table", id: "contact" },
      ]}
      brandName="Afghan Shinwari"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplit
      background={{ variant: "plain" }}
      title="A Symphony of Tradition and Warmth"
      description="Experience the authentic flavors of Afghanistan in a premium setting. From slow-cooked lamb karahi to charcoal-grilled perfection, every bite tells a story of heritage."
      buttons={[
        { text: "Book Table", href: "#contact" },
        { text: "Order Online", href: "#menu" },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/beetroot-salad-with-carrots-corn-nuts-white-plate_140725-3541.jpg"
      imageAlt="Afghan Shinwari luxury cuisine"
      mediaAnimation="blur-reveal"
      avatars={[
        { src: "http://img.b2bpic.net/free-photo/portrait-waitress-standing-with-disposable-coffee-cup_107420-12311.jpg", alt: "Diner 1" },
        { src: "http://img.b2bpic.net/free-photo/front-view-woman-with-delicious-burger_23-2150347940.jpg", alt: "Diner 2" },
        { src: "http://img.b2bpic.net/free-photo/portrait-smiling-waitress_107420-12307.jpg", alt: "Diner 3" },
        { src: "http://img.b2bpic.net/free-photo/portrait-smiling-waitress_107420-12324.jpg", alt: "Diner 4" },
        { src: "http://img.b2bpic.net/free-photo/having-lunch-spacious-restaurant_52683-117480.jpg", alt: "Diner 5" },
      ]}
      avatarText="Join 600+ happy guests"
      marqueeItems={[
        { type: "text-icon", text: "Authentic Recipes", icon: Flame },
        { type: "text-icon", text: "Premium Ingredients", icon: Leaf },
        { type: "text-icon", text: "Traditional Grilling", icon: Flame },
        { type: "text-icon", text: "Warm Atmosphere", icon: Heart },
        { type: "text-icon", text: "Luxury Dining", icon: Award },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <MediaAbout
      useInvertedBackground={false}
      title="Authenticity at Our Core"
      description="At Afghan Shinwari, we blend family recipes passed down through generations with a modern, luxury dining experience. Warmth, authenticity, and premium ingredients define our mission."
      imageSrc="http://img.b2bpic.net/free-photo/interior-design-neoclassical-style-with-furnishings-decor_23-2151199326.jpg?_wi=1"
      imageAlt="Restaurant ambiance"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentyFive
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={true}
      features={[
        {
          title: "Premium Ingredients",          description: "Sourced from the finest local and traditional suppliers for unmatched taste.",          icon: Shield,
          mediaItems: [
            { imageSrc: "http://img.b2bpic.net/free-photo/eggplant-dolma-with-tomato-belly-pepper_140725-4615.jpg?_wi=1", imageAlt: "Ingredients" },
            { imageSrc: "http://img.b2bpic.net/free-photo/massaman-curry-frying-pan-with-spices-cement-floor_1150-20778.jpg?_wi=1", imageAlt: "Ingredients" },
          ],
        },
        {
          title: "Traditional Methods",          description: "Authentic charcoal grilling and slow-cooking techniques preserved for decades.",          icon: Award,
          mediaItems: [
            { imageSrc: "http://img.b2bpic.net/free-photo/steak-served-with-potatoes-grilled-vegetables-sauce-wine_140725-8057.jpg?_wi=1", imageAlt: "Methods" },
            { imageSrc: "http://img.b2bpic.net/free-photo/closeup-slices-artisan-bread-lined-with-straw-pieces-fresh-homemade-sourdough-bread-wholesome-healthy-organic-food_166373-3257.jpg?_wi=1", imageAlt: "Methods" },
          ],
        },
        {
          title: "Unmatched Warmth",          description: "Our team treats every guest like family in an elegant, cozy atmosphere.",          icon: Heart,
          mediaItems: [
            { imageSrc: "http://img.b2bpic.net/free-photo/close-up-steamed-rice-meal-plate_140725-114371.jpg?_wi=1", imageAlt: "Hospitality" },
            { imageSrc: "http://img.b2bpic.net/free-photo/yellow-cold-refreshment-drink-with-berries-ice-cubes_114579-3137.jpg?_wi=1", imageAlt: "Hospitality" },
          ],
        },
      ]}
      title="Why Experience Afghan Shinwari?"
      description="Excellence in every detail."
    />
  </div>

  <div id="menu" data-section="menu">
      <ProductCardTwo
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="four-items-2x2-equal-grid"
      useInvertedBackground={false}
      products={[
        { id: "p1", brand: "Signature", name: "Lamb Chops", price: "£24", rating: 5, reviewCount: "120", imageSrc: "http://img.b2bpic.net/free-photo/eggplant-dolma-with-tomato-belly-pepper_140725-4615.jpg?_wi=2" },
        { id: "p2", brand: "Signature", name: "Special Karahi", price: "£18", rating: 5, reviewCount: "450", imageSrc: "http://img.b2bpic.net/free-photo/massaman-curry-frying-pan-with-spices-cement-floor_1150-20778.jpg?_wi=2" },
        { id: "p3", brand: "Grill", name: "Mix Kebab Platter", price: "£22", rating: 4, reviewCount: "300", imageSrc: "http://img.b2bpic.net/free-photo/steak-served-with-potatoes-grilled-vegetables-sauce-wine_140725-8057.jpg?_wi=2" },
        { id: "p4", brand: "Side", name: "Fresh Afghan Naan", price: "£3", rating: 5, reviewCount: "800", imageSrc: "http://img.b2bpic.net/free-photo/closeup-slices-artisan-bread-lined-with-straw-pieces-fresh-homemade-sourdough-bread-wholesome-healthy-organic-food_166373-3257.jpg?_wi=2" },
        { id: "p5", brand: "Signature", name: "Kabuli Pulao", price: "£16", rating: 5, reviewCount: "210", imageSrc: "http://img.b2bpic.net/free-photo/close-up-steamed-rice-meal-plate_140725-114371.jpg?_wi=2" },
        { id: "p6", brand: "Drinks", name: "Mint Yogurt Drink", price: "£4", rating: 5, reviewCount: "150", imageSrc: "http://img.b2bpic.net/free-photo/yellow-cold-refreshment-drink-with-berries-ice-cubes_114579-3137.jpg?_wi=2" },
      ]}
      title="Our Signature Menu"
      description="Taste the best-sellers that keep our guests coming back."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFive
      textboxLayout="default"
      useInvertedBackground={true}
      testimonials={[
        { id: "1", name: "Sarah Ahmed", date: "Oct 2023", title: "Exquisite", quote: "The best lamb karahi I've had outside of Kabul. Truly authentic.", tag: "Diner", avatarSrc: "http://img.b2bpic.net/free-photo/portrait-waitress-standing-with-disposable-coffee-cup_107420-12311.jpg", imageSrc: "http://img.b2bpic.net/free-photo/steak-served-with-potatoes-grilled-vegetables-sauce-wine_140725-8057.jpg?_wi=3", imageAlt: "mixed grilled skewers gourmet" },
        { id: "2", name: "Michael Chen", date: "Sep 2023", title: "Highly Recommend", quote: "Everything about this place screams luxury. The service is top-notch.", tag: "Regular", avatarSrc: "http://img.b2bpic.net/free-photo/front-view-woman-with-delicious-burger_23-2150347940.jpg", imageSrc: "http://img.b2bpic.net/free-photo/closeup-slices-artisan-bread-lined-with-straw-pieces-fresh-homemade-sourdough-bread-wholesome-healthy-organic-food_166373-3257.jpg?_wi=3", imageAlt: "fresh afghan naan sesame seeds" },
        { id: "3", name: "Emily Watson", date: "Aug 2023", title: "Family Favorite", quote: "Took my family here, we felt at home instantly. Absolutely wonderful.", tag: "Diner", avatarSrc: "http://img.b2bpic.net/free-photo/portrait-smiling-waitress_107420-12307.jpg", imageSrc: "http://img.b2bpic.net/free-photo/close-up-steamed-rice-meal-plate_140725-114371.jpg?_wi=3", imageAlt: "afghan rice dish premium" },
        { id: "4", name: "David Kim", date: "Jul 2023", title: "Perfect Grills", quote: "The mix kebab platter is perfection. Charred, juicy, and fresh.", tag: "Connoisseur", avatarSrc: "http://img.b2bpic.net/free-photo/portrait-smiling-waitress_107420-12324.jpg", imageSrc: "http://img.b2bpic.net/free-photo/yellow-cold-refreshment-drink-with-berries-ice-cubes_114579-3137.jpg?_wi=3", imageAlt: "afghan yogurt drink mint" },
        { id: "5", name: "Jessica Lee", date: "Jun 2023", title: "Simply Stunning", quote: "A hidden gem in Luton! The ambiance is perfect for a date night.", tag: "Diner", avatarSrc: "http://img.b2bpic.net/free-photo/having-lunch-spacious-restaurant_52683-117480.jpg", imageSrc: "http://img.b2bpic.net/free-photo/interior-design-neoclassical-style-with-furnishings-decor_23-2151199326.jpg?_wi=2", imageAlt: "luxury afghan restaurant interior" },
      ]}
      title="What Our Guests Say"
      description="Join over 600+ satisfied diners."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCenter
      useInvertedBackground={false}
      background={{ variant: "radial-gradient" }}
      tag="Booking"
      title="Secure Your Table"
      description="Ready to experience the true flavors of Afghanistan? Book your table in advance and skip the wait."
      buttonText="Book Now"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoReveal
      logoText="Afghan Shinwari"
      leftLink={{ text: "Privacy Policy", href: "#" }}
      rightLink={{ text: "Contact Us", href: "#contact" }}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
