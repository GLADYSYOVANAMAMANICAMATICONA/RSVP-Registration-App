
class Model {
      constructor() {
        this.invitaciones = [
          {
            invitacion: "ROSA"
          }
        ];
      }
    }
    
    
    //     // this.handleChange = this.handleChange.bind(this);
    //     // this.onSubmitForm = this.onSubmitForm.bind(this);
    //     // this.removePeople = this.removePeople.bind(this);
    //   }
    
    // }
    
    const Header = () => {
      return (
        <div classname="wrapper">
          <header>
            <h1>RSVP</h1>
            <p> Registration App </p>
            <form id="registrar">
              <input
                type="text"
                name="name"
                placeholder="Invite Someone" />
              <button type="submit" name="submit">Submit
            </button>
            </form>
          </header>
          <div classname="main">
            <h2>Invitees</h2>
            <ul id="invitedList"> </ul>
          </div>
        </div>
      );
    }
    
    const NuevaLista = ({ item }) => {
      return (
        <div>{
          model.invitaciones.map((item, index) => {
            return (
              <li>
                <label>Confirmed
                  <input type="checkbox" />
                </label>
                <button>Remove</button>
              </li>
            )
          }
          )
        }
        </div>
      )
    }
    
    const Application = ({ title, model }) => {
      return (
        <div >
          <Header />
          <NuevaLista />
        </div>
      );
    }
    
    let model = new Model();
    let counter = 1;
    let render = () => {
      console.log('render times: ', counter++);
      ReactDOM.render(
        <Application title="TodoApp" model={model} />,
        document.getElementById('container')
      );
    };
    
    //model.subscribe(render);
    render(); 