import { MicrophoneIcon } from '@heroicons/react/24/solid';

import { Layout } from '@/components/layout';
import Seo from '@/components/Seo';

export default function HomePage() {
  return (
    <Layout>
      <Seo title='PódX' description='podcasts app' />

      <main>
        <section className='bg-white'>
          <div className='layout relative flex min-h-screen items-center justify-center gap-4 text-center'>
            <div className='relative flex items-center justify-center gap-3 rounded-full bg-teal-50 px-5 py-4'>
              <span className='absolute top-3 left-0 rounded-3xl bg-white/30 px-3 py-1 font-medium text-gray-700 backdrop-blur'>
                coming soon...
              </span>
              <div className='inline-flex h-36 w-36 items-center justify-center rounded-full bg-teal-100'>
                <div className='inline-flex items-center justify-center rounded-full bg-teal-200 p-4'>
                  <div className='inline-flex items-center justify-center rounded-full'>
                    <MicrophoneIcon className='w-20' />
                  </div>
                </div>
              </div>
            </div>
            <h1 className='text-8xl'>PódX</h1>
          </div>
        </section>
      </main>
    </Layout>
  );
}
