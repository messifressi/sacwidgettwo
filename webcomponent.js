(function()  {
    let tmpl = document.createElement('template');
    tmpl.innerHTML = `
	<svg width="220"
     height="220">
         <path id="square1" d="M 100,40 L 100,80 L 140,80 L 140,40 L 100,40 z"
       fill="#00FF00" fill-opacity="0.59" stroke="#000000" stroke-width="2" />
		<path id="square2" d="M 160,40 L 160,80 L 200,80 L 200,40 L 160,40 z"
       fill="#00FF00" fill-opacity="0.59" stroke="#000000" stroke-width="2" />
		<path id="square3" d="M 40,40 L 40,80 L 80,80 L 80,40 L 40,40 z"
       fill="#00FF00" fill-opacity="0.59" stroke="#000000" stroke-width="2" />
	</svg>
    `;
	
	

    customElements.define('com-sap-sample-squares', class Squares extends HTMLElement {


		constructor() {
			super(); 
			this._shadowRoot = this.attachShadow({mode: "open"});
            this._shadowRoot.appendChild(tmpl.content.cloneNode(true));
            this._firstConnection = false;
		}

        //Fired when the widget is added to the html DOM of the page
        connectedCallback(){
            this._firstConnection = true;
            this.redraw();
        }

         //Fired when the widget is removed from the html DOM of the page (e.g. by hide)
        disconnectedCallback(){
        
        }

         //When the custom widget is updated, the Custom Widget SDK framework executes this function first
		onCustomWidgetBeforeUpdate(oChangedProperties) {

		}

        //When the custom widget is updated, the Custom Widget SDK framework executes this function after the update
		onCustomWidgetAfterUpdate(oChangedProperties) {
            if (this._firstConnection){
                this.redraw();
            }
        }
        
        //When the custom widget is removed from the canvas or the analytic application is closed
        onCustomWidgetDestroy(){
        }

        
        //When the custom widget is resized on the canvas, the Custom Widget SDK framework executes the following JavaScript function call on the custom widget
        // Commented out by default.  If it is enabled, SAP Analytics Cloud will track DOM size changes and call this callback as needed
        //  If you don't need to react to resizes, you can save CPU by leaving it uncommented.
        /*
        onCustomWidgetResize(width, height){
            redraw()
        }
        */
		
		setSquare1(newColorValue){
			var square1 = document.getElementById("#square1");
			//var square2 = document.getElementById("path#square1");
			//var square3 = document.querySelector("#__widget0 > com-sap-sample-squares").shadowRoot.querySelector("#square1");
			//square1.setAttribute("fill", newColorValue);
			console.log(square1);
			//console.log("Square2: " + square2);
			//console.log("Square3: " + square3);
		}

        redraw(){
			
        }
    });
})();
