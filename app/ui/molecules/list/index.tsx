import clsx from 'clsx';
import map from 'lodash/map';
import type { ListChildren } from '../list-item';
import { ListItem, ListItemAppearance } from '../list-item';

export type ListItemsProps = {
  appearance: ListItemAppearance;
  items: ListChildren[];
  className?: string;
};

export const List = ({ items, appearance, className }: ListItemsProps) => {
  return (
    <ul
      className={clsx('flex flex-col space-y-2', className, {
        'list-disc': appearance === ListItemAppearance.Default,
      })}
    >
      {map(items, (item, index) => (
        <ListItem key={index} appearance={appearance}>
          {item}
        </ListItem>
      ))}
    </ul>
  );
};
