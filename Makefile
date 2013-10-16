
build: components index.js newslider.css
	@component build --dev

nametemplate.js: nametemplate.html
	@component convert $<

lastnametemplate.js: lastnametemplate.html
	@component convert $<

components: component.json
	@component install --dev

clean:
	rm -fr build components template.js

.PHONY: clean
