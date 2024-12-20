// LINK
import Link from 'next/link';
// COMPONENTS
import { Card, CardDescription, CardFooter, CardHeader } from '@/components/ui/card';
import { buttonVariants } from '@/components/ui/button';
import { ItemStatus } from './components/item-status';
import { QuickView } from '@/components/quick-view';
import { FormatedTime } from '../formated-time';
// UTILS
import { truncate } from '@/utils/helpers';
// TYPES
import { IQueryItem } from '@/types/firestore';

export const ItemCard = ({ item }: { item : IQueryItem | null }) => {

  if (!item) return null;

  return (
    <Card className="flex flex-col justify-center items-stretch">
      <CardHeader className="flex-1 flex flex-row justify-between items-center">
        <ItemStatus status={item.status} />
        <FormatedTime time={item.createdAt} />
      </CardHeader>
      <CardDescription className="flex-1 p-6">
        {truncate(item.additionalInfo, 150)}
      </CardDescription>
      <CardFooter className="flex-1 flex-col justify-center items-stretch gap-2">
        <Link 
            className={(buttonVariants({ variant: 'secondary', size: 'lg' }))}
            href={`/dashboard/${item.id}`}
        >
            Edit
        </Link>
        <QuickView item={item} />
      </CardFooter>
    </Card>
  )
}