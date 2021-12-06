import React from 'react';
import qs from 'qs';
import { useBottomScrollListener } from 'react-bottom-scroll-listener';

import { getRequest } from 'lib/data/api';
import Spinner from 'lib/components/Spinner';

type Props = {
  url: string;
  pageSize?: number;
  Component: (props: { item: any }) => JSX.Element;
};

export default function GridList({ url, Component, pageSize = 25 }: Props) {
  const [hasMore, setHasMore] = React.useState(true);
  const [isLoading, setIsLoading] = React.useState(true);
  const [page, setPage] = React.useState(1);
  const [items, setItems] = React.useState<any[]>([]);

  const getItems = React.useCallback(
    async (overridePage?: number) => {
      setIsLoading(true);
      const usePage = overridePage || page;
      const query = qs.stringify({
        limit: pageSize,
        offset: (usePage - 1) * pageSize,
      });
      const data = await getRequest<any[]>(`${url}?${query}`);
      if (data) {
        setItems((existingItems) => [...existingItems, ...data]);
        if (data.length < pageSize) setHasMore(false);
      }
      setIsLoading(false);
    },
    [url, page, pageSize],
  );

  // Initial call for data
  React.useEffect(() => {
    getItems();
  }, []); // eslint-disable-line

  const onBottomHit = React.useCallback(async () => {
    if (isLoading || !hasMore) return;

    setIsLoading(true);
    const newPage = page + 1;
    setPage(newPage);
    await getItems(newPage);
  }, [page, getItems, isLoading, hasMore]);

  useBottomScrollListener(onBottomHit, { offset: 600, debounce: 500 });

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-x-8 md:gap-x-14 gap-y-9">
        {items.map((item, index) => (
          <Component key={`grid-list-item-${index}`} item={item} />
        ))}
      </div>

      {isLoading && (
        <div className="flex flex-col w-full items-center p-8">
          <Spinner />
        </div>
      )}
    </div>
  );
}
