import * as d3_rs_svg from '@redsift/d3-rs-svg';
import * as d3_rs_console from '@redsift/d3-rs-console';
import * as d3_rs_text_multiline from '@redsift/d3-rs-text-multiline';

class RedsiftConsole {
    constructor(el) {
        this.$container = el;
        this._render(el, el.width, el.height, el.textPadding);
    }

    update(data, animated) {
        this._drawText(data, this._text, animated);
    }

    render() {
        // FIXXME: the gathering of state properties (width, height, ...) is bound to attribute getter functions on the
        // $container, which may not be defined when 'console.js' is used without the 'console-element.js' wrapper!
        this._render(this.$container, this.$container.width, this.$container.height, this.$container.textPadding);
    }

    //----------------------------------------------------------
    // Internal API
    //----------------------------------------------------------
    _render(el, width, height, textPadding) {
        this._height = height;
        this._elm = d3.select(this.$container);

        var svg = this._svg = d3_rs_svg.html().width(width).height(height);
        var svgEl = this._elm.call(svg).select(svg.self()).select(svg.child());

        var terminal = d3_rs_console.svg().width(svg.childWidth()).height(svg.childHeight()).childPadding(textPadding);
        svgEl.datum('Terminal').call(terminal);

        this._text = d3_rs_text_multiline.svg();
        this._textElm = svgEl.select(terminal.self()).select(terminal.child());

        this._scaleOnScroll(this._svg);
    }

    _scaleOnScroll(svg) {
        d3.select(window)
            .on("scroll.scroller", position.bind(this));

        function position() {
            var sectionPositions = [0, 200, 250 + this._height];
            var pos = window.pageYOffset;
            var sectionIndex = d3.bisect(sectionPositions, pos) - 1;

            var scale = 1.0;
            if (sectionIndex === 1) {
                scale = 1.25;
            }
            // now animate the focus scale
            this._elm.transition().duration(333).call(svg.scale(scale));
        }
    }

    _drawText(data, text, animated) {
        if (animated === false) {
            this._textElm.datum(data).call(text);
            return;
        }

        var pos = 0;

        function inc(data, textElm) {
            var working = data.slice(0, pos + 1);
            var change = textElm.datum(working)
                .transition()
                .ease(d3.easeLinear)
                .duration(data[pos].duration ? data[pos].duration : 0)
                .delay(data[pos].delay ? data[pos].delay : 0)
                .call(text)
                .on('end', () => {
                    pos = pos + 1;
                    if (pos < data.length) {
                        inc(data, textElm);
                    }
                });
        }

        inc(data, this._textElm);
    }
}

export default RedsiftConsole;
