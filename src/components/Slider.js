import React, {Component} from 'react';
import './slider.css';
import SliderItem from './SliderItem';
import SliderArrows from './SliderArrows';
import SliderDots from './SliderDots';

export default class Slider extends Component {
  constructor(){
    super();

    // 通过修改index的值就可以修改ul的left的值
    this.state = {
      index: 0
    }
  }

  // 传入步长，得到新的index值
  turn = (step) => {
    let index = this.state.index + step;
    if(index < 0) {
      this.$slider.style.transitionDuration = '0s';
      this.$slider.style.left = -500*this.props.items.length + 'px';

      setTimeout(()=>{
        index = this.props.items.length - 1;
        this.$slider.style.transitionDuration = this.props.speed+ 's';
        this.setState({index});
      }, 0);
      return;
    }
    if(index > this.props.items.length){
      this.$slider.style.transitionDuration = '0s';
      this.$slider.style.left = 0;

      // 设置定时器延时执行
      setTimeout(()=>{
        index = 1;
        this.$slider.style.transitionDuration = this.props.speed+ 's';
        this.setState({index});
      }, 0);
      return;
    }
    this.setState({index});
  }

  // 启动自动轮播
  go = () => {
    this.$timer = setInterval(() => {
      this.turn(1)
    }, this.props.delay*1000);
  }

  componentDidMount() {
    this.$slider = document.querySelector(".sliders")
    // 如果自动轮播为true，开启自动轮播
    if(this.props.autoplay){
      this.go();
    }
  }

  render () {

    return (
      <div onMouseOver ={ ()=>clearInterval(this.$timer) }
           onMouseOut ={ ()=>this.go() }
           className="slider-wrapper">
        <SliderItem index={this.state.index} {...this.props} />
        <SliderArrows turn={this.turn} />

        <SliderDots items={this.props.items}
                    turn={this.turn}
                    index={this.state.index}/>

      </div>
    )
  }
}