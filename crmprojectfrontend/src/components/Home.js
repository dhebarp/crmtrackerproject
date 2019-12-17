import React from 'react';

export class Home extends React.Component {

render() {
    return(
        <html>
        <header className="py-5 bg-image-full" />
        <img className="img-fluid d-block mx-auto" src="http://placehold.it/200x200&text=Logo" alt=""/>
      <section className="py-5">
        <div class="container">
          <h1>Section Heading</h1>
          <p class="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, suscipit, rerum quos facilis repellat architecto commodi officia atque nemo facere eum non illo voluptatem quae delectus odit vel itaque amet.</p>
        </div>
      </section>
      <section class="py-5 bg-image-full">
      </section>
      <section class="py-5">
        <div class="container">
          <h1>Section Heading</h1>
          <p class="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, suscipit, rerum quos facilis repellat architecto commodi officia atque nemo facere eum non illo voluptatem quae delectus odit vel itaque amet.</p>
        </div>
      </section>
      </html>
    )
}
}