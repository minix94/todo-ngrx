export const status: string[] = [
  'All',
  'Active',
  'Completed',
  'Clear Completed',
];

export interface statusModel {
  type: string;
  status: boolean;
}
