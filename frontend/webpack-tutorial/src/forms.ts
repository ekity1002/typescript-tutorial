
export const formData = (form: HTMLFormElement) => {
    const inputs = form.querySelectorAll('input')
    // valuesは複数の異なる key(string), と value(string) を持つobject
    let values: {[prop: string]: string} = {};

    inputs.forEach(input => {
        values[input.id] = input.value
    })
    console.log(values)
    return values
};
