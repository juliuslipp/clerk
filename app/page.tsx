import { Suspense } from 'react';
import {
  RecommendedProducts,
  RecommendedProductsSkeleton,
} from '#/components/recommended-products';
import { Reviews, ReviewsSkeleton } from '#/components/reviews';
import { Ping } from '#/components/ping';

function Test() {
    return (
        <div>
            <h1>Test</h1>
            <Suspense>
                <RecommendedProducts />
            </Suspense>

        </div>
    )
}

export default function Page() {
  return (
    <div className="space-y-8 lg:space-y-14">

      <Test />

      <Ping />

      <Suspense fallback={<RecommendedProductsSkeleton />}>
        <RecommendedProducts />
      </Suspense>

      <Ping />

      <Suspense fallback={<ReviewsSkeleton />}>
        <Reviews />
      </Suspense>
    </div>
  );
}
