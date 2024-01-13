function customRender(reactElement, container) {

    // we are setting attributes in this code for every attribute , which is not good.

    // const domElement = document.createElement(reactElement.type);
    // domElement.innerHTML = reactElement.children;
    // domElement.setAttribute('href', reactElement.props.href);
    // domElement.setAttribute('target', reactElement.props.target);

    // container.appendChild(domElement);


    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;

    for (const prop in reactElement.props) {
        // if there is children in the props.
        if (prop === 'children') continue;

        domElement.setAttribute(prop, reactElement.props[prop]);
    }

    container.appendChild(domElement)
}

// how react sees your element 
const reactElement = {
    type : 'a',
    props : {
        href : 'https://google.com',
        target : '_blank'
    },
    children : 'Click me to visit google'
}

const mainContainer = document.querySelector('#root');

customRender(reactElement, mainContainer);