# 1. Event Bubbling
In bubbling, an event starts from the target element and propagates upwards through its ancestors.
This is the default behavior of most events like click, focus, and keydown.
If multiple elements have event listeners, the one on the target element executes first, followed by its parent, and so on.
Bubbling can be stopped using event.stopPropagation(), which prevents the event from reaching higher-level ancestors.
### **Example Use Case:**
If you click a button inside a div, both the button’s event and the div’s event may execute. If you want only the button’s event to execute, you use stopPropagation().


# 2. Event Capturing (Trickling Down)
Capturing is the opposite of bubbling. The event starts at the top of the DOM tree and moves down to the target element.
It is less commonly used but can be explicitly enabled by passing true as the third argument in addEventListener.
In capturing mode, the parent element’s event listener fires before the child’s event listener.
### **Example Use Case:**
When handling nested elements where you want the outer element’s event to execute before the inner element’s event.

# 3. Event Delegation
Event delegation is a technique where a parent element is used to handle events for its child elements.
Instead of adding individual event listeners to each child element, a single listener is attached to a parent.
The event bubbles up, and we check if the target matches the desired child element.
This is useful when dynamically adding elements to the DOM, as newly added elements inherit the event handling without additional event listeners.
### **Example Use Case:**

In a list of dynamically added items, a single event listener on the <ul> element can manage clicks for all <li> items instead of adding a listener to each <li>.
