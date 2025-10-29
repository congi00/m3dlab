import type { Schema, Struct } from '@strapi/strapi';

export interface SharedDivider extends Struct.ComponentSchema {
  collectionName: 'components_shared_dividers';
  info: {
    displayName: 'Divider';
  };
  attributes: {
    largeText: Schema.Attribute.Text;
    smallText: Schema.Attribute.String;
  };
}

export interface SharedFeatures extends Struct.ComponentSchema {
  collectionName: 'components_shared_features';
  info: {
    displayName: 'Features';
  };
  attributes: {
    icon: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    text: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedFooter extends Struct.ComponentSchema {
  collectionName: 'components_shared_footers';
  info: {
    displayName: 'Footer';
  };
  attributes: {
    email: Schema.Attribute.String;
    instagram: Schema.Attribute.String;
    linkServizi: Schema.Attribute.JSON;
    linkUtili: Schema.Attribute.JSON;
    logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    pIva: Schema.Attribute.String;
    sedeLegale: Schema.Attribute.String;
    sedeOperativa: Schema.Attribute.String;
    telefono: Schema.Attribute.String;
  };
}

export interface SharedHeader extends Struct.ComponentSchema {
  collectionName: 'components_shared_headers';
  info: {
    displayName: 'Header';
    icon: 'dashboard';
  };
  attributes: {
    HeaderItems: Schema.Attribute.Component<'shared.header-item', true>;
    language: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    logo: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
  };
}

export interface SharedHeaderItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_header_items';
  info: {
    displayName: 'Header.item';
  };
  attributes: {
    Label: Schema.Attribute.String & Schema.Attribute.Required;
    Url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedHomePreventiveSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_home_preventive_sections';
  info: {
    displayName: 'Home-preventive-section';
  };
  attributes: {
    buttonText: Schema.Attribute.String;
    renderImage: Schema.Attribute.Media<'images' | 'files'>;
    secondSubtitle: Schema.Attribute.Text;
    secondTitle: Schema.Attribute.String;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedInfoChoiceSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_info_choice_sections';
  info: {
    displayName: 'Info-choice-section';
  };
  attributes: {
    bg_image_section: Schema.Attribute.Media<'images' | 'files'>;
    option1: Schema.Attribute.Text;
    option2: Schema.Attribute.Text;
    option3: Schema.Attribute.Text;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {};
}

export interface SharedProductsSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_products_sections';
  info: {
    displayName: 'Products-section';
  };
  attributes: {
    incisioni_image: Schema.Attribute.Media<'files' | 'images'>;
    incisioni_text: Schema.Attribute.String;
    lavorazioni_image: Schema.Attribute.Media<'images' | 'files'>;
    lavorazioni_text: Schema.Attribute.String;
    stampa_image: Schema.Attribute.Media<'images' | 'files'>;
    stampa_text: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface SharedWhoSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_who_sections';
  info: {
    displayName: 'Who-section';
  };
  attributes: {
    content: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.divider': SharedDivider;
      'shared.features': SharedFeatures;
      'shared.footer': SharedFooter;
      'shared.header': SharedHeader;
      'shared.header-item': SharedHeaderItem;
      'shared.home-preventive-section': SharedHomePreventiveSection;
      'shared.info-choice-section': SharedInfoChoiceSection;
      'shared.media': SharedMedia;
      'shared.products-section': SharedProductsSection;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'shared.who-section': SharedWhoSection;
    }
  }
}
