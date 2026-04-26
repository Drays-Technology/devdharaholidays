/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_WHATSAPP_NUMBER: string
  readonly VITE_WEB3FORMS_KEY: string
  readonly VITE_PHONE_DISPLAY: string
  readonly VITE_EMAIL: string
  readonly VITE_SITE_URL: string
  readonly VITE_BUSINESS_NAME: string
  readonly VITE_LOCATION: string
  readonly VITE_INSTAGRAM_URL: string
  readonly VITE_FACEBOOK_URL: string
  readonly VITE_YOUTUBE_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
