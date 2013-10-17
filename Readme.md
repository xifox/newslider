
# New Slider

  This is just another jquery slider that could be used as carousel too. 
  
###### For now it is in development.

## Installation

    $ component install pinkTurtle/newslider

## Implementation

  - ###### html

    A minimal html structure is needed to make this work. You need create an
    html node which will be called from now as viewport; another node inside
    called wrapper and you will put as many html nodes as slides you want to have
    into the wrapper html node. Here you have an example:

    ```bash
    <div class="my-slider">
      <div>
        <li>Slide 0</li>
        <li>
        <img src='tux.jpg' />
        </li>
        <iframe width="400" height="300" src="//www.youtube.com/embed/GDSpP405O00?rel=0" frameborder="0" allowfullscreen></iframe>
        <li>Slide 3</li>
        <li>Slide 4</li>
      </div>
    </div>
```

  - ###### component

    You need to install this component into your file structure.

## API


## TODO

  - Make slide rotate automatically
  - Add more transition effects. Just for now, transitions effects are due to
  css transition effects.
  - Add the ability to work as a carousel.

## License

  GPL
