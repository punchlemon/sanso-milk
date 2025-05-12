import React from 'react';

/**
 * コンテンツの種類を定義
 */
export type ContentType = 'event' | 'service' | 'facility' | 'news' | 'product' | 'activity';

/**
 * コンテンツの基本インターフェース
 */
export interface ContentItem {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
  linkUrl?: string;
  type: ContentType;
  tags?: string[];
  iconSvg?: React.ReactNode;
  date?: string;
  featured?: boolean;
  buttonText?: string;
}

/**
 * イベント情報インターフェース
 */
export interface EventItem extends ContentItem {
  type: 'event';
  startDate: string;
  endDate?: string;
  location?: string;
  capacity?: number;
  price?: number;
}

/**
 * 施設情報インターフェース
 */
export interface FacilityItem extends ContentItem {
  type: 'facility';
  capacity?: string;
  features?: string[];
  price?: string;
}

/**
 * サービス情報インターフェース
 */
export interface ServiceItem extends ContentItem {
  type: 'service';
  availability?: string;
  durationMinutes?: number;
  price?: string;
}

/**
 * ニュース情報インターフェース
 */
export interface NewsItem extends ContentItem {
  type: 'news';
  publishDate: string;
  author?: string;
  category?: string;
}

/**
 * 商品情報インターフェース
 */
export interface ProductItem extends ContentItem {
  type: 'product';
  price: number;
  stockCount?: number;
  weight?: string;
  origin?: string;
  ingredients?: string[];
}

/**
 * アクティビティ情報インターフェース
 */
export interface ActivityItem extends ContentItem {
  type: 'activity';
  durationMinutes?: number;
  difficulty?: 'easy' | 'medium' | 'hard';
  seasonality?: string[];
  requirements?: string[];
}