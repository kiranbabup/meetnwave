import Button from "./Button";
import Tab from "./Tab";
import TextField from "./TextField";

export default function ComponentsOverrides(theme) {
  return Object.assign(Button(theme), Tab(theme), TextField(theme));
}
