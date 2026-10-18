import { CtaBlock } from './Cta'
import { ContactFormBlock } from './ContactForm'
import { FaqBlock } from './Faq'
import { FeatureBandBlock } from './FeatureBand'
import { FeatureCatalogBlock } from './FeatureCatalog'
import { FeatureGridBlock } from './FeatureGrid'
import { HeroBlock } from './Hero'
import { IndustriesBlock } from './Industries'
import { elementBlocks } from './layout/elements'
import { LayoutSectionBlock } from './layout/LayoutSection'
import { ModulesMapBlock } from './ModulesMap'
import { PartnersBlock } from './Partners'
import { PricingBlock } from './Pricing'
import { RequestsBoardBlock } from './RequestsBoard'
import { SectionBlock } from './Section'
import { SolutionCatalogBlock } from './SolutionCatalog'
import { TestimonialsBlock } from './Testimonials'
import { TextSectionsBlock } from './TextSections'
import { ToolsListBlock } from './ToolsList'
import { WorkflowBlock } from './Workflow'

export const pageBlocks = [
  HeroBlock,
  FeatureBandBlock,
  RequestsBoardBlock,
  ModulesMapBlock,
  IndustriesBlock,
  TestimonialsBlock,
  PricingBlock,
  FaqBlock,
  CtaBlock,
  SectionBlock,
  FeatureCatalogBlock,
  SolutionCatalogBlock,
  ToolsListBlock,
  ContactFormBlock,
  TextSectionsBlock,
  FeatureGridBlock,
  WorkflowBlock,
  PartnersBlock,
  LayoutSectionBlock,
  // Elemen kecil juga bisa langsung di halaman (seperti di editor visual).
  ...elementBlocks,
]
