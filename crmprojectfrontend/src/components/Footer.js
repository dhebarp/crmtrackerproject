import React from 'react';
import {Link} from 'react-router-dom';

export function Footer()
{
  return (
    <footer className="page-footer font-small teal pt-4">
      <div className={"container-fluid text-center text-md-left"}>
        <div className="row">
          <div className={"col-md-6 mt-md-0 mt-3"}>
            <h5 className={"text-uppercase font-weight-bold"}>Footer text 1</h5>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita sapiente sint, nulla, nihil
              repudiandae commodi voluptatibus corrupti animi sequi aliquid magnam debitis, maxime quam recusandae
              harum esse fugiat. Itaque, culpa?</p>
          </div>
          <hr className={"clearfix w-100 d-md-none pb-3"}/>
          <div className={"col-md-6 mb-md-0 mb-3"}>
            <h5 className={"text-uppercase font-weight-bold"}>Footer text 2</h5>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio deserunt fuga perferendis modi earum
              commodi aperiam temporibus quod nulla nesciunt aliquid debitis ullam omnis quos ipsam, aspernatur id
              excepturi hic.</p>
          </div>
      </div>
      </div>
      <div class="footer-copyright text-center py-3">© 2018 Copyright:
        <a href="#"> MDBootstrap.com</a>
      </div>
    </footer>
    )
}