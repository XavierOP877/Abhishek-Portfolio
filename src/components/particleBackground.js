import Particles from "react-tsparticles";



const ParticleBackground = () => {
    return(
        <div className="App">
            <Particles 
            options={{
              background:{
                color:"#2c2e43"
              },
              fpsLimit:60,
              interactivity:{
                detectsOn:"canvas",
                events:{
                  resize:true
                },
              },
              particles:{
                number:{
                  value:80,
                  density:{
                    enable:true,
                    value_area:800
                  }
                },
                color:{
                    value:"#ffffff"
                },
                opacity:{
                  value:0.5,
                  random:false,
                  anim:{
                    enable:false,
                    speed:1,
                    opacity_min:0.1,
                    sync:false
                  }
                },
                shape:{
                  type:"circle",
                  stroke:{
                    width:0,
                    color:"#000000"
                  },
                  polygon:{
                    nb_sides:5
                  },
                  image:{
                    src:"img/github.svg",
                    width:100,
                    height:100
                  }
                },
                size:{
                  value:5,
                  random:true,
                  anim:{
                    enable:false,
                    speed:40,
                    size_min:0.1,
                    sync:false
                  }
                },
                
            }}}
            />
        </div>
    );
};

export default ParticleBackground;