export abstract class Component<S, P> {
    protected children: any;
    public element: HTMLElement;
    constructor(protected source: S, protected props: P) {
        this.children = {};
    }

    reRender() {
        if (this.element) {
            console.debug('re-render', this.constructor.name);
            const newElement = this.render();
            this.element.replaceWith(newElement);
            this.element = newElement;
        }
    }

    abstract render(): HTMLElement;
}