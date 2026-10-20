import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."_locales" AS ENUM('id', 'en');
  CREATE TYPE "public"."enum_pages_blocks_hero_buttons_style" AS ENUM('fill', 'stroke');
  CREATE TYPE "public"."enum_pages_blocks_hero_variant" AS ENUM('home', 'page');
  CREATE TYPE "public"."enum_pages_blocks_hero_visual_kind" AS ENUM('isometric', 'board', 'phone', 'offer', 'tilted', 'calculator', 'panel', 'shield', 'none');
  CREATE TYPE "public"."enum_pages_blocks_hero_visual_tone" AS ENUM('sky', 'lavender', 'peach');
  CREATE TYPE "public"."enum_pages_blocks_hero_visual_accessory" AS ENUM('bell', 'shield', 'checkCircle', 'users', 'calculator', 'wallet', 'chat', 'chart', 'calendar', 'clock', 'document', 'lock', 'star');
  CREATE TYPE "public"."enum_pages_blocks_hero_visual_rows_source" AS ENUM('manual', 'features', 'solutions', 'calculators');
  CREATE TYPE "public"."enum_pages_blocks_feature_band_buttons_style" AS ENUM('fill', 'stroke');
  CREATE TYPE "public"."enum_pages_blocks_feature_band_screen" AS ENUM('faceScan', 'approval');
  CREATE TYPE "public"."enum_pages_blocks_feature_band_tint" AS ENUM('white', 'sky', 'lavender', 'peach');
  CREATE TYPE "public"."enum_pages_blocks_feature_band_accessory" AS ENUM('bell', 'shield', 'checkCircle', 'users', 'calculator', 'wallet', 'chat', 'chart', 'calendar', 'clock', 'document', 'lock', 'star');
  CREATE TYPE "public"."enum_pages_blocks_requests_board_buttons_style" AS ENUM('fill', 'stroke');
  CREATE TYPE "public"."enum_pages_blocks_modules_map_tint" AS ENUM('white', 'sky', 'lavender', 'peach');
  CREATE TYPE "public"."enum_pages_blocks_testimonials_items_tone" AS ENUM('yellow', 'cyan', 'pink');
  CREATE TYPE "public"."enum_pages_blocks_pricing_matrix_groups_cells_mode" AS ENUM('included', 'excluded', 'addon');
  CREATE TYPE "public"."enum_pages_blocks_pricing_buttons_style" AS ENUM('fill', 'stroke');
  CREATE TYPE "public"."enum_pages_blocks_pricing_variant" AS ENUM('full', 'compact');
  CREATE TYPE "public"."enum_pages_blocks_pricing_tint" AS ENUM('white', 'sky', 'lavender', 'peach');
  CREATE TYPE "public"."enum_pages_blocks_cta_buttons_style" AS ENUM('fill', 'stroke');
  CREATE TYPE "public"."enum_pages_blocks_section_tint" AS ENUM('white', 'sky', 'lavender', 'peach');
  CREATE TYPE "public"."enum_pages_blocks_section_visual_side" AS ENUM('right', 'left');
  CREATE TYPE "public"."enum_pages_blocks_section_visual_kind" AS ENUM('isometric', 'board', 'phone', 'offer', 'tilted', 'calculator', 'panel', 'shield', 'none');
  CREATE TYPE "public"."enum_pages_blocks_section_visual_tone" AS ENUM('sky', 'lavender', 'peach');
  CREATE TYPE "public"."enum_pages_blocks_section_visual_accessory" AS ENUM('bell', 'shield', 'checkCircle', 'users', 'calculator', 'wallet', 'chat', 'chart', 'calendar', 'clock', 'document', 'lock', 'star');
  CREATE TYPE "public"."enum_pages_blocks_section_visual_rows_source" AS ENUM('manual', 'features', 'solutions', 'calculators');
  CREATE TYPE "public"."enum_pages_blocks_section_columns" AS ENUM('2', '3', '4');
  CREATE TYPE "public"."enum_pages_blocks_contact_form_visual_kind" AS ENUM('isometric', 'board', 'phone', 'offer', 'tilted', 'calculator', 'panel', 'shield', 'none');
  CREATE TYPE "public"."enum_pages_blocks_contact_form_visual_tone" AS ENUM('sky', 'lavender', 'peach');
  CREATE TYPE "public"."enum_pages_blocks_contact_form_visual_accessory" AS ENUM('bell', 'shield', 'checkCircle', 'users', 'calculator', 'wallet', 'chat', 'chart', 'calendar', 'clock', 'document', 'lock', 'star');
  CREATE TYPE "public"."enum_pages_blocks_contact_form_visual_rows_source" AS ENUM('manual', 'features', 'solutions', 'calculators');
  CREATE TYPE "public"."enum_pages_blocks_feature_grid_tint" AS ENUM('white', 'sky', 'lavender', 'peach');
  CREATE TYPE "public"."enum_pages_blocks_feature_grid_columns" AS ENUM('2', '3', '4');
  CREATE TYPE "public"."enum_pages_blocks_promo_bento_cards_icon" AS ENUM('headset', 'cloudDownload', 'wrench', 'settings', 'rocket', 'users', 'message', 'calendar', 'shield', 'sparkles');
  CREATE TYPE "public"."enum_pages_blocks_promo_bento_cards_tone" AS ENUM('lavender', 'yellow', 'sky', 'peach', 'cyan');
  CREATE TYPE "public"."enum_pages_blocks_promo_bento_cards_size" AS ENUM('normal', 'wide', 'tall');
  CREATE TYPE "public"."enum_pages_blocks_promo_bento_tint" AS ENUM('white', 'sky', 'lavender', 'peach');
  CREATE TYPE "public"."enum_pages_blocks_badge_align" AS ENUM('left', 'center', 'right');
  CREATE TYPE "public"."enum_pages_blocks_heading_level" AS ENUM('h1', 'h2', 'h3', 'h4');
  CREATE TYPE "public"."enum_pages_blocks_heading_size" AS ENUM('sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_pages_blocks_heading_color" AS ENUM('ink', 'accent', 'white');
  CREATE TYPE "public"."enum_pages_blocks_heading_align" AS ENUM('left', 'center', 'right');
  CREATE TYPE "public"."enum_pages_blocks_paragraph_size" AS ENUM('sm', 'base', 'lg');
  CREATE TYPE "public"."enum_pages_blocks_paragraph_tone" AS ENUM('default', 'muted');
  CREATE TYPE "public"."enum_pages_blocks_paragraph_align" AS ENUM('left', 'center', 'right');
  CREATE TYPE "public"."enum_pages_blocks_image_aspect" AS ENUM('video', 'landscape', 'square', 'portrait');
  CREATE TYPE "public"."enum_pages_blocks_button_style" AS ENUM('fill', 'stroke');
  CREATE TYPE "public"."enum_pages_blocks_button_align" AS ENUM('left', 'center', 'right');
  CREATE TYPE "public"."enum_pages_blocks_spacer_size" AS ENUM('sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_pages_blocks_layout_section_columns" AS ENUM('1', '2', '3', '4');
  CREATE TYPE "public"."enum_pages_blocks_layout_section_vertical_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum_pages_blocks_layout_section_gap" AS ENUM('sm', 'md', 'lg');
  CREATE TYPE "public"."enum_pages_blocks_layout_section_background" AS ENUM('white', 'sky', 'lavender', 'peach', 'night', 'image');
  CREATE TYPE "public"."enum_pages_blocks_layout_section_padding" AS ENUM('sm', 'md', 'lg');
  CREATE TYPE "public"."enum_pages_blocks_layout_section_width" AS ENUM('narrow', 'default', 'wide');
  CREATE TYPE "public"."enum_pages_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__pages_v_blocks_hero_buttons_style" AS ENUM('fill', 'stroke');
  CREATE TYPE "public"."enum__pages_v_blocks_hero_variant" AS ENUM('home', 'page');
  CREATE TYPE "public"."enum__pages_v_blocks_hero_visual_kind" AS ENUM('isometric', 'board', 'phone', 'offer', 'tilted', 'calculator', 'panel', 'shield', 'none');
  CREATE TYPE "public"."enum__pages_v_blocks_hero_visual_tone" AS ENUM('sky', 'lavender', 'peach');
  CREATE TYPE "public"."enum__pages_v_blocks_hero_visual_accessory" AS ENUM('bell', 'shield', 'checkCircle', 'users', 'calculator', 'wallet', 'chat', 'chart', 'calendar', 'clock', 'document', 'lock', 'star');
  CREATE TYPE "public"."enum__pages_v_blocks_hero_visual_rows_source" AS ENUM('manual', 'features', 'solutions', 'calculators');
  CREATE TYPE "public"."enum__pages_v_blocks_feature_band_buttons_style" AS ENUM('fill', 'stroke');
  CREATE TYPE "public"."enum__pages_v_blocks_feature_band_screen" AS ENUM('faceScan', 'approval');
  CREATE TYPE "public"."enum__pages_v_blocks_feature_band_tint" AS ENUM('white', 'sky', 'lavender', 'peach');
  CREATE TYPE "public"."enum__pages_v_blocks_feature_band_accessory" AS ENUM('bell', 'shield', 'checkCircle', 'users', 'calculator', 'wallet', 'chat', 'chart', 'calendar', 'clock', 'document', 'lock', 'star');
  CREATE TYPE "public"."enum__pages_v_blocks_requests_board_buttons_style" AS ENUM('fill', 'stroke');
  CREATE TYPE "public"."enum__pages_v_blocks_modules_map_tint" AS ENUM('white', 'sky', 'lavender', 'peach');
  CREATE TYPE "public"."enum__pages_v_blocks_testimonials_items_tone" AS ENUM('yellow', 'cyan', 'pink');
  CREATE TYPE "public"."enum__pages_v_blocks_pricing_matrix_groups_cells_mode" AS ENUM('included', 'excluded', 'addon');
  CREATE TYPE "public"."enum__pages_v_blocks_pricing_buttons_style" AS ENUM('fill', 'stroke');
  CREATE TYPE "public"."enum__pages_v_blocks_pricing_variant" AS ENUM('full', 'compact');
  CREATE TYPE "public"."enum__pages_v_blocks_pricing_tint" AS ENUM('white', 'sky', 'lavender', 'peach');
  CREATE TYPE "public"."enum__pages_v_blocks_cta_buttons_style" AS ENUM('fill', 'stroke');
  CREATE TYPE "public"."enum__pages_v_blocks_section_tint" AS ENUM('white', 'sky', 'lavender', 'peach');
  CREATE TYPE "public"."enum__pages_v_blocks_section_visual_side" AS ENUM('right', 'left');
  CREATE TYPE "public"."enum__pages_v_blocks_section_visual_kind" AS ENUM('isometric', 'board', 'phone', 'offer', 'tilted', 'calculator', 'panel', 'shield', 'none');
  CREATE TYPE "public"."enum__pages_v_blocks_section_visual_tone" AS ENUM('sky', 'lavender', 'peach');
  CREATE TYPE "public"."enum__pages_v_blocks_section_visual_accessory" AS ENUM('bell', 'shield', 'checkCircle', 'users', 'calculator', 'wallet', 'chat', 'chart', 'calendar', 'clock', 'document', 'lock', 'star');
  CREATE TYPE "public"."enum__pages_v_blocks_section_visual_rows_source" AS ENUM('manual', 'features', 'solutions', 'calculators');
  CREATE TYPE "public"."enum__pages_v_blocks_section_columns" AS ENUM('2', '3', '4');
  CREATE TYPE "public"."enum__pages_v_blocks_contact_form_visual_kind" AS ENUM('isometric', 'board', 'phone', 'offer', 'tilted', 'calculator', 'panel', 'shield', 'none');
  CREATE TYPE "public"."enum__pages_v_blocks_contact_form_visual_tone" AS ENUM('sky', 'lavender', 'peach');
  CREATE TYPE "public"."enum__pages_v_blocks_contact_form_visual_accessory" AS ENUM('bell', 'shield', 'checkCircle', 'users', 'calculator', 'wallet', 'chat', 'chart', 'calendar', 'clock', 'document', 'lock', 'star');
  CREATE TYPE "public"."enum__pages_v_blocks_contact_form_visual_rows_source" AS ENUM('manual', 'features', 'solutions', 'calculators');
  CREATE TYPE "public"."enum__pages_v_blocks_feature_grid_tint" AS ENUM('white', 'sky', 'lavender', 'peach');
  CREATE TYPE "public"."enum__pages_v_blocks_feature_grid_columns" AS ENUM('2', '3', '4');
  CREATE TYPE "public"."enum__pages_v_blocks_promo_bento_cards_icon" AS ENUM('headset', 'cloudDownload', 'wrench', 'settings', 'rocket', 'users', 'message', 'calendar', 'shield', 'sparkles');
  CREATE TYPE "public"."enum__pages_v_blocks_promo_bento_cards_tone" AS ENUM('lavender', 'yellow', 'sky', 'peach', 'cyan');
  CREATE TYPE "public"."enum__pages_v_blocks_promo_bento_cards_size" AS ENUM('normal', 'wide', 'tall');
  CREATE TYPE "public"."enum__pages_v_blocks_promo_bento_tint" AS ENUM('white', 'sky', 'lavender', 'peach');
  CREATE TYPE "public"."enum__pages_v_blocks_badge_align" AS ENUM('left', 'center', 'right');
  CREATE TYPE "public"."enum__pages_v_blocks_heading_level" AS ENUM('h1', 'h2', 'h3', 'h4');
  CREATE TYPE "public"."enum__pages_v_blocks_heading_size" AS ENUM('sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum__pages_v_blocks_heading_color" AS ENUM('ink', 'accent', 'white');
  CREATE TYPE "public"."enum__pages_v_blocks_heading_align" AS ENUM('left', 'center', 'right');
  CREATE TYPE "public"."enum__pages_v_blocks_paragraph_size" AS ENUM('sm', 'base', 'lg');
  CREATE TYPE "public"."enum__pages_v_blocks_paragraph_tone" AS ENUM('default', 'muted');
  CREATE TYPE "public"."enum__pages_v_blocks_paragraph_align" AS ENUM('left', 'center', 'right');
  CREATE TYPE "public"."enum__pages_v_blocks_image_aspect" AS ENUM('video', 'landscape', 'square', 'portrait');
  CREATE TYPE "public"."enum__pages_v_blocks_button_style" AS ENUM('fill', 'stroke');
  CREATE TYPE "public"."enum__pages_v_blocks_button_align" AS ENUM('left', 'center', 'right');
  CREATE TYPE "public"."enum__pages_v_blocks_spacer_size" AS ENUM('sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum__pages_v_blocks_layout_section_columns" AS ENUM('1', '2', '3', '4');
  CREATE TYPE "public"."enum__pages_v_blocks_layout_section_vertical_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum__pages_v_blocks_layout_section_gap" AS ENUM('sm', 'md', 'lg');
  CREATE TYPE "public"."enum__pages_v_blocks_layout_section_background" AS ENUM('white', 'sky', 'lavender', 'peach', 'night', 'image');
  CREATE TYPE "public"."enum__pages_v_blocks_layout_section_padding" AS ENUM('sm', 'md', 'lg');
  CREATE TYPE "public"."enum__pages_v_blocks_layout_section_width" AS ENUM('narrow', 'default', 'wide');
  CREATE TYPE "public"."enum__pages_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__pages_v_published_locale" AS ENUM('id', 'en');
  CREATE TYPE "public"."enum_partners_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__partners_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__partners_v_published_locale" AS ENUM('id', 'en');
  CREATE TYPE "public"."enum_solutions_type" AS ENUM('industry', 'scale');
  CREATE TYPE "public"."enum_solutions_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__solutions_v_version_type" AS ENUM('industry', 'scale');
  CREATE TYPE "public"."enum__solutions_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__solutions_v_published_locale" AS ENUM('id', 'en');
  CREATE TYPE "public"."enum_features_category" AS ENUM('attendance', 'requests', 'payroll', 'team', 'hradmin', 'documents', 'security', 'performance', 'planned');
  CREATE TYPE "public"."enum_features_availability" AS ENUM('available', 'partial', 'planned');
  CREATE TYPE "public"."enum_features_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__features_v_version_category" AS ENUM('attendance', 'requests', 'payroll', 'team', 'hradmin', 'documents', 'security', 'performance', 'planned');
  CREATE TYPE "public"."enum__features_v_version_availability" AS ENUM('available', 'partial', 'planned');
  CREATE TYPE "public"."enum__features_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__features_v_published_locale" AS ENUM('id', 'en');
  CREATE TYPE "public"."enum_contact_submissions_status" AS ENUM('new', 'in-progress', 'done', 'spam');
  CREATE TYPE "public"."enum_users_roles" AS ENUM('admin', 'editor');
  CREATE TYPE "public"."enum_audit_logs_action" AS ENUM('create', 'update', 'delete', 'login', 'security');
  CREATE TYPE "public"."enum_payload_jobs_log_task_slug" AS ENUM('inline', 'schedulePublish');
  CREATE TYPE "public"."enum_payload_jobs_log_state" AS ENUM('failed', 'succeeded');
  CREATE TYPE "public"."enum_payload_jobs_task_slug" AS ENUM('inline', 'schedulePublish');
  CREATE TYPE "public"."enum_site_settings_socials_platform" AS ENUM('facebook', 'instagram', 'linkedin', 'tiktok', 'youtube', 'x', 'whatsapp', 'other');
  CREATE TYPE "public"."enum_site_settings_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__site_settings_v_version_socials_platform" AS ENUM('facebook', 'instagram', 'linkedin', 'tiktok', 'youtube', 'x', 'whatsapp', 'other');
  CREATE TYPE "public"."enum__site_settings_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__site_settings_v_published_locale" AS ENUM('id', 'en');
  CREATE TYPE "public"."enum_navigation_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__navigation_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__navigation_v_published_locale" AS ENUM('id', 'en');
  CREATE TYPE "public"."enum_footer_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__footer_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__footer_v_published_locale" AS ENUM('id', 'en');
  CREATE TABLE "pages_blocks_hero_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"href" varchar,
  	"style" "enum_pages_blocks_hero_buttons_style" DEFAULT 'fill'
  );
  
  CREATE TABLE "pages_blocks_hero_buttons_locales" (
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_hero_mockup_approvals" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "pages_blocks_hero_mockup_approvals_locales" (
  	"person" varchar,
  	"detail" varchar,
  	"status" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_hero_mockup_phone_chips" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "pages_blocks_hero_mockup_phone_chips_locales" (
  	"text" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_hero_trust_points" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "pages_blocks_hero_trust_points_locales" (
  	"title" varchar,
  	"description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_hero_visual_rows" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "pages_blocks_hero_visual_rows_locales" (
  	"title" varchar,
  	"detail" varchar,
  	"badge" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_hero" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"variant" "enum_pages_blocks_hero_variant" DEFAULT 'page',
  	"mockup_phone_screen_id" integer,
  	"visual_kind" "enum_pages_blocks_hero_visual_kind" DEFAULT 'board',
  	"visual_tone" "enum_pages_blocks_hero_visual_tone" DEFAULT 'peach',
  	"visual_accessory" "enum_pages_blocks_hero_visual_accessory" DEFAULT 'shield',
  	"visual_screen_id" integer,
  	"visual_rows_source" "enum_pages_blocks_hero_visual_rows_source" DEFAULT 'manual',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_hero_locales" (
  	"tag" varchar,
  	"title_line_one" varchar,
  	"title_line_two" varchar,
  	"title" varchar,
  	"note" varchar,
  	"description" varchar,
  	"mockup_approvals_title" varchar,
  	"mockup_done_label" varchar,
  	"mockup_attendance_title" varchar,
  	"mockup_attendance_figure" varchar,
  	"mockup_attendance_detail" varchar,
  	"mockup_payslip_title" varchar,
  	"mockup_payslip_detail" varchar,
  	"visual_title" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_feature_band_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"href" varchar,
  	"style" "enum_pages_blocks_feature_band_buttons_style" DEFAULT 'fill'
  );
  
  CREATE TABLE "pages_blocks_feature_band_buttons_locales" (
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_feature_band_chips" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "pages_blocks_feature_band_chips_locales" (
  	"text" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_feature_band_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "pages_blocks_feature_band_items_locales" (
  	"name" varchar,
  	"detail" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_feature_band" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"screen" "enum_pages_blocks_feature_band_screen" DEFAULT 'faceScan',
  	"screen_image_id" integer,
  	"tint" "enum_pages_blocks_feature_band_tint" DEFAULT 'sky',
  	"accessory" "enum_pages_blocks_feature_band_accessory" DEFAULT 'shield',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_feature_band_locales" (
  	"anchor" varchar,
  	"tag" varchar,
  	"header_title" varchar,
  	"header_description" varchar,
  	"screen_title" varchar,
  	"screen_subtitle" varchar,
  	"screen_button" varchar,
  	"pending_label" varchar,
  	"done_label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_requests_board_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"href" varchar,
  	"style" "enum_pages_blocks_requests_board_buttons_style" DEFAULT 'fill'
  );
  
  CREATE TABLE "pages_blocks_requests_board_buttons_locales" (
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_requests_board_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "pages_blocks_requests_board_cards_locales" (
  	"title" varchar,
  	"subtitle" varchar,
  	"status" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_requests_board_strip_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "pages_blocks_requests_board_strip_items_locales" (
  	"text" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_requests_board" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_requests_board_locales" (
  	"anchor" varchar,
  	"tag" varchar,
  	"header_title" varchar,
  	"header_description" varchar,
  	"done_label" varchar,
  	"strip_title" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_modules_map" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"tint" "enum_pages_blocks_modules_map_tint" DEFAULT 'sky',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_modules_map_locales" (
  	"anchor" varchar,
  	"tag" varchar,
  	"header_title" varchar,
  	"header_description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_industries" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_industries_locales" (
  	"anchor" varchar,
  	"tag" varchar,
  	"header_title" varchar,
  	"header_description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_testimonials_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"tone" "enum_pages_blocks_testimonials_items_tone" DEFAULT 'yellow',
  	"rotation_deg" numeric DEFAULT 0
  );
  
  CREATE TABLE "pages_blocks_testimonials_items_locales" (
  	"quote" varchar,
  	"name" varchar,
  	"role" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_testimonials" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_testimonials_locales" (
  	"anchor" varchar,
  	"tag" varchar,
  	"header_title" varchar,
  	"header_description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_pricing_plans_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"is_soon" boolean DEFAULT false
  );
  
  CREATE TABLE "pages_blocks_pricing_plans_features_locales" (
  	"text" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_pricing_plans" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"is_featured" boolean DEFAULT false
  );
  
  CREATE TABLE "pages_blocks_pricing_plans_locales" (
  	"name" varchar,
  	"badge" varchar,
  	"price_prefix" varchar DEFAULT 'Mulai dari',
  	"price" varchar,
  	"price_unit" varchar DEFAULT '/bulan/karyawan',
  	"description" varchar,
  	"inherits_from" varchar,
  	"action_label" varchar DEFAULT 'Hubungi sales',
  	"action_href" varchar DEFAULT '/demo',
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_pricing_matrix_groups_points" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "pages_blocks_pricing_matrix_groups_points_locales" (
  	"text" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_pricing_matrix_groups_cells" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"mode" "enum_pages_blocks_pricing_matrix_groups_cells_mode" DEFAULT 'included'
  );
  
  CREATE TABLE "pages_blocks_pricing_matrix_groups_cells_locales" (
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_pricing_matrix_groups" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"is_soon" boolean DEFAULT false
  );
  
  CREATE TABLE "pages_blocks_pricing_matrix_groups_locales" (
  	"title" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_pricing_matrix" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "pages_blocks_pricing_matrix_locales" (
  	"title" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_pricing_points" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "pages_blocks_pricing_points_locales" (
  	"text" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_pricing_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"href" varchar,
  	"style" "enum_pages_blocks_pricing_buttons_style" DEFAULT 'fill'
  );
  
  CREATE TABLE "pages_blocks_pricing_buttons_locales" (
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_pricing" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"variant" "enum_pages_blocks_pricing_variant" DEFAULT 'full',
  	"tint" "enum_pages_blocks_pricing_tint" DEFAULT 'white',
  	"show_estimator" boolean DEFAULT false,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_pricing_locales" (
  	"anchor" varchar,
  	"tag" varchar,
  	"header_title" varchar,
  	"header_description" varchar,
  	"estimator_title" varchar,
  	"estimator_description" varchar,
  	"addon_note" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_faq_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "pages_blocks_faq_items_locales" (
  	"question" varchar,
  	"answer" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_faq" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_faq_locales" (
  	"anchor" varchar,
  	"tag" varchar,
  	"header_title" varchar,
  	"header_description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_cta_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"href" varchar,
  	"style" "enum_pages_blocks_cta_buttons_style" DEFAULT 'fill'
  );
  
  CREATE TABLE "pages_blocks_cta_buttons_locales" (
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_cta_guarantees" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "pages_blocks_cta_guarantees_locales" (
  	"text" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_cta" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_cta_locales" (
  	"header_title" varchar,
  	"header_description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_section_visual_rows" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "pages_blocks_section_visual_rows_locales" (
  	"title" varchar,
  	"detail" varchar,
  	"badge" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_section_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"href" varchar
  );
  
  CREATE TABLE "pages_blocks_section_items_locales" (
  	"title" varchar,
  	"description" varchar,
  	"badge" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_section" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"tint" "enum_pages_blocks_section_tint" DEFAULT 'white',
  	"visual_side" "enum_pages_blocks_section_visual_side" DEFAULT 'right',
  	"visual_kind" "enum_pages_blocks_section_visual_kind" DEFAULT 'panel',
  	"visual_tone" "enum_pages_blocks_section_visual_tone" DEFAULT 'peach',
  	"visual_accessory" "enum_pages_blocks_section_visual_accessory" DEFAULT 'shield',
  	"visual_screen_id" integer,
  	"visual_rows_source" "enum_pages_blocks_section_visual_rows_source" DEFAULT 'manual',
  	"columns" "enum_pages_blocks_section_columns" DEFAULT '3',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_section_locales" (
  	"anchor" varchar,
  	"tag" varchar,
  	"header_title" varchar,
  	"header_description" varchar,
  	"visual_title" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_feature_catalog" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_feature_catalog_locales" (
  	"tag" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_solution_catalog" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_solution_catalog_locales" (
  	"tag" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_tools_list" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_tools_list_locales" (
  	"anchor" varchar,
  	"tag" varchar,
  	"header_title" varchar,
  	"header_description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_contact_form_visual_rows" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "pages_blocks_contact_form_visual_rows_locales" (
  	"title" varchar,
  	"detail" varchar,
  	"badge" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_contact_form" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"visual_kind" "enum_pages_blocks_contact_form_visual_kind" DEFAULT 'panel',
  	"visual_tone" "enum_pages_blocks_contact_form_visual_tone" DEFAULT 'peach',
  	"visual_accessory" "enum_pages_blocks_contact_form_visual_accessory" DEFAULT 'shield',
  	"visual_screen_id" integer,
  	"visual_rows_source" "enum_pages_blocks_contact_form_visual_rows_source" DEFAULT 'manual',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_contact_form_locales" (
  	"anchor" varchar,
  	"tag" varchar,
  	"header_title" varchar,
  	"header_description" varchar,
  	"visual_title" varchar,
  	"submit_label" varchar DEFAULT 'Kirim pengajuan',
  	"success_title" varchar DEFAULT 'Terima kasih. Kami hubungi segera.',
  	"success_message" varchar DEFAULT 'Tim kami akan menghubungi lewat WhatsApp atau email untuk menjadwalkan demo 30 menit.',
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_text_sections_sections" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "pages_blocks_text_sections_sections_locales" (
  	"heading" varchar,
  	"body" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_text_sections" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_feature_grid_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"href" varchar
  );
  
  CREATE TABLE "pages_blocks_feature_grid_items_locales" (
  	"title" varchar,
  	"description" varchar,
  	"badge" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_feature_grid" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"tint" "enum_pages_blocks_feature_grid_tint" DEFAULT 'white',
  	"columns" "enum_pages_blocks_feature_grid_columns" DEFAULT '3',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_feature_grid_locales" (
  	"tag" varchar,
  	"header_title" varchar,
  	"header_description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_workflow_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "pages_blocks_workflow_steps_locales" (
  	"title" varchar,
  	"description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_workflow" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_workflow_locales" (
  	"tag" varchar,
  	"header_title" varchar,
  	"header_description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_promo_bento_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon" "enum_pages_blocks_promo_bento_cards_icon" DEFAULT 'sparkles',
  	"tone" "enum_pages_blocks_promo_bento_cards_tone" DEFAULT 'lavender',
  	"size" "enum_pages_blocks_promo_bento_cards_size" DEFAULT 'normal'
  );
  
  CREATE TABLE "pages_blocks_promo_bento_cards_locales" (
  	"title" varchar,
  	"description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_promo_bento" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"tint" "enum_pages_blocks_promo_bento_tint" DEFAULT 'white',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_promo_bento_locales" (
  	"highlight" varchar,
  	"header_title" varchar,
  	"header_description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_partners" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"show_tooltip" boolean DEFAULT false,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_partners_locales" (
  	"header_eyebrow" varchar,
  	"header_title" varchar,
  	"header_description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_badge" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"align" "enum_pages_blocks_badge_align" DEFAULT 'left',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_badge_locales" (
  	"text" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_heading" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"level" "enum_pages_blocks_heading_level" DEFAULT 'h2',
  	"size" "enum_pages_blocks_heading_size" DEFAULT 'lg',
  	"color" "enum_pages_blocks_heading_color" DEFAULT 'ink',
  	"align" "enum_pages_blocks_heading_align" DEFAULT 'left',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_heading_locales" (
  	"text" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_paragraph" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"size" "enum_pages_blocks_paragraph_size" DEFAULT 'base',
  	"tone" "enum_pages_blocks_paragraph_tone" DEFAULT 'default',
  	"align" "enum_pages_blocks_paragraph_align" DEFAULT 'left',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_paragraph_locales" (
  	"text" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_image" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"aspect" "enum_pages_blocks_image_aspect" DEFAULT 'video',
  	"framed" boolean DEFAULT true,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_image_locales" (
  	"caption" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_button" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"href" varchar,
  	"style" "enum_pages_blocks_button_style" DEFAULT 'fill',
  	"align" "enum_pages_blocks_button_align" DEFAULT 'left',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_button_locales" (
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_card" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon_id" integer,
  	"href" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_card_locales" (
  	"title" varchar,
  	"description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_spacer" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"size" "enum_pages_blocks_spacer_size" DEFAULT 'md',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_layout_section" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"columns" "enum_pages_blocks_layout_section_columns" DEFAULT '2',
  	"vertical_align" "enum_pages_blocks_layout_section_vertical_align" DEFAULT 'center',
  	"gap" "enum_pages_blocks_layout_section_gap" DEFAULT 'md',
  	"background" "enum_pages_blocks_layout_section_background" DEFAULT 'white',
  	"padding" "enum_pages_blocks_layout_section_padding" DEFAULT 'md',
  	"width" "enum_pages_blocks_layout_section_width" DEFAULT 'default',
  	"background_image_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"slug" varchar,
  	"meta_image_id" integer,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_pages_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "pages_locales" (
  	"title" varchar,
  	"meta_title" varchar,
  	"meta_description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "pages_texts" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"text" varchar,
  	"locale" "_locales"
  );
  
  CREATE TABLE "pages_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"features_id" integer,
  	"solutions_id" integer,
  	"partners_id" integer
  );
  
  CREATE TABLE "_pages_v_blocks_hero_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"href" varchar,
  	"style" "enum__pages_v_blocks_hero_buttons_style" DEFAULT 'fill',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_hero_buttons_locales" (
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_hero_mockup_approvals" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_hero_mockup_approvals_locales" (
  	"person" varchar,
  	"detail" varchar,
  	"status" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_hero_mockup_phone_chips" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_hero_mockup_phone_chips_locales" (
  	"text" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_hero_trust_points" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_hero_trust_points_locales" (
  	"title" varchar,
  	"description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_hero_visual_rows" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_hero_visual_rows_locales" (
  	"title" varchar,
  	"detail" varchar,
  	"badge" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_hero" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"variant" "enum__pages_v_blocks_hero_variant" DEFAULT 'page',
  	"mockup_phone_screen_id" integer,
  	"visual_kind" "enum__pages_v_blocks_hero_visual_kind" DEFAULT 'board',
  	"visual_tone" "enum__pages_v_blocks_hero_visual_tone" DEFAULT 'peach',
  	"visual_accessory" "enum__pages_v_blocks_hero_visual_accessory" DEFAULT 'shield',
  	"visual_screen_id" integer,
  	"visual_rows_source" "enum__pages_v_blocks_hero_visual_rows_source" DEFAULT 'manual',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_hero_locales" (
  	"tag" varchar,
  	"title_line_one" varchar,
  	"title_line_two" varchar,
  	"title" varchar,
  	"note" varchar,
  	"description" varchar,
  	"mockup_approvals_title" varchar,
  	"mockup_done_label" varchar,
  	"mockup_attendance_title" varchar,
  	"mockup_attendance_figure" varchar,
  	"mockup_attendance_detail" varchar,
  	"mockup_payslip_title" varchar,
  	"mockup_payslip_detail" varchar,
  	"visual_title" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_feature_band_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"href" varchar,
  	"style" "enum__pages_v_blocks_feature_band_buttons_style" DEFAULT 'fill',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_feature_band_buttons_locales" (
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_feature_band_chips" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_feature_band_chips_locales" (
  	"text" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_feature_band_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_feature_band_items_locales" (
  	"name" varchar,
  	"detail" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_feature_band" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"screen" "enum__pages_v_blocks_feature_band_screen" DEFAULT 'faceScan',
  	"screen_image_id" integer,
  	"tint" "enum__pages_v_blocks_feature_band_tint" DEFAULT 'sky',
  	"accessory" "enum__pages_v_blocks_feature_band_accessory" DEFAULT 'shield',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_feature_band_locales" (
  	"anchor" varchar,
  	"tag" varchar,
  	"header_title" varchar,
  	"header_description" varchar,
  	"screen_title" varchar,
  	"screen_subtitle" varchar,
  	"screen_button" varchar,
  	"pending_label" varchar,
  	"done_label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_requests_board_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"href" varchar,
  	"style" "enum__pages_v_blocks_requests_board_buttons_style" DEFAULT 'fill',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_requests_board_buttons_locales" (
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_requests_board_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_requests_board_cards_locales" (
  	"title" varchar,
  	"subtitle" varchar,
  	"status" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_requests_board_strip_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_requests_board_strip_items_locales" (
  	"text" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_requests_board" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_requests_board_locales" (
  	"anchor" varchar,
  	"tag" varchar,
  	"header_title" varchar,
  	"header_description" varchar,
  	"done_label" varchar,
  	"strip_title" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_modules_map" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"tint" "enum__pages_v_blocks_modules_map_tint" DEFAULT 'sky',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_modules_map_locales" (
  	"anchor" varchar,
  	"tag" varchar,
  	"header_title" varchar,
  	"header_description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_industries" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_industries_locales" (
  	"anchor" varchar,
  	"tag" varchar,
  	"header_title" varchar,
  	"header_description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_testimonials_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"tone" "enum__pages_v_blocks_testimonials_items_tone" DEFAULT 'yellow',
  	"rotation_deg" numeric DEFAULT 0,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_testimonials_items_locales" (
  	"quote" varchar,
  	"name" varchar,
  	"role" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_testimonials" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_testimonials_locales" (
  	"anchor" varchar,
  	"tag" varchar,
  	"header_title" varchar,
  	"header_description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_pricing_plans_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"is_soon" boolean DEFAULT false,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_pricing_plans_features_locales" (
  	"text" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_pricing_plans" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"is_featured" boolean DEFAULT false,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_pricing_plans_locales" (
  	"name" varchar,
  	"badge" varchar,
  	"price_prefix" varchar DEFAULT 'Mulai dari',
  	"price" varchar,
  	"price_unit" varchar DEFAULT '/bulan/karyawan',
  	"description" varchar,
  	"inherits_from" varchar,
  	"action_label" varchar DEFAULT 'Hubungi sales',
  	"action_href" varchar DEFAULT '/demo',
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_pricing_matrix_groups_points" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_pricing_matrix_groups_points_locales" (
  	"text" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_pricing_matrix_groups_cells" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"mode" "enum__pages_v_blocks_pricing_matrix_groups_cells_mode" DEFAULT 'included',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_pricing_matrix_groups_cells_locales" (
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_pricing_matrix_groups" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"is_soon" boolean DEFAULT false,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_pricing_matrix_groups_locales" (
  	"title" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_pricing_matrix" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_pricing_matrix_locales" (
  	"title" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_pricing_points" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_pricing_points_locales" (
  	"text" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_pricing_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"href" varchar,
  	"style" "enum__pages_v_blocks_pricing_buttons_style" DEFAULT 'fill',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_pricing_buttons_locales" (
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_pricing" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"variant" "enum__pages_v_blocks_pricing_variant" DEFAULT 'full',
  	"tint" "enum__pages_v_blocks_pricing_tint" DEFAULT 'white',
  	"show_estimator" boolean DEFAULT false,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_pricing_locales" (
  	"anchor" varchar,
  	"tag" varchar,
  	"header_title" varchar,
  	"header_description" varchar,
  	"estimator_title" varchar,
  	"estimator_description" varchar,
  	"addon_note" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_faq_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_faq_items_locales" (
  	"question" varchar,
  	"answer" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_faq" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_faq_locales" (
  	"anchor" varchar,
  	"tag" varchar,
  	"header_title" varchar,
  	"header_description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_cta_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"href" varchar,
  	"style" "enum__pages_v_blocks_cta_buttons_style" DEFAULT 'fill',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_cta_buttons_locales" (
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_cta_guarantees" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_cta_guarantees_locales" (
  	"text" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_cta" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_cta_locales" (
  	"header_title" varchar,
  	"header_description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_section_visual_rows" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_section_visual_rows_locales" (
  	"title" varchar,
  	"detail" varchar,
  	"badge" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_section_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"href" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_section_items_locales" (
  	"title" varchar,
  	"description" varchar,
  	"badge" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_section" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"tint" "enum__pages_v_blocks_section_tint" DEFAULT 'white',
  	"visual_side" "enum__pages_v_blocks_section_visual_side" DEFAULT 'right',
  	"visual_kind" "enum__pages_v_blocks_section_visual_kind" DEFAULT 'panel',
  	"visual_tone" "enum__pages_v_blocks_section_visual_tone" DEFAULT 'peach',
  	"visual_accessory" "enum__pages_v_blocks_section_visual_accessory" DEFAULT 'shield',
  	"visual_screen_id" integer,
  	"visual_rows_source" "enum__pages_v_blocks_section_visual_rows_source" DEFAULT 'manual',
  	"columns" "enum__pages_v_blocks_section_columns" DEFAULT '3',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_section_locales" (
  	"anchor" varchar,
  	"tag" varchar,
  	"header_title" varchar,
  	"header_description" varchar,
  	"visual_title" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_feature_catalog" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_feature_catalog_locales" (
  	"tag" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_solution_catalog" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_solution_catalog_locales" (
  	"tag" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_tools_list" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_tools_list_locales" (
  	"anchor" varchar,
  	"tag" varchar,
  	"header_title" varchar,
  	"header_description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_contact_form_visual_rows" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_contact_form_visual_rows_locales" (
  	"title" varchar,
  	"detail" varchar,
  	"badge" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_contact_form" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"visual_kind" "enum__pages_v_blocks_contact_form_visual_kind" DEFAULT 'panel',
  	"visual_tone" "enum__pages_v_blocks_contact_form_visual_tone" DEFAULT 'peach',
  	"visual_accessory" "enum__pages_v_blocks_contact_form_visual_accessory" DEFAULT 'shield',
  	"visual_screen_id" integer,
  	"visual_rows_source" "enum__pages_v_blocks_contact_form_visual_rows_source" DEFAULT 'manual',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_contact_form_locales" (
  	"anchor" varchar,
  	"tag" varchar,
  	"header_title" varchar,
  	"header_description" varchar,
  	"visual_title" varchar,
  	"submit_label" varchar DEFAULT 'Kirim pengajuan',
  	"success_title" varchar DEFAULT 'Terima kasih. Kami hubungi segera.',
  	"success_message" varchar DEFAULT 'Tim kami akan menghubungi lewat WhatsApp atau email untuk menjadwalkan demo 30 menit.',
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_text_sections_sections" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_text_sections_sections_locales" (
  	"heading" varchar,
  	"body" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_text_sections" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_feature_grid_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"href" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_feature_grid_items_locales" (
  	"title" varchar,
  	"description" varchar,
  	"badge" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_feature_grid" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"tint" "enum__pages_v_blocks_feature_grid_tint" DEFAULT 'white',
  	"columns" "enum__pages_v_blocks_feature_grid_columns" DEFAULT '3',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_feature_grid_locales" (
  	"tag" varchar,
  	"header_title" varchar,
  	"header_description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_workflow_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_workflow_steps_locales" (
  	"title" varchar,
  	"description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_workflow" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_workflow_locales" (
  	"tag" varchar,
  	"header_title" varchar,
  	"header_description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_promo_bento_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"icon" "enum__pages_v_blocks_promo_bento_cards_icon" DEFAULT 'sparkles',
  	"tone" "enum__pages_v_blocks_promo_bento_cards_tone" DEFAULT 'lavender',
  	"size" "enum__pages_v_blocks_promo_bento_cards_size" DEFAULT 'normal',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_promo_bento_cards_locales" (
  	"title" varchar,
  	"description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_promo_bento" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"tint" "enum__pages_v_blocks_promo_bento_tint" DEFAULT 'white',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_promo_bento_locales" (
  	"highlight" varchar,
  	"header_title" varchar,
  	"header_description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_partners" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"show_tooltip" boolean DEFAULT false,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_partners_locales" (
  	"header_eyebrow" varchar,
  	"header_title" varchar,
  	"header_description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_badge" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"align" "enum__pages_v_blocks_badge_align" DEFAULT 'left',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_badge_locales" (
  	"text" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_heading" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"level" "enum__pages_v_blocks_heading_level" DEFAULT 'h2',
  	"size" "enum__pages_v_blocks_heading_size" DEFAULT 'lg',
  	"color" "enum__pages_v_blocks_heading_color" DEFAULT 'ink',
  	"align" "enum__pages_v_blocks_heading_align" DEFAULT 'left',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_heading_locales" (
  	"text" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_paragraph" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"size" "enum__pages_v_blocks_paragraph_size" DEFAULT 'base',
  	"tone" "enum__pages_v_blocks_paragraph_tone" DEFAULT 'default',
  	"align" "enum__pages_v_blocks_paragraph_align" DEFAULT 'left',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_paragraph_locales" (
  	"text" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_image" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"aspect" "enum__pages_v_blocks_image_aspect" DEFAULT 'video',
  	"framed" boolean DEFAULT true,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_image_locales" (
  	"caption" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_button" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"href" varchar,
  	"style" "enum__pages_v_blocks_button_style" DEFAULT 'fill',
  	"align" "enum__pages_v_blocks_button_align" DEFAULT 'left',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_button_locales" (
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_card" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"icon_id" integer,
  	"href" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_card_locales" (
  	"title" varchar,
  	"description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_spacer" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"size" "enum__pages_v_blocks_spacer_size" DEFAULT 'md',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_layout_section" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"columns" "enum__pages_v_blocks_layout_section_columns" DEFAULT '2',
  	"vertical_align" "enum__pages_v_blocks_layout_section_vertical_align" DEFAULT 'center',
  	"gap" "enum__pages_v_blocks_layout_section_gap" DEFAULT 'md',
  	"background" "enum__pages_v_blocks_layout_section_background" DEFAULT 'white',
  	"padding" "enum__pages_v_blocks_layout_section_padding" DEFAULT 'md',
  	"width" "enum__pages_v_blocks_layout_section_width" DEFAULT 'default',
  	"background_image_id" integer,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_slug" varchar,
  	"version_meta_image_id" integer,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__pages_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"snapshot" boolean,
  	"published_locale" "enum__pages_v_published_locale",
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE "_pages_v_locales" (
  	"version_title" varchar,
  	"version_meta_title" varchar,
  	"version_meta_description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_texts" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"text" varchar,
  	"locale" "_locales"
  );
  
  CREATE TABLE "_pages_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"features_id" integer,
  	"solutions_id" integer,
  	"partners_id" integer
  );
  
  CREATE TABLE "media" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"display_name" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"url" varchar,
  	"thumbnail_u_r_l" varchar,
  	"filename" varchar,
  	"mime_type" varchar,
  	"filesize" numeric,
  	"width" numeric,
  	"height" numeric,
  	"focal_x" numeric,
  	"focal_y" numeric,
  	"sizes_thumbnail_url" varchar,
  	"sizes_thumbnail_width" numeric,
  	"sizes_thumbnail_height" numeric,
  	"sizes_thumbnail_mime_type" varchar,
  	"sizes_thumbnail_filesize" numeric,
  	"sizes_thumbnail_filename" varchar,
  	"sizes_card_url" varchar,
  	"sizes_card_width" numeric,
  	"sizes_card_height" numeric,
  	"sizes_card_mime_type" varchar,
  	"sizes_card_filesize" numeric,
  	"sizes_card_filename" varchar,
  	"sizes_hero_url" varchar,
  	"sizes_hero_width" numeric,
  	"sizes_hero_height" numeric,
  	"sizes_hero_mime_type" varchar,
  	"sizes_hero_filesize" numeric,
  	"sizes_hero_filename" varchar
  );
  
  CREATE TABLE "media_locales" (
  	"alt" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "partners" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"_order" varchar,
  	"name" varchar,
  	"website" varchar,
  	"show_in_hero" boolean DEFAULT true,
  	"logo_id" integer,
  	"logo_hover_id" integer,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_partners_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "partners_locales" (
  	"description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_partners_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version__order" varchar,
  	"version_name" varchar,
  	"version_website" varchar,
  	"version_show_in_hero" boolean DEFAULT true,
  	"version_logo_id" integer,
  	"version_logo_hover_id" integer,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__partners_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"snapshot" boolean,
  	"published_locale" "enum__partners_v_published_locale",
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE "_partners_v_locales" (
  	"version_description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "solutions_pains" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "solutions_pains_locales" (
  	"title" varchar,
  	"description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "solutions_points" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"feature_id" integer
  );
  
  CREATE TABLE "solutions_points_locales" (
  	"title" varchar,
  	"description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "solutions_faqs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "solutions_faqs_locales" (
  	"question" varchar,
  	"answer" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "solutions" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"_order" varchar,
  	"type" "enum_solutions_type" DEFAULT 'industry',
  	"show_on_home" boolean DEFAULT false,
  	"slug" varchar,
  	"meta_image_id" integer,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_solutions_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "solutions_locales" (
  	"name" varchar,
  	"tagline" varchar,
  	"hero_title" varchar,
  	"hero_description" varchar,
  	"meta_title" varchar,
  	"meta_description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_solutions_v_version_pains" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_solutions_v_version_pains_locales" (
  	"title" varchar,
  	"description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_solutions_v_version_points" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"feature_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_solutions_v_version_points_locales" (
  	"title" varchar,
  	"description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_solutions_v_version_faqs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_solutions_v_version_faqs_locales" (
  	"question" varchar,
  	"answer" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_solutions_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version__order" varchar,
  	"version_type" "enum__solutions_v_version_type" DEFAULT 'industry',
  	"version_show_on_home" boolean DEFAULT false,
  	"version_slug" varchar,
  	"version_meta_image_id" integer,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__solutions_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"snapshot" boolean,
  	"published_locale" "enum__solutions_v_published_locale",
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE "_solutions_v_locales" (
  	"version_name" varchar,
  	"version_tagline" varchar,
  	"version_hero_title" varchar,
  	"version_hero_description" varchar,
  	"version_meta_title" varchar,
  	"version_meta_description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "features_benefits" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "features_benefits_locales" (
  	"title" varchar,
  	"description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "features_blocks_points" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "features_blocks_points_locales" (
  	"text" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "features_blocks" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "features_blocks_locales" (
  	"title" varchar,
  	"description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "features_mock_rows" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "features_mock_rows_locales" (
  	"label" varchar,
  	"detail" varchar,
  	"status" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "features_faqs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "features_faqs_locales" (
  	"question" varchar,
  	"answer" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "features" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"_order" varchar,
  	"category" "enum_features_category",
  	"availability" "enum_features_availability" DEFAULT 'available',
  	"slug" varchar,
  	"mock_screen_id" integer,
  	"meta_image_id" integer,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_features_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "features_locales" (
  	"name" varchar,
  	"short_description" varchar,
  	"hero_title" varchar,
  	"hero_description" varchar,
  	"mock_title" varchar,
  	"meta_title" varchar,
  	"meta_description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "features_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"features_id" integer
  );
  
  CREATE TABLE "_features_v_version_benefits" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_features_v_version_benefits_locales" (
  	"title" varchar,
  	"description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_features_v_version_blocks_points" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_features_v_version_blocks_points_locales" (
  	"text" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_features_v_version_blocks" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_features_v_version_blocks_locales" (
  	"title" varchar,
  	"description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_features_v_version_mock_rows" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_features_v_version_mock_rows_locales" (
  	"label" varchar,
  	"detail" varchar,
  	"status" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_features_v_version_faqs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_features_v_version_faqs_locales" (
  	"question" varchar,
  	"answer" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_features_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version__order" varchar,
  	"version_category" "enum__features_v_version_category",
  	"version_availability" "enum__features_v_version_availability" DEFAULT 'available',
  	"version_slug" varchar,
  	"version_mock_screen_id" integer,
  	"version_meta_image_id" integer,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__features_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"snapshot" boolean,
  	"published_locale" "enum__features_v_published_locale",
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE "_features_v_locales" (
  	"version_name" varchar,
  	"version_short_description" varchar,
  	"version_hero_title" varchar,
  	"version_hero_description" varchar,
  	"version_mock_title" varchar,
  	"version_meta_title" varchar,
  	"version_meta_description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_features_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"features_id" integer
  );
  
  CREATE TABLE "contact_submissions" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"status" "enum_contact_submissions_status" DEFAULT 'new',
  	"full_name" varchar NOT NULL,
  	"organization" varchar NOT NULL,
  	"email" varchar NOT NULL,
  	"phone" varchar NOT NULL,
  	"employee_count" varchar,
  	"industry" varchar,
  	"interest" varchar,
  	"message" varchar,
  	"internal_notes" varchar,
  	"meta_ip" varchar,
  	"meta_user_agent" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "users_roles" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum_users_roles",
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "users_sessions" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"created_at" timestamp(3) with time zone,
  	"expires_at" timestamp(3) with time zone NOT NULL
  );
  
  CREATE TABLE "users" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"totp_enabled" boolean DEFAULT false,
  	"tutorial_seen" numeric,
  	"two_factor" jsonb,
  	"name" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"email" varchar NOT NULL,
  	"reset_password_token" varchar,
  	"reset_password_expiration" timestamp(3) with time zone,
  	"salt" varchar,
  	"hash" varchar,
  	"reset_password_requested_at" timestamp(3) with time zone,
  	"login_attempts" numeric DEFAULT 0,
  	"lock_until" timestamp(3) with time zone
  );
  
  CREATE TABLE "audit_logs" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"action" "enum_audit_logs_action" NOT NULL,
  	"resource" varchar NOT NULL,
  	"document_id" varchar,
  	"user_id" integer,
  	"ip" varchar,
  	"user_agent" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "audit_logs_texts" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "payload_kv" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar NOT NULL,
  	"data" jsonb NOT NULL
  );
  
  CREATE TABLE "payload_jobs_log" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"executed_at" timestamp(3) with time zone NOT NULL,
  	"completed_at" timestamp(3) with time zone NOT NULL,
  	"task_slug" "enum_payload_jobs_log_task_slug" NOT NULL,
  	"task_i_d" varchar NOT NULL,
  	"input" jsonb,
  	"output" jsonb,
  	"state" "enum_payload_jobs_log_state" NOT NULL,
  	"error" jsonb
  );
  
  CREATE TABLE "payload_jobs" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"input" jsonb,
  	"completed_at" timestamp(3) with time zone,
  	"total_tried" numeric DEFAULT 0,
  	"has_error" boolean DEFAULT false,
  	"error" jsonb,
  	"task_slug" "enum_payload_jobs_task_slug",
  	"queue" varchar DEFAULT 'default',
  	"wait_until" timestamp(3) with time zone,
  	"processing" boolean DEFAULT false,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_locked_documents" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"global_slug" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_locked_documents_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"media_id" integer,
  	"partners_id" integer,
  	"solutions_id" integer,
  	"features_id" integer,
  	"contact_submissions_id" integer,
  	"users_id" integer,
  	"audit_logs_id" integer
  );
  
  CREATE TABLE "payload_preferences" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar,
  	"value" jsonb,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_preferences_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer
  );
  
  CREATE TABLE "payload_migrations" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"batch" numeric,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "site_settings_socials" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"platform" "enum_site_settings_socials_platform" DEFAULT 'other',
  	"url" varchar,
  	"icon_id" integer
  );
  
  CREATE TABLE "site_settings_socials_locales" (
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "site_settings" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"logo_id" integer,
  	"contact_latitude" numeric,
  	"contact_longitude" numeric,
  	"contact_email" varchar,
  	"contact_phone" varchar,
  	"contact_whatsapp_number" varchar,
  	"email_notifications_enabled" boolean DEFAULT true,
  	"email_notifications_from_name" varchar DEFAULT 'HRIS Website',
  	"email_notifications_from_email" varchar DEFAULT 'noreply@falahtech.co.id',
  	"email_notifications_subject" varchar DEFAULT 'Konsultasi baru dari {name} ({organization})',
  	"_status" "enum_site_settings_status" DEFAULT 'draft',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "site_settings_locales" (
  	"site_name" varchar,
  	"site_description" varchar,
  	"contact_address" varchar,
  	"contact_short_address" varchar,
  	"contact_whatsapp_message" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_site_settings_v_version_socials" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"platform" "enum__site_settings_v_version_socials_platform" DEFAULT 'other',
  	"url" varchar,
  	"icon_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_site_settings_v_version_socials_locales" (
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_site_settings_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"version_logo_id" integer,
  	"version_contact_latitude" numeric,
  	"version_contact_longitude" numeric,
  	"version_contact_email" varchar,
  	"version_contact_phone" varchar,
  	"version_contact_whatsapp_number" varchar,
  	"version_email_notifications_enabled" boolean DEFAULT true,
  	"version_email_notifications_from_name" varchar DEFAULT 'HRIS Website',
  	"version_email_notifications_from_email" varchar DEFAULT 'noreply@falahtech.co.id',
  	"version_email_notifications_subject" varchar DEFAULT 'Konsultasi baru dari {name} ({organization})',
  	"version__status" "enum__site_settings_v_version_status" DEFAULT 'draft',
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"snapshot" boolean,
  	"published_locale" "enum__site_settings_v_published_locale",
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE "_site_settings_v_locales" (
  	"version_site_name" varchar,
  	"version_site_description" varchar,
  	"version_contact_address" varchar,
  	"version_contact_short_address" varchar,
  	"version_contact_whatsapp_message" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "navigation_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"href" varchar,
  	"visible" boolean DEFAULT true
  );
  
  CREATE TABLE "navigation_links_locales" (
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "navigation_link_library_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "navigation_link_library_links_locales" (
  	"label" varchar,
  	"target" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "navigation_link_library" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "navigation_link_library_locales" (
  	"group" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "navigation" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"cta_href" varchar,
  	"_status" "enum_navigation_status" DEFAULT 'draft',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "navigation_locales" (
  	"features_label" varchar DEFAULT 'Fitur',
  	"solutions_label" varchar DEFAULT 'Solusi',
  	"cta_label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_navigation_v_version_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"href" varchar,
  	"visible" boolean DEFAULT true,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_navigation_v_version_links_locales" (
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_navigation_v_version_link_library_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_navigation_v_version_link_library_links_locales" (
  	"label" varchar,
  	"target" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_navigation_v_version_link_library" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_navigation_v_version_link_library_locales" (
  	"group" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_navigation_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"version_cta_href" varchar,
  	"version__status" "enum__navigation_v_version_status" DEFAULT 'draft',
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"snapshot" boolean,
  	"published_locale" "enum__navigation_v_published_locale",
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE "_navigation_v_locales" (
  	"version_features_label" varchar DEFAULT 'Fitur',
  	"version_solutions_label" varchar DEFAULT 'Solusi',
  	"version_cta_label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "footer_columns_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"href" varchar
  );
  
  CREATE TABLE "footer_columns_links_locales" (
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "footer_columns" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "footer_columns_locales" (
  	"title" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "footer" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"_status" "enum_footer_status" DEFAULT 'draft',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "footer_locales" (
  	"description" varchar,
  	"copyright" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_footer_v_version_columns_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"href" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_footer_v_version_columns_links_locales" (
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_footer_v_version_columns" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_footer_v_version_columns_locales" (
  	"title" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_footer_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"version__status" "enum__footer_v_version_status" DEFAULT 'draft',
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"snapshot" boolean,
  	"published_locale" "enum__footer_v_published_locale",
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE "_footer_v_locales" (
  	"version_description" varchar,
  	"version_copyright" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "tutorial" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"version" numeric DEFAULT 1,
  	"enabled" boolean DEFAULT true,
  	"steps" jsonb,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  ALTER TABLE "pages_blocks_hero_buttons" ADD CONSTRAINT "pages_blocks_hero_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_hero"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_hero_buttons_locales" ADD CONSTRAINT "pages_blocks_hero_buttons_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_hero_buttons"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_hero_mockup_approvals" ADD CONSTRAINT "pages_blocks_hero_mockup_approvals_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_hero"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_hero_mockup_approvals_locales" ADD CONSTRAINT "pages_blocks_hero_mockup_approvals_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_hero_mockup_approvals"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_hero_mockup_phone_chips" ADD CONSTRAINT "pages_blocks_hero_mockup_phone_chips_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_hero"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_hero_mockup_phone_chips_locales" ADD CONSTRAINT "pages_blocks_hero_mockup_phone_chips_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_hero_mockup_phone_chips"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_hero_trust_points" ADD CONSTRAINT "pages_blocks_hero_trust_points_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_hero"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_hero_trust_points_locales" ADD CONSTRAINT "pages_blocks_hero_trust_points_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_hero_trust_points"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_hero_visual_rows" ADD CONSTRAINT "pages_blocks_hero_visual_rows_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_hero"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_hero_visual_rows_locales" ADD CONSTRAINT "pages_blocks_hero_visual_rows_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_hero_visual_rows"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_hero" ADD CONSTRAINT "pages_blocks_hero_mockup_phone_screen_id_media_id_fk" FOREIGN KEY ("mockup_phone_screen_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_hero" ADD CONSTRAINT "pages_blocks_hero_visual_screen_id_media_id_fk" FOREIGN KEY ("visual_screen_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_hero" ADD CONSTRAINT "pages_blocks_hero_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_hero_locales" ADD CONSTRAINT "pages_blocks_hero_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_hero"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_feature_band_buttons" ADD CONSTRAINT "pages_blocks_feature_band_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_feature_band"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_feature_band_buttons_locales" ADD CONSTRAINT "pages_blocks_feature_band_buttons_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_feature_band_buttons"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_feature_band_chips" ADD CONSTRAINT "pages_blocks_feature_band_chips_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_feature_band"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_feature_band_chips_locales" ADD CONSTRAINT "pages_blocks_feature_band_chips_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_feature_band_chips"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_feature_band_items" ADD CONSTRAINT "pages_blocks_feature_band_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_feature_band"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_feature_band_items_locales" ADD CONSTRAINT "pages_blocks_feature_band_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_feature_band_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_feature_band" ADD CONSTRAINT "pages_blocks_feature_band_screen_image_id_media_id_fk" FOREIGN KEY ("screen_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_feature_band" ADD CONSTRAINT "pages_blocks_feature_band_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_feature_band_locales" ADD CONSTRAINT "pages_blocks_feature_band_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_feature_band"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_requests_board_buttons" ADD CONSTRAINT "pages_blocks_requests_board_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_requests_board"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_requests_board_buttons_locales" ADD CONSTRAINT "pages_blocks_requests_board_buttons_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_requests_board_buttons"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_requests_board_cards" ADD CONSTRAINT "pages_blocks_requests_board_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_requests_board"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_requests_board_cards_locales" ADD CONSTRAINT "pages_blocks_requests_board_cards_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_requests_board_cards"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_requests_board_strip_items" ADD CONSTRAINT "pages_blocks_requests_board_strip_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_requests_board"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_requests_board_strip_items_locales" ADD CONSTRAINT "pages_blocks_requests_board_strip_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_requests_board_strip_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_requests_board" ADD CONSTRAINT "pages_blocks_requests_board_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_requests_board_locales" ADD CONSTRAINT "pages_blocks_requests_board_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_requests_board"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_modules_map" ADD CONSTRAINT "pages_blocks_modules_map_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_modules_map_locales" ADD CONSTRAINT "pages_blocks_modules_map_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_modules_map"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_industries" ADD CONSTRAINT "pages_blocks_industries_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_industries_locales" ADD CONSTRAINT "pages_blocks_industries_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_industries"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_testimonials_items" ADD CONSTRAINT "pages_blocks_testimonials_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_testimonials"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_testimonials_items_locales" ADD CONSTRAINT "pages_blocks_testimonials_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_testimonials_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_testimonials" ADD CONSTRAINT "pages_blocks_testimonials_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_testimonials_locales" ADD CONSTRAINT "pages_blocks_testimonials_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_testimonials"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_pricing_plans_features" ADD CONSTRAINT "pages_blocks_pricing_plans_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_pricing_plans"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_pricing_plans_features_locales" ADD CONSTRAINT "pages_blocks_pricing_plans_features_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_pricing_plans_features"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_pricing_plans" ADD CONSTRAINT "pages_blocks_pricing_plans_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_pricing"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_pricing_plans_locales" ADD CONSTRAINT "pages_blocks_pricing_plans_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_pricing_plans"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_pricing_matrix_groups_points" ADD CONSTRAINT "pages_blocks_pricing_matrix_groups_points_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_pricing_matrix_groups"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_pricing_matrix_groups_points_locales" ADD CONSTRAINT "pages_blocks_pricing_matrix_groups_points_locales_parent__fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_pricing_matrix_groups_points"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_pricing_matrix_groups_cells" ADD CONSTRAINT "pages_blocks_pricing_matrix_groups_cells_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_pricing_matrix_groups"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_pricing_matrix_groups_cells_locales" ADD CONSTRAINT "pages_blocks_pricing_matrix_groups_cells_locales_parent_i_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_pricing_matrix_groups_cells"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_pricing_matrix_groups" ADD CONSTRAINT "pages_blocks_pricing_matrix_groups_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_pricing_matrix"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_pricing_matrix_groups_locales" ADD CONSTRAINT "pages_blocks_pricing_matrix_groups_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_pricing_matrix_groups"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_pricing_matrix" ADD CONSTRAINT "pages_blocks_pricing_matrix_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_pricing"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_pricing_matrix_locales" ADD CONSTRAINT "pages_blocks_pricing_matrix_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_pricing_matrix"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_pricing_points" ADD CONSTRAINT "pages_blocks_pricing_points_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_pricing"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_pricing_points_locales" ADD CONSTRAINT "pages_blocks_pricing_points_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_pricing_points"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_pricing_buttons" ADD CONSTRAINT "pages_blocks_pricing_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_pricing"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_pricing_buttons_locales" ADD CONSTRAINT "pages_blocks_pricing_buttons_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_pricing_buttons"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_pricing" ADD CONSTRAINT "pages_blocks_pricing_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_pricing_locales" ADD CONSTRAINT "pages_blocks_pricing_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_pricing"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_faq_items" ADD CONSTRAINT "pages_blocks_faq_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_faq"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_faq_items_locales" ADD CONSTRAINT "pages_blocks_faq_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_faq_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_faq" ADD CONSTRAINT "pages_blocks_faq_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_faq_locales" ADD CONSTRAINT "pages_blocks_faq_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_faq"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_cta_buttons" ADD CONSTRAINT "pages_blocks_cta_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_cta"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_cta_buttons_locales" ADD CONSTRAINT "pages_blocks_cta_buttons_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_cta_buttons"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_cta_guarantees" ADD CONSTRAINT "pages_blocks_cta_guarantees_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_cta"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_cta_guarantees_locales" ADD CONSTRAINT "pages_blocks_cta_guarantees_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_cta_guarantees"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_cta" ADD CONSTRAINT "pages_blocks_cta_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_cta_locales" ADD CONSTRAINT "pages_blocks_cta_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_cta"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_section_visual_rows" ADD CONSTRAINT "pages_blocks_section_visual_rows_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_section"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_section_visual_rows_locales" ADD CONSTRAINT "pages_blocks_section_visual_rows_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_section_visual_rows"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_section_items" ADD CONSTRAINT "pages_blocks_section_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_section"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_section_items_locales" ADD CONSTRAINT "pages_blocks_section_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_section_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_section" ADD CONSTRAINT "pages_blocks_section_visual_screen_id_media_id_fk" FOREIGN KEY ("visual_screen_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_section" ADD CONSTRAINT "pages_blocks_section_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_section_locales" ADD CONSTRAINT "pages_blocks_section_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_section"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_feature_catalog" ADD CONSTRAINT "pages_blocks_feature_catalog_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_feature_catalog_locales" ADD CONSTRAINT "pages_blocks_feature_catalog_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_feature_catalog"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_solution_catalog" ADD CONSTRAINT "pages_blocks_solution_catalog_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_solution_catalog_locales" ADD CONSTRAINT "pages_blocks_solution_catalog_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_solution_catalog"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_tools_list" ADD CONSTRAINT "pages_blocks_tools_list_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_tools_list_locales" ADD CONSTRAINT "pages_blocks_tools_list_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_tools_list"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_contact_form_visual_rows" ADD CONSTRAINT "pages_blocks_contact_form_visual_rows_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_contact_form"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_contact_form_visual_rows_locales" ADD CONSTRAINT "pages_blocks_contact_form_visual_rows_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_contact_form_visual_rows"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_contact_form" ADD CONSTRAINT "pages_blocks_contact_form_visual_screen_id_media_id_fk" FOREIGN KEY ("visual_screen_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_contact_form" ADD CONSTRAINT "pages_blocks_contact_form_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_contact_form_locales" ADD CONSTRAINT "pages_blocks_contact_form_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_contact_form"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_text_sections_sections" ADD CONSTRAINT "pages_blocks_text_sections_sections_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_text_sections"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_text_sections_sections_locales" ADD CONSTRAINT "pages_blocks_text_sections_sections_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_text_sections_sections"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_text_sections" ADD CONSTRAINT "pages_blocks_text_sections_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_feature_grid_items" ADD CONSTRAINT "pages_blocks_feature_grid_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_feature_grid"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_feature_grid_items_locales" ADD CONSTRAINT "pages_blocks_feature_grid_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_feature_grid_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_feature_grid" ADD CONSTRAINT "pages_blocks_feature_grid_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_feature_grid_locales" ADD CONSTRAINT "pages_blocks_feature_grid_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_feature_grid"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_workflow_steps" ADD CONSTRAINT "pages_blocks_workflow_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_workflow"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_workflow_steps_locales" ADD CONSTRAINT "pages_blocks_workflow_steps_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_workflow_steps"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_workflow" ADD CONSTRAINT "pages_blocks_workflow_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_workflow_locales" ADD CONSTRAINT "pages_blocks_workflow_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_workflow"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_promo_bento_cards" ADD CONSTRAINT "pages_blocks_promo_bento_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_promo_bento"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_promo_bento_cards_locales" ADD CONSTRAINT "pages_blocks_promo_bento_cards_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_promo_bento_cards"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_promo_bento" ADD CONSTRAINT "pages_blocks_promo_bento_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_promo_bento_locales" ADD CONSTRAINT "pages_blocks_promo_bento_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_promo_bento"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_partners" ADD CONSTRAINT "pages_blocks_partners_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_partners_locales" ADD CONSTRAINT "pages_blocks_partners_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_partners"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_badge" ADD CONSTRAINT "pages_blocks_badge_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_badge_locales" ADD CONSTRAINT "pages_blocks_badge_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_badge"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_heading" ADD CONSTRAINT "pages_blocks_heading_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_heading_locales" ADD CONSTRAINT "pages_blocks_heading_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_heading"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_paragraph" ADD CONSTRAINT "pages_blocks_paragraph_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_paragraph_locales" ADD CONSTRAINT "pages_blocks_paragraph_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_paragraph"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_image" ADD CONSTRAINT "pages_blocks_image_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_image" ADD CONSTRAINT "pages_blocks_image_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_image_locales" ADD CONSTRAINT "pages_blocks_image_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_image"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_button" ADD CONSTRAINT "pages_blocks_button_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_button_locales" ADD CONSTRAINT "pages_blocks_button_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_button"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_card" ADD CONSTRAINT "pages_blocks_card_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_card" ADD CONSTRAINT "pages_blocks_card_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_card_locales" ADD CONSTRAINT "pages_blocks_card_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_card"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_spacer" ADD CONSTRAINT "pages_blocks_spacer_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_layout_section" ADD CONSTRAINT "pages_blocks_layout_section_background_image_id_media_id_fk" FOREIGN KEY ("background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_layout_section" ADD CONSTRAINT "pages_blocks_layout_section_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages" ADD CONSTRAINT "pages_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_locales" ADD CONSTRAINT "pages_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_texts" ADD CONSTRAINT "pages_texts_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_features_fk" FOREIGN KEY ("features_id") REFERENCES "public"."features"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_solutions_fk" FOREIGN KEY ("solutions_id") REFERENCES "public"."solutions"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_partners_fk" FOREIGN KEY ("partners_id") REFERENCES "public"."partners"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_hero_buttons" ADD CONSTRAINT "_pages_v_blocks_hero_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_hero"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_hero_buttons_locales" ADD CONSTRAINT "_pages_v_blocks_hero_buttons_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_hero_buttons"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_hero_mockup_approvals" ADD CONSTRAINT "_pages_v_blocks_hero_mockup_approvals_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_hero"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_hero_mockup_approvals_locales" ADD CONSTRAINT "_pages_v_blocks_hero_mockup_approvals_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_hero_mockup_approvals"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_hero_mockup_phone_chips" ADD CONSTRAINT "_pages_v_blocks_hero_mockup_phone_chips_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_hero"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_hero_mockup_phone_chips_locales" ADD CONSTRAINT "_pages_v_blocks_hero_mockup_phone_chips_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_hero_mockup_phone_chips"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_hero_trust_points" ADD CONSTRAINT "_pages_v_blocks_hero_trust_points_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_hero"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_hero_trust_points_locales" ADD CONSTRAINT "_pages_v_blocks_hero_trust_points_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_hero_trust_points"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_hero_visual_rows" ADD CONSTRAINT "_pages_v_blocks_hero_visual_rows_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_hero"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_hero_visual_rows_locales" ADD CONSTRAINT "_pages_v_blocks_hero_visual_rows_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_hero_visual_rows"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_hero" ADD CONSTRAINT "_pages_v_blocks_hero_mockup_phone_screen_id_media_id_fk" FOREIGN KEY ("mockup_phone_screen_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_hero" ADD CONSTRAINT "_pages_v_blocks_hero_visual_screen_id_media_id_fk" FOREIGN KEY ("visual_screen_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_hero" ADD CONSTRAINT "_pages_v_blocks_hero_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_hero_locales" ADD CONSTRAINT "_pages_v_blocks_hero_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_hero"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_feature_band_buttons" ADD CONSTRAINT "_pages_v_blocks_feature_band_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_feature_band"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_feature_band_buttons_locales" ADD CONSTRAINT "_pages_v_blocks_feature_band_buttons_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_feature_band_buttons"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_feature_band_chips" ADD CONSTRAINT "_pages_v_blocks_feature_band_chips_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_feature_band"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_feature_band_chips_locales" ADD CONSTRAINT "_pages_v_blocks_feature_band_chips_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_feature_band_chips"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_feature_band_items" ADD CONSTRAINT "_pages_v_blocks_feature_band_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_feature_band"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_feature_band_items_locales" ADD CONSTRAINT "_pages_v_blocks_feature_band_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_feature_band_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_feature_band" ADD CONSTRAINT "_pages_v_blocks_feature_band_screen_image_id_media_id_fk" FOREIGN KEY ("screen_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_feature_band" ADD CONSTRAINT "_pages_v_blocks_feature_band_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_feature_band_locales" ADD CONSTRAINT "_pages_v_blocks_feature_band_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_feature_band"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_requests_board_buttons" ADD CONSTRAINT "_pages_v_blocks_requests_board_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_requests_board"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_requests_board_buttons_locales" ADD CONSTRAINT "_pages_v_blocks_requests_board_buttons_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_requests_board_buttons"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_requests_board_cards" ADD CONSTRAINT "_pages_v_blocks_requests_board_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_requests_board"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_requests_board_cards_locales" ADD CONSTRAINT "_pages_v_blocks_requests_board_cards_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_requests_board_cards"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_requests_board_strip_items" ADD CONSTRAINT "_pages_v_blocks_requests_board_strip_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_requests_board"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_requests_board_strip_items_locales" ADD CONSTRAINT "_pages_v_blocks_requests_board_strip_items_locales_parent_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_requests_board_strip_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_requests_board" ADD CONSTRAINT "_pages_v_blocks_requests_board_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_requests_board_locales" ADD CONSTRAINT "_pages_v_blocks_requests_board_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_requests_board"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_modules_map" ADD CONSTRAINT "_pages_v_blocks_modules_map_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_modules_map_locales" ADD CONSTRAINT "_pages_v_blocks_modules_map_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_modules_map"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_industries" ADD CONSTRAINT "_pages_v_blocks_industries_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_industries_locales" ADD CONSTRAINT "_pages_v_blocks_industries_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_industries"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_testimonials_items" ADD CONSTRAINT "_pages_v_blocks_testimonials_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_testimonials"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_testimonials_items_locales" ADD CONSTRAINT "_pages_v_blocks_testimonials_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_testimonials_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_testimonials" ADD CONSTRAINT "_pages_v_blocks_testimonials_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_testimonials_locales" ADD CONSTRAINT "_pages_v_blocks_testimonials_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_testimonials"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_pricing_plans_features" ADD CONSTRAINT "_pages_v_blocks_pricing_plans_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_pricing_plans"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_pricing_plans_features_locales" ADD CONSTRAINT "_pages_v_blocks_pricing_plans_features_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_pricing_plans_features"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_pricing_plans" ADD CONSTRAINT "_pages_v_blocks_pricing_plans_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_pricing"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_pricing_plans_locales" ADD CONSTRAINT "_pages_v_blocks_pricing_plans_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_pricing_plans"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_pricing_matrix_groups_points" ADD CONSTRAINT "_pages_v_blocks_pricing_matrix_groups_points_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_pricing_matrix_groups"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_pricing_matrix_groups_points_locales" ADD CONSTRAINT "_pages_v_blocks_pricing_matrix_groups_points_locales_pare_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_pricing_matrix_groups_points"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_pricing_matrix_groups_cells" ADD CONSTRAINT "_pages_v_blocks_pricing_matrix_groups_cells_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_pricing_matrix_groups"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_pricing_matrix_groups_cells_locales" ADD CONSTRAINT "_pages_v_blocks_pricing_matrix_groups_cells_locales_paren_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_pricing_matrix_groups_cells"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_pricing_matrix_groups" ADD CONSTRAINT "_pages_v_blocks_pricing_matrix_groups_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_pricing_matrix"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_pricing_matrix_groups_locales" ADD CONSTRAINT "_pages_v_blocks_pricing_matrix_groups_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_pricing_matrix_groups"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_pricing_matrix" ADD CONSTRAINT "_pages_v_blocks_pricing_matrix_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_pricing"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_pricing_matrix_locales" ADD CONSTRAINT "_pages_v_blocks_pricing_matrix_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_pricing_matrix"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_pricing_points" ADD CONSTRAINT "_pages_v_blocks_pricing_points_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_pricing"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_pricing_points_locales" ADD CONSTRAINT "_pages_v_blocks_pricing_points_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_pricing_points"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_pricing_buttons" ADD CONSTRAINT "_pages_v_blocks_pricing_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_pricing"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_pricing_buttons_locales" ADD CONSTRAINT "_pages_v_blocks_pricing_buttons_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_pricing_buttons"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_pricing" ADD CONSTRAINT "_pages_v_blocks_pricing_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_pricing_locales" ADD CONSTRAINT "_pages_v_blocks_pricing_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_pricing"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_faq_items" ADD CONSTRAINT "_pages_v_blocks_faq_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_faq"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_faq_items_locales" ADD CONSTRAINT "_pages_v_blocks_faq_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_faq_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_faq" ADD CONSTRAINT "_pages_v_blocks_faq_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_faq_locales" ADD CONSTRAINT "_pages_v_blocks_faq_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_faq"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_cta_buttons" ADD CONSTRAINT "_pages_v_blocks_cta_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_cta"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_cta_buttons_locales" ADD CONSTRAINT "_pages_v_blocks_cta_buttons_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_cta_buttons"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_cta_guarantees" ADD CONSTRAINT "_pages_v_blocks_cta_guarantees_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_cta"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_cta_guarantees_locales" ADD CONSTRAINT "_pages_v_blocks_cta_guarantees_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_cta_guarantees"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_cta" ADD CONSTRAINT "_pages_v_blocks_cta_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_cta_locales" ADD CONSTRAINT "_pages_v_blocks_cta_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_cta"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_section_visual_rows" ADD CONSTRAINT "_pages_v_blocks_section_visual_rows_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_section"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_section_visual_rows_locales" ADD CONSTRAINT "_pages_v_blocks_section_visual_rows_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_section_visual_rows"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_section_items" ADD CONSTRAINT "_pages_v_blocks_section_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_section"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_section_items_locales" ADD CONSTRAINT "_pages_v_blocks_section_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_section_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_section" ADD CONSTRAINT "_pages_v_blocks_section_visual_screen_id_media_id_fk" FOREIGN KEY ("visual_screen_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_section" ADD CONSTRAINT "_pages_v_blocks_section_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_section_locales" ADD CONSTRAINT "_pages_v_blocks_section_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_section"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_feature_catalog" ADD CONSTRAINT "_pages_v_blocks_feature_catalog_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_feature_catalog_locales" ADD CONSTRAINT "_pages_v_blocks_feature_catalog_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_feature_catalog"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_solution_catalog" ADD CONSTRAINT "_pages_v_blocks_solution_catalog_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_solution_catalog_locales" ADD CONSTRAINT "_pages_v_blocks_solution_catalog_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_solution_catalog"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_tools_list" ADD CONSTRAINT "_pages_v_blocks_tools_list_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_tools_list_locales" ADD CONSTRAINT "_pages_v_blocks_tools_list_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_tools_list"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_contact_form_visual_rows" ADD CONSTRAINT "_pages_v_blocks_contact_form_visual_rows_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_contact_form"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_contact_form_visual_rows_locales" ADD CONSTRAINT "_pages_v_blocks_contact_form_visual_rows_locales_parent_i_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_contact_form_visual_rows"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_contact_form" ADD CONSTRAINT "_pages_v_blocks_contact_form_visual_screen_id_media_id_fk" FOREIGN KEY ("visual_screen_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_contact_form" ADD CONSTRAINT "_pages_v_blocks_contact_form_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_contact_form_locales" ADD CONSTRAINT "_pages_v_blocks_contact_form_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_contact_form"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_text_sections_sections" ADD CONSTRAINT "_pages_v_blocks_text_sections_sections_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_text_sections"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_text_sections_sections_locales" ADD CONSTRAINT "_pages_v_blocks_text_sections_sections_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_text_sections_sections"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_text_sections" ADD CONSTRAINT "_pages_v_blocks_text_sections_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_feature_grid_items" ADD CONSTRAINT "_pages_v_blocks_feature_grid_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_feature_grid"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_feature_grid_items_locales" ADD CONSTRAINT "_pages_v_blocks_feature_grid_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_feature_grid_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_feature_grid" ADD CONSTRAINT "_pages_v_blocks_feature_grid_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_feature_grid_locales" ADD CONSTRAINT "_pages_v_blocks_feature_grid_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_feature_grid"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_workflow_steps" ADD CONSTRAINT "_pages_v_blocks_workflow_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_workflow"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_workflow_steps_locales" ADD CONSTRAINT "_pages_v_blocks_workflow_steps_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_workflow_steps"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_workflow" ADD CONSTRAINT "_pages_v_blocks_workflow_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_workflow_locales" ADD CONSTRAINT "_pages_v_blocks_workflow_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_workflow"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_promo_bento_cards" ADD CONSTRAINT "_pages_v_blocks_promo_bento_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_promo_bento"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_promo_bento_cards_locales" ADD CONSTRAINT "_pages_v_blocks_promo_bento_cards_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_promo_bento_cards"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_promo_bento" ADD CONSTRAINT "_pages_v_blocks_promo_bento_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_promo_bento_locales" ADD CONSTRAINT "_pages_v_blocks_promo_bento_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_promo_bento"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_partners" ADD CONSTRAINT "_pages_v_blocks_partners_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_partners_locales" ADD CONSTRAINT "_pages_v_blocks_partners_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_partners"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_badge" ADD CONSTRAINT "_pages_v_blocks_badge_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_badge_locales" ADD CONSTRAINT "_pages_v_blocks_badge_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_badge"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_heading" ADD CONSTRAINT "_pages_v_blocks_heading_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_heading_locales" ADD CONSTRAINT "_pages_v_blocks_heading_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_heading"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_paragraph" ADD CONSTRAINT "_pages_v_blocks_paragraph_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_paragraph_locales" ADD CONSTRAINT "_pages_v_blocks_paragraph_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_paragraph"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_image" ADD CONSTRAINT "_pages_v_blocks_image_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_image" ADD CONSTRAINT "_pages_v_blocks_image_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_image_locales" ADD CONSTRAINT "_pages_v_blocks_image_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_image"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_button" ADD CONSTRAINT "_pages_v_blocks_button_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_button_locales" ADD CONSTRAINT "_pages_v_blocks_button_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_button"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_card" ADD CONSTRAINT "_pages_v_blocks_card_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_card" ADD CONSTRAINT "_pages_v_blocks_card_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_card_locales" ADD CONSTRAINT "_pages_v_blocks_card_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_card"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_spacer" ADD CONSTRAINT "_pages_v_blocks_spacer_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_layout_section" ADD CONSTRAINT "_pages_v_blocks_layout_section_background_image_id_media_id_fk" FOREIGN KEY ("background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_layout_section" ADD CONSTRAINT "_pages_v_blocks_layout_section_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_parent_id_pages_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_locales" ADD CONSTRAINT "_pages_v_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_texts" ADD CONSTRAINT "_pages_v_texts_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_features_fk" FOREIGN KEY ("features_id") REFERENCES "public"."features"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_solutions_fk" FOREIGN KEY ("solutions_id") REFERENCES "public"."solutions"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_partners_fk" FOREIGN KEY ("partners_id") REFERENCES "public"."partners"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "media_locales" ADD CONSTRAINT "media_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "partners" ADD CONSTRAINT "partners_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "partners" ADD CONSTRAINT "partners_logo_hover_id_media_id_fk" FOREIGN KEY ("logo_hover_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "partners_locales" ADD CONSTRAINT "partners_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."partners"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_partners_v" ADD CONSTRAINT "_partners_v_parent_id_partners_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."partners"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_partners_v" ADD CONSTRAINT "_partners_v_version_logo_id_media_id_fk" FOREIGN KEY ("version_logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_partners_v" ADD CONSTRAINT "_partners_v_version_logo_hover_id_media_id_fk" FOREIGN KEY ("version_logo_hover_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_partners_v_locales" ADD CONSTRAINT "_partners_v_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_partners_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "solutions_pains" ADD CONSTRAINT "solutions_pains_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."solutions"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "solutions_pains_locales" ADD CONSTRAINT "solutions_pains_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."solutions_pains"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "solutions_points" ADD CONSTRAINT "solutions_points_feature_id_features_id_fk" FOREIGN KEY ("feature_id") REFERENCES "public"."features"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "solutions_points" ADD CONSTRAINT "solutions_points_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."solutions"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "solutions_points_locales" ADD CONSTRAINT "solutions_points_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."solutions_points"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "solutions_faqs" ADD CONSTRAINT "solutions_faqs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."solutions"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "solutions_faqs_locales" ADD CONSTRAINT "solutions_faqs_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."solutions_faqs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "solutions" ADD CONSTRAINT "solutions_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "solutions_locales" ADD CONSTRAINT "solutions_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."solutions"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_solutions_v_version_pains" ADD CONSTRAINT "_solutions_v_version_pains_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_solutions_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_solutions_v_version_pains_locales" ADD CONSTRAINT "_solutions_v_version_pains_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_solutions_v_version_pains"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_solutions_v_version_points" ADD CONSTRAINT "_solutions_v_version_points_feature_id_features_id_fk" FOREIGN KEY ("feature_id") REFERENCES "public"."features"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_solutions_v_version_points" ADD CONSTRAINT "_solutions_v_version_points_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_solutions_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_solutions_v_version_points_locales" ADD CONSTRAINT "_solutions_v_version_points_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_solutions_v_version_points"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_solutions_v_version_faqs" ADD CONSTRAINT "_solutions_v_version_faqs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_solutions_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_solutions_v_version_faqs_locales" ADD CONSTRAINT "_solutions_v_version_faqs_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_solutions_v_version_faqs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_solutions_v" ADD CONSTRAINT "_solutions_v_parent_id_solutions_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."solutions"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_solutions_v" ADD CONSTRAINT "_solutions_v_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_solutions_v_locales" ADD CONSTRAINT "_solutions_v_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_solutions_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "features_benefits" ADD CONSTRAINT "features_benefits_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."features"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "features_benefits_locales" ADD CONSTRAINT "features_benefits_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."features_benefits"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "features_blocks_points" ADD CONSTRAINT "features_blocks_points_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."features_blocks"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "features_blocks_points_locales" ADD CONSTRAINT "features_blocks_points_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."features_blocks_points"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "features_blocks" ADD CONSTRAINT "features_blocks_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."features"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "features_blocks_locales" ADD CONSTRAINT "features_blocks_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."features_blocks"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "features_mock_rows" ADD CONSTRAINT "features_mock_rows_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."features"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "features_mock_rows_locales" ADD CONSTRAINT "features_mock_rows_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."features_mock_rows"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "features_faqs" ADD CONSTRAINT "features_faqs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."features"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "features_faqs_locales" ADD CONSTRAINT "features_faqs_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."features_faqs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "features" ADD CONSTRAINT "features_mock_screen_id_media_id_fk" FOREIGN KEY ("mock_screen_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "features" ADD CONSTRAINT "features_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "features_locales" ADD CONSTRAINT "features_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."features"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "features_rels" ADD CONSTRAINT "features_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."features"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "features_rels" ADD CONSTRAINT "features_rels_features_fk" FOREIGN KEY ("features_id") REFERENCES "public"."features"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_features_v_version_benefits" ADD CONSTRAINT "_features_v_version_benefits_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_features_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_features_v_version_benefits_locales" ADD CONSTRAINT "_features_v_version_benefits_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_features_v_version_benefits"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_features_v_version_blocks_points" ADD CONSTRAINT "_features_v_version_blocks_points_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_features_v_version_blocks"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_features_v_version_blocks_points_locales" ADD CONSTRAINT "_features_v_version_blocks_points_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_features_v_version_blocks_points"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_features_v_version_blocks" ADD CONSTRAINT "_features_v_version_blocks_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_features_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_features_v_version_blocks_locales" ADD CONSTRAINT "_features_v_version_blocks_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_features_v_version_blocks"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_features_v_version_mock_rows" ADD CONSTRAINT "_features_v_version_mock_rows_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_features_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_features_v_version_mock_rows_locales" ADD CONSTRAINT "_features_v_version_mock_rows_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_features_v_version_mock_rows"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_features_v_version_faqs" ADD CONSTRAINT "_features_v_version_faqs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_features_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_features_v_version_faqs_locales" ADD CONSTRAINT "_features_v_version_faqs_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_features_v_version_faqs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_features_v" ADD CONSTRAINT "_features_v_parent_id_features_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."features"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_features_v" ADD CONSTRAINT "_features_v_version_mock_screen_id_media_id_fk" FOREIGN KEY ("version_mock_screen_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_features_v" ADD CONSTRAINT "_features_v_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_features_v_locales" ADD CONSTRAINT "_features_v_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_features_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_features_v_rels" ADD CONSTRAINT "_features_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_features_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_features_v_rels" ADD CONSTRAINT "_features_v_rels_features_fk" FOREIGN KEY ("features_id") REFERENCES "public"."features"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "users_roles" ADD CONSTRAINT "users_roles_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "users_sessions" ADD CONSTRAINT "users_sessions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "audit_logs" ADD CONSTRAINT "audit_logs_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "audit_logs_texts" ADD CONSTRAINT "audit_logs_texts_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."audit_logs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_jobs_log" ADD CONSTRAINT "payload_jobs_log_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."payload_jobs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_locked_documents"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_partners_fk" FOREIGN KEY ("partners_id") REFERENCES "public"."partners"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_solutions_fk" FOREIGN KEY ("solutions_id") REFERENCES "public"."solutions"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_features_fk" FOREIGN KEY ("features_id") REFERENCES "public"."features"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_contact_submissions_fk" FOREIGN KEY ("contact_submissions_id") REFERENCES "public"."contact_submissions"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_audit_logs_fk" FOREIGN KEY ("audit_logs_id") REFERENCES "public"."audit_logs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_preferences"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "site_settings_socials" ADD CONSTRAINT "site_settings_socials_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "site_settings_socials" ADD CONSTRAINT "site_settings_socials_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."site_settings"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "site_settings_socials_locales" ADD CONSTRAINT "site_settings_socials_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."site_settings_socials"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "site_settings" ADD CONSTRAINT "site_settings_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "site_settings_locales" ADD CONSTRAINT "site_settings_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."site_settings"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_site_settings_v_version_socials" ADD CONSTRAINT "_site_settings_v_version_socials_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_site_settings_v_version_socials" ADD CONSTRAINT "_site_settings_v_version_socials_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_site_settings_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_site_settings_v_version_socials_locales" ADD CONSTRAINT "_site_settings_v_version_socials_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_site_settings_v_version_socials"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_site_settings_v" ADD CONSTRAINT "_site_settings_v_version_logo_id_media_id_fk" FOREIGN KEY ("version_logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_site_settings_v_locales" ADD CONSTRAINT "_site_settings_v_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_site_settings_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "navigation_links" ADD CONSTRAINT "navigation_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."navigation"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "navigation_links_locales" ADD CONSTRAINT "navigation_links_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."navigation_links"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "navigation_link_library_links" ADD CONSTRAINT "navigation_link_library_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."navigation_link_library"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "navigation_link_library_links_locales" ADD CONSTRAINT "navigation_link_library_links_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."navigation_link_library_links"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "navigation_link_library" ADD CONSTRAINT "navigation_link_library_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."navigation"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "navigation_link_library_locales" ADD CONSTRAINT "navigation_link_library_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."navigation_link_library"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "navigation_locales" ADD CONSTRAINT "navigation_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."navigation"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_navigation_v_version_links" ADD CONSTRAINT "_navigation_v_version_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_navigation_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_navigation_v_version_links_locales" ADD CONSTRAINT "_navigation_v_version_links_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_navigation_v_version_links"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_navigation_v_version_link_library_links" ADD CONSTRAINT "_navigation_v_version_link_library_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_navigation_v_version_link_library"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_navigation_v_version_link_library_links_locales" ADD CONSTRAINT "_navigation_v_version_link_library_links_locales_parent_i_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_navigation_v_version_link_library_links"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_navigation_v_version_link_library" ADD CONSTRAINT "_navigation_v_version_link_library_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_navigation_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_navigation_v_version_link_library_locales" ADD CONSTRAINT "_navigation_v_version_link_library_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_navigation_v_version_link_library"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_navigation_v_locales" ADD CONSTRAINT "_navigation_v_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_navigation_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_columns_links" ADD CONSTRAINT "footer_columns_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer_columns"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_columns_links_locales" ADD CONSTRAINT "footer_columns_links_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer_columns_links"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_columns" ADD CONSTRAINT "footer_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_columns_locales" ADD CONSTRAINT "footer_columns_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer_columns"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_locales" ADD CONSTRAINT "footer_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_footer_v_version_columns_links" ADD CONSTRAINT "_footer_v_version_columns_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_footer_v_version_columns"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_footer_v_version_columns_links_locales" ADD CONSTRAINT "_footer_v_version_columns_links_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_footer_v_version_columns_links"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_footer_v_version_columns" ADD CONSTRAINT "_footer_v_version_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_footer_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_footer_v_version_columns_locales" ADD CONSTRAINT "_footer_v_version_columns_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_footer_v_version_columns"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_footer_v_locales" ADD CONSTRAINT "_footer_v_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_footer_v"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "pages_blocks_hero_buttons_order_idx" ON "pages_blocks_hero_buttons" USING btree ("_order");
  CREATE INDEX "pages_blocks_hero_buttons_parent_id_idx" ON "pages_blocks_hero_buttons" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "pages_blocks_hero_buttons_locales_locale_parent_id_unique" ON "pages_blocks_hero_buttons_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_hero_mockup_approvals_order_idx" ON "pages_blocks_hero_mockup_approvals" USING btree ("_order");
  CREATE INDEX "pages_blocks_hero_mockup_approvals_parent_id_idx" ON "pages_blocks_hero_mockup_approvals" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "pages_blocks_hero_mockup_approvals_locales_locale_parent_id_" ON "pages_blocks_hero_mockup_approvals_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_hero_mockup_phone_chips_order_idx" ON "pages_blocks_hero_mockup_phone_chips" USING btree ("_order");
  CREATE INDEX "pages_blocks_hero_mockup_phone_chips_parent_id_idx" ON "pages_blocks_hero_mockup_phone_chips" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "pages_blocks_hero_mockup_phone_chips_locales_locale_parent_i" ON "pages_blocks_hero_mockup_phone_chips_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_hero_trust_points_order_idx" ON "pages_blocks_hero_trust_points" USING btree ("_order");
  CREATE INDEX "pages_blocks_hero_trust_points_parent_id_idx" ON "pages_blocks_hero_trust_points" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "pages_blocks_hero_trust_points_locales_locale_parent_id_uniq" ON "pages_blocks_hero_trust_points_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_hero_visual_rows_order_idx" ON "pages_blocks_hero_visual_rows" USING btree ("_order");
  CREATE INDEX "pages_blocks_hero_visual_rows_parent_id_idx" ON "pages_blocks_hero_visual_rows" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "pages_blocks_hero_visual_rows_locales_locale_parent_id_uniqu" ON "pages_blocks_hero_visual_rows_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_hero_order_idx" ON "pages_blocks_hero" USING btree ("_order");
  CREATE INDEX "pages_blocks_hero_parent_id_idx" ON "pages_blocks_hero" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_hero_path_idx" ON "pages_blocks_hero" USING btree ("_path");
  CREATE INDEX "pages_blocks_hero_mockup_mockup_phone_screen_idx" ON "pages_blocks_hero" USING btree ("mockup_phone_screen_id");
  CREATE INDEX "pages_blocks_hero_visual_visual_screen_idx" ON "pages_blocks_hero" USING btree ("visual_screen_id");
  CREATE UNIQUE INDEX "pages_blocks_hero_locales_locale_parent_id_unique" ON "pages_blocks_hero_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_feature_band_buttons_order_idx" ON "pages_blocks_feature_band_buttons" USING btree ("_order");
  CREATE INDEX "pages_blocks_feature_band_buttons_parent_id_idx" ON "pages_blocks_feature_band_buttons" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "pages_blocks_feature_band_buttons_locales_locale_parent_id_u" ON "pages_blocks_feature_band_buttons_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_feature_band_chips_order_idx" ON "pages_blocks_feature_band_chips" USING btree ("_order");
  CREATE INDEX "pages_blocks_feature_band_chips_parent_id_idx" ON "pages_blocks_feature_band_chips" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "pages_blocks_feature_band_chips_locales_locale_parent_id_uni" ON "pages_blocks_feature_band_chips_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_feature_band_items_order_idx" ON "pages_blocks_feature_band_items" USING btree ("_order");
  CREATE INDEX "pages_blocks_feature_band_items_parent_id_idx" ON "pages_blocks_feature_band_items" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "pages_blocks_feature_band_items_locales_locale_parent_id_uni" ON "pages_blocks_feature_band_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_feature_band_order_idx" ON "pages_blocks_feature_band" USING btree ("_order");
  CREATE INDEX "pages_blocks_feature_band_parent_id_idx" ON "pages_blocks_feature_band" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_feature_band_path_idx" ON "pages_blocks_feature_band" USING btree ("_path");
  CREATE INDEX "pages_blocks_feature_band_screen_image_idx" ON "pages_blocks_feature_band" USING btree ("screen_image_id");
  CREATE UNIQUE INDEX "pages_blocks_feature_band_locales_locale_parent_id_unique" ON "pages_blocks_feature_band_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_requests_board_buttons_order_idx" ON "pages_blocks_requests_board_buttons" USING btree ("_order");
  CREATE INDEX "pages_blocks_requests_board_buttons_parent_id_idx" ON "pages_blocks_requests_board_buttons" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "pages_blocks_requests_board_buttons_locales_locale_parent_id" ON "pages_blocks_requests_board_buttons_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_requests_board_cards_order_idx" ON "pages_blocks_requests_board_cards" USING btree ("_order");
  CREATE INDEX "pages_blocks_requests_board_cards_parent_id_idx" ON "pages_blocks_requests_board_cards" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "pages_blocks_requests_board_cards_locales_locale_parent_id_u" ON "pages_blocks_requests_board_cards_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_requests_board_strip_items_order_idx" ON "pages_blocks_requests_board_strip_items" USING btree ("_order");
  CREATE INDEX "pages_blocks_requests_board_strip_items_parent_id_idx" ON "pages_blocks_requests_board_strip_items" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "pages_blocks_requests_board_strip_items_locales_locale_paren" ON "pages_blocks_requests_board_strip_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_requests_board_order_idx" ON "pages_blocks_requests_board" USING btree ("_order");
  CREATE INDEX "pages_blocks_requests_board_parent_id_idx" ON "pages_blocks_requests_board" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_requests_board_path_idx" ON "pages_blocks_requests_board" USING btree ("_path");
  CREATE UNIQUE INDEX "pages_blocks_requests_board_locales_locale_parent_id_unique" ON "pages_blocks_requests_board_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_modules_map_order_idx" ON "pages_blocks_modules_map" USING btree ("_order");
  CREATE INDEX "pages_blocks_modules_map_parent_id_idx" ON "pages_blocks_modules_map" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_modules_map_path_idx" ON "pages_blocks_modules_map" USING btree ("_path");
  CREATE UNIQUE INDEX "pages_blocks_modules_map_locales_locale_parent_id_unique" ON "pages_blocks_modules_map_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_industries_order_idx" ON "pages_blocks_industries" USING btree ("_order");
  CREATE INDEX "pages_blocks_industries_parent_id_idx" ON "pages_blocks_industries" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_industries_path_idx" ON "pages_blocks_industries" USING btree ("_path");
  CREATE UNIQUE INDEX "pages_blocks_industries_locales_locale_parent_id_unique" ON "pages_blocks_industries_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_testimonials_items_order_idx" ON "pages_blocks_testimonials_items" USING btree ("_order");
  CREATE INDEX "pages_blocks_testimonials_items_parent_id_idx" ON "pages_blocks_testimonials_items" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "pages_blocks_testimonials_items_locales_locale_parent_id_uni" ON "pages_blocks_testimonials_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_testimonials_order_idx" ON "pages_blocks_testimonials" USING btree ("_order");
  CREATE INDEX "pages_blocks_testimonials_parent_id_idx" ON "pages_blocks_testimonials" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_testimonials_path_idx" ON "pages_blocks_testimonials" USING btree ("_path");
  CREATE UNIQUE INDEX "pages_blocks_testimonials_locales_locale_parent_id_unique" ON "pages_blocks_testimonials_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_pricing_plans_features_order_idx" ON "pages_blocks_pricing_plans_features" USING btree ("_order");
  CREATE INDEX "pages_blocks_pricing_plans_features_parent_id_idx" ON "pages_blocks_pricing_plans_features" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "pages_blocks_pricing_plans_features_locales_locale_parent_id" ON "pages_blocks_pricing_plans_features_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_pricing_plans_order_idx" ON "pages_blocks_pricing_plans" USING btree ("_order");
  CREATE INDEX "pages_blocks_pricing_plans_parent_id_idx" ON "pages_blocks_pricing_plans" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "pages_blocks_pricing_plans_locales_locale_parent_id_unique" ON "pages_blocks_pricing_plans_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_pricing_matrix_groups_points_order_idx" ON "pages_blocks_pricing_matrix_groups_points" USING btree ("_order");
  CREATE INDEX "pages_blocks_pricing_matrix_groups_points_parent_id_idx" ON "pages_blocks_pricing_matrix_groups_points" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "pages_blocks_pricing_matrix_groups_points_locales_locale_par" ON "pages_blocks_pricing_matrix_groups_points_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_pricing_matrix_groups_cells_order_idx" ON "pages_blocks_pricing_matrix_groups_cells" USING btree ("_order");
  CREATE INDEX "pages_blocks_pricing_matrix_groups_cells_parent_id_idx" ON "pages_blocks_pricing_matrix_groups_cells" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "pages_blocks_pricing_matrix_groups_cells_locales_locale_pare" ON "pages_blocks_pricing_matrix_groups_cells_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_pricing_matrix_groups_order_idx" ON "pages_blocks_pricing_matrix_groups" USING btree ("_order");
  CREATE INDEX "pages_blocks_pricing_matrix_groups_parent_id_idx" ON "pages_blocks_pricing_matrix_groups" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "pages_blocks_pricing_matrix_groups_locales_locale_parent_id_" ON "pages_blocks_pricing_matrix_groups_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_pricing_matrix_order_idx" ON "pages_blocks_pricing_matrix" USING btree ("_order");
  CREATE INDEX "pages_blocks_pricing_matrix_parent_id_idx" ON "pages_blocks_pricing_matrix" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "pages_blocks_pricing_matrix_locales_locale_parent_id_unique" ON "pages_blocks_pricing_matrix_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_pricing_points_order_idx" ON "pages_blocks_pricing_points" USING btree ("_order");
  CREATE INDEX "pages_blocks_pricing_points_parent_id_idx" ON "pages_blocks_pricing_points" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "pages_blocks_pricing_points_locales_locale_parent_id_unique" ON "pages_blocks_pricing_points_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_pricing_buttons_order_idx" ON "pages_blocks_pricing_buttons" USING btree ("_order");
  CREATE INDEX "pages_blocks_pricing_buttons_parent_id_idx" ON "pages_blocks_pricing_buttons" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "pages_blocks_pricing_buttons_locales_locale_parent_id_unique" ON "pages_blocks_pricing_buttons_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_pricing_order_idx" ON "pages_blocks_pricing" USING btree ("_order");
  CREATE INDEX "pages_blocks_pricing_parent_id_idx" ON "pages_blocks_pricing" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_pricing_path_idx" ON "pages_blocks_pricing" USING btree ("_path");
  CREATE UNIQUE INDEX "pages_blocks_pricing_locales_locale_parent_id_unique" ON "pages_blocks_pricing_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_faq_items_order_idx" ON "pages_blocks_faq_items" USING btree ("_order");
  CREATE INDEX "pages_blocks_faq_items_parent_id_idx" ON "pages_blocks_faq_items" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "pages_blocks_faq_items_locales_locale_parent_id_unique" ON "pages_blocks_faq_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_faq_order_idx" ON "pages_blocks_faq" USING btree ("_order");
  CREATE INDEX "pages_blocks_faq_parent_id_idx" ON "pages_blocks_faq" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_faq_path_idx" ON "pages_blocks_faq" USING btree ("_path");
  CREATE UNIQUE INDEX "pages_blocks_faq_locales_locale_parent_id_unique" ON "pages_blocks_faq_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_cta_buttons_order_idx" ON "pages_blocks_cta_buttons" USING btree ("_order");
  CREATE INDEX "pages_blocks_cta_buttons_parent_id_idx" ON "pages_blocks_cta_buttons" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "pages_blocks_cta_buttons_locales_locale_parent_id_unique" ON "pages_blocks_cta_buttons_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_cta_guarantees_order_idx" ON "pages_blocks_cta_guarantees" USING btree ("_order");
  CREATE INDEX "pages_blocks_cta_guarantees_parent_id_idx" ON "pages_blocks_cta_guarantees" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "pages_blocks_cta_guarantees_locales_locale_parent_id_unique" ON "pages_blocks_cta_guarantees_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_cta_order_idx" ON "pages_blocks_cta" USING btree ("_order");
  CREATE INDEX "pages_blocks_cta_parent_id_idx" ON "pages_blocks_cta" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_cta_path_idx" ON "pages_blocks_cta" USING btree ("_path");
  CREATE UNIQUE INDEX "pages_blocks_cta_locales_locale_parent_id_unique" ON "pages_blocks_cta_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_section_visual_rows_order_idx" ON "pages_blocks_section_visual_rows" USING btree ("_order");
  CREATE INDEX "pages_blocks_section_visual_rows_parent_id_idx" ON "pages_blocks_section_visual_rows" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "pages_blocks_section_visual_rows_locales_locale_parent_id_un" ON "pages_blocks_section_visual_rows_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_section_items_order_idx" ON "pages_blocks_section_items" USING btree ("_order");
  CREATE INDEX "pages_blocks_section_items_parent_id_idx" ON "pages_blocks_section_items" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "pages_blocks_section_items_locales_locale_parent_id_unique" ON "pages_blocks_section_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_section_order_idx" ON "pages_blocks_section" USING btree ("_order");
  CREATE INDEX "pages_blocks_section_parent_id_idx" ON "pages_blocks_section" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_section_path_idx" ON "pages_blocks_section" USING btree ("_path");
  CREATE INDEX "pages_blocks_section_visual_visual_screen_idx" ON "pages_blocks_section" USING btree ("visual_screen_id");
  CREATE UNIQUE INDEX "pages_blocks_section_locales_locale_parent_id_unique" ON "pages_blocks_section_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_feature_catalog_order_idx" ON "pages_blocks_feature_catalog" USING btree ("_order");
  CREATE INDEX "pages_blocks_feature_catalog_parent_id_idx" ON "pages_blocks_feature_catalog" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_feature_catalog_path_idx" ON "pages_blocks_feature_catalog" USING btree ("_path");
  CREATE UNIQUE INDEX "pages_blocks_feature_catalog_locales_locale_parent_id_unique" ON "pages_blocks_feature_catalog_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_solution_catalog_order_idx" ON "pages_blocks_solution_catalog" USING btree ("_order");
  CREATE INDEX "pages_blocks_solution_catalog_parent_id_idx" ON "pages_blocks_solution_catalog" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_solution_catalog_path_idx" ON "pages_blocks_solution_catalog" USING btree ("_path");
  CREATE UNIQUE INDEX "pages_blocks_solution_catalog_locales_locale_parent_id_uniqu" ON "pages_blocks_solution_catalog_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_tools_list_order_idx" ON "pages_blocks_tools_list" USING btree ("_order");
  CREATE INDEX "pages_blocks_tools_list_parent_id_idx" ON "pages_blocks_tools_list" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_tools_list_path_idx" ON "pages_blocks_tools_list" USING btree ("_path");
  CREATE UNIQUE INDEX "pages_blocks_tools_list_locales_locale_parent_id_unique" ON "pages_blocks_tools_list_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_contact_form_visual_rows_order_idx" ON "pages_blocks_contact_form_visual_rows" USING btree ("_order");
  CREATE INDEX "pages_blocks_contact_form_visual_rows_parent_id_idx" ON "pages_blocks_contact_form_visual_rows" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "pages_blocks_contact_form_visual_rows_locales_locale_parent_" ON "pages_blocks_contact_form_visual_rows_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_contact_form_order_idx" ON "pages_blocks_contact_form" USING btree ("_order");
  CREATE INDEX "pages_blocks_contact_form_parent_id_idx" ON "pages_blocks_contact_form" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_contact_form_path_idx" ON "pages_blocks_contact_form" USING btree ("_path");
  CREATE INDEX "pages_blocks_contact_form_visual_visual_screen_idx" ON "pages_blocks_contact_form" USING btree ("visual_screen_id");
  CREATE UNIQUE INDEX "pages_blocks_contact_form_locales_locale_parent_id_unique" ON "pages_blocks_contact_form_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_text_sections_sections_order_idx" ON "pages_blocks_text_sections_sections" USING btree ("_order");
  CREATE INDEX "pages_blocks_text_sections_sections_parent_id_idx" ON "pages_blocks_text_sections_sections" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "pages_blocks_text_sections_sections_locales_locale_parent_id" ON "pages_blocks_text_sections_sections_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_text_sections_order_idx" ON "pages_blocks_text_sections" USING btree ("_order");
  CREATE INDEX "pages_blocks_text_sections_parent_id_idx" ON "pages_blocks_text_sections" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_text_sections_path_idx" ON "pages_blocks_text_sections" USING btree ("_path");
  CREATE INDEX "pages_blocks_feature_grid_items_order_idx" ON "pages_blocks_feature_grid_items" USING btree ("_order");
  CREATE INDEX "pages_blocks_feature_grid_items_parent_id_idx" ON "pages_blocks_feature_grid_items" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "pages_blocks_feature_grid_items_locales_locale_parent_id_uni" ON "pages_blocks_feature_grid_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_feature_grid_order_idx" ON "pages_blocks_feature_grid" USING btree ("_order");
  CREATE INDEX "pages_blocks_feature_grid_parent_id_idx" ON "pages_blocks_feature_grid" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_feature_grid_path_idx" ON "pages_blocks_feature_grid" USING btree ("_path");
  CREATE UNIQUE INDEX "pages_blocks_feature_grid_locales_locale_parent_id_unique" ON "pages_blocks_feature_grid_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_workflow_steps_order_idx" ON "pages_blocks_workflow_steps" USING btree ("_order");
  CREATE INDEX "pages_blocks_workflow_steps_parent_id_idx" ON "pages_blocks_workflow_steps" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "pages_blocks_workflow_steps_locales_locale_parent_id_unique" ON "pages_blocks_workflow_steps_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_workflow_order_idx" ON "pages_blocks_workflow" USING btree ("_order");
  CREATE INDEX "pages_blocks_workflow_parent_id_idx" ON "pages_blocks_workflow" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_workflow_path_idx" ON "pages_blocks_workflow" USING btree ("_path");
  CREATE UNIQUE INDEX "pages_blocks_workflow_locales_locale_parent_id_unique" ON "pages_blocks_workflow_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_promo_bento_cards_order_idx" ON "pages_blocks_promo_bento_cards" USING btree ("_order");
  CREATE INDEX "pages_blocks_promo_bento_cards_parent_id_idx" ON "pages_blocks_promo_bento_cards" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "pages_blocks_promo_bento_cards_locales_locale_parent_id_uniq" ON "pages_blocks_promo_bento_cards_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_promo_bento_order_idx" ON "pages_blocks_promo_bento" USING btree ("_order");
  CREATE INDEX "pages_blocks_promo_bento_parent_id_idx" ON "pages_blocks_promo_bento" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_promo_bento_path_idx" ON "pages_blocks_promo_bento" USING btree ("_path");
  CREATE UNIQUE INDEX "pages_blocks_promo_bento_locales_locale_parent_id_unique" ON "pages_blocks_promo_bento_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_partners_order_idx" ON "pages_blocks_partners" USING btree ("_order");
  CREATE INDEX "pages_blocks_partners_parent_id_idx" ON "pages_blocks_partners" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_partners_path_idx" ON "pages_blocks_partners" USING btree ("_path");
  CREATE UNIQUE INDEX "pages_blocks_partners_locales_locale_parent_id_unique" ON "pages_blocks_partners_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_badge_order_idx" ON "pages_blocks_badge" USING btree ("_order");
  CREATE INDEX "pages_blocks_badge_parent_id_idx" ON "pages_blocks_badge" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_badge_path_idx" ON "pages_blocks_badge" USING btree ("_path");
  CREATE UNIQUE INDEX "pages_blocks_badge_locales_locale_parent_id_unique" ON "pages_blocks_badge_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_heading_order_idx" ON "pages_blocks_heading" USING btree ("_order");
  CREATE INDEX "pages_blocks_heading_parent_id_idx" ON "pages_blocks_heading" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_heading_path_idx" ON "pages_blocks_heading" USING btree ("_path");
  CREATE UNIQUE INDEX "pages_blocks_heading_locales_locale_parent_id_unique" ON "pages_blocks_heading_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_paragraph_order_idx" ON "pages_blocks_paragraph" USING btree ("_order");
  CREATE INDEX "pages_blocks_paragraph_parent_id_idx" ON "pages_blocks_paragraph" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_paragraph_path_idx" ON "pages_blocks_paragraph" USING btree ("_path");
  CREATE UNIQUE INDEX "pages_blocks_paragraph_locales_locale_parent_id_unique" ON "pages_blocks_paragraph_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_image_order_idx" ON "pages_blocks_image" USING btree ("_order");
  CREATE INDEX "pages_blocks_image_parent_id_idx" ON "pages_blocks_image" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_image_path_idx" ON "pages_blocks_image" USING btree ("_path");
  CREATE INDEX "pages_blocks_image_image_idx" ON "pages_blocks_image" USING btree ("image_id");
  CREATE UNIQUE INDEX "pages_blocks_image_locales_locale_parent_id_unique" ON "pages_blocks_image_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_button_order_idx" ON "pages_blocks_button" USING btree ("_order");
  CREATE INDEX "pages_blocks_button_parent_id_idx" ON "pages_blocks_button" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_button_path_idx" ON "pages_blocks_button" USING btree ("_path");
  CREATE UNIQUE INDEX "pages_blocks_button_locales_locale_parent_id_unique" ON "pages_blocks_button_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_card_order_idx" ON "pages_blocks_card" USING btree ("_order");
  CREATE INDEX "pages_blocks_card_parent_id_idx" ON "pages_blocks_card" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_card_path_idx" ON "pages_blocks_card" USING btree ("_path");
  CREATE INDEX "pages_blocks_card_icon_idx" ON "pages_blocks_card" USING btree ("icon_id");
  CREATE UNIQUE INDEX "pages_blocks_card_locales_locale_parent_id_unique" ON "pages_blocks_card_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_spacer_order_idx" ON "pages_blocks_spacer" USING btree ("_order");
  CREATE INDEX "pages_blocks_spacer_parent_id_idx" ON "pages_blocks_spacer" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_spacer_path_idx" ON "pages_blocks_spacer" USING btree ("_path");
  CREATE INDEX "pages_blocks_layout_section_order_idx" ON "pages_blocks_layout_section" USING btree ("_order");
  CREATE INDEX "pages_blocks_layout_section_parent_id_idx" ON "pages_blocks_layout_section" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_layout_section_path_idx" ON "pages_blocks_layout_section" USING btree ("_path");
  CREATE INDEX "pages_blocks_layout_section_background_image_idx" ON "pages_blocks_layout_section" USING btree ("background_image_id");
  CREATE UNIQUE INDEX "pages_slug_idx" ON "pages" USING btree ("slug");
  CREATE INDEX "pages_meta_meta_image_idx" ON "pages" USING btree ("meta_image_id");
  CREATE INDEX "pages_updated_at_idx" ON "pages" USING btree ("updated_at");
  CREATE INDEX "pages_created_at_idx" ON "pages" USING btree ("created_at");
  CREATE INDEX "pages__status_idx" ON "pages" USING btree ("_status");
  CREATE UNIQUE INDEX "pages_locales_locale_parent_id_unique" ON "pages_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_texts_order_parent" ON "pages_texts" USING btree ("order","parent_id");
  CREATE INDEX "pages_texts_locale_parent" ON "pages_texts" USING btree ("locale","parent_id");
  CREATE INDEX "pages_rels_order_idx" ON "pages_rels" USING btree ("order");
  CREATE INDEX "pages_rels_parent_idx" ON "pages_rels" USING btree ("parent_id");
  CREATE INDEX "pages_rels_path_idx" ON "pages_rels" USING btree ("path");
  CREATE INDEX "pages_rels_features_id_idx" ON "pages_rels" USING btree ("features_id");
  CREATE INDEX "pages_rels_solutions_id_idx" ON "pages_rels" USING btree ("solutions_id");
  CREATE INDEX "pages_rels_partners_id_idx" ON "pages_rels" USING btree ("partners_id");
  CREATE INDEX "_pages_v_blocks_hero_buttons_order_idx" ON "_pages_v_blocks_hero_buttons" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_hero_buttons_parent_id_idx" ON "_pages_v_blocks_hero_buttons" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_pages_v_blocks_hero_buttons_locales_locale_parent_id_unique" ON "_pages_v_blocks_hero_buttons_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_pages_v_blocks_hero_mockup_approvals_order_idx" ON "_pages_v_blocks_hero_mockup_approvals" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_hero_mockup_approvals_parent_id_idx" ON "_pages_v_blocks_hero_mockup_approvals" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_pages_v_blocks_hero_mockup_approvals_locales_locale_parent_" ON "_pages_v_blocks_hero_mockup_approvals_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_pages_v_blocks_hero_mockup_phone_chips_order_idx" ON "_pages_v_blocks_hero_mockup_phone_chips" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_hero_mockup_phone_chips_parent_id_idx" ON "_pages_v_blocks_hero_mockup_phone_chips" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_pages_v_blocks_hero_mockup_phone_chips_locales_locale_paren" ON "_pages_v_blocks_hero_mockup_phone_chips_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_pages_v_blocks_hero_trust_points_order_idx" ON "_pages_v_blocks_hero_trust_points" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_hero_trust_points_parent_id_idx" ON "_pages_v_blocks_hero_trust_points" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_pages_v_blocks_hero_trust_points_locales_locale_parent_id_u" ON "_pages_v_blocks_hero_trust_points_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_pages_v_blocks_hero_visual_rows_order_idx" ON "_pages_v_blocks_hero_visual_rows" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_hero_visual_rows_parent_id_idx" ON "_pages_v_blocks_hero_visual_rows" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_pages_v_blocks_hero_visual_rows_locales_locale_parent_id_un" ON "_pages_v_blocks_hero_visual_rows_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_pages_v_blocks_hero_order_idx" ON "_pages_v_blocks_hero" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_hero_parent_id_idx" ON "_pages_v_blocks_hero" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_hero_path_idx" ON "_pages_v_blocks_hero" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_hero_mockup_mockup_phone_screen_idx" ON "_pages_v_blocks_hero" USING btree ("mockup_phone_screen_id");
  CREATE INDEX "_pages_v_blocks_hero_visual_visual_screen_idx" ON "_pages_v_blocks_hero" USING btree ("visual_screen_id");
  CREATE UNIQUE INDEX "_pages_v_blocks_hero_locales_locale_parent_id_unique" ON "_pages_v_blocks_hero_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_pages_v_blocks_feature_band_buttons_order_idx" ON "_pages_v_blocks_feature_band_buttons" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_feature_band_buttons_parent_id_idx" ON "_pages_v_blocks_feature_band_buttons" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_pages_v_blocks_feature_band_buttons_locales_locale_parent_i" ON "_pages_v_blocks_feature_band_buttons_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_pages_v_blocks_feature_band_chips_order_idx" ON "_pages_v_blocks_feature_band_chips" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_feature_band_chips_parent_id_idx" ON "_pages_v_blocks_feature_band_chips" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_pages_v_blocks_feature_band_chips_locales_locale_parent_id_" ON "_pages_v_blocks_feature_band_chips_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_pages_v_blocks_feature_band_items_order_idx" ON "_pages_v_blocks_feature_band_items" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_feature_band_items_parent_id_idx" ON "_pages_v_blocks_feature_band_items" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_pages_v_blocks_feature_band_items_locales_locale_parent_id_" ON "_pages_v_blocks_feature_band_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_pages_v_blocks_feature_band_order_idx" ON "_pages_v_blocks_feature_band" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_feature_band_parent_id_idx" ON "_pages_v_blocks_feature_band" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_feature_band_path_idx" ON "_pages_v_blocks_feature_band" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_feature_band_screen_image_idx" ON "_pages_v_blocks_feature_band" USING btree ("screen_image_id");
  CREATE UNIQUE INDEX "_pages_v_blocks_feature_band_locales_locale_parent_id_unique" ON "_pages_v_blocks_feature_band_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_pages_v_blocks_requests_board_buttons_order_idx" ON "_pages_v_blocks_requests_board_buttons" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_requests_board_buttons_parent_id_idx" ON "_pages_v_blocks_requests_board_buttons" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_pages_v_blocks_requests_board_buttons_locales_locale_parent" ON "_pages_v_blocks_requests_board_buttons_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_pages_v_blocks_requests_board_cards_order_idx" ON "_pages_v_blocks_requests_board_cards" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_requests_board_cards_parent_id_idx" ON "_pages_v_blocks_requests_board_cards" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_pages_v_blocks_requests_board_cards_locales_locale_parent_i" ON "_pages_v_blocks_requests_board_cards_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_pages_v_blocks_requests_board_strip_items_order_idx" ON "_pages_v_blocks_requests_board_strip_items" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_requests_board_strip_items_parent_id_idx" ON "_pages_v_blocks_requests_board_strip_items" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_pages_v_blocks_requests_board_strip_items_locales_locale_pa" ON "_pages_v_blocks_requests_board_strip_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_pages_v_blocks_requests_board_order_idx" ON "_pages_v_blocks_requests_board" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_requests_board_parent_id_idx" ON "_pages_v_blocks_requests_board" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_requests_board_path_idx" ON "_pages_v_blocks_requests_board" USING btree ("_path");
  CREATE UNIQUE INDEX "_pages_v_blocks_requests_board_locales_locale_parent_id_uniq" ON "_pages_v_blocks_requests_board_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_pages_v_blocks_modules_map_order_idx" ON "_pages_v_blocks_modules_map" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_modules_map_parent_id_idx" ON "_pages_v_blocks_modules_map" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_modules_map_path_idx" ON "_pages_v_blocks_modules_map" USING btree ("_path");
  CREATE UNIQUE INDEX "_pages_v_blocks_modules_map_locales_locale_parent_id_unique" ON "_pages_v_blocks_modules_map_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_pages_v_blocks_industries_order_idx" ON "_pages_v_blocks_industries" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_industries_parent_id_idx" ON "_pages_v_blocks_industries" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_industries_path_idx" ON "_pages_v_blocks_industries" USING btree ("_path");
  CREATE UNIQUE INDEX "_pages_v_blocks_industries_locales_locale_parent_id_unique" ON "_pages_v_blocks_industries_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_pages_v_blocks_testimonials_items_order_idx" ON "_pages_v_blocks_testimonials_items" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_testimonials_items_parent_id_idx" ON "_pages_v_blocks_testimonials_items" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_pages_v_blocks_testimonials_items_locales_locale_parent_id_" ON "_pages_v_blocks_testimonials_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_pages_v_blocks_testimonials_order_idx" ON "_pages_v_blocks_testimonials" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_testimonials_parent_id_idx" ON "_pages_v_blocks_testimonials" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_testimonials_path_idx" ON "_pages_v_blocks_testimonials" USING btree ("_path");
  CREATE UNIQUE INDEX "_pages_v_blocks_testimonials_locales_locale_parent_id_unique" ON "_pages_v_blocks_testimonials_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_pages_v_blocks_pricing_plans_features_order_idx" ON "_pages_v_blocks_pricing_plans_features" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_pricing_plans_features_parent_id_idx" ON "_pages_v_blocks_pricing_plans_features" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_pages_v_blocks_pricing_plans_features_locales_locale_parent" ON "_pages_v_blocks_pricing_plans_features_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_pages_v_blocks_pricing_plans_order_idx" ON "_pages_v_blocks_pricing_plans" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_pricing_plans_parent_id_idx" ON "_pages_v_blocks_pricing_plans" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_pages_v_blocks_pricing_plans_locales_locale_parent_id_uniqu" ON "_pages_v_blocks_pricing_plans_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_pages_v_blocks_pricing_matrix_groups_points_order_idx" ON "_pages_v_blocks_pricing_matrix_groups_points" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_pricing_matrix_groups_points_parent_id_idx" ON "_pages_v_blocks_pricing_matrix_groups_points" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_pages_v_blocks_pricing_matrix_groups_points_locales_locale_" ON "_pages_v_blocks_pricing_matrix_groups_points_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_pages_v_blocks_pricing_matrix_groups_cells_order_idx" ON "_pages_v_blocks_pricing_matrix_groups_cells" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_pricing_matrix_groups_cells_parent_id_idx" ON "_pages_v_blocks_pricing_matrix_groups_cells" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_pages_v_blocks_pricing_matrix_groups_cells_locales_locale_p" ON "_pages_v_blocks_pricing_matrix_groups_cells_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_pages_v_blocks_pricing_matrix_groups_order_idx" ON "_pages_v_blocks_pricing_matrix_groups" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_pricing_matrix_groups_parent_id_idx" ON "_pages_v_blocks_pricing_matrix_groups" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_pages_v_blocks_pricing_matrix_groups_locales_locale_parent_" ON "_pages_v_blocks_pricing_matrix_groups_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_pages_v_blocks_pricing_matrix_order_idx" ON "_pages_v_blocks_pricing_matrix" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_pricing_matrix_parent_id_idx" ON "_pages_v_blocks_pricing_matrix" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_pages_v_blocks_pricing_matrix_locales_locale_parent_id_uniq" ON "_pages_v_blocks_pricing_matrix_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_pages_v_blocks_pricing_points_order_idx" ON "_pages_v_blocks_pricing_points" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_pricing_points_parent_id_idx" ON "_pages_v_blocks_pricing_points" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_pages_v_blocks_pricing_points_locales_locale_parent_id_uniq" ON "_pages_v_blocks_pricing_points_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_pages_v_blocks_pricing_buttons_order_idx" ON "_pages_v_blocks_pricing_buttons" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_pricing_buttons_parent_id_idx" ON "_pages_v_blocks_pricing_buttons" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_pages_v_blocks_pricing_buttons_locales_locale_parent_id_uni" ON "_pages_v_blocks_pricing_buttons_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_pages_v_blocks_pricing_order_idx" ON "_pages_v_blocks_pricing" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_pricing_parent_id_idx" ON "_pages_v_blocks_pricing" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_pricing_path_idx" ON "_pages_v_blocks_pricing" USING btree ("_path");
  CREATE UNIQUE INDEX "_pages_v_blocks_pricing_locales_locale_parent_id_unique" ON "_pages_v_blocks_pricing_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_pages_v_blocks_faq_items_order_idx" ON "_pages_v_blocks_faq_items" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_faq_items_parent_id_idx" ON "_pages_v_blocks_faq_items" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_pages_v_blocks_faq_items_locales_locale_parent_id_unique" ON "_pages_v_blocks_faq_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_pages_v_blocks_faq_order_idx" ON "_pages_v_blocks_faq" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_faq_parent_id_idx" ON "_pages_v_blocks_faq" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_faq_path_idx" ON "_pages_v_blocks_faq" USING btree ("_path");
  CREATE UNIQUE INDEX "_pages_v_blocks_faq_locales_locale_parent_id_unique" ON "_pages_v_blocks_faq_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_pages_v_blocks_cta_buttons_order_idx" ON "_pages_v_blocks_cta_buttons" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_cta_buttons_parent_id_idx" ON "_pages_v_blocks_cta_buttons" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_pages_v_blocks_cta_buttons_locales_locale_parent_id_unique" ON "_pages_v_blocks_cta_buttons_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_pages_v_blocks_cta_guarantees_order_idx" ON "_pages_v_blocks_cta_guarantees" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_cta_guarantees_parent_id_idx" ON "_pages_v_blocks_cta_guarantees" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_pages_v_blocks_cta_guarantees_locales_locale_parent_id_uniq" ON "_pages_v_blocks_cta_guarantees_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_pages_v_blocks_cta_order_idx" ON "_pages_v_blocks_cta" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_cta_parent_id_idx" ON "_pages_v_blocks_cta" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_cta_path_idx" ON "_pages_v_blocks_cta" USING btree ("_path");
  CREATE UNIQUE INDEX "_pages_v_blocks_cta_locales_locale_parent_id_unique" ON "_pages_v_blocks_cta_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_pages_v_blocks_section_visual_rows_order_idx" ON "_pages_v_blocks_section_visual_rows" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_section_visual_rows_parent_id_idx" ON "_pages_v_blocks_section_visual_rows" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_pages_v_blocks_section_visual_rows_locales_locale_parent_id" ON "_pages_v_blocks_section_visual_rows_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_pages_v_blocks_section_items_order_idx" ON "_pages_v_blocks_section_items" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_section_items_parent_id_idx" ON "_pages_v_blocks_section_items" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_pages_v_blocks_section_items_locales_locale_parent_id_uniqu" ON "_pages_v_blocks_section_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_pages_v_blocks_section_order_idx" ON "_pages_v_blocks_section" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_section_parent_id_idx" ON "_pages_v_blocks_section" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_section_path_idx" ON "_pages_v_blocks_section" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_section_visual_visual_screen_idx" ON "_pages_v_blocks_section" USING btree ("visual_screen_id");
  CREATE UNIQUE INDEX "_pages_v_blocks_section_locales_locale_parent_id_unique" ON "_pages_v_blocks_section_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_pages_v_blocks_feature_catalog_order_idx" ON "_pages_v_blocks_feature_catalog" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_feature_catalog_parent_id_idx" ON "_pages_v_blocks_feature_catalog" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_feature_catalog_path_idx" ON "_pages_v_blocks_feature_catalog" USING btree ("_path");
  CREATE UNIQUE INDEX "_pages_v_blocks_feature_catalog_locales_locale_parent_id_uni" ON "_pages_v_blocks_feature_catalog_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_pages_v_blocks_solution_catalog_order_idx" ON "_pages_v_blocks_solution_catalog" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_solution_catalog_parent_id_idx" ON "_pages_v_blocks_solution_catalog" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_solution_catalog_path_idx" ON "_pages_v_blocks_solution_catalog" USING btree ("_path");
  CREATE UNIQUE INDEX "_pages_v_blocks_solution_catalog_locales_locale_parent_id_un" ON "_pages_v_blocks_solution_catalog_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_pages_v_blocks_tools_list_order_idx" ON "_pages_v_blocks_tools_list" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_tools_list_parent_id_idx" ON "_pages_v_blocks_tools_list" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_tools_list_path_idx" ON "_pages_v_blocks_tools_list" USING btree ("_path");
  CREATE UNIQUE INDEX "_pages_v_blocks_tools_list_locales_locale_parent_id_unique" ON "_pages_v_blocks_tools_list_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_pages_v_blocks_contact_form_visual_rows_order_idx" ON "_pages_v_blocks_contact_form_visual_rows" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_contact_form_visual_rows_parent_id_idx" ON "_pages_v_blocks_contact_form_visual_rows" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_pages_v_blocks_contact_form_visual_rows_locales_locale_pare" ON "_pages_v_blocks_contact_form_visual_rows_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_pages_v_blocks_contact_form_order_idx" ON "_pages_v_blocks_contact_form" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_contact_form_parent_id_idx" ON "_pages_v_blocks_contact_form" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_contact_form_path_idx" ON "_pages_v_blocks_contact_form" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_contact_form_visual_visual_screen_idx" ON "_pages_v_blocks_contact_form" USING btree ("visual_screen_id");
  CREATE UNIQUE INDEX "_pages_v_blocks_contact_form_locales_locale_parent_id_unique" ON "_pages_v_blocks_contact_form_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_pages_v_blocks_text_sections_sections_order_idx" ON "_pages_v_blocks_text_sections_sections" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_text_sections_sections_parent_id_idx" ON "_pages_v_blocks_text_sections_sections" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_pages_v_blocks_text_sections_sections_locales_locale_parent" ON "_pages_v_blocks_text_sections_sections_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_pages_v_blocks_text_sections_order_idx" ON "_pages_v_blocks_text_sections" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_text_sections_parent_id_idx" ON "_pages_v_blocks_text_sections" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_text_sections_path_idx" ON "_pages_v_blocks_text_sections" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_feature_grid_items_order_idx" ON "_pages_v_blocks_feature_grid_items" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_feature_grid_items_parent_id_idx" ON "_pages_v_blocks_feature_grid_items" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_pages_v_blocks_feature_grid_items_locales_locale_parent_id_" ON "_pages_v_blocks_feature_grid_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_pages_v_blocks_feature_grid_order_idx" ON "_pages_v_blocks_feature_grid" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_feature_grid_parent_id_idx" ON "_pages_v_blocks_feature_grid" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_feature_grid_path_idx" ON "_pages_v_blocks_feature_grid" USING btree ("_path");
  CREATE UNIQUE INDEX "_pages_v_blocks_feature_grid_locales_locale_parent_id_unique" ON "_pages_v_blocks_feature_grid_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_pages_v_blocks_workflow_steps_order_idx" ON "_pages_v_blocks_workflow_steps" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_workflow_steps_parent_id_idx" ON "_pages_v_blocks_workflow_steps" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_pages_v_blocks_workflow_steps_locales_locale_parent_id_uniq" ON "_pages_v_blocks_workflow_steps_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_pages_v_blocks_workflow_order_idx" ON "_pages_v_blocks_workflow" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_workflow_parent_id_idx" ON "_pages_v_blocks_workflow" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_workflow_path_idx" ON "_pages_v_blocks_workflow" USING btree ("_path");
  CREATE UNIQUE INDEX "_pages_v_blocks_workflow_locales_locale_parent_id_unique" ON "_pages_v_blocks_workflow_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_pages_v_blocks_promo_bento_cards_order_idx" ON "_pages_v_blocks_promo_bento_cards" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_promo_bento_cards_parent_id_idx" ON "_pages_v_blocks_promo_bento_cards" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_pages_v_blocks_promo_bento_cards_locales_locale_parent_id_u" ON "_pages_v_blocks_promo_bento_cards_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_pages_v_blocks_promo_bento_order_idx" ON "_pages_v_blocks_promo_bento" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_promo_bento_parent_id_idx" ON "_pages_v_blocks_promo_bento" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_promo_bento_path_idx" ON "_pages_v_blocks_promo_bento" USING btree ("_path");
  CREATE UNIQUE INDEX "_pages_v_blocks_promo_bento_locales_locale_parent_id_unique" ON "_pages_v_blocks_promo_bento_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_pages_v_blocks_partners_order_idx" ON "_pages_v_blocks_partners" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_partners_parent_id_idx" ON "_pages_v_blocks_partners" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_partners_path_idx" ON "_pages_v_blocks_partners" USING btree ("_path");
  CREATE UNIQUE INDEX "_pages_v_blocks_partners_locales_locale_parent_id_unique" ON "_pages_v_blocks_partners_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_pages_v_blocks_badge_order_idx" ON "_pages_v_blocks_badge" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_badge_parent_id_idx" ON "_pages_v_blocks_badge" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_badge_path_idx" ON "_pages_v_blocks_badge" USING btree ("_path");
  CREATE UNIQUE INDEX "_pages_v_blocks_badge_locales_locale_parent_id_unique" ON "_pages_v_blocks_badge_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_pages_v_blocks_heading_order_idx" ON "_pages_v_blocks_heading" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_heading_parent_id_idx" ON "_pages_v_blocks_heading" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_heading_path_idx" ON "_pages_v_blocks_heading" USING btree ("_path");
  CREATE UNIQUE INDEX "_pages_v_blocks_heading_locales_locale_parent_id_unique" ON "_pages_v_blocks_heading_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_pages_v_blocks_paragraph_order_idx" ON "_pages_v_blocks_paragraph" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_paragraph_parent_id_idx" ON "_pages_v_blocks_paragraph" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_paragraph_path_idx" ON "_pages_v_blocks_paragraph" USING btree ("_path");
  CREATE UNIQUE INDEX "_pages_v_blocks_paragraph_locales_locale_parent_id_unique" ON "_pages_v_blocks_paragraph_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_pages_v_blocks_image_order_idx" ON "_pages_v_blocks_image" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_image_parent_id_idx" ON "_pages_v_blocks_image" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_image_path_idx" ON "_pages_v_blocks_image" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_image_image_idx" ON "_pages_v_blocks_image" USING btree ("image_id");
  CREATE UNIQUE INDEX "_pages_v_blocks_image_locales_locale_parent_id_unique" ON "_pages_v_blocks_image_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_pages_v_blocks_button_order_idx" ON "_pages_v_blocks_button" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_button_parent_id_idx" ON "_pages_v_blocks_button" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_button_path_idx" ON "_pages_v_blocks_button" USING btree ("_path");
  CREATE UNIQUE INDEX "_pages_v_blocks_button_locales_locale_parent_id_unique" ON "_pages_v_blocks_button_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_pages_v_blocks_card_order_idx" ON "_pages_v_blocks_card" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_card_parent_id_idx" ON "_pages_v_blocks_card" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_card_path_idx" ON "_pages_v_blocks_card" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_card_icon_idx" ON "_pages_v_blocks_card" USING btree ("icon_id");
  CREATE UNIQUE INDEX "_pages_v_blocks_card_locales_locale_parent_id_unique" ON "_pages_v_blocks_card_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_pages_v_blocks_spacer_order_idx" ON "_pages_v_blocks_spacer" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_spacer_parent_id_idx" ON "_pages_v_blocks_spacer" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_spacer_path_idx" ON "_pages_v_blocks_spacer" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_layout_section_order_idx" ON "_pages_v_blocks_layout_section" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_layout_section_parent_id_idx" ON "_pages_v_blocks_layout_section" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_layout_section_path_idx" ON "_pages_v_blocks_layout_section" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_layout_section_background_image_idx" ON "_pages_v_blocks_layout_section" USING btree ("background_image_id");
  CREATE INDEX "_pages_v_parent_idx" ON "_pages_v" USING btree ("parent_id");
  CREATE INDEX "_pages_v_version_version_slug_idx" ON "_pages_v" USING btree ("version_slug");
  CREATE INDEX "_pages_v_version_meta_version_meta_image_idx" ON "_pages_v" USING btree ("version_meta_image_id");
  CREATE INDEX "_pages_v_version_version_updated_at_idx" ON "_pages_v" USING btree ("version_updated_at");
  CREATE INDEX "_pages_v_version_version_created_at_idx" ON "_pages_v" USING btree ("version_created_at");
  CREATE INDEX "_pages_v_version_version__status_idx" ON "_pages_v" USING btree ("version__status");
  CREATE INDEX "_pages_v_created_at_idx" ON "_pages_v" USING btree ("created_at");
  CREATE INDEX "_pages_v_updated_at_idx" ON "_pages_v" USING btree ("updated_at");
  CREATE INDEX "_pages_v_snapshot_idx" ON "_pages_v" USING btree ("snapshot");
  CREATE INDEX "_pages_v_published_locale_idx" ON "_pages_v" USING btree ("published_locale");
  CREATE INDEX "_pages_v_latest_idx" ON "_pages_v" USING btree ("latest");
  CREATE INDEX "_pages_v_autosave_idx" ON "_pages_v" USING btree ("autosave");
  CREATE UNIQUE INDEX "_pages_v_locales_locale_parent_id_unique" ON "_pages_v_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_pages_v_texts_order_parent" ON "_pages_v_texts" USING btree ("order","parent_id");
  CREATE INDEX "_pages_v_texts_locale_parent" ON "_pages_v_texts" USING btree ("locale","parent_id");
  CREATE INDEX "_pages_v_rels_order_idx" ON "_pages_v_rels" USING btree ("order");
  CREATE INDEX "_pages_v_rels_parent_idx" ON "_pages_v_rels" USING btree ("parent_id");
  CREATE INDEX "_pages_v_rels_path_idx" ON "_pages_v_rels" USING btree ("path");
  CREATE INDEX "_pages_v_rels_features_id_idx" ON "_pages_v_rels" USING btree ("features_id");
  CREATE INDEX "_pages_v_rels_solutions_id_idx" ON "_pages_v_rels" USING btree ("solutions_id");
  CREATE INDEX "_pages_v_rels_partners_id_idx" ON "_pages_v_rels" USING btree ("partners_id");
  CREATE INDEX "media_display_name_idx" ON "media" USING btree ("display_name");
  CREATE INDEX "media_updated_at_idx" ON "media" USING btree ("updated_at");
  CREATE INDEX "media_created_at_idx" ON "media" USING btree ("created_at");
  CREATE UNIQUE INDEX "media_filename_idx" ON "media" USING btree ("filename");
  CREATE INDEX "media_sizes_thumbnail_sizes_thumbnail_filename_idx" ON "media" USING btree ("sizes_thumbnail_filename");
  CREATE INDEX "media_sizes_card_sizes_card_filename_idx" ON "media" USING btree ("sizes_card_filename");
  CREATE INDEX "media_sizes_hero_sizes_hero_filename_idx" ON "media" USING btree ("sizes_hero_filename");
  CREATE UNIQUE INDEX "media_locales_locale_parent_id_unique" ON "media_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "partners__order_idx" ON "partners" USING btree ("_order");
  CREATE INDEX "partners_logo_idx" ON "partners" USING btree ("logo_id");
  CREATE INDEX "partners_logo_hover_idx" ON "partners" USING btree ("logo_hover_id");
  CREATE INDEX "partners_updated_at_idx" ON "partners" USING btree ("updated_at");
  CREATE INDEX "partners_created_at_idx" ON "partners" USING btree ("created_at");
  CREATE INDEX "partners__status_idx" ON "partners" USING btree ("_status");
  CREATE UNIQUE INDEX "partners_locales_locale_parent_id_unique" ON "partners_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_partners_v_parent_idx" ON "_partners_v" USING btree ("parent_id");
  CREATE INDEX "_partners_v_version_version__order_idx" ON "_partners_v" USING btree ("version__order");
  CREATE INDEX "_partners_v_version_version_logo_idx" ON "_partners_v" USING btree ("version_logo_id");
  CREATE INDEX "_partners_v_version_version_logo_hover_idx" ON "_partners_v" USING btree ("version_logo_hover_id");
  CREATE INDEX "_partners_v_version_version_updated_at_idx" ON "_partners_v" USING btree ("version_updated_at");
  CREATE INDEX "_partners_v_version_version_created_at_idx" ON "_partners_v" USING btree ("version_created_at");
  CREATE INDEX "_partners_v_version_version__status_idx" ON "_partners_v" USING btree ("version__status");
  CREATE INDEX "_partners_v_created_at_idx" ON "_partners_v" USING btree ("created_at");
  CREATE INDEX "_partners_v_updated_at_idx" ON "_partners_v" USING btree ("updated_at");
  CREATE INDEX "_partners_v_snapshot_idx" ON "_partners_v" USING btree ("snapshot");
  CREATE INDEX "_partners_v_published_locale_idx" ON "_partners_v" USING btree ("published_locale");
  CREATE INDEX "_partners_v_latest_idx" ON "_partners_v" USING btree ("latest");
  CREATE INDEX "_partners_v_autosave_idx" ON "_partners_v" USING btree ("autosave");
  CREATE UNIQUE INDEX "_partners_v_locales_locale_parent_id_unique" ON "_partners_v_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "solutions_pains_order_idx" ON "solutions_pains" USING btree ("_order");
  CREATE INDEX "solutions_pains_parent_id_idx" ON "solutions_pains" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "solutions_pains_locales_locale_parent_id_unique" ON "solutions_pains_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "solutions_points_order_idx" ON "solutions_points" USING btree ("_order");
  CREATE INDEX "solutions_points_parent_id_idx" ON "solutions_points" USING btree ("_parent_id");
  CREATE INDEX "solutions_points_feature_idx" ON "solutions_points" USING btree ("feature_id");
  CREATE UNIQUE INDEX "solutions_points_locales_locale_parent_id_unique" ON "solutions_points_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "solutions_faqs_order_idx" ON "solutions_faqs" USING btree ("_order");
  CREATE INDEX "solutions_faqs_parent_id_idx" ON "solutions_faqs" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "solutions_faqs_locales_locale_parent_id_unique" ON "solutions_faqs_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "solutions__order_idx" ON "solutions" USING btree ("_order");
  CREATE UNIQUE INDEX "solutions_slug_idx" ON "solutions" USING btree ("slug");
  CREATE INDEX "solutions_meta_meta_image_idx" ON "solutions" USING btree ("meta_image_id");
  CREATE INDEX "solutions_updated_at_idx" ON "solutions" USING btree ("updated_at");
  CREATE INDEX "solutions_created_at_idx" ON "solutions" USING btree ("created_at");
  CREATE INDEX "solutions__status_idx" ON "solutions" USING btree ("_status");
  CREATE UNIQUE INDEX "solutions_locales_locale_parent_id_unique" ON "solutions_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_solutions_v_version_pains_order_idx" ON "_solutions_v_version_pains" USING btree ("_order");
  CREATE INDEX "_solutions_v_version_pains_parent_id_idx" ON "_solutions_v_version_pains" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_solutions_v_version_pains_locales_locale_parent_id_unique" ON "_solutions_v_version_pains_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_solutions_v_version_points_order_idx" ON "_solutions_v_version_points" USING btree ("_order");
  CREATE INDEX "_solutions_v_version_points_parent_id_idx" ON "_solutions_v_version_points" USING btree ("_parent_id");
  CREATE INDEX "_solutions_v_version_points_feature_idx" ON "_solutions_v_version_points" USING btree ("feature_id");
  CREATE UNIQUE INDEX "_solutions_v_version_points_locales_locale_parent_id_unique" ON "_solutions_v_version_points_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_solutions_v_version_faqs_order_idx" ON "_solutions_v_version_faqs" USING btree ("_order");
  CREATE INDEX "_solutions_v_version_faqs_parent_id_idx" ON "_solutions_v_version_faqs" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_solutions_v_version_faqs_locales_locale_parent_id_unique" ON "_solutions_v_version_faqs_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_solutions_v_parent_idx" ON "_solutions_v" USING btree ("parent_id");
  CREATE INDEX "_solutions_v_version_version__order_idx" ON "_solutions_v" USING btree ("version__order");
  CREATE INDEX "_solutions_v_version_version_slug_idx" ON "_solutions_v" USING btree ("version_slug");
  CREATE INDEX "_solutions_v_version_meta_version_meta_image_idx" ON "_solutions_v" USING btree ("version_meta_image_id");
  CREATE INDEX "_solutions_v_version_version_updated_at_idx" ON "_solutions_v" USING btree ("version_updated_at");
  CREATE INDEX "_solutions_v_version_version_created_at_idx" ON "_solutions_v" USING btree ("version_created_at");
  CREATE INDEX "_solutions_v_version_version__status_idx" ON "_solutions_v" USING btree ("version__status");
  CREATE INDEX "_solutions_v_created_at_idx" ON "_solutions_v" USING btree ("created_at");
  CREATE INDEX "_solutions_v_updated_at_idx" ON "_solutions_v" USING btree ("updated_at");
  CREATE INDEX "_solutions_v_snapshot_idx" ON "_solutions_v" USING btree ("snapshot");
  CREATE INDEX "_solutions_v_published_locale_idx" ON "_solutions_v" USING btree ("published_locale");
  CREATE INDEX "_solutions_v_latest_idx" ON "_solutions_v" USING btree ("latest");
  CREATE INDEX "_solutions_v_autosave_idx" ON "_solutions_v" USING btree ("autosave");
  CREATE UNIQUE INDEX "_solutions_v_locales_locale_parent_id_unique" ON "_solutions_v_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "features_benefits_order_idx" ON "features_benefits" USING btree ("_order");
  CREATE INDEX "features_benefits_parent_id_idx" ON "features_benefits" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "features_benefits_locales_locale_parent_id_unique" ON "features_benefits_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "features_blocks_points_order_idx" ON "features_blocks_points" USING btree ("_order");
  CREATE INDEX "features_blocks_points_parent_id_idx" ON "features_blocks_points" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "features_blocks_points_locales_locale_parent_id_unique" ON "features_blocks_points_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "features_blocks_order_idx" ON "features_blocks" USING btree ("_order");
  CREATE INDEX "features_blocks_parent_id_idx" ON "features_blocks" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "features_blocks_locales_locale_parent_id_unique" ON "features_blocks_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "features_mock_rows_order_idx" ON "features_mock_rows" USING btree ("_order");
  CREATE INDEX "features_mock_rows_parent_id_idx" ON "features_mock_rows" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "features_mock_rows_locales_locale_parent_id_unique" ON "features_mock_rows_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "features_faqs_order_idx" ON "features_faqs" USING btree ("_order");
  CREATE INDEX "features_faqs_parent_id_idx" ON "features_faqs" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "features_faqs_locales_locale_parent_id_unique" ON "features_faqs_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "features__order_idx" ON "features" USING btree ("_order");
  CREATE UNIQUE INDEX "features_slug_idx" ON "features" USING btree ("slug");
  CREATE INDEX "features_mock_mock_screen_idx" ON "features" USING btree ("mock_screen_id");
  CREATE INDEX "features_meta_meta_image_idx" ON "features" USING btree ("meta_image_id");
  CREATE INDEX "features_updated_at_idx" ON "features" USING btree ("updated_at");
  CREATE INDEX "features_created_at_idx" ON "features" USING btree ("created_at");
  CREATE INDEX "features__status_idx" ON "features" USING btree ("_status");
  CREATE UNIQUE INDEX "features_locales_locale_parent_id_unique" ON "features_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "features_rels_order_idx" ON "features_rels" USING btree ("order");
  CREATE INDEX "features_rels_parent_idx" ON "features_rels" USING btree ("parent_id");
  CREATE INDEX "features_rels_path_idx" ON "features_rels" USING btree ("path");
  CREATE INDEX "features_rels_features_id_idx" ON "features_rels" USING btree ("features_id");
  CREATE INDEX "_features_v_version_benefits_order_idx" ON "_features_v_version_benefits" USING btree ("_order");
  CREATE INDEX "_features_v_version_benefits_parent_id_idx" ON "_features_v_version_benefits" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_features_v_version_benefits_locales_locale_parent_id_unique" ON "_features_v_version_benefits_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_features_v_version_blocks_points_order_idx" ON "_features_v_version_blocks_points" USING btree ("_order");
  CREATE INDEX "_features_v_version_blocks_points_parent_id_idx" ON "_features_v_version_blocks_points" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_features_v_version_blocks_points_locales_locale_parent_id_u" ON "_features_v_version_blocks_points_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_features_v_version_blocks_order_idx" ON "_features_v_version_blocks" USING btree ("_order");
  CREATE INDEX "_features_v_version_blocks_parent_id_idx" ON "_features_v_version_blocks" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_features_v_version_blocks_locales_locale_parent_id_unique" ON "_features_v_version_blocks_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_features_v_version_mock_rows_order_idx" ON "_features_v_version_mock_rows" USING btree ("_order");
  CREATE INDEX "_features_v_version_mock_rows_parent_id_idx" ON "_features_v_version_mock_rows" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_features_v_version_mock_rows_locales_locale_parent_id_uniqu" ON "_features_v_version_mock_rows_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_features_v_version_faqs_order_idx" ON "_features_v_version_faqs" USING btree ("_order");
  CREATE INDEX "_features_v_version_faqs_parent_id_idx" ON "_features_v_version_faqs" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_features_v_version_faqs_locales_locale_parent_id_unique" ON "_features_v_version_faqs_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_features_v_parent_idx" ON "_features_v" USING btree ("parent_id");
  CREATE INDEX "_features_v_version_version__order_idx" ON "_features_v" USING btree ("version__order");
  CREATE INDEX "_features_v_version_version_slug_idx" ON "_features_v" USING btree ("version_slug");
  CREATE INDEX "_features_v_version_mock_version_mock_screen_idx" ON "_features_v" USING btree ("version_mock_screen_id");
  CREATE INDEX "_features_v_version_meta_version_meta_image_idx" ON "_features_v" USING btree ("version_meta_image_id");
  CREATE INDEX "_features_v_version_version_updated_at_idx" ON "_features_v" USING btree ("version_updated_at");
  CREATE INDEX "_features_v_version_version_created_at_idx" ON "_features_v" USING btree ("version_created_at");
  CREATE INDEX "_features_v_version_version__status_idx" ON "_features_v" USING btree ("version__status");
  CREATE INDEX "_features_v_created_at_idx" ON "_features_v" USING btree ("created_at");
  CREATE INDEX "_features_v_updated_at_idx" ON "_features_v" USING btree ("updated_at");
  CREATE INDEX "_features_v_snapshot_idx" ON "_features_v" USING btree ("snapshot");
  CREATE INDEX "_features_v_published_locale_idx" ON "_features_v" USING btree ("published_locale");
  CREATE INDEX "_features_v_latest_idx" ON "_features_v" USING btree ("latest");
  CREATE INDEX "_features_v_autosave_idx" ON "_features_v" USING btree ("autosave");
  CREATE UNIQUE INDEX "_features_v_locales_locale_parent_id_unique" ON "_features_v_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_features_v_rels_order_idx" ON "_features_v_rels" USING btree ("order");
  CREATE INDEX "_features_v_rels_parent_idx" ON "_features_v_rels" USING btree ("parent_id");
  CREATE INDEX "_features_v_rels_path_idx" ON "_features_v_rels" USING btree ("path");
  CREATE INDEX "_features_v_rels_features_id_idx" ON "_features_v_rels" USING btree ("features_id");
  CREATE INDEX "contact_submissions_updated_at_idx" ON "contact_submissions" USING btree ("updated_at");
  CREATE INDEX "contact_submissions_created_at_idx" ON "contact_submissions" USING btree ("created_at");
  CREATE INDEX "users_roles_order_idx" ON "users_roles" USING btree ("order");
  CREATE INDEX "users_roles_parent_idx" ON "users_roles" USING btree ("parent_id");
  CREATE INDEX "users_sessions_order_idx" ON "users_sessions" USING btree ("_order");
  CREATE INDEX "users_sessions_parent_id_idx" ON "users_sessions" USING btree ("_parent_id");
  CREATE INDEX "users_updated_at_idx" ON "users" USING btree ("updated_at");
  CREATE INDEX "users_created_at_idx" ON "users" USING btree ("created_at");
  CREATE UNIQUE INDEX "users_email_idx" ON "users" USING btree ("email");
  CREATE INDEX "audit_logs_action_idx" ON "audit_logs" USING btree ("action");
  CREATE INDEX "audit_logs_resource_idx" ON "audit_logs" USING btree ("resource");
  CREATE INDEX "audit_logs_user_idx" ON "audit_logs" USING btree ("user_id");
  CREATE INDEX "audit_logs_updated_at_idx" ON "audit_logs" USING btree ("updated_at");
  CREATE INDEX "audit_logs_created_at_idx" ON "audit_logs" USING btree ("created_at");
  CREATE INDEX "audit_logs_texts_order_parent" ON "audit_logs_texts" USING btree ("order","parent_id");
  CREATE UNIQUE INDEX "payload_kv_key_idx" ON "payload_kv" USING btree ("key");
  CREATE INDEX "payload_jobs_log_order_idx" ON "payload_jobs_log" USING btree ("_order");
  CREATE INDEX "payload_jobs_log_parent_id_idx" ON "payload_jobs_log" USING btree ("_parent_id");
  CREATE INDEX "payload_jobs_completed_at_idx" ON "payload_jobs" USING btree ("completed_at");
  CREATE INDEX "payload_jobs_total_tried_idx" ON "payload_jobs" USING btree ("total_tried");
  CREATE INDEX "payload_jobs_has_error_idx" ON "payload_jobs" USING btree ("has_error");
  CREATE INDEX "payload_jobs_task_slug_idx" ON "payload_jobs" USING btree ("task_slug");
  CREATE INDEX "payload_jobs_queue_idx" ON "payload_jobs" USING btree ("queue");
  CREATE INDEX "payload_jobs_wait_until_idx" ON "payload_jobs" USING btree ("wait_until");
  CREATE INDEX "payload_jobs_processing_idx" ON "payload_jobs" USING btree ("processing");
  CREATE INDEX "payload_jobs_updated_at_idx" ON "payload_jobs" USING btree ("updated_at");
  CREATE INDEX "payload_jobs_created_at_idx" ON "payload_jobs" USING btree ("created_at");
  CREATE INDEX "payload_locked_documents_global_slug_idx" ON "payload_locked_documents" USING btree ("global_slug");
  CREATE INDEX "payload_locked_documents_updated_at_idx" ON "payload_locked_documents" USING btree ("updated_at");
  CREATE INDEX "payload_locked_documents_created_at_idx" ON "payload_locked_documents" USING btree ("created_at");
  CREATE INDEX "payload_locked_documents_rels_order_idx" ON "payload_locked_documents_rels" USING btree ("order");
  CREATE INDEX "payload_locked_documents_rels_parent_idx" ON "payload_locked_documents_rels" USING btree ("parent_id");
  CREATE INDEX "payload_locked_documents_rels_path_idx" ON "payload_locked_documents_rels" USING btree ("path");
  CREATE INDEX "payload_locked_documents_rels_pages_id_idx" ON "payload_locked_documents_rels" USING btree ("pages_id");
  CREATE INDEX "payload_locked_documents_rels_media_id_idx" ON "payload_locked_documents_rels" USING btree ("media_id");
  CREATE INDEX "payload_locked_documents_rels_partners_id_idx" ON "payload_locked_documents_rels" USING btree ("partners_id");
  CREATE INDEX "payload_locked_documents_rels_solutions_id_idx" ON "payload_locked_documents_rels" USING btree ("solutions_id");
  CREATE INDEX "payload_locked_documents_rels_features_id_idx" ON "payload_locked_documents_rels" USING btree ("features_id");
  CREATE INDEX "payload_locked_documents_rels_contact_submissions_id_idx" ON "payload_locked_documents_rels" USING btree ("contact_submissions_id");
  CREATE INDEX "payload_locked_documents_rels_users_id_idx" ON "payload_locked_documents_rels" USING btree ("users_id");
  CREATE INDEX "payload_locked_documents_rels_audit_logs_id_idx" ON "payload_locked_documents_rels" USING btree ("audit_logs_id");
  CREATE INDEX "payload_preferences_key_idx" ON "payload_preferences" USING btree ("key");
  CREATE INDEX "payload_preferences_updated_at_idx" ON "payload_preferences" USING btree ("updated_at");
  CREATE INDEX "payload_preferences_created_at_idx" ON "payload_preferences" USING btree ("created_at");
  CREATE INDEX "payload_preferences_rels_order_idx" ON "payload_preferences_rels" USING btree ("order");
  CREATE INDEX "payload_preferences_rels_parent_idx" ON "payload_preferences_rels" USING btree ("parent_id");
  CREATE INDEX "payload_preferences_rels_path_idx" ON "payload_preferences_rels" USING btree ("path");
  CREATE INDEX "payload_preferences_rels_users_id_idx" ON "payload_preferences_rels" USING btree ("users_id");
  CREATE INDEX "payload_migrations_updated_at_idx" ON "payload_migrations" USING btree ("updated_at");
  CREATE INDEX "payload_migrations_created_at_idx" ON "payload_migrations" USING btree ("created_at");
  CREATE INDEX "site_settings_socials_order_idx" ON "site_settings_socials" USING btree ("_order");
  CREATE INDEX "site_settings_socials_parent_id_idx" ON "site_settings_socials" USING btree ("_parent_id");
  CREATE INDEX "site_settings_socials_icon_idx" ON "site_settings_socials" USING btree ("icon_id");
  CREATE UNIQUE INDEX "site_settings_socials_locales_locale_parent_id_unique" ON "site_settings_socials_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "site_settings_logo_idx" ON "site_settings" USING btree ("logo_id");
  CREATE INDEX "site_settings__status_idx" ON "site_settings" USING btree ("_status");
  CREATE UNIQUE INDEX "site_settings_locales_locale_parent_id_unique" ON "site_settings_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_site_settings_v_version_socials_order_idx" ON "_site_settings_v_version_socials" USING btree ("_order");
  CREATE INDEX "_site_settings_v_version_socials_parent_id_idx" ON "_site_settings_v_version_socials" USING btree ("_parent_id");
  CREATE INDEX "_site_settings_v_version_socials_icon_idx" ON "_site_settings_v_version_socials" USING btree ("icon_id");
  CREATE UNIQUE INDEX "_site_settings_v_version_socials_locales_locale_parent_id_un" ON "_site_settings_v_version_socials_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_site_settings_v_version_version_logo_idx" ON "_site_settings_v" USING btree ("version_logo_id");
  CREATE INDEX "_site_settings_v_version_version__status_idx" ON "_site_settings_v" USING btree ("version__status");
  CREATE INDEX "_site_settings_v_created_at_idx" ON "_site_settings_v" USING btree ("created_at");
  CREATE INDEX "_site_settings_v_updated_at_idx" ON "_site_settings_v" USING btree ("updated_at");
  CREATE INDEX "_site_settings_v_snapshot_idx" ON "_site_settings_v" USING btree ("snapshot");
  CREATE INDEX "_site_settings_v_published_locale_idx" ON "_site_settings_v" USING btree ("published_locale");
  CREATE INDEX "_site_settings_v_latest_idx" ON "_site_settings_v" USING btree ("latest");
  CREATE INDEX "_site_settings_v_autosave_idx" ON "_site_settings_v" USING btree ("autosave");
  CREATE UNIQUE INDEX "_site_settings_v_locales_locale_parent_id_unique" ON "_site_settings_v_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "navigation_links_order_idx" ON "navigation_links" USING btree ("_order");
  CREATE INDEX "navigation_links_parent_id_idx" ON "navigation_links" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "navigation_links_locales_locale_parent_id_unique" ON "navigation_links_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "navigation_link_library_links_order_idx" ON "navigation_link_library_links" USING btree ("_order");
  CREATE INDEX "navigation_link_library_links_parent_id_idx" ON "navigation_link_library_links" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "navigation_link_library_links_locales_locale_parent_id_uniqu" ON "navigation_link_library_links_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "navigation_link_library_order_idx" ON "navigation_link_library" USING btree ("_order");
  CREATE INDEX "navigation_link_library_parent_id_idx" ON "navigation_link_library" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "navigation_link_library_locales_locale_parent_id_unique" ON "navigation_link_library_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "navigation__status_idx" ON "navigation" USING btree ("_status");
  CREATE UNIQUE INDEX "navigation_locales_locale_parent_id_unique" ON "navigation_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_navigation_v_version_links_order_idx" ON "_navigation_v_version_links" USING btree ("_order");
  CREATE INDEX "_navigation_v_version_links_parent_id_idx" ON "_navigation_v_version_links" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_navigation_v_version_links_locales_locale_parent_id_unique" ON "_navigation_v_version_links_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_navigation_v_version_link_library_links_order_idx" ON "_navigation_v_version_link_library_links" USING btree ("_order");
  CREATE INDEX "_navigation_v_version_link_library_links_parent_id_idx" ON "_navigation_v_version_link_library_links" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_navigation_v_version_link_library_links_locales_locale_pare" ON "_navigation_v_version_link_library_links_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_navigation_v_version_link_library_order_idx" ON "_navigation_v_version_link_library" USING btree ("_order");
  CREATE INDEX "_navigation_v_version_link_library_parent_id_idx" ON "_navigation_v_version_link_library" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_navigation_v_version_link_library_locales_locale_parent_id_" ON "_navigation_v_version_link_library_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_navigation_v_version_version__status_idx" ON "_navigation_v" USING btree ("version__status");
  CREATE INDEX "_navigation_v_created_at_idx" ON "_navigation_v" USING btree ("created_at");
  CREATE INDEX "_navigation_v_updated_at_idx" ON "_navigation_v" USING btree ("updated_at");
  CREATE INDEX "_navigation_v_snapshot_idx" ON "_navigation_v" USING btree ("snapshot");
  CREATE INDEX "_navigation_v_published_locale_idx" ON "_navigation_v" USING btree ("published_locale");
  CREATE INDEX "_navigation_v_latest_idx" ON "_navigation_v" USING btree ("latest");
  CREATE INDEX "_navigation_v_autosave_idx" ON "_navigation_v" USING btree ("autosave");
  CREATE UNIQUE INDEX "_navigation_v_locales_locale_parent_id_unique" ON "_navigation_v_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "footer_columns_links_order_idx" ON "footer_columns_links" USING btree ("_order");
  CREATE INDEX "footer_columns_links_parent_id_idx" ON "footer_columns_links" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "footer_columns_links_locales_locale_parent_id_unique" ON "footer_columns_links_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "footer_columns_order_idx" ON "footer_columns" USING btree ("_order");
  CREATE INDEX "footer_columns_parent_id_idx" ON "footer_columns" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "footer_columns_locales_locale_parent_id_unique" ON "footer_columns_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "footer__status_idx" ON "footer" USING btree ("_status");
  CREATE UNIQUE INDEX "footer_locales_locale_parent_id_unique" ON "footer_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_footer_v_version_columns_links_order_idx" ON "_footer_v_version_columns_links" USING btree ("_order");
  CREATE INDEX "_footer_v_version_columns_links_parent_id_idx" ON "_footer_v_version_columns_links" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_footer_v_version_columns_links_locales_locale_parent_id_uni" ON "_footer_v_version_columns_links_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_footer_v_version_columns_order_idx" ON "_footer_v_version_columns" USING btree ("_order");
  CREATE INDEX "_footer_v_version_columns_parent_id_idx" ON "_footer_v_version_columns" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_footer_v_version_columns_locales_locale_parent_id_unique" ON "_footer_v_version_columns_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_footer_v_version_version__status_idx" ON "_footer_v" USING btree ("version__status");
  CREATE INDEX "_footer_v_created_at_idx" ON "_footer_v" USING btree ("created_at");
  CREATE INDEX "_footer_v_updated_at_idx" ON "_footer_v" USING btree ("updated_at");
  CREATE INDEX "_footer_v_snapshot_idx" ON "_footer_v" USING btree ("snapshot");
  CREATE INDEX "_footer_v_published_locale_idx" ON "_footer_v" USING btree ("published_locale");
  CREATE INDEX "_footer_v_latest_idx" ON "_footer_v" USING btree ("latest");
  CREATE INDEX "_footer_v_autosave_idx" ON "_footer_v" USING btree ("autosave");
  CREATE UNIQUE INDEX "_footer_v_locales_locale_parent_id_unique" ON "_footer_v_locales" USING btree ("_locale","_parent_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "pages_blocks_hero_buttons" CASCADE;
  DROP TABLE "pages_blocks_hero_buttons_locales" CASCADE;
  DROP TABLE "pages_blocks_hero_mockup_approvals" CASCADE;
  DROP TABLE "pages_blocks_hero_mockup_approvals_locales" CASCADE;
  DROP TABLE "pages_blocks_hero_mockup_phone_chips" CASCADE;
  DROP TABLE "pages_blocks_hero_mockup_phone_chips_locales" CASCADE;
  DROP TABLE "pages_blocks_hero_trust_points" CASCADE;
  DROP TABLE "pages_blocks_hero_trust_points_locales" CASCADE;
  DROP TABLE "pages_blocks_hero_visual_rows" CASCADE;
  DROP TABLE "pages_blocks_hero_visual_rows_locales" CASCADE;
  DROP TABLE "pages_blocks_hero" CASCADE;
  DROP TABLE "pages_blocks_hero_locales" CASCADE;
  DROP TABLE "pages_blocks_feature_band_buttons" CASCADE;
  DROP TABLE "pages_blocks_feature_band_buttons_locales" CASCADE;
  DROP TABLE "pages_blocks_feature_band_chips" CASCADE;
  DROP TABLE "pages_blocks_feature_band_chips_locales" CASCADE;
  DROP TABLE "pages_blocks_feature_band_items" CASCADE;
  DROP TABLE "pages_blocks_feature_band_items_locales" CASCADE;
  DROP TABLE "pages_blocks_feature_band" CASCADE;
  DROP TABLE "pages_blocks_feature_band_locales" CASCADE;
  DROP TABLE "pages_blocks_requests_board_buttons" CASCADE;
  DROP TABLE "pages_blocks_requests_board_buttons_locales" CASCADE;
  DROP TABLE "pages_blocks_requests_board_cards" CASCADE;
  DROP TABLE "pages_blocks_requests_board_cards_locales" CASCADE;
  DROP TABLE "pages_blocks_requests_board_strip_items" CASCADE;
  DROP TABLE "pages_blocks_requests_board_strip_items_locales" CASCADE;
  DROP TABLE "pages_blocks_requests_board" CASCADE;
  DROP TABLE "pages_blocks_requests_board_locales" CASCADE;
  DROP TABLE "pages_blocks_modules_map" CASCADE;
  DROP TABLE "pages_blocks_modules_map_locales" CASCADE;
  DROP TABLE "pages_blocks_industries" CASCADE;
  DROP TABLE "pages_blocks_industries_locales" CASCADE;
  DROP TABLE "pages_blocks_testimonials_items" CASCADE;
  DROP TABLE "pages_blocks_testimonials_items_locales" CASCADE;
  DROP TABLE "pages_blocks_testimonials" CASCADE;
  DROP TABLE "pages_blocks_testimonials_locales" CASCADE;
  DROP TABLE "pages_blocks_pricing_plans_features" CASCADE;
  DROP TABLE "pages_blocks_pricing_plans_features_locales" CASCADE;
  DROP TABLE "pages_blocks_pricing_plans" CASCADE;
  DROP TABLE "pages_blocks_pricing_plans_locales" CASCADE;
  DROP TABLE "pages_blocks_pricing_matrix_groups_points" CASCADE;
  DROP TABLE "pages_blocks_pricing_matrix_groups_points_locales" CASCADE;
  DROP TABLE "pages_blocks_pricing_matrix_groups_cells" CASCADE;
  DROP TABLE "pages_blocks_pricing_matrix_groups_cells_locales" CASCADE;
  DROP TABLE "pages_blocks_pricing_matrix_groups" CASCADE;
  DROP TABLE "pages_blocks_pricing_matrix_groups_locales" CASCADE;
  DROP TABLE "pages_blocks_pricing_matrix" CASCADE;
  DROP TABLE "pages_blocks_pricing_matrix_locales" CASCADE;
  DROP TABLE "pages_blocks_pricing_points" CASCADE;
  DROP TABLE "pages_blocks_pricing_points_locales" CASCADE;
  DROP TABLE "pages_blocks_pricing_buttons" CASCADE;
  DROP TABLE "pages_blocks_pricing_buttons_locales" CASCADE;
  DROP TABLE "pages_blocks_pricing" CASCADE;
  DROP TABLE "pages_blocks_pricing_locales" CASCADE;
  DROP TABLE "pages_blocks_faq_items" CASCADE;
  DROP TABLE "pages_blocks_faq_items_locales" CASCADE;
  DROP TABLE "pages_blocks_faq" CASCADE;
  DROP TABLE "pages_blocks_faq_locales" CASCADE;
  DROP TABLE "pages_blocks_cta_buttons" CASCADE;
  DROP TABLE "pages_blocks_cta_buttons_locales" CASCADE;
  DROP TABLE "pages_blocks_cta_guarantees" CASCADE;
  DROP TABLE "pages_blocks_cta_guarantees_locales" CASCADE;
  DROP TABLE "pages_blocks_cta" CASCADE;
  DROP TABLE "pages_blocks_cta_locales" CASCADE;
  DROP TABLE "pages_blocks_section_visual_rows" CASCADE;
  DROP TABLE "pages_blocks_section_visual_rows_locales" CASCADE;
  DROP TABLE "pages_blocks_section_items" CASCADE;
  DROP TABLE "pages_blocks_section_items_locales" CASCADE;
  DROP TABLE "pages_blocks_section" CASCADE;
  DROP TABLE "pages_blocks_section_locales" CASCADE;
  DROP TABLE "pages_blocks_feature_catalog" CASCADE;
  DROP TABLE "pages_blocks_feature_catalog_locales" CASCADE;
  DROP TABLE "pages_blocks_solution_catalog" CASCADE;
  DROP TABLE "pages_blocks_solution_catalog_locales" CASCADE;
  DROP TABLE "pages_blocks_tools_list" CASCADE;
  DROP TABLE "pages_blocks_tools_list_locales" CASCADE;
  DROP TABLE "pages_blocks_contact_form_visual_rows" CASCADE;
  DROP TABLE "pages_blocks_contact_form_visual_rows_locales" CASCADE;
  DROP TABLE "pages_blocks_contact_form" CASCADE;
  DROP TABLE "pages_blocks_contact_form_locales" CASCADE;
  DROP TABLE "pages_blocks_text_sections_sections" CASCADE;
  DROP TABLE "pages_blocks_text_sections_sections_locales" CASCADE;
  DROP TABLE "pages_blocks_text_sections" CASCADE;
  DROP TABLE "pages_blocks_feature_grid_items" CASCADE;
  DROP TABLE "pages_blocks_feature_grid_items_locales" CASCADE;
  DROP TABLE "pages_blocks_feature_grid" CASCADE;
  DROP TABLE "pages_blocks_feature_grid_locales" CASCADE;
  DROP TABLE "pages_blocks_workflow_steps" CASCADE;
  DROP TABLE "pages_blocks_workflow_steps_locales" CASCADE;
  DROP TABLE "pages_blocks_workflow" CASCADE;
  DROP TABLE "pages_blocks_workflow_locales" CASCADE;
  DROP TABLE "pages_blocks_promo_bento_cards" CASCADE;
  DROP TABLE "pages_blocks_promo_bento_cards_locales" CASCADE;
  DROP TABLE "pages_blocks_promo_bento" CASCADE;
  DROP TABLE "pages_blocks_promo_bento_locales" CASCADE;
  DROP TABLE "pages_blocks_partners" CASCADE;
  DROP TABLE "pages_blocks_partners_locales" CASCADE;
  DROP TABLE "pages_blocks_badge" CASCADE;
  DROP TABLE "pages_blocks_badge_locales" CASCADE;
  DROP TABLE "pages_blocks_heading" CASCADE;
  DROP TABLE "pages_blocks_heading_locales" CASCADE;
  DROP TABLE "pages_blocks_paragraph" CASCADE;
  DROP TABLE "pages_blocks_paragraph_locales" CASCADE;
  DROP TABLE "pages_blocks_image" CASCADE;
  DROP TABLE "pages_blocks_image_locales" CASCADE;
  DROP TABLE "pages_blocks_button" CASCADE;
  DROP TABLE "pages_blocks_button_locales" CASCADE;
  DROP TABLE "pages_blocks_card" CASCADE;
  DROP TABLE "pages_blocks_card_locales" CASCADE;
  DROP TABLE "pages_blocks_spacer" CASCADE;
  DROP TABLE "pages_blocks_layout_section" CASCADE;
  DROP TABLE "pages" CASCADE;
  DROP TABLE "pages_locales" CASCADE;
  DROP TABLE "pages_texts" CASCADE;
  DROP TABLE "pages_rels" CASCADE;
  DROP TABLE "_pages_v_blocks_hero_buttons" CASCADE;
  DROP TABLE "_pages_v_blocks_hero_buttons_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_hero_mockup_approvals" CASCADE;
  DROP TABLE "_pages_v_blocks_hero_mockup_approvals_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_hero_mockup_phone_chips" CASCADE;
  DROP TABLE "_pages_v_blocks_hero_mockup_phone_chips_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_hero_trust_points" CASCADE;
  DROP TABLE "_pages_v_blocks_hero_trust_points_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_hero_visual_rows" CASCADE;
  DROP TABLE "_pages_v_blocks_hero_visual_rows_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_hero" CASCADE;
  DROP TABLE "_pages_v_blocks_hero_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_feature_band_buttons" CASCADE;
  DROP TABLE "_pages_v_blocks_feature_band_buttons_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_feature_band_chips" CASCADE;
  DROP TABLE "_pages_v_blocks_feature_band_chips_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_feature_band_items" CASCADE;
  DROP TABLE "_pages_v_blocks_feature_band_items_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_feature_band" CASCADE;
  DROP TABLE "_pages_v_blocks_feature_band_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_requests_board_buttons" CASCADE;
  DROP TABLE "_pages_v_blocks_requests_board_buttons_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_requests_board_cards" CASCADE;
  DROP TABLE "_pages_v_blocks_requests_board_cards_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_requests_board_strip_items" CASCADE;
  DROP TABLE "_pages_v_blocks_requests_board_strip_items_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_requests_board" CASCADE;
  DROP TABLE "_pages_v_blocks_requests_board_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_modules_map" CASCADE;
  DROP TABLE "_pages_v_blocks_modules_map_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_industries" CASCADE;
  DROP TABLE "_pages_v_blocks_industries_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_testimonials_items" CASCADE;
  DROP TABLE "_pages_v_blocks_testimonials_items_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_testimonials" CASCADE;
  DROP TABLE "_pages_v_blocks_testimonials_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_pricing_plans_features" CASCADE;
  DROP TABLE "_pages_v_blocks_pricing_plans_features_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_pricing_plans" CASCADE;
  DROP TABLE "_pages_v_blocks_pricing_plans_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_pricing_matrix_groups_points" CASCADE;
  DROP TABLE "_pages_v_blocks_pricing_matrix_groups_points_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_pricing_matrix_groups_cells" CASCADE;
  DROP TABLE "_pages_v_blocks_pricing_matrix_groups_cells_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_pricing_matrix_groups" CASCADE;
  DROP TABLE "_pages_v_blocks_pricing_matrix_groups_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_pricing_matrix" CASCADE;
  DROP TABLE "_pages_v_blocks_pricing_matrix_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_pricing_points" CASCADE;
  DROP TABLE "_pages_v_blocks_pricing_points_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_pricing_buttons" CASCADE;
  DROP TABLE "_pages_v_blocks_pricing_buttons_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_pricing" CASCADE;
  DROP TABLE "_pages_v_blocks_pricing_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_faq_items" CASCADE;
  DROP TABLE "_pages_v_blocks_faq_items_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_faq" CASCADE;
  DROP TABLE "_pages_v_blocks_faq_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_cta_buttons" CASCADE;
  DROP TABLE "_pages_v_blocks_cta_buttons_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_cta_guarantees" CASCADE;
  DROP TABLE "_pages_v_blocks_cta_guarantees_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_cta" CASCADE;
  DROP TABLE "_pages_v_blocks_cta_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_section_visual_rows" CASCADE;
  DROP TABLE "_pages_v_blocks_section_visual_rows_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_section_items" CASCADE;
  DROP TABLE "_pages_v_blocks_section_items_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_section" CASCADE;
  DROP TABLE "_pages_v_blocks_section_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_feature_catalog" CASCADE;
  DROP TABLE "_pages_v_blocks_feature_catalog_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_solution_catalog" CASCADE;
  DROP TABLE "_pages_v_blocks_solution_catalog_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_tools_list" CASCADE;
  DROP TABLE "_pages_v_blocks_tools_list_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_contact_form_visual_rows" CASCADE;
  DROP TABLE "_pages_v_blocks_contact_form_visual_rows_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_contact_form" CASCADE;
  DROP TABLE "_pages_v_blocks_contact_form_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_text_sections_sections" CASCADE;
  DROP TABLE "_pages_v_blocks_text_sections_sections_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_text_sections" CASCADE;
  DROP TABLE "_pages_v_blocks_feature_grid_items" CASCADE;
  DROP TABLE "_pages_v_blocks_feature_grid_items_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_feature_grid" CASCADE;
  DROP TABLE "_pages_v_blocks_feature_grid_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_workflow_steps" CASCADE;
  DROP TABLE "_pages_v_blocks_workflow_steps_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_workflow" CASCADE;
  DROP TABLE "_pages_v_blocks_workflow_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_promo_bento_cards" CASCADE;
  DROP TABLE "_pages_v_blocks_promo_bento_cards_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_promo_bento" CASCADE;
  DROP TABLE "_pages_v_blocks_promo_bento_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_partners" CASCADE;
  DROP TABLE "_pages_v_blocks_partners_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_badge" CASCADE;
  DROP TABLE "_pages_v_blocks_badge_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_heading" CASCADE;
  DROP TABLE "_pages_v_blocks_heading_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_paragraph" CASCADE;
  DROP TABLE "_pages_v_blocks_paragraph_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_image" CASCADE;
  DROP TABLE "_pages_v_blocks_image_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_button" CASCADE;
  DROP TABLE "_pages_v_blocks_button_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_card" CASCADE;
  DROP TABLE "_pages_v_blocks_card_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_spacer" CASCADE;
  DROP TABLE "_pages_v_blocks_layout_section" CASCADE;
  DROP TABLE "_pages_v" CASCADE;
  DROP TABLE "_pages_v_locales" CASCADE;
  DROP TABLE "_pages_v_texts" CASCADE;
  DROP TABLE "_pages_v_rels" CASCADE;
  DROP TABLE "media" CASCADE;
  DROP TABLE "media_locales" CASCADE;
  DROP TABLE "partners" CASCADE;
  DROP TABLE "partners_locales" CASCADE;
  DROP TABLE "_partners_v" CASCADE;
  DROP TABLE "_partners_v_locales" CASCADE;
  DROP TABLE "solutions_pains" CASCADE;
  DROP TABLE "solutions_pains_locales" CASCADE;
  DROP TABLE "solutions_points" CASCADE;
  DROP TABLE "solutions_points_locales" CASCADE;
  DROP TABLE "solutions_faqs" CASCADE;
  DROP TABLE "solutions_faqs_locales" CASCADE;
  DROP TABLE "solutions" CASCADE;
  DROP TABLE "solutions_locales" CASCADE;
  DROP TABLE "_solutions_v_version_pains" CASCADE;
  DROP TABLE "_solutions_v_version_pains_locales" CASCADE;
  DROP TABLE "_solutions_v_version_points" CASCADE;
  DROP TABLE "_solutions_v_version_points_locales" CASCADE;
  DROP TABLE "_solutions_v_version_faqs" CASCADE;
  DROP TABLE "_solutions_v_version_faqs_locales" CASCADE;
  DROP TABLE "_solutions_v" CASCADE;
  DROP TABLE "_solutions_v_locales" CASCADE;
  DROP TABLE "features_benefits" CASCADE;
  DROP TABLE "features_benefits_locales" CASCADE;
  DROP TABLE "features_blocks_points" CASCADE;
  DROP TABLE "features_blocks_points_locales" CASCADE;
  DROP TABLE "features_blocks" CASCADE;
  DROP TABLE "features_blocks_locales" CASCADE;
  DROP TABLE "features_mock_rows" CASCADE;
  DROP TABLE "features_mock_rows_locales" CASCADE;
  DROP TABLE "features_faqs" CASCADE;
  DROP TABLE "features_faqs_locales" CASCADE;
  DROP TABLE "features" CASCADE;
  DROP TABLE "features_locales" CASCADE;
  DROP TABLE "features_rels" CASCADE;
  DROP TABLE "_features_v_version_benefits" CASCADE;
  DROP TABLE "_features_v_version_benefits_locales" CASCADE;
  DROP TABLE "_features_v_version_blocks_points" CASCADE;
  DROP TABLE "_features_v_version_blocks_points_locales" CASCADE;
  DROP TABLE "_features_v_version_blocks" CASCADE;
  DROP TABLE "_features_v_version_blocks_locales" CASCADE;
  DROP TABLE "_features_v_version_mock_rows" CASCADE;
  DROP TABLE "_features_v_version_mock_rows_locales" CASCADE;
  DROP TABLE "_features_v_version_faqs" CASCADE;
  DROP TABLE "_features_v_version_faqs_locales" CASCADE;
  DROP TABLE "_features_v" CASCADE;
  DROP TABLE "_features_v_locales" CASCADE;
  DROP TABLE "_features_v_rels" CASCADE;
  DROP TABLE "contact_submissions" CASCADE;
  DROP TABLE "users_roles" CASCADE;
  DROP TABLE "users_sessions" CASCADE;
  DROP TABLE "users" CASCADE;
  DROP TABLE "audit_logs" CASCADE;
  DROP TABLE "audit_logs_texts" CASCADE;
  DROP TABLE "payload_kv" CASCADE;
  DROP TABLE "payload_jobs_log" CASCADE;
  DROP TABLE "payload_jobs" CASCADE;
  DROP TABLE "payload_locked_documents" CASCADE;
  DROP TABLE "payload_locked_documents_rels" CASCADE;
  DROP TABLE "payload_preferences" CASCADE;
  DROP TABLE "payload_preferences_rels" CASCADE;
  DROP TABLE "payload_migrations" CASCADE;
  DROP TABLE "site_settings_socials" CASCADE;
  DROP TABLE "site_settings_socials_locales" CASCADE;
  DROP TABLE "site_settings" CASCADE;
  DROP TABLE "site_settings_locales" CASCADE;
  DROP TABLE "_site_settings_v_version_socials" CASCADE;
  DROP TABLE "_site_settings_v_version_socials_locales" CASCADE;
  DROP TABLE "_site_settings_v" CASCADE;
  DROP TABLE "_site_settings_v_locales" CASCADE;
  DROP TABLE "navigation_links" CASCADE;
  DROP TABLE "navigation_links_locales" CASCADE;
  DROP TABLE "navigation_link_library_links" CASCADE;
  DROP TABLE "navigation_link_library_links_locales" CASCADE;
  DROP TABLE "navigation_link_library" CASCADE;
  DROP TABLE "navigation_link_library_locales" CASCADE;
  DROP TABLE "navigation" CASCADE;
  DROP TABLE "navigation_locales" CASCADE;
  DROP TABLE "_navigation_v_version_links" CASCADE;
  DROP TABLE "_navigation_v_version_links_locales" CASCADE;
  DROP TABLE "_navigation_v_version_link_library_links" CASCADE;
  DROP TABLE "_navigation_v_version_link_library_links_locales" CASCADE;
  DROP TABLE "_navigation_v_version_link_library" CASCADE;
  DROP TABLE "_navigation_v_version_link_library_locales" CASCADE;
  DROP TABLE "_navigation_v" CASCADE;
  DROP TABLE "_navigation_v_locales" CASCADE;
  DROP TABLE "footer_columns_links" CASCADE;
  DROP TABLE "footer_columns_links_locales" CASCADE;
  DROP TABLE "footer_columns" CASCADE;
  DROP TABLE "footer_columns_locales" CASCADE;
  DROP TABLE "footer" CASCADE;
  DROP TABLE "footer_locales" CASCADE;
  DROP TABLE "_footer_v_version_columns_links" CASCADE;
  DROP TABLE "_footer_v_version_columns_links_locales" CASCADE;
  DROP TABLE "_footer_v_version_columns" CASCADE;
  DROP TABLE "_footer_v_version_columns_locales" CASCADE;
  DROP TABLE "_footer_v" CASCADE;
  DROP TABLE "_footer_v_locales" CASCADE;
  DROP TABLE "tutorial" CASCADE;
  DROP TYPE "public"."_locales";
  DROP TYPE "public"."enum_pages_blocks_hero_buttons_style";
  DROP TYPE "public"."enum_pages_blocks_hero_variant";
  DROP TYPE "public"."enum_pages_blocks_hero_visual_kind";
  DROP TYPE "public"."enum_pages_blocks_hero_visual_tone";
  DROP TYPE "public"."enum_pages_blocks_hero_visual_accessory";
  DROP TYPE "public"."enum_pages_blocks_hero_visual_rows_source";
  DROP TYPE "public"."enum_pages_blocks_feature_band_buttons_style";
  DROP TYPE "public"."enum_pages_blocks_feature_band_screen";
  DROP TYPE "public"."enum_pages_blocks_feature_band_tint";
  DROP TYPE "public"."enum_pages_blocks_feature_band_accessory";
  DROP TYPE "public"."enum_pages_blocks_requests_board_buttons_style";
  DROP TYPE "public"."enum_pages_blocks_modules_map_tint";
  DROP TYPE "public"."enum_pages_blocks_testimonials_items_tone";
  DROP TYPE "public"."enum_pages_blocks_pricing_matrix_groups_cells_mode";
  DROP TYPE "public"."enum_pages_blocks_pricing_buttons_style";
  DROP TYPE "public"."enum_pages_blocks_pricing_variant";
  DROP TYPE "public"."enum_pages_blocks_pricing_tint";
  DROP TYPE "public"."enum_pages_blocks_cta_buttons_style";
  DROP TYPE "public"."enum_pages_blocks_section_tint";
  DROP TYPE "public"."enum_pages_blocks_section_visual_side";
  DROP TYPE "public"."enum_pages_blocks_section_visual_kind";
  DROP TYPE "public"."enum_pages_blocks_section_visual_tone";
  DROP TYPE "public"."enum_pages_blocks_section_visual_accessory";
  DROP TYPE "public"."enum_pages_blocks_section_visual_rows_source";
  DROP TYPE "public"."enum_pages_blocks_section_columns";
  DROP TYPE "public"."enum_pages_blocks_contact_form_visual_kind";
  DROP TYPE "public"."enum_pages_blocks_contact_form_visual_tone";
  DROP TYPE "public"."enum_pages_blocks_contact_form_visual_accessory";
  DROP TYPE "public"."enum_pages_blocks_contact_form_visual_rows_source";
  DROP TYPE "public"."enum_pages_blocks_feature_grid_tint";
  DROP TYPE "public"."enum_pages_blocks_feature_grid_columns";
  DROP TYPE "public"."enum_pages_blocks_promo_bento_cards_icon";
  DROP TYPE "public"."enum_pages_blocks_promo_bento_cards_tone";
  DROP TYPE "public"."enum_pages_blocks_promo_bento_cards_size";
  DROP TYPE "public"."enum_pages_blocks_promo_bento_tint";
  DROP TYPE "public"."enum_pages_blocks_badge_align";
  DROP TYPE "public"."enum_pages_blocks_heading_level";
  DROP TYPE "public"."enum_pages_blocks_heading_size";
  DROP TYPE "public"."enum_pages_blocks_heading_color";
  DROP TYPE "public"."enum_pages_blocks_heading_align";
  DROP TYPE "public"."enum_pages_blocks_paragraph_size";
  DROP TYPE "public"."enum_pages_blocks_paragraph_tone";
  DROP TYPE "public"."enum_pages_blocks_paragraph_align";
  DROP TYPE "public"."enum_pages_blocks_image_aspect";
  DROP TYPE "public"."enum_pages_blocks_button_style";
  DROP TYPE "public"."enum_pages_blocks_button_align";
  DROP TYPE "public"."enum_pages_blocks_spacer_size";
  DROP TYPE "public"."enum_pages_blocks_layout_section_columns";
  DROP TYPE "public"."enum_pages_blocks_layout_section_vertical_align";
  DROP TYPE "public"."enum_pages_blocks_layout_section_gap";
  DROP TYPE "public"."enum_pages_blocks_layout_section_background";
  DROP TYPE "public"."enum_pages_blocks_layout_section_padding";
  DROP TYPE "public"."enum_pages_blocks_layout_section_width";
  DROP TYPE "public"."enum_pages_status";
  DROP TYPE "public"."enum__pages_v_blocks_hero_buttons_style";
  DROP TYPE "public"."enum__pages_v_blocks_hero_variant";
  DROP TYPE "public"."enum__pages_v_blocks_hero_visual_kind";
  DROP TYPE "public"."enum__pages_v_blocks_hero_visual_tone";
  DROP TYPE "public"."enum__pages_v_blocks_hero_visual_accessory";
  DROP TYPE "public"."enum__pages_v_blocks_hero_visual_rows_source";
  DROP TYPE "public"."enum__pages_v_blocks_feature_band_buttons_style";
  DROP TYPE "public"."enum__pages_v_blocks_feature_band_screen";
  DROP TYPE "public"."enum__pages_v_blocks_feature_band_tint";
  DROP TYPE "public"."enum__pages_v_blocks_feature_band_accessory";
  DROP TYPE "public"."enum__pages_v_blocks_requests_board_buttons_style";
  DROP TYPE "public"."enum__pages_v_blocks_modules_map_tint";
  DROP TYPE "public"."enum__pages_v_blocks_testimonials_items_tone";
  DROP TYPE "public"."enum__pages_v_blocks_pricing_matrix_groups_cells_mode";
  DROP TYPE "public"."enum__pages_v_blocks_pricing_buttons_style";
  DROP TYPE "public"."enum__pages_v_blocks_pricing_variant";
  DROP TYPE "public"."enum__pages_v_blocks_pricing_tint";
  DROP TYPE "public"."enum__pages_v_blocks_cta_buttons_style";
  DROP TYPE "public"."enum__pages_v_blocks_section_tint";
  DROP TYPE "public"."enum__pages_v_blocks_section_visual_side";
  DROP TYPE "public"."enum__pages_v_blocks_section_visual_kind";
  DROP TYPE "public"."enum__pages_v_blocks_section_visual_tone";
  DROP TYPE "public"."enum__pages_v_blocks_section_visual_accessory";
  DROP TYPE "public"."enum__pages_v_blocks_section_visual_rows_source";
  DROP TYPE "public"."enum__pages_v_blocks_section_columns";
  DROP TYPE "public"."enum__pages_v_blocks_contact_form_visual_kind";
  DROP TYPE "public"."enum__pages_v_blocks_contact_form_visual_tone";
  DROP TYPE "public"."enum__pages_v_blocks_contact_form_visual_accessory";
  DROP TYPE "public"."enum__pages_v_blocks_contact_form_visual_rows_source";
  DROP TYPE "public"."enum__pages_v_blocks_feature_grid_tint";
  DROP TYPE "public"."enum__pages_v_blocks_feature_grid_columns";
  DROP TYPE "public"."enum__pages_v_blocks_promo_bento_cards_icon";
  DROP TYPE "public"."enum__pages_v_blocks_promo_bento_cards_tone";
  DROP TYPE "public"."enum__pages_v_blocks_promo_bento_cards_size";
  DROP TYPE "public"."enum__pages_v_blocks_promo_bento_tint";
  DROP TYPE "public"."enum__pages_v_blocks_badge_align";
  DROP TYPE "public"."enum__pages_v_blocks_heading_level";
  DROP TYPE "public"."enum__pages_v_blocks_heading_size";
  DROP TYPE "public"."enum__pages_v_blocks_heading_color";
  DROP TYPE "public"."enum__pages_v_blocks_heading_align";
  DROP TYPE "public"."enum__pages_v_blocks_paragraph_size";
  DROP TYPE "public"."enum__pages_v_blocks_paragraph_tone";
  DROP TYPE "public"."enum__pages_v_blocks_paragraph_align";
  DROP TYPE "public"."enum__pages_v_blocks_image_aspect";
  DROP TYPE "public"."enum__pages_v_blocks_button_style";
  DROP TYPE "public"."enum__pages_v_blocks_button_align";
  DROP TYPE "public"."enum__pages_v_blocks_spacer_size";
  DROP TYPE "public"."enum__pages_v_blocks_layout_section_columns";
  DROP TYPE "public"."enum__pages_v_blocks_layout_section_vertical_align";
  DROP TYPE "public"."enum__pages_v_blocks_layout_section_gap";
  DROP TYPE "public"."enum__pages_v_blocks_layout_section_background";
  DROP TYPE "public"."enum__pages_v_blocks_layout_section_padding";
  DROP TYPE "public"."enum__pages_v_blocks_layout_section_width";
  DROP TYPE "public"."enum__pages_v_version_status";
  DROP TYPE "public"."enum__pages_v_published_locale";
  DROP TYPE "public"."enum_partners_status";
  DROP TYPE "public"."enum__partners_v_version_status";
  DROP TYPE "public"."enum__partners_v_published_locale";
  DROP TYPE "public"."enum_solutions_type";
  DROP TYPE "public"."enum_solutions_status";
  DROP TYPE "public"."enum__solutions_v_version_type";
  DROP TYPE "public"."enum__solutions_v_version_status";
  DROP TYPE "public"."enum__solutions_v_published_locale";
  DROP TYPE "public"."enum_features_category";
  DROP TYPE "public"."enum_features_availability";
  DROP TYPE "public"."enum_features_status";
  DROP TYPE "public"."enum__features_v_version_category";
  DROP TYPE "public"."enum__features_v_version_availability";
  DROP TYPE "public"."enum__features_v_version_status";
  DROP TYPE "public"."enum__features_v_published_locale";
  DROP TYPE "public"."enum_contact_submissions_status";
  DROP TYPE "public"."enum_users_roles";
  DROP TYPE "public"."enum_audit_logs_action";
  DROP TYPE "public"."enum_payload_jobs_log_task_slug";
  DROP TYPE "public"."enum_payload_jobs_log_state";
  DROP TYPE "public"."enum_payload_jobs_task_slug";
  DROP TYPE "public"."enum_site_settings_socials_platform";
  DROP TYPE "public"."enum_site_settings_status";
  DROP TYPE "public"."enum__site_settings_v_version_socials_platform";
  DROP TYPE "public"."enum__site_settings_v_version_status";
  DROP TYPE "public"."enum__site_settings_v_published_locale";
  DROP TYPE "public"."enum_navigation_status";
  DROP TYPE "public"."enum__navigation_v_version_status";
  DROP TYPE "public"."enum__navigation_v_published_locale";
  DROP TYPE "public"."enum_footer_status";
  DROP TYPE "public"."enum__footer_v_version_status";
  DROP TYPE "public"."enum__footer_v_published_locale";`)
}
