import type { Schema, Struct } from '@strapi/strapi';

export interface SharedParagraph extends Struct.ComponentSchema {
  collectionName: 'components_shared_paragraphs';
  info: {
    displayName: 'paragraph';
    icon: 'layer';
  };
  attributes: {
    bold: Schema.Attribute.Boolean;
    content: Schema.Attribute.Text;
  };
}

export interface SharedSpecificationGroup extends Struct.ComponentSchema {
  collectionName: 'components_shared_specification_groups';
  info: {
    displayName: 'specification-group';
    icon: 'landscape';
  };
  attributes: {
    items: Schema.Attribute.Component<'shared.specification-item', true>;
    title: Schema.Attribute.String;
  };
}

export interface SharedSpecificationItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_specification_items';
  info: {
    displayName: 'specification-item';
    icon: 'landscape';
  };
  attributes: {
    label: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.paragraph': SharedParagraph;
      'shared.specification-group': SharedSpecificationGroup;
      'shared.specification-item': SharedSpecificationItem;
    }
  }
}
