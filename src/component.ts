export abstract class Component {
    protected children: any;
    public element: Element;
    constructor() {}

    /**
     * @description Rerender the component
     * Developers have to decided when to call this method
     * @author phinguyen202
     * @memberof Component
     */
    reRender() {
        if (this.element) {
            console.debug('re-render', this.constructor.name);
            const newElement = this.render();
            this.element.replaceWith(newElement);
            this.element = newElement;
        } else {
            console.error(`${this.constructor.name} has no element to re-render! The component must be rendered first!`);
        }
    }

    /**
     * @description Render the component
     * ! Don't call this method directly, this must be call in the context of elt method 
     * @author phinguyen202
     * @abstract
     * @return {*}  {Element}
     * @memberof Component
     */
    abstract render(): Element;
}