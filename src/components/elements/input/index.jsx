import Input from "./Input";
import Label from "./Label";

const InputForm = ( props ) => {
    const { children, name, type, placeholder, style } = props;

    return (
        <div className="mb-6">
            <Label htmlFor = {name} >{ children }</Label>
            <Input name = {name} type={ type } placeholder = { placeholder} style = { style } />
        </div>
    )
}

export default InputForm;