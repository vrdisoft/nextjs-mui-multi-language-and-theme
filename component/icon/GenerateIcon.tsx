import * as Muicon from "@material-ui/icons";

type GenerateIconProps = {
  variation: string;
  props?: object
}

function GenerateIcon({ variation, props }: GenerateIconProps) {
  {/* @ts-ignore: Unreachable code error*/ }
  const IconName = Muicon[variation];
  return <IconName {...props} />;
};

export default GenerateIcon;