export const getValueOrFallback = (props: {
  checkValue: boolean;
  valueWhenTrue: any;
  valueWhenFalse: any;
}) => {
  const { checkValue, valueWhenFalse, valueWhenTrue } = props;
  if (checkValue) return valueWhenTrue;
  return valueWhenFalse;
};
