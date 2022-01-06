import { Text, TextProps } from './Themed';

export default function MonoText(props: TextProps) {
  return (
    // eslint-disable-next-line react/destructuring-assignment,react/jsx-props-no-spreading
    <Text {...props} style={[props.style, { fontFamily: 'space-mono' }]} />
  );
}
