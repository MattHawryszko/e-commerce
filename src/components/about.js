import React, { Component } from 'react';

import Title from "../components/title"

export default class App extends Component {
render() {
    return (
      <div className="">
        <div className="container nav-padding">
          <div className="pt-5"></div>
          <Title class="display-4" dash="dash-yellow" text="Our Story"/>
          <div className="row pt-5">
            <div className="col-12">
              <p className="text-grey">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi laudantium numquam nostrum facilis fugiat facere labore sint odit quas accusamus delectus placeat sed repudiandae in cupiditate ut dolore animi veritatis, natus esse ad. At itaque earum nulla harum, aspernatur tempore officiis dolorem deserunt libero eos molestiae quidem veniam facere soluta iure illo a? Dolore, ab incidunt provident voluptas doloribus facilis temporibus magnam qui error harum. Quas voluptate eius quia fugit!</p>
              <p className="text-grey">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis, perferendis deserunt a commodi temporibus quasi dolorem. Repellat, numquam et officia impedit nisi facilis dolor quae architecto omnis voluptas, laboriosam vero, eligendi sunt! Laudantium est sequi ratione alias architecto minus nobis laborum provident numquam sint dolore, animi, obcaecati autem voluptates quasi consequuntur quisquam voluptatibus? Fuga soluta eligendi tempora excepturi modi sapiente, vero minus optio quos animi voluptatem atque adipisci nihil alias non accusamus id quaerat eum numquam itaque. Eaque commodi libero facilis molestiae, sapiente suscipit dignissimos!</p>
              <p className="text-grey">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil adipisci magni quam aspernatur porro ipsum tempora saepe, voluptatem voluptatum accusantium odit fuga. Maiores voluptas explicabo non, obcaecati fuga animi, nihil necessitatibus dolore sunt eum alias labore minus maxime ullam atque vero ab laudantium saepe ex repudiandae temporibus dolorum asperiores. Consequuntur soluta voluptas vitae magni neque?</p>
            </div>
          </div>
        </div>
        
      </div>

      );
  }
};

