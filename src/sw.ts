import { precacheAndRoute, cleanupOutdatedCaches } from 'workbox-precaching'
import { registerRoute } from 'workbox-routing'
import { CacheFirst, NetworkFirst, StaleWhileRevalidate } from 'workbox-strategies'
import { ExpirationPlugin } from 'workbox-expiration'

declare let self: ServiceWorkerGlobalScope & {
  addEventListener: (type: string, listener: (event: any) => void) => void
}

interface ExtendableEvent extends Event {
  waitUntil(promise: Promise<any>): void
}

interface FetchEvent extends ExtendableEvent {
  request: Request
  respondWith(response: Promise<Response> | Response): void
}

interface SyncEvent extends ExtendableEvent {
  tag: string
}

// Clean up old caches
cleanupOutdatedCaches()

// Precache all static assets
precacheAndRoute(self.__WB_MANIFEST)

// Cache API calls with NetworkFirst strategy
registerRoute(
  ({ url }) => url.pathname.startsWith('/api/'),
  new NetworkFirst({
    cacheName: 'api-cache',
    plugins: [
      new ExpirationPlugin({
        maxEntries: 50,
        maxAgeSeconds: 60 * 60 * 24, // 24 hours
      }),
    ],
  })
)

// Cache images with CacheFirst strategy
registerRoute(
  ({ request }) => request.destination === 'image',
  new CacheFirst({
    cacheName: 'images-cache',
    plugins: [
      new ExpirationPlugin({
        maxEntries: 100,
        maxAgeSeconds: 60 * 60 * 24 * 7, // 7 days
      }),
    ],
  })
)

// Cache CSS and JS files with StaleWhileRevalidate
registerRoute(
  ({ request }) =>
    request.destination === 'style' || request.destination === 'script',
  new StaleWhileRevalidate({
    cacheName: 'static-resources',
  })
)

// Cache fonts
registerRoute(
  ({ request }) => request.destination === 'font',
  new CacheFirst({
    cacheName: 'fonts-cache',
    plugins: [
      new ExpirationPlugin({
        maxEntries: 30,
        maxAgeSeconds: 60 * 60 * 24 * 365, // 1 year
      }),
    ],
  })
)

// Handle offline fallback
const FALLBACK_HTML = '/offline.html'
const FALLBACK_IMAGE = '/offline-image.svg'

// Cache fallback pages during install
self.addEventListener('install', (event: ExtendableEvent) => {
  event.waitUntil(
    caches.open('offline-fallbacks').then(cache => {
      return cache.addAll([FALLBACK_HTML, FALLBACK_IMAGE])
    })
  )
})

// Serve fallbacks when offline
self.addEventListener('fetch', (event: FetchEvent) => {
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request).catch(async () => {
        const fallback = await caches.match(FALLBACK_HTML)
        return fallback || new Response('Not found', { status: 404 })
      })
    )
  }
})

// Handle background sync for form submissions
self.addEventListener('sync', (event: SyncEvent) => {
  if (event.tag === 'background-sync') {
    event.waitUntil(handleBackgroundSync())
  }
})

async function handleBackgroundSync() {
  // Handle offline form submissions here
  console.log('Background sync triggered')
}