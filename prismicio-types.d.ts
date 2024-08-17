// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type BlogDocumentDataSlicesSlice = never;

/**
 * Content for blog documents
 */
interface BlogDocumentData {
  /**
   * Judul field in *blog*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: blog.judul
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  judul: prismic.KeyTextField;

  /**
   * Tanggal field in *blog*
   *
   * - **Field Type**: Date
   * - **Placeholder**: *None*
   * - **API ID Path**: blog.tanggal
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#date
   */
  tanggal: prismic.DateField;

  /**
   * Konten field in *blog*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: blog.konten
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  konten: prismic.RichTextField;

  /**
   * Gambar field in *blog*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: blog.gambar
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  gambar: prismic.ImageField<never>;

  /**
   * Slice Zone field in *blog*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: blog.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<BlogDocumentDataSlicesSlice> /**
   * Meta Title field in *blog*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: blog.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *blog*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: blog.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *blog*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: blog.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * blog document from Prismic
 *
 * - **API ID**: `blog`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type BlogDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<BlogDocumentData>, "blog", Lang>;

/**
 * Item in *Data Utama → Media Sosial*
 */
export interface DataGlobalDocumentDataMediaSosialItem {
  /**
   * Nama field in *Data Utama → Media Sosial*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: data_global.media_sosial[].nama
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  nama: prismic.KeyTextField;

  /**
   * Link field in *Data Utama → Media Sosial*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: data_global.media_sosial[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;
}

/**
 * Content for Data Utama documents
 */
interface DataGlobalDocumentData {
  /**
   * Nomor Telepon field in *Data Utama*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: data_global.nomor_telepon
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  nomor_telepon: prismic.KeyTextField;

  /**
   * Email field in *Data Utama*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: data_global.email
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  email: prismic.KeyTextField;

  /**
   * Media Sosial field in *Data Utama*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: data_global.media_sosial[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  media_sosial: prismic.GroupField<
    Simplify<DataGlobalDocumentDataMediaSosialItem>
  >;
}

/**
 * Data Utama document from Prismic
 *
 * - **API ID**: `data_global`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type DataGlobalDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<DataGlobalDocumentData>,
    "data_global",
    Lang
  >;

type HalamanUtamaDocumentDataSlicesSlice =
  | LokasiSlice
  | BagianBlogSlice
  | SejarahSlice
  | VideoSlice
  | HeroImageSlice;

/**
 * Content for Halaman Utama documents
 */
interface HalamanUtamaDocumentData {
  /**
   * Slice Zone field in *Halaman Utama*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: halaman_utama.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<HalamanUtamaDocumentDataSlicesSlice> /**
   * Meta Title field in *Halaman Utama*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: halaman_utama.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Halaman Utama*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: halaman_utama.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Halaman Utama*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: halaman_utama.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Halaman Utama document from Prismic
 *
 * - **API ID**: `halaman_utama`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HalamanUtamaDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<HalamanUtamaDocumentData>,
    "halaman_utama",
    Lang
  >;

type PageDocumentDataSlicesSlice = never;

/**
 * Content for page documents
 */
interface PageDocumentData {
  /**
   * Judul field in *page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: page.judul
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  judul: prismic.KeyTextField;

  /**
   * Konten field in *page*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: page.konten
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  konten: prismic.RichTextField;

  /**
   * Slice Zone field in *page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<PageDocumentDataSlicesSlice> /**
   * Meta Title field in *page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: page.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: page.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: page.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<PageDocumentData>, "page", Lang>;

export type AllDocumentTypes =
  | BlogDocument
  | DataGlobalDocument
  | HalamanUtamaDocument
  | PageDocument;

/**
 * Primary content in *BagianBlog → Default → Primary*
 */
export interface BagianBlogSliceDefaultPrimary {
  /**
   * Judul field in *BagianBlog → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: bagian_blog.default.primary.judul
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  judul: prismic.KeyTextField;

  /**
   * Deskripsi field in *BagianBlog → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: bagian_blog.default.primary.deskripsi
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  deskripsi: prismic.KeyTextField;
}

/**
 * Default variation for BagianBlog Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type BagianBlogSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<BagianBlogSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *BagianBlog*
 */
type BagianBlogSliceVariation = BagianBlogSliceDefault;

/**
 * BagianBlog Shared Slice
 *
 * - **API ID**: `bagian_blog`
 * - **Description**: BagianBlog
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type BagianBlogSlice = prismic.SharedSlice<
  "bagian_blog",
  BagianBlogSliceVariation
>;

/**
 * Primary content in *HeroImage → Default → Primary*
 */
export interface HeroImageSliceDefaultPrimary {
  /**
   * Judul field in *HeroImage → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_image.default.primary.judul
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  judul: prismic.KeyTextField;

  /**
   * Deskripsi field in *HeroImage → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_image.default.primary.deskripsi
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  deskripsi: prismic.RichTextField;

  /**
   * Gambar field in *HeroImage → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_image.default.primary.gambar
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  gambar: prismic.ImageField<never>;
}

/**
 * Default variation for HeroImage Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroImageSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HeroImageSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *HeroImage*
 */
type HeroImageSliceVariation = HeroImageSliceDefault;

/**
 * HeroImage Shared Slice
 *
 * - **API ID**: `hero_image`
 * - **Description**: HeroImage
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroImageSlice = prismic.SharedSlice<
  "hero_image",
  HeroImageSliceVariation
>;

/**
 * Primary content in *Lokasi → Default → Primary*
 */
export interface LokasiSliceDefaultPrimary {
  /**
   * Judul field in *Lokasi → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: lokasi.default.primary.judul
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  judul: prismic.KeyTextField;

  /**
   * Link Google Maps field in *Lokasi → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: lokasi.default.primary.link_google_maps
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  link_google_maps: prismic.KeyTextField;
}

/**
 * Default variation for Lokasi Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type LokasiSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<LokasiSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Lokasi*
 */
type LokasiSliceVariation = LokasiSliceDefault;

/**
 * Lokasi Shared Slice
 *
 * - **API ID**: `lokasi`
 * - **Description**: Lokasi
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type LokasiSlice = prismic.SharedSlice<"lokasi", LokasiSliceVariation>;

/**
 * Primary content in *Sejarah → Default → Primary*
 */
export interface SejarahSliceDefaultPrimary {
  /**
   * Judul field in *Sejarah → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: sejarah.default.primary.judul
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  judul: prismic.KeyTextField;

  /**
   * Konten field in *Sejarah → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: sejarah.default.primary.konten
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  konten: prismic.RichTextField;

  /**
   * Gambar field in *Sejarah → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: sejarah.default.primary.gambar
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  gambar: prismic.ImageField<never>;
}

/**
 * Default variation for Sejarah Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SejarahSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<SejarahSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Sejarah*
 */
type SejarahSliceVariation = SejarahSliceDefault;

/**
 * Sejarah Shared Slice
 *
 * - **API ID**: `sejarah`
 * - **Description**: Sejarah
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SejarahSlice = prismic.SharedSlice<
  "sejarah",
  SejarahSliceVariation
>;

/**
 * Primary content in *Video → Default → Primary*
 */
export interface VideoSliceDefaultPrimary {
  /**
   * Judul field in *Video → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: video.default.primary.judul
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  judul: prismic.KeyTextField;

  /**
   * Link Youtube field in *Video → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: video.default.primary.link_youtube
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  link_youtube: prismic.KeyTextField;

  /**
   * Deskripsi field in *Video → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: video.default.primary.deskripsi
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  deskripsi: prismic.KeyTextField;
}

/**
 * Default variation for Video Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type VideoSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<VideoSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Video*
 */
type VideoSliceVariation = VideoSliceDefault;

/**
 * Video Shared Slice
 *
 * - **API ID**: `video`
 * - **Description**: Video
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type VideoSlice = prismic.SharedSlice<"video", VideoSliceVariation>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      BlogDocument,
      BlogDocumentData,
      BlogDocumentDataSlicesSlice,
      DataGlobalDocument,
      DataGlobalDocumentData,
      DataGlobalDocumentDataMediaSosialItem,
      HalamanUtamaDocument,
      HalamanUtamaDocumentData,
      HalamanUtamaDocumentDataSlicesSlice,
      PageDocument,
      PageDocumentData,
      PageDocumentDataSlicesSlice,
      AllDocumentTypes,
      BagianBlogSlice,
      BagianBlogSliceDefaultPrimary,
      BagianBlogSliceVariation,
      BagianBlogSliceDefault,
      HeroImageSlice,
      HeroImageSliceDefaultPrimary,
      HeroImageSliceVariation,
      HeroImageSliceDefault,
      LokasiSlice,
      LokasiSliceDefaultPrimary,
      LokasiSliceVariation,
      LokasiSliceDefault,
      SejarahSlice,
      SejarahSliceDefaultPrimary,
      SejarahSliceVariation,
      SejarahSliceDefault,
      VideoSlice,
      VideoSliceDefaultPrimary,
      VideoSliceVariation,
      VideoSliceDefault,
    };
  }
}
